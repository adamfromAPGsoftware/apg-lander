import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

const STORAGE_KEY = 'apg_resources_unlocked';
const EMAIL_KEY = 'apg_subscriber_email';

interface SubscribeResult {
  isNew: boolean;
  subscriberId: string | null;
  error: string | null;
}

interface UseResourceGateReturn {
  isUnlocked: boolean;
  subscriberEmail: string | null;
  unlock: (email: string, resourceId?: string) => Promise<SubscribeResult>;
  checkUnlocked: () => boolean;
}

export function useResourceGate(): UseResourceGateReturn {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [subscriberEmail, setSubscriberEmail] = useState<string | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const unlocked = localStorage.getItem(STORAGE_KEY) === 'true';
    const email = localStorage.getItem(EMAIL_KEY);
    setIsUnlocked(unlocked);
    setSubscriberEmail(email);
  }, []);

  const unlock = useCallback(async (email: string, resourceId?: string): Promise<SubscribeResult> => {
    // Optimistically update localStorage and state for instant UX
    localStorage.setItem(STORAGE_KEY, 'true');
    localStorage.setItem(EMAIL_KEY, email);
    setIsUnlocked(true);
    setSubscriberEmail(email);

    let subscriberId: string | null = null;
    let isNew = true;

    try {
      // Call Supabase upsert_subscriber function
      const { data, error } = await supabase.rpc('upsert_subscriber', {
        p_email: email,
        p_resource_id: resourceId || null,
        p_source: 'resource_gate',
      });

      if (error) {
        console.error('Error subscribing:', error);
        return {
          isNew: true,
          subscriberId: null,
          error: error.message,
        };
      }

      // data is an array with one row: { is_new: boolean, subscriber_id: uuid }
      const result = data?.[0];
      subscriberId = result?.subscriber_id ?? null;
      isNew = result?.is_new ?? true;

      // Sync to ConvertKit via Edge Function (fire and forget for UX)
      // Only sync new subscribers to avoid duplicates in ConvertKit
      if (isNew && subscriberId) {
        syncToConvertKit(email, subscriberId, resourceId).catch((err) => {
          console.error('ConvertKit sync error (non-blocking):', err);
        });
      }

      return {
        isNew,
        subscriberId,
        error: null,
      };
    } catch (err) {
      console.error('Error subscribing:', err);
      return {
        isNew: true,
        subscriberId: null,
        error: err instanceof Error ? err.message : 'Unknown error',
      };
    }
  }, []);

  const checkUnlocked = useCallback(() => {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }, []);

  return {
    isUnlocked,
    subscriberEmail,
    unlock,
    checkUnlocked,
  };
}

// Sync subscriber to ConvertKit via Edge Function
async function syncToConvertKit(
  email: string,
  subscriberId: string,
  resourceId?: string
): Promise<void> {
  try {
    const { data, error } = await supabase.functions.invoke('sync-subscriber', {
      body: {
        email,
        subscriber_id: subscriberId,
        resource_id: resourceId,
        source: 'resource_gate',
      },
    });

    if (error) {
      console.error('Edge function error:', error);
      return;
    }

    if (data?.success) {
      console.log('Subscriber synced to ConvertKit');
    } else if (data?.logged) {
      console.warn('ConvertKit sync failed but error was logged:', data.error);
    }
  } catch (err) {
    console.error('Failed to call sync-subscriber function:', err);
  }
}

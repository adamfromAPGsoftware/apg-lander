import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface DbResource {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  category: string | null;
  content: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface DbSubscriber {
  id: string;
  email: string;
  first_resource_id: string | null;
  first_access_at: string;
  last_access_at: string;
  access_count: number;
  source: string | null;
  metadata: Record<string, unknown>;
}

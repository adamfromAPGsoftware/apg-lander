import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Check, Sparkles, FileText, Link as LinkIcon, PartyPopper } from 'lucide-react';

interface SubscribeResult {
  isNew: boolean;
  subscriberId: string | null;
  error: string | null;
}

interface ContentGateProps {
  onUnlock: (email: string) => Promise<SubscribeResult>;
  resourceId?: string;
  variant?: 'overlay' | 'modal';
  linkContext?: boolean;
}

const ContentGate: React.FC<ContentGateProps> = ({
  onUnlock,
  resourceId,
  variant = 'overlay',
  linkContext = false
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [welcomeBack, setWelcomeBack] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await onUnlock(email);

      if (!result.isNew) {
        // Returning user - show welcome back message briefly
        setWelcomeBack(true);
        setTimeout(() => {
          // The unlock already happened, this just shows the message
        }, 2000);
      }
    } catch (err) {
      // Error handling is done in the hook, unlock still happens for UX
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: FileText, text: 'View full resource' },
    { icon: LinkIcon, text: 'Access all download links' },
    { icon: Sparkles, text: 'Get exclusive AI tips' },
  ];

  // Welcome back screen for returning users
  if (welcomeBack) {
    const WelcomeBackContent = (
      <div className="text-center">
        <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
          <PartyPopper className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Welcome Back!</h3>
        <p className="text-muted-foreground">
          Good to see you again. Unlocking your content...
        </p>
      </div>
    );

    if (variant === 'modal') {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
            {WelcomeBackContent}
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 flex items-start justify-center pt-16 z-10">
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
          {WelcomeBackContent}
        </div>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {linkContext ? 'Unlock This Link' : 'Unlock Full Resource'}
            </h3>
            <p className="text-muted-foreground">
              {linkContext
                ? 'Enter your email to access this link and all resources'
                : 'Enter your email to unlock the full content'}
            </p>
          </div>

          <ul className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-black" />
                </div>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-brand-green text-black hover:bg-brand-green/90 font-semibold py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Unlocking...' : 'Get Free Access'}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  // Overlay variant - positioned over blurred content
  return (
    <div className="absolute inset-0 flex items-start justify-center pt-16 z-10">
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7 text-black" />
          </div>
          <h3 className="text-xl font-bold mb-2">Unlock Full Resource</h3>
          <p className="text-muted-foreground text-sm">
            Enter your email to continue reading
          </p>
        </div>

        <ul className="space-y-2 mb-5">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-black" />
              </div>
              <span>{benefit.text}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <Button
            type="submit"
            className="w-full bg-brand-green text-black hover:bg-brand-green/90 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Unlocking...' : 'Get Free Access'}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-3">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default ContentGate;

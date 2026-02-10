import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { splitContentAtFold } from '@/lib/resources';
import { useResourceGate } from '@/hooks/useResourceGate';
import ContentGate from './ContentGate';
import GatedLink from './GatedLink';
import VideoEmbed from './VideoEmbed';

interface ResourceContentProps {
  content: string;
  resourceId?: string;
  foldThreshold?: number;
}

const FOLD_THRESHOLD = 200; // words

const ResourceContent: React.FC<ResourceContentProps> = ({
  content,
  resourceId,
  foldThreshold = FOLD_THRESHOLD,
}) => {
  const { isUnlocked, unlock } = useResourceGate();
  const [showGateModal, setShowGateModal] = useState(false);
  const [scrollAttempted, setScrollAttempted] = useState(false);
  const belowFoldRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { aboveFold, belowFold, hasMoreContent } = splitContentAtFold(content, foldThreshold);

  // Detect scroll attempt into blurred area
  useEffect(() => {
    if (isUnlocked || !hasMoreContent) return;

    const handleScroll = () => {
      if (!belowFoldRef.current || scrollAttempted) return;

      const rect = belowFoldRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If user scrolls to where blurred content is 30% into viewport
      if (rect.top < viewportHeight * 0.7) {
        setScrollAttempted(true);
        setShowGateModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isUnlocked, hasMoreContent, scrollAttempted]);

  const handleGatedLinkClick = useCallback(() => {
    if (!isUnlocked) {
      setShowGateModal(true);
    }
  }, [isUnlocked]);

  const handleUnlock = useCallback(async (email: string) => {
    const result = await unlock(email, resourceId);
    setShowGateModal(false);
    return result;
  }, [unlock, resourceId]);

  // Custom components for react-markdown
  const markdownComponents = {
    // Handle links - gate them if not unlocked
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <GatedLink
        href={href || '#'}
        isUnlocked={isUnlocked}
        onGatedClick={handleGatedLinkClick}
        className="text-brand-green hover:underline"
        {...props}
      >
        {children}
      </GatedLink>
    ),
    // Handle images
    img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        src={src}
        alt={alt}
        className="rounded-xl my-6 w-full"
        loading="lazy"
        {...props}
      />
    ),
    // Handle video embeds (custom syntax: ![video](url))
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
      // Check if this paragraph contains only an image that's actually a video
      const childArray = React.Children.toArray(children);
      if (childArray.length === 1) {
        const child = childArray[0];
        if (
          React.isValidElement(child) &&
          child.type === 'img' &&
          child.props.alt?.toLowerCase() === 'video'
        ) {
          return <VideoEmbed src={child.props.src} title="Resource Video" />;
        }
      }
      return <p {...props}>{children}</p>;
    },
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Above the fold content - always visible */}
      <article className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-brand-green prose-strong:text-foreground prose-code:text-brand-green prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-blockquote:border-brand-green prose-blockquote:text-muted-foreground prose-li:text-foreground/90">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
        >
          {aboveFold}
        </ReactMarkdown>
      </article>

      {/* Below the fold content */}
      {hasMoreContent && (
        <div ref={belowFoldRef} className="relative mt-8">
          {/* Content with conditional blur */}
          <div
            className={`transition-all duration-500 ${
              !isUnlocked
                ? 'blur-md select-none pointer-events-none'
                : ''
            }`}
          >
            <article className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-brand-green prose-strong:text-foreground prose-code:text-brand-green prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-blockquote:border-brand-green prose-blockquote:text-muted-foreground prose-li:text-foreground/90">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={markdownComponents}
              >
                {belowFold}
              </ReactMarkdown>
            </article>
          </div>

          {/* Gradient fade overlay when locked */}
          {!isUnlocked && (
            <>
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
              <ContentGate onUnlock={handleUnlock} resourceId={resourceId} variant="overlay" />
            </>
          )}
        </div>
      )}

      {/* Modal gate for link clicks */}
      {showGateModal && !isUnlocked && (
        <ContentGate
          onUnlock={handleUnlock}
          resourceId={resourceId}
          variant="modal"
          linkContext={scrollAttempted === false}
        />
      )}
    </div>
  );
};

export default ResourceContent;

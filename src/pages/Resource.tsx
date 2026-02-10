import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResourceContent from '@/components/resources/ResourceContent';
import ResourceCTA from '@/components/resources/ResourceCTA';
import { fetchResourceBySlug, Resource as ResourceType } from '@/lib/resources';
import { ArrowLeft, Calendar, Tag, Loader2 } from 'lucide-react';

const Resource: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [resource, setResource] = useState<ResourceType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadResource() {
      if (!slug) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      try {
        const data = await fetchResourceBySlug(slug);
        if (data) {
          setResource(data);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error('Failed to load resource:', err);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadResource();
  }, [slug]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-8 h-8 animate-spin text-brand-green" />
        </div>
        <Footer />
      </div>
    );
  }

  // Not found - redirect to resources list
  if (notFound || !resource) {
    return <Navigate to="/resources" replace />;
  }

  const formattedDate = new Date(resource.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="py-12 md:py-20 max-width">
        {/* Back link */}
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-green transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>

        {/* Header */}
        <header className="mb-12 animate-fade-in">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-brand-green text-black rounded-full">
              <Tag className="w-3.5 h-3.5" />
              {resource.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {resource.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl">
            {resource.description}
          </p>
        </header>

        {/* Thumbnail/Hero Image */}
        {resource.thumbnail && (
          <div className="mb-12 rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: '100ms' }}>
            <img
              src={resource.thumbnail}
              alt={resource.title}
              className="w-full h-auto max-h-[500px] object-cover"
              onError={(e) => {
                // Hide if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
          <ResourceContent content={resource.content} resourceId={resource.id} />
        </div>

        {/* CTA Section */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <ResourceCTA />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Resource;

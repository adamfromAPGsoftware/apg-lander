import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResourceCard from '@/components/resources/ResourceCard';
import { fetchAllResources, Resource } from '@/lib/resources';
import { BookOpen, Sparkles, Loader2 } from 'lucide-react';

const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadResources() {
      try {
        const data = await fetchAllResources();
        setResources(data);
      } catch (err) {
        console.error('Failed to load resources:', err);
        setError('Failed to load resources. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    loadResources();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 max-width">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green text-black text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Free Resources
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI & Automation Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical guides, templates, and insights to help you leverage AI and automation for your service business.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-brand-green" />
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-20 bg-card border border-border rounded-xl">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Something went wrong</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {error}
            </p>
          </div>
        )}

        {/* Resource Grid */}
        {!isLoading && !error && resources.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={resource.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ResourceCard resource={resource} />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && resources.length === 0 && (
          <div className="text-center py-20 bg-card border border-border rounded-xl">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resources Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're working on valuable resources to help you grow your business with AI.
              Check back soon!
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Resources;

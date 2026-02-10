import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Resource } from '@/lib/resources';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const formattedDate = new Date(resource.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      to={`/resources/${resource.slug}`}
      className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-brand-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/5"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-muted overflow-hidden">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23111" width="400" height="225"/><text x="200" y="112" text-anchor="middle" dy=".35em" fill="%2390F23C" font-family="sans-serif" font-size="24">APG Resource</text></svg>';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-green text-black rounded-full">
            {resource.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-green transition-colors line-clamp-2">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {resource.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </div>
          <span className="text-foreground text-sm font-medium flex items-center gap-1 group-hover:gap-2 group-hover:text-brand-green transition-all">
            Read more
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;

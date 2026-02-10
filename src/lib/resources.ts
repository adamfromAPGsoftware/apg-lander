import { supabase, DbResource } from './supabase';

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
  category: string;
  content: string;
}

// Transform database resource to frontend resource
function mapDbResourceToResource(dbResource: DbResource): Resource {
  return {
    id: dbResource.id,
    slug: dbResource.slug,
    title: dbResource.title,
    description: dbResource.description || '',
    thumbnail: dbResource.thumbnail || '/resources/thumbnails/default.png',
    createdAt: dbResource.created_at.split('T')[0], // Convert to YYYY-MM-DD
    category: dbResource.category || 'General',
    content: dbResource.content,
  };
}

// Fetch all published resources from Supabase
export async function fetchAllResources(): Promise<Resource[]> {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching resources:', error);
    return [];
  }

  return (data || []).map(mapDbResourceToResource);
}

// Fetch a single resource by slug
export async function fetchResourceBySlug(slug: string): Promise<Resource | null> {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No rows returned
      return null;
    }
    console.error('Error fetching resource:', error);
    return null;
  }

  return mapDbResourceToResource(data);
}

// Calculate word count for fold threshold
export function getWordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

// Split content at fold threshold (approx word count)
export function splitContentAtFold(content: string, wordLimit: number = 200): {
  aboveFold: string;
  belowFold: string;
  hasMoreContent: boolean;
} {
  const words = content.trim().split(/\s+/);

  if (words.length <= wordLimit) {
    return {
      aboveFold: content,
      belowFold: '',
      hasMoreContent: false,
    };
  }

  // Find a good split point (end of paragraph near word limit)
  const paragraphs = content.split(/\n\n+/);
  let currentWordCount = 0;
  let splitIndex = 0;

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraphWords = paragraphs[i].trim().split(/\s+/).length;
    if (currentWordCount + paragraphWords > wordLimit && currentWordCount > 0) {
      splitIndex = i;
      break;
    }
    currentWordCount += paragraphWords;
    splitIndex = i + 1;
  }

  const aboveFold = paragraphs.slice(0, splitIndex).join('\n\n');
  const belowFold = paragraphs.slice(splitIndex).join('\n\n');

  return {
    aboveFold,
    belowFold,
    hasMoreContent: belowFold.trim().length > 0,
  };
}

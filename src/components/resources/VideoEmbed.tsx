import React from 'react';

interface VideoEmbedProps {
  src: string;
  title?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title = 'Video' }) => {
  // Extract video ID from various YouTube URL formats
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Check if it's a YouTube URL
  const youtubeId = getYouTubeId(src);

  if (youtubeId) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden my-6">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  // For other video sources (Vimeo, direct MP4, etc.)
  if (src.includes('vimeo.com')) {
    const vimeoId = src.split('/').pop();
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden my-6">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  // Direct video file
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden my-6">
      <video
        src={src}
        title={title}
        controls
        className="absolute inset-0 w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoEmbed;

import React from 'react';

interface GatedLinkProps {
  href: string;
  children: React.ReactNode;
  isUnlocked: boolean;
  onGatedClick: () => void;
  className?: string;
}

const GatedLink: React.FC<GatedLinkProps> = ({
  href,
  children,
  isUnlocked,
  onGatedClick,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!isUnlocked) {
      e.preventDefault();
      onGatedClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${!isUnlocked ? 'cursor-pointer' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default GatedLink;

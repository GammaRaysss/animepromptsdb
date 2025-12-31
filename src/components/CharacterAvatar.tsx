'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CharacterAvatarProps {
  characterSlug: string;
  characterName: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CharacterAvatar({
  characterSlug,
  characterName,
  size = 'lg'
}: CharacterAvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  };

  const sizePixels = {
    sm: 48,
    md: 64,
    lg: 80,
  };

  if (imageError) {
    return (
      <div className={`avatar ${sizeClasses[size]} glow-pink animate-float`}>
        {characterName[0]}
      </div>
    );
  }

  return (
    <div
      className="glow-pink animate-float"
      style={{
        width: sizePixels[size],
        height: sizePixels[size],
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        border: '3px solid var(--accent-primary)',
        boxShadow: '0 0 20px rgba(244, 114, 182, 0.3)',
      }}
    >
      <Image
        src={`/images/characters/${characterSlug}/${characterSlug}_portrait.png`}
        alt={characterName}
        fill
        style={{ objectFit: 'cover' }}
        onError={() => setImageError(true)}
      />
    </div>
  );
}

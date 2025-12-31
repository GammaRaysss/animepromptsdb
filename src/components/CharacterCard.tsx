'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Character } from '@/data/characters';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/${character.slug}/`} className="card p-5 block group">
      <div className="flex items-start gap-4">
        {imageError ? (
          <div className="avatar w-16 h-16 text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            {character.name[0]}
          </div>
        ) : (
          <div
            className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 0 15px rgba(244, 114, 182, 0.2)',
            }}
          >
            <Image
              src={`/images/characters/${character.slug}/${character.slug}_illustrious_portrait.png`}
              alt={character.name}
              fill
              style={{ objectFit: 'cover' }}
              onError={() => setImageError(true)}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg group-hover:text-[var(--accent-primary)] transition-colors truncate">
            {character.name}
          </h3>
          <p className="text-[var(--text-muted)] text-sm mb-3">{character.anime}</p>
          <div className="flex flex-wrap gap-1.5">
            {character.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-muted)] text-xs rounded-md border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
            {character.tags.length > 3 && (
              <span className="inline-block px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--text-muted)] text-xs rounded-md border border-[var(--border)]">
                +{character.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        <svg
          className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

import Link from 'next/link';
import { Character } from '@/data/characters';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/${character.slug}/`} className="card p-5 block group">
      <div className="flex items-start gap-4">
        <div className="avatar w-14 h-14 text-xl group-hover:scale-110 transition-transform duration-300">
          {character.name[0]}
        </div>
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

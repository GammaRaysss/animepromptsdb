'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Character, searchCharacters } from '@/data/characters';

interface SearchProps {
  characters: Character[];
}

export default function Search({ characters }: SearchProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchCharacters(query).slice(0, 6);
  }, [query]);

  const showResults = isFocused && query.trim().length > 0;

  return (
    <div className="relative" style={{ width: '100%', maxWidth: '576px', margin: '0 auto' }}>
      <div className="relative">
        <svg 
          className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search characters, anime, or tags..."
          className="search-input"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl z-50">
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map((character) => (
                <li key={character.slug}>
                  <Link
                    href={`/${character.slug}/`}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-[var(--bg-card-hover)] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white font-bold text-lg">
                      {character.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{character.name}</div>
                      <div className="text-sm text-[var(--text-muted)] truncate">{character.anime}</div>
                    </div>
                    <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-8 text-center">
              <div className="text-[var(--text-muted)] mb-1">No characters found for "{query}"</div>
              <div className="text-sm text-[var(--text-muted)]">Try a different search term</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTags, getCharactersByTag } from '@/data/characters';

export const metadata: Metadata = {
  title: 'Browse by Tags | AnimePromptsDB',
  description: 'Find AI art prompts by character type. Waifus, maids, villains, and more.',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Browse by Tags</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Find characters by type, archetype, or characteristics
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => {
            const count = getCharactersByTag(tag).length;
            return (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="card px-6 py-4 group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <span className="font-medium group-hover:text-[var(--accent-pink)] transition-colors">
                  {tag}
                </span>
                <span className="ml-2 text-[var(--text-muted)]">({count})</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { getAllAnimes } from '@/data/characters';

export const metadata: Metadata = {
  title: 'Browse by Anime | AnimePromptsDB',
  description: 'Find AI art prompts organized by anime series. Chainsaw Man, Re:Zero, Spy x Family, and more.',
};

export default function AnimePage() {
  const animes = getAllAnimes();

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Browse by Anime</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Find optimized AI art prompts organized by anime series
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {animes.map((anime, index) => (
            <Link
              key={anime.slug}
              href={`/anime/${anime.slug}`}
              className="card p-6 group animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-lg group-hover:text-[var(--accent-pink)] transition-colors">
                    {anime.name}
                  </h2>
                  <p className="text-[var(--text-muted)] text-sm mt-1">
                    {anime.count} character{anime.count !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-purple)] flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                  {anime.count}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllAnimes, getCharactersByAnime } from '@/data/characters';
import CharacterCard from '@/components/CharacterCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const animes = getAllAnimes();
  return animes.map((anime) => ({
    slug: anime.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const animes = getAllAnimes();
  const anime = animes.find(a => a.slug === slug);
  
  if (!anime) {
    return { title: 'Anime Not Found | AnimePromptsDB' };
  }

  return {
    title: `${anime.name} Character Prompts | AnimePromptsDB`,
    description: `AI art prompts for ${anime.count} characters from ${anime.name}. Copy-paste ready for Stable Diffusion.`,
  };
}

export default async function AnimeDetailPage({ params }: Props) {
  const { slug } = await params;
  const animes = getAllAnimes();
  const anime = animes.find(a => a.slug === slug);
  
  if (!anime) {
    notFound();
  }

  const characters = getCharactersByAnime(slug);

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-[var(--text-muted)]">
            <li><Link href="/" className="hover:text-[var(--accent-pink)] transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/anime" className="hover:text-[var(--accent-pink)] transition-colors">Anime</Link></li>
            <li>/</li>
            <li className="text-[var(--text-primary)]">{anime.name}</li>
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{anime.name}</h1>
          <p className="text-[var(--text-secondary)]">
            {characters.length} character prompt{characters.length !== 1 ? 's' : ''} available
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character, index) => (
            <div 
              key={character.slug}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

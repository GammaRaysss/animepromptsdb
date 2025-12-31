import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllTags, getCharactersByTag } from '@/data/characters';
import CharacterCard from '@/components/CharacterCard';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const characters = getCharactersByTag(decodedTag);
  
  if (characters.length === 0) {
    return { title: 'Tag Not Found | AnimePromptsDB' };
  }

  return {
    title: `${decodedTag} Character Prompts | AnimePromptsDB`,
    description: `AI art prompts for ${characters.length} ${decodedTag} characters. Copy-paste ready for Stable Diffusion.`,
  };
}

export default async function TagDetailPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const characters = getCharactersByTag(decodedTag);
  
  if (characters.length === 0) {
    notFound();
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-[var(--text-muted)]">
            <li><Link href="/" className="hover:text-[var(--accent-pink)] transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/tags" className="hover:text-[var(--accent-pink)] transition-colors">Tags</Link></li>
            <li>/</li>
            <li className="text-[var(--text-primary)]">{decodedTag}</li>
          </ol>
        </nav>

        <header className="mb-12">
          <div className="inline-block tag text-lg px-4 py-2 mb-4">{decodedTag}</div>
          <h1 className="text-4xl font-bold mb-4 capitalize">{decodedTag} Characters</h1>
          <p className="text-[var(--text-secondary)]">
            {characters.length} character{characters.length !== 1 ? 's' : ''} with this tag
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

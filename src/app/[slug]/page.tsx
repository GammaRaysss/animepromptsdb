import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { characters, getCharacterBySlug, getCharactersByAnime } from '@/data/characters';
import CopyButton from '@/components/CopyButton';
import CharacterCard from '@/components/CharacterCard';
import ImageGallery from '@/components/ImageGallery';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return characters.map((character) => ({
    slug: character.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  
  if (!character) {
    return {
      title: 'Character Not Found | AnimePromptsDB',
    };
  }

  const ogImage = `/images/characters/${character.slug}/noobai.webp`;

  return {
    title: character.seo.title,
    description: character.seo.description,
    keywords: `${character.name} prompt, ${character.name} stable diffusion, ${character.anime} AI art, ${character.tags.join(', ')}`,
    openGraph: {
      title: character.seo.title,
      description: character.seo.description,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1024,
          height: 1024,
          alt: `${character.name} from ${character.anime} AI generated art`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: character.seo.title,
      description: character.seo.description,
      images: [ogImage],
    },
  };
}

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  
  if (!character) {
    notFound();
  }

  const relatedCharacters = getCharactersByAnime(character.animeSlug)
    .filter(c => c.slug !== character.slug)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: character.seo.title,
    description: character.seo.description,
    image: `https://animepromptsdb.com/images/characters/${character.slug}/noobai.webp`,
    author: {
      '@type': 'Organization',
      name: 'AnimePromptsDB',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AnimePromptsDB',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm animate-fade-in-up">
            <ol className="flex items-center gap-2 text-[var(--text-muted)]">
              <li><Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link></li>
              <li className="text-[var(--border)]">/</li>
              <li><Link href={`/anime/${character.animeSlug}/`} className="hover:text-[var(--accent-primary)] transition-colors">{character.anime}</Link></li>
              <li className="text-[var(--border)]">/</li>
              <li className="text-[var(--text-primary)]">{character.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14 animate-fade-in-up stagger-1">
            <div className="flex items-start gap-6">
              <div className="avatar w-20 h-20 text-3xl glow-pink animate-float">
                {character.name[0]}
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{character.name}</h1>
                <Link 
                  href={`/anime/${character.animeSlug}/`}
                  className="text-xl text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  {character.anime}
                </Link>
                <div className="flex flex-wrap gap-2 mt-5">
                  {character.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}/`}
                      className="tag"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Main Prompt */}
          <section className="mb-8 animate-fade-in-up stagger-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white text-sm">✨</span>
                Optimized Prompt
              </h2>
              <CopyButton text={character.prompt} label="Copy" />
            </div>
            <div className="prompt-box">
              <code>{character.prompt}</code>
            </div>
          </section>

          {/* Negative Prompt */}
          <section className="mb-8 animate-fade-in-up stagger-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-sm">🚫</span>
                Negative Prompt
              </h2>
              <CopyButton text={character.negativePrompt} label="Copy" />
            </div>
            <div className="prompt-box">
              <code>{character.negativePrompt}</code>
            </div>
          </section>

          {/* AI Generated Examples */}
          <ImageGallery 
            characterSlug={character.slug}
            characterName={character.name}
            anime={character.anime}
          />

          {/* Tips */}
          <section className="mb-8 animate-fade-in-up stagger-4">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-sm">💡</span>
              Pro Tips
            </h2>
            <div className="card p-6">
              <p className="text-[var(--text-secondary)] leading-relaxed">{character.tips}</p>
            </div>
          </section>

          {/* Recommended Models */}
          <section className="mb-10 animate-fade-in-up stagger-5">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-sm">🎨</span>
              Recommended Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-5">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">Checkpoints</h3>
                <ul className="space-y-3">
                  {character.recommendedModels.map((model) => (
                    <li key={model} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
                      <span className="text-[var(--text-secondary)]">{model}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-5">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">LoRAs</h3>
                <ul className="space-y-3">
                  {character.recommendedLoras.map((lora) => (
                    <li key={lora} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]"></span>
                      <span className="text-[var(--text-secondary)]">{lora}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Copy All */}
          <section className="mb-16">
            <div className="card p-6 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(192,132,252,0.1)] border-[var(--accent-primary)]/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">Ready to generate?</h3>
                  <p className="text-[var(--text-muted)]">Copy both prompts at once</p>
                </div>
                <CopyButton 
                  text={`Prompt:\n${character.prompt}\n\nNegative Prompt:\n${character.negativePrompt}`} 
                  label="Copy Both Prompts"
                  className="animate-pulse-glow"
                />
              </div>
            </div>
          </section>

          {/* Related Characters */}
          {relatedCharacters.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">More from {character.anime}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedCharacters.map((char) => (
                  <CharacterCard key={char.slug} character={char} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

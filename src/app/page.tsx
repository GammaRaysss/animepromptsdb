import { characters, getAllTags, getAllAnimes } from '@/data/characters';
import Search from '@/components/Search';
import CharacterCard from '@/components/CharacterCard';
import Link from 'next/link';

export default function Home() {
  const tags = getAllTags();
  const animes = getAllAnimes();

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container-xl text-center">
          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            {/* Badge */}
            <div className="animate-fade-in-up">
              <div className="hero-badge mb-8 inline-flex">
                <span className="hero-badge-dot"></span>
                <span>{characters.length}+ optimized prompts</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] animate-fade-in-up stagger-1">
              <span className="text-[var(--text-primary)]">AI Prompts for</span>
              <br />
              <span className="gradient-text">Anime Characters</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 animate-fade-in-up stagger-2 leading-relaxed" style={{ maxWidth: '672px', margin: '0 auto 3rem auto' }}>
              Copy-paste ready Stable Diffusion prompts.
              <span className="text-[var(--text-primary)]"> Optimized for NoobAI, Illustrious, and Pony.</span>
            </p>

            {/* Search */}
            <div className="animate-fade-in-up stagger-3 mb-10">
              <Search characters={characters} />
            </div>

            {/* Popular Characters - Quick Links */}
            <div className="animate-fade-in-up stagger-4 flex items-center justify-center gap-3 flex-wrap">
              <span className="text-sm text-[var(--text-muted)] mr-2">Popular:</span>
              {characters.slice(0, 5).map((char) => (
                <Link
                  key={char.slug}
                  href={`/${char.slug}/`}
                  className="btn-secondary"
                >
                  {char.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container-xl">
          <div className="grid grid-cols-3 gap-4" style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <div className="stat-card animate-fade-in-up stagger-1">
              <div className="stat-number">{characters.length}</div>
              <div className="stat-label">Characters</div>
            </div>
            <div className="stat-card animate-fade-in-up stagger-2">
              <div className="stat-number">{animes.length}</div>
              <div className="stat-label">Anime Series</div>
            </div>
            <div className="stat-card animate-fade-in-up stagger-3">
              <div className="stat-number">{tags.length}</div>
              <div className="stat-label">Tags</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1152px', margin: '4rem auto' }}></div>

      {/* All Characters */}
      <section className="py-12">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">All Characters</h2>
              <p className="text-[var(--text-muted)]">Click any character to get their optimized prompt</p>
            </div>
            <span className="text-sm text-[var(--text-muted)] bg-[var(--bg-card)] px-3 py-1 rounded-full border border-[var(--border)]">
              {characters.length} prompts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {characters.map((character) => (
              <CharacterCard key={character.slug} character={character} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1152px', margin: '4rem auto' }}></div>

      {/* Browse by Anime */}
      <section className="py-12">
        <div className="container-xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Browse by Anime</h2>
            <p className="text-[var(--text-muted)]">Find all characters from your favorite series</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {animes.map((anime) => (
              <Link
                key={anime.slug}
                href={`/anime/${anime.slug}/`}
                className="card p-5 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold group-hover:text-[var(--accent-primary)] transition-colors">
                    {anime.name}
                  </span>
                  <span className="tag">{anime.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1152px', margin: '4rem auto' }}></div>

      {/* Browse by Tags */}
      <section className="py-12">
        <div className="container-xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Browse by Tags</h2>
            <p className="text-[var(--text-muted)]">Find characters by type or archetype</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
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
      </section>

      <div className="section-divider" style={{ maxWidth: '1152px', margin: '4rem auto' }}></div>

      {/* Features Section */}
      <section className="py-12">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Use AnimePromptsDB?</h2>
            <p className="text-[var(--text-muted)]" style={{ maxWidth: '576px', margin: '0 auto' }}>
              Stop guessing. Get perfect character generations every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ maxWidth: '1152px', margin: '0 auto' }}>
            <div className="card p-6 text-center">
              <div className="feature-icon" style={{ margin: '0 auto 1rem auto' }}>📋</div>
              <h3 className="font-semibold text-lg mb-2">One-Click Copy</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Copy optimized prompts instantly. No more trial and error.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="feature-icon" style={{ margin: '0 auto 1rem auto' }}>🎯</div>
              <h3 className="font-semibold text-lg mb-2">Accurate Results</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Danbooru tags tuned for character accuracy and quality.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="feature-icon" style={{ margin: '0 auto 1rem auto' }}>⚡</div>
              <h3 className="font-semibold text-lg mb-2">Model-Specific</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Recommendations for NoobAI, Illustrious, Pony, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1152px', margin: '4rem auto' }}></div>

      {/* SEO Content Section */}
      <section className="py-12">
        <div className="container-xl">
          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            <h2 className="text-2xl font-bold mb-6">About AnimePromptsDB</h2>

            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
                AnimePromptsDB is your resource for optimized Stable Diffusion prompts for anime characters.
                Whether you're generating art of Makima from Chainsaw Man, Zero Two from Darling in the Franxx,
                or any other popular character, our curated prompts deliver accurate results.
              </p>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-4">
                What's Included
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[var(--text-muted)]">
                <li>Danbooru-style character tags for accuracy</li>
                <li>Negative prompts to avoid common issues</li>
                <li>Recommended checkpoint models and LoRAs</li>
                <li>Pro tips for variations and poses</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-4">
                Supported Models
              </h3>
              <p className="text-[var(--text-muted)]">
                Prompts optimized for NoobAI-XL, Illustrious-XL, Animagine XL 3.1, and Pony Diffusion V6.
                Each character page includes model-specific recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

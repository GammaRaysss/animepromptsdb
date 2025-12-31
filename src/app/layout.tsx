import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "AnimePromptsDB - Anime Character AI Art Prompts Database",
  description: "Find optimized Stable Diffusion prompts for your favorite anime characters. Copy perfect prompts for Makima, Zero Two, Rem, and 100+ more characters.",
  keywords: "stable diffusion, anime prompts, anime AI art, character prompts, NoobAI, Illustrious, midjourney anime, waifu generator",
  authors: [{ name: "AnimePromptsDB" }],
  openGraph: {
    title: "AnimePromptsDB - Anime Character AI Art Prompts",
    description: "Optimized Stable Diffusion prompts for 100+ anime characters",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimePromptsDB - Anime Character AI Art Prompts",
    description: "Optimized Stable Diffusion prompts for 100+ anime characters",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="container-xl" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform">
            ⚡
          </div>
          <span className="font-bold text-lg hidden sm:block">
            <span className="text-[var(--text-primary)]">Anime</span>
            <span className="gradient-text">PromptsDB</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link 
            href="/" 
            className="px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-all text-sm font-medium"
          >
            Characters
          </Link>
          <Link 
            href="/anime/" 
            className="px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-all text-sm font-medium"
          >
            Anime
          </Link>
          <Link 
            href="/tags/" 
            className="px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-all text-sm font-medium"
          >
            Tags
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 mt-20 relative z-10">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white text-lg">
                ⚡
              </div>
              <span className="font-bold">
                <span className="text-[var(--text-primary)]">Anime</span>
                <span className="gradient-text">PromptsDB</span>
              </span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Optimized Stable Diffusion prompts for anime characters. Copy, paste, generate.
            </p>
          </div>

          {/* Popular */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">Popular</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/makima/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Makima</Link></li>
              <li><Link href="/zero-two/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Zero Two</Link></li>
              <li><Link href="/rem/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Rem</Link></li>
              <li><Link href="/marin-kitagawa/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Marin Kitagawa</Link></li>
            </ul>
          </div>

          {/* Browse */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">Browse</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/anime/chainsaw-man/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Chainsaw Man</Link></li>
              <li><Link href="/anime/spy-x-family/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Spy x Family</Link></li>
              <li><Link href="/anime/demon-slayer/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Demon Slayer</Link></li>
              <li><Link href="/tags/waifu/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Waifu Tag</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://civitai.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">CivitAI Models</a></li>
              <li><a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">HuggingFace</a></li>
            </ul>
          </div>
        </div>

        <div className="section-divider !my-10"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} AnimePromptsDB. Not affiliated with any anime studios.
          </p>
          <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
            <span>Built for the AI art community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-mesh">
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

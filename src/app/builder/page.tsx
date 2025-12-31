import { Metadata } from 'next';
import PromptBuilder from '@/components/PromptBuilder';

export const metadata: Metadata = {
  title: 'Prompt Builder | AnimePromptsDB',
  description: 'Build optimized Stable Diffusion prompts with our interactive tool. Select tags, choose your model, and generate perfect anime art prompts.',
  keywords: 'prompt builder, stable diffusion tool, anime prompt generator, NoobAI prompts, Illustrious prompts, Pony prompts',
};

export default function BuilderPage() {
  return (
    <div className="py-12 relative z-10">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-[var(--text-primary)]">Prompt </span>
            <span className="gradient-text">Builder</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Build optimized prompts for Stable Diffusion. Select tags, choose your model, and copy.
          </p>
        </div>

        {/* Main Builder Component */}
        <PromptBuilder />
      </div>
    </div>
  );
}

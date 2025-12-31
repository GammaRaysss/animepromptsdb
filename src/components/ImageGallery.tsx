'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  characterSlug: string;
  characterName: string;
  anime: string;
}

const models = [
  { id: 'noobai', name: 'NoobAI-XL', color: '#f472b6' },
  { id: 'illustrious', name: 'Illustrious-XL', color: '#c084fc' },
  { id: 'pony', name: 'Pony Diffusion V6', color: '#38bdf8' },
];

export default function ImageGallery({ characterSlug, characterName, anime }: ImageGalleryProps) {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (modelId: string) => {
    setLoadedImages(prev => ({ ...prev, [modelId]: true }));
  };

  const handleImageError = (modelId: string) => {
    setFailedImages(prev => ({ ...prev, [modelId]: true }));
  };

  const hasAnyImages = Object.keys(loadedImages).length > 0;
  const allImagesFailed = Object.keys(failedImages).length === models.length;

  // Don't render anything if no images exist
  if (allImagesFailed) {
    return null;
  }

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🖼️</span>
        <h2 className="text-xl font-bold">AI Generated Examples</h2>
        <span className="text-sm text-[var(--text-muted)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full">
          Same prompt, different models
        </span>
      </div>

      {/* Model Tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {models.map((model) => {
          if (failedImages[model.id]) return null;
          return (
            <button
              key={model.id}
              onClick={() => setSelectedModel(selectedModel === model.id ? null : model.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedModel === model.id
                  ? 'text-white'
                  : 'bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-light)]'
              }`}
              style={selectedModel === model.id ? { background: model.color } : {}}
            >
              {model.name}
            </button>
          );
        })}
      </div>

      {/* Image Grid */}
      <div className={`grid gap-4 ${selectedModel ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
        {models.map((model) => {
          if (failedImages[model.id]) return null;
          if (selectedModel && selectedModel !== model.id) return null;
          
          const imagePath = `/images/characters/${characterSlug}/${model.id}.webp`;
          const altText = `${characterName} from ${anime} - AI art generated with ${model.name} using Stable Diffusion`;
          
          return (
            <div
              key={model.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedModel(selectedModel === model.id ? null : model.id)}
            >
              <div 
                className={`relative overflow-hidden rounded-2xl border-2 transition-all ${
                  selectedModel === model.id 
                    ? 'border-[var(--accent-primary)]' 
                    : 'border-[var(--border)] hover:border-[var(--border-light)]'
                }`}
                style={{ aspectRatio: '1/1' }}
              >
                {/* Placeholder while loading */}
                {!loadedImages[model.id] && !failedImages[model.id] && (
                  <div className="absolute inset-0 bg-[var(--bg-secondary)] animate-pulse flex items-center justify-center">
                    <svg className="w-12 h-12 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                <Image
                  src={imagePath}
                  alt={altText}
                  title={`${characterName} ${model.name} Stable Diffusion result`}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                    loadedImages[model.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(model.id)}
                  onError={() => handleImageError(model.id)}
                  sizes={selectedModel ? '(max-width: 768px) 100vw, 800px' : '(max-width: 768px) 100vw, 33vw'}
                />

                {/* Model Label */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ background: model.color }}
                    />
                    <span className="text-white text-sm font-medium">{model.name}</span>
                  </div>
                </div>

                {/* Expand Icon */}
                {!selectedModel && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 rounded-lg p-2">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Collapse button when expanded */}
      {selectedModel && (
        <button
          onClick={() => setSelectedModel(null)}
          className="mt-4 text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Show all models
        </button>
      )}

      {/* SEO Text */}
      <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
        Generated using the prompt above. Results may vary based on seed and settings.
      </p>
    </div>
  );
}

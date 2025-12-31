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

const shotTypes = [
  { id: 'portrait', name: 'Portrait', color: '#10b981' },
  { id: 'upper_body', name: 'Upper Body', color: '#f59e0b' },
  { id: 'full_body', name: 'Full Body', color: '#6366f1' },
];

export default function ImageGallery({ characterSlug, characterName, anime }: ImageGalleryProps) {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedShot, setSelectedShot] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
  };

  const handleImageError = (imageId: string) => {
    setFailedImages(prev => ({ ...prev, [imageId]: true }));
  };

  // Build all image combinations
  const allImages = models.flatMap(model =>
    shotTypes.map(shot => ({
      id: `${model.id}_${shot.id}`,
      modelId: model.id,
      modelName: model.name,
      modelColor: model.color,
      shotId: shot.id,
      shotName: shot.name,
      shotColor: shot.color,
      path: `/images/characters/${characterSlug}/${characterSlug}_${model.id}_${shot.id}.png`,
    }))
  );

  const totalImages = allImages.length;
  const allImagesFailed = Object.keys(failedImages).length === totalImages;

  // Filter images based on selection
  const filteredImages = allImages.filter(img => {
    if (failedImages[img.id]) return false;
    if (selectedModel && img.modelId !== selectedModel) return false;
    if (selectedShot && img.shotId !== selectedShot) return false;
    return true;
  });

  // Don't render anything if no images exist
  if (allImagesFailed) {
    return null;
  }

  const getGridCols = () => {
    const count = filteredImages.length;
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-3';
    return 'grid-cols-1 md:grid-cols-3';
  };

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🖼️</span>
        <h2 className="text-xl font-bold">AI Generated Examples</h2>
      </div>

      {/* Filters */}
      <div className="mb-6 space-y-3">
        {/* Model Filter */}
        <div>
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mr-3">Model:</span>
          <div className="inline-flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedModel(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedModel === null
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-light)]'
              }`}
            >
              All
            </button>
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(selectedModel === model.id ? null : model.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedModel === model.id
                    ? 'text-white'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-light)]'
                }`}
                style={selectedModel === model.id ? { background: model.color } : {}}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>

        {/* Shot Type Filter */}
        <div>
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider mr-3">Shot:</span>
          <div className="inline-flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedShot(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedShot === null
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-light)]'
              }`}
            >
              All
            </button>
            {shotTypes.map((shot) => (
              <button
                key={shot.id}
                onClick={() => setSelectedShot(selectedShot === shot.id ? null : shot.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedShot === shot.id
                    ? 'text-white'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-light)]'
                }`}
                style={selectedShot === shot.id ? { background: shot.color } : {}}
              >
                {shot.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className={`grid gap-4 ${getGridCols()}`}>
        {filteredImages.map((img) => {
          const altText = `${characterName} from ${anime} - ${img.shotName} shot generated with ${img.modelName}`;

          return (
            <div
              key={img.id}
              className="relative group"
            >
              <div
                className="relative overflow-hidden rounded-2xl border-2 border-[var(--border)] hover:border-[var(--border-light)] transition-all"
                style={{ aspectRatio: '1/1' }}
              >
                {/* Placeholder while loading */}
                {!loadedImages[img.id] && !failedImages[img.id] && (
                  <div className="absolute inset-0 bg-[var(--bg-secondary)] animate-pulse flex items-center justify-center">
                    <svg className="w-12 h-12 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}

                <Image
                  src={img.path}
                  alt={altText}
                  title={`${characterName} ${img.modelName} ${img.shotName}`}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                    loadedImages[img.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(img.id)}
                  onError={() => handleImageError(img.id)}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Labels */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: img.modelColor }}
                      />
                      <span className="text-white text-sm font-medium">{img.modelName}</span>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full text-white"
                      style={{ background: img.shotColor }}
                    >
                      {img.shotName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset filters */}
      {(selectedModel || selectedShot) && (
        <button
          onClick={() => { setSelectedModel(null); setSelectedShot(null); }}
          className="mt-4 text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Show all images
        </button>
      )}

      {/* SEO Text */}
      <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
        Generated using the prompts above. Results may vary based on seed and settings.
      </p>
    </div>
  );
}

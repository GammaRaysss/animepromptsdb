'use client';

import { useState, useMemo } from 'react';
import { MODEL_PRESETS, optimizeTagOrder } from '@/data/modelPresets';
import CopyButton from './CopyButton';

// Tag database organized by category
const TAG_DATABASE: Record<string, { label: string; color: string; tags: string[] }> = {
  quality: {
    label: 'Quality',
    color: '#fbbf24',
    tags: ['masterpiece', 'best quality', 'amazing quality', 'very aesthetic', 'absurdres', 'highres', 'ultra detailed', 'newest', 'score_9', 'score_8_up', 'score_7_up', 'source_anime']
  },
  subject: {
    label: 'Subject',
    color: '#ec4899',
    tags: ['1girl', '2girls', '3girls', '1boy', '2boys', 'solo', 'multiple girls', 'couple', 'group']
  },
  hair_color: {
    label: 'Hair Color',
    color: '#facc15',
    tags: ['blonde hair', 'brown hair', 'black hair', 'white hair', 'silver hair', 'red hair', 'pink hair', 'purple hair', 'blue hair', 'green hair', 'orange hair', 'grey hair', 'multicolored hair', 'gradient hair', 'two-tone hair']
  },
  hair_style: {
    label: 'Hair Style',
    color: '#c084fc',
    tags: ['long hair', 'short hair', 'medium hair', 'very long hair', 'ponytail', 'twintails', 'braid', 'bun', 'bob cut', 'pixie cut', 'bangs', 'side ponytail', 'messy hair', 'straight hair', 'wavy hair', 'curly hair', 'ahoge', 'drill hair', 'hime cut']
  },
  eye_color: {
    label: 'Eye Color',
    color: '#38bdf8',
    tags: ['blue eyes', 'red eyes', 'brown eyes', 'green eyes', 'purple eyes', 'yellow eyes', 'golden eyes', 'amber eyes', 'pink eyes', 'aqua eyes', 'heterochromia', 'glowing eyes']
  },
  expression: {
    label: 'Expression',
    color: '#4ade80',
    tags: ['smile', 'grin', 'smirk', 'blush', 'closed eyes', 'wink', 'looking at viewer', 'looking away', 'shy', 'embarrassed', 'happy', 'sad', 'angry', 'surprised', 'serious', 'seductive smile', 'tongue out', 'open mouth', 'pout']
  },
  body_type: {
    label: 'Body Type',
    color: '#f97316',
    tags: ['petite', 'slim', 'slender', 'athletic', 'muscular', 'curvy', 'thicc', 'tall female', 'short female', 'mature female']
  },
  chest: {
    label: 'Chest',
    color: '#f472b6',
    tags: ['flat chest', 'small breasts', 'medium breasts', 'large breasts', 'huge breasts', 'cleavage', 'sideboob', 'underboob']
  },
  clothing: {
    label: 'Clothing',
    color: '#06b6d4',
    tags: ['dress', 'shirt', 'blouse', 't-shirt', 'sweater', 'hoodie', 'jacket', 'skirt', 'shorts', 'pants', 'jeans', 'bikini', 'swimsuit', 'school uniform', 'maid', 'kimono', 'lingerie', 'underwear', 'nude', 'topless']
  },
  accessories: {
    label: 'Accessories',
    color: '#e879f9',
    tags: ['glasses', 'sunglasses', 'hat', 'ribbon', 'bow', 'hairband', 'earrings', 'necklace', 'choker', 'collar', 'gloves', 'thighhighs', 'stockings', 'pantyhose']
  },
  pose: {
    label: 'Pose',
    color: '#a78bfa',
    tags: ['standing', 'sitting', 'lying', 'kneeling', 'walking', 'running', 'leaning', 'hands on hips', 'arms behind back', 'arms up', 'crossed arms', 'peace sign', 'spread legs', 'from behind', 'from above', 'from below', 'pov']
  },
  background: {
    label: 'Background',
    color: '#22d3ee',
    tags: ['simple background', 'white background', 'gradient background', 'outdoors', 'indoors', 'bedroom', 'classroom', 'beach', 'forest', 'city', 'night', 'sunset', 'sky']
  },
  lighting: {
    label: 'Lighting',
    color: '#84cc16',
    tags: ['natural lighting', 'soft lighting', 'dramatic lighting', 'rim lighting', 'backlighting', 'sunlight', 'golden hour', 'cinematic lighting']
  },
  style: {
    label: 'Style',
    color: '#8b5cf6',
    tags: ['anime', 'illustration', 'detailed', 'sharp focus', 'cinematic', 'portrait', 'full body', 'upper body', 'cowboy shot', 'close-up', 'depth of field', 'bokeh']
  }
};

export default function PromptBuilder() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState('noobai');
  const [customTags, setCustomTags] = useState('');
  const [activeCategory, setActiveCategory] = useState('quality');

  const preset = MODEL_PRESETS[selectedModel];

  // Toggle a tag
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Add custom tags
  const addCustomTags = () => {
    if (!customTags.trim()) return;
    const newTags = customTags.split(',').map(t => t.trim()).filter(t => t && !selectedTags.includes(t));
    setSelectedTags(prev => [...prev, ...newTags]);
    setCustomTags('');
  };

  // Clear all
  const clearAll = () => {
    setSelectedTags([]);
  };

  // Auto-add quality tags for model
  const applyModelPreset = () => {
    const qualityTags = preset.qualityTags;
    const newTags = [...qualityTags, ...selectedTags.filter(t => !qualityTags.includes(t))];
    setSelectedTags(newTags);
  };

  // Optimize tag order
  const optimizeTags = () => {
    setSelectedTags(optimizeTagOrder(selectedTags));
  };

  // Generate final prompt
  const finalPrompt = useMemo(() => {
    if (selectedTags.length === 0) return '';
    return selectedTags.join(', ');
  }, [selectedTags]);

  // Remove a specific tag
  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
      {/* Model Selection */}
      <div className="card p-6">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">1.</span> Select Model
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {Object.entries(MODEL_PRESETS).map(([id, model]) => (
            <button
              key={id}
              onClick={() => setSelectedModel(id)}
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: '2px solid',
                borderColor: selectedModel === id ? 'var(--accent-primary)' : 'var(--border)',
                background: selectedModel === id
                  ? 'linear-gradient(135deg, rgba(244,114,182,0.2), rgba(192,132,252,0.2))'
                  : 'var(--bg-card)',
                color: selectedModel === id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {model.shortName}
            </button>
          ))}
        </div>
        <p className="text-sm text-[var(--text-muted)] mt-3">{preset.description}</p>
        <button
          onClick={applyModelPreset}
          className="btn-secondary mt-4"
          style={{ fontSize: '0.875rem' }}
        >
          + Add {preset.shortName} Quality Tags
        </button>
      </div>

      {/* Tag Selection */}
      <div className="card p-6">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">2.</span> Select Tags
        </h2>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
          {Object.entries(TAG_DATABASE).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              style={{
                padding: '0.375rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 500,
                border: 'none',
                background: activeCategory === key ? cat.color : 'var(--bg-secondary)',
                color: activeCategory === key ? 'white' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tags Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {TAG_DATABASE[activeCategory].tags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                border: '1px solid',
                borderColor: selectedTags.includes(tag) ? TAG_DATABASE[activeCategory].color : 'var(--border)',
                background: selectedTags.includes(tag) ? TAG_DATABASE[activeCategory].color : 'transparent',
                color: selectedTags.includes(tag) ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Custom Tags Input */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={customTags}
            onChange={(e) => setCustomTags(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCustomTags()}
            placeholder="Add custom tags (comma separated)"
            className="search-input"
            style={{ flex: 1 }}
          />
          <button onClick={addCustomTags} className="btn-secondary">
            Add
          </button>
        </div>
      </div>

      {/* Selected Tags */}
      <div className="card p-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 className="font-bold text-lg flex items-center gap-2">
            <span className="text-[var(--accent-primary)]">3.</span> Your Tags
            <span className="tag" style={{ marginLeft: '0.5rem' }}>{selectedTags.length}</span>
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={optimizeTags} className="btn-secondary" style={{ fontSize: '0.75rem' }}>
              Optimize Order
            </button>
            <button onClick={clearAll} className="btn-secondary" style={{ fontSize: '0.75rem', opacity: 0.7 }}>
              Clear All
            </button>
          </div>
        </div>

        {selectedTags.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {selectedTags.map((tag, index) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  background: index < preset.qualityTags.length && preset.qualityTags.includes(tag)
                    ? 'var(--accent-primary)'
                    : 'var(--bg-secondary)',
                  color: index < preset.qualityTags.length && preset.qualityTags.includes(tag)
                    ? 'white'
                    : 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '1rem',
                    lineHeight: 1,
                    opacity: 0.7,
                  }}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        ) : (
          <p className="text-[var(--text-muted)]">No tags selected. Click tags above to add them.</p>
        )}
      </div>

      {/* Output */}
      <div className="card p-6" style={{ borderColor: 'var(--accent-primary)', borderWidth: '2px' }}>
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-[var(--accent-primary)]">4.</span> Generated Prompt
        </h2>

        {/* Positive Prompt */}
        <div className="mb-6">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span className="font-semibold text-sm">Positive Prompt</span>
            <CopyButton text={finalPrompt} label="Copy" />
          </div>
          <div className="prompt-box" style={{ minHeight: '80px' }}>
            <code>{finalPrompt || 'Your prompt will appear here...'}</code>
          </div>
        </div>

        {/* Negative Prompt */}
        <div className="mb-6">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span className="font-semibold text-sm">Negative Prompt ({preset.shortName})</span>
            <CopyButton text={preset.negativePrompt} label="Copy" />
          </div>
          <div className="prompt-box">
            <code className="text-[var(--text-muted)]">{preset.negativePrompt}</code>
          </div>
        </div>

        {/* Settings */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          padding: '1rem',
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          marginBottom: '1.5rem'
        }}>
          <div className="text-center">
            <div className="text-xs text-[var(--text-muted)] mb-1">CFG</div>
            <div className="font-bold text-[var(--accent-primary)]">{preset.settings.cfg}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-[var(--text-muted)] mb-1">CLIP Skip</div>
            <div className="font-bold text-[var(--accent-primary)]">{preset.settings.clipSkip}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-[var(--text-muted)] mb-1">Sampler</div>
            <div className="font-bold text-[var(--accent-primary)] text-xs">{preset.settings.sampler}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-[var(--text-muted)] mb-1">Steps</div>
            <div className="font-bold text-[var(--accent-primary)]">{preset.settings.steps}</div>
          </div>
        </div>

        {/* Copy Both */}
        <CopyButton
          text={`Prompt:\n${finalPrompt}\n\nNegative Prompt:\n${preset.negativePrompt}`}
          label="Copy Both Prompts"
          className="btn-primary w-full justify-center"
        />
      </div>
    </div>
  );
}

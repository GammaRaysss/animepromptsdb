'use client';

import { useState } from 'react';
import { MODEL_PRESETS, generateModelPrompt, getModelNegativePrompt } from '@/data/modelPresets';
import CopyButton from './CopyButton';

interface ModelPromptGeneratorProps {
  characterName: string;
  basePrompt: string;
  baseNegative: string;
}

export default function ModelPromptGenerator({
  characterName,
  basePrompt,
  baseNegative
}: ModelPromptGeneratorProps) {
  const [selectedModel, setSelectedModel] = useState('noobai');

  const preset = MODEL_PRESETS[selectedModel];
  const optimizedPrompt = generateModelPrompt(basePrompt, selectedModel);
  const optimizedNegative = getModelNegativePrompt(selectedModel, baseNegative);

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </span>
        Model-Optimized Prompts
      </h2>

      {/* Model Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(MODEL_PRESETS).map(([id, model]) => (
          <button
            key={id}
            onClick={() => setSelectedModel(id)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 500,
              border: '1px solid',
              borderColor: selectedModel === id ? 'var(--accent-primary)' : 'var(--border)',
              background: selectedModel === id
                ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                : 'var(--bg-card)',
              color: selectedModel === id ? 'white' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {model.shortName}
          </button>
        ))}
      </div>

      {/* Selected Model Info */}
      <div className="card p-4 mb-6" style={{ borderColor: 'var(--accent-primary)', borderWidth: '1px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h3 className="font-semibold text-lg">{preset.name}</h3>
          <span className="tag" style={{ background: 'var(--accent-primary)', color: 'white', border: 'none' }}>
            Selected
          </span>
        </div>
        <p className="text-[var(--text-muted)] text-sm mb-4">{preset.description}</p>

        {/* Recommended Settings */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          <div className="text-center p-2 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
            <div className="text-xs text-[var(--text-muted)] mb-1">CFG</div>
            <div className="font-semibold text-[var(--accent-primary)]">{preset.settings.cfg}</div>
          </div>
          <div className="text-center p-2 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
            <div className="text-xs text-[var(--text-muted)] mb-1">CLIP Skip</div>
            <div className="font-semibold text-[var(--accent-primary)]">{preset.settings.clipSkip}</div>
          </div>
          <div className="text-center p-2 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
            <div className="text-xs text-[var(--text-muted)] mb-1">Sampler</div>
            <div className="font-semibold text-[var(--accent-primary)] text-xs">{preset.settings.sampler}</div>
          </div>
          <div className="text-center p-2 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
            <div className="text-xs text-[var(--text-muted)] mb-1">Steps</div>
            <div className="font-semibold text-[var(--accent-primary)]">{preset.settings.steps}</div>
          </div>
        </div>
      </div>

      {/* Optimized Prompt */}
      <div className="mb-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-[var(--accent-primary)]">+</span>
            Optimized Prompt for {preset.shortName}
          </h3>
          <CopyButton text={optimizedPrompt} label="Copy" />
        </div>
        <div className="prompt-box">
          <code>
            {/* Highlight quality tags */}
            <span style={{ color: 'var(--accent-primary)' }}>
              {preset.qualityTags.join(', ')}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>, </span>
            <span style={{ color: 'var(--text-secondary)' }}>
              {optimizedPrompt.split(', ').slice(preset.qualityTags.length).join(', ')}
            </span>
          </code>
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-2">
          <span style={{ color: 'var(--accent-primary)' }}>Pink tags</span> are model-specific quality boosters
        </p>
      </div>

      {/* Optimized Negative */}
      <div className="mb-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h3 className="font-semibold flex items-center gap-2">
            <span style={{ color: '#ef4444' }}>-</span>
            Optimized Negative for {preset.shortName}
          </h3>
          <CopyButton text={optimizedNegative} label="Copy" />
        </div>
        <div className="prompt-box">
          <code style={{ color: 'var(--text-muted)' }}>{optimizedNegative}</code>
        </div>
      </div>

      {/* Copy Both */}
      <div className="card p-5" style={{
        background: 'linear-gradient(135deg, rgba(244,114,182,0.1), rgba(192,132,252,0.1))',
        borderColor: 'rgba(244,114,182,0.3)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 className="font-bold">Ready for {preset.shortName}?</h3>
              <p className="text-sm text-[var(--text-muted)]">Copy both optimized prompts</p>
            </div>
            <CopyButton
              text={`Prompt:\n${optimizedPrompt}\n\nNegative:\n${optimizedNegative}`}
              label="Copy Both"
              className="animate-pulse-glow"
            />
          </div>

          {/* Quick tips */}
          <div className="text-xs text-[var(--text-muted)] pt-3" style={{ borderTop: '1px solid var(--border)' }}>
            <strong>Quick Settings:</strong> CFG {preset.settings.cfg} | CLIP Skip {preset.settings.clipSkip} | {preset.settings.sampler} | {preset.settings.steps} steps
          </div>
        </div>
      </div>
    </section>
  );
}

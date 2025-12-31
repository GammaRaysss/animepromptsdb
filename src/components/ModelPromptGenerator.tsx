'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MODEL_PRESETS, generateModelPrompt, getModelNegativePrompt } from '@/data/modelPresets';
import { SHOT_TYPES, SHOT_TYPE_ORDER } from '@/data/shotTypes';
import { getBodyDescriptors } from '@/data/characters';
import CopyButton from './CopyButton';

interface ModelPromptGeneratorProps {
  characterName: string;
  characterSlug: string;
  basePrompt: string;
  baseNegative: string;
}

export default function ModelPromptGenerator({
  characterName,
  characterSlug,
  basePrompt,
  baseNegative
}: ModelPromptGeneratorProps) {
  const [selectedModel, setSelectedModel] = useState('noobai');
  const [selectedShot, setSelectedShot] = useState('portrait');
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const preset = MODEL_PRESETS[selectedModel];
  const shotType = SHOT_TYPES[selectedShot];
  const bodyDescriptors = getBodyDescriptors(characterSlug);

  // Get body descriptors based on shot type
  const getBodyTagsForShot = () => {
    switch (selectedShot) {
      case 'portrait':
        return bodyDescriptors.portrait;
      case 'upper_body':
        return bodyDescriptors.upperBody;
      case 'full_body':
        return bodyDescriptors.fullBody;
      default:
        return bodyDescriptors.portrait;
    }
  };

  const bodyTags = getBodyTagsForShot();
  const shotTags = shotType.tags;
  const allShotTags = [...shotTags, ...bodyTags];
  const shotTagsString = allShotTags.join(', ');

  // Build the prompt with shot type tags and body descriptors
  const promptWithShot = `${basePrompt}, ${shotTagsString}`;
  const optimizedPrompt = generateModelPrompt(promptWithShot, selectedModel);
  const optimizedNegative = getModelNegativePrompt(selectedModel, baseNegative);

  return (
    <section className="mb-10">
      {/* Model Selection */}
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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
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
      <div className="card p-4 mb-8" style={{ borderColor: 'var(--accent-primary)', borderWidth: '1px' }}>
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

      {/* Shot Type Section */}
      <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-sm">
          📷
        </span>
        Shot Type
      </h2>

      <div className="card p-6 mb-8">
        {/* Shot Type Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1rem',
          }}
        >
          {SHOT_TYPE_ORDER.map((shotId) => {
            const shot = SHOT_TYPES[shotId];
            const isActive = selectedShot === shotId;
            return (
              <button
                key={shotId}
                onClick={() => setSelectedShot(shotId)}
                style={{
                  padding: '0.625rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  border: '2px solid',
                  borderColor: isActive ? 'var(--accent-secondary)' : 'var(--border)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(192,132,252,0.15), rgba(139,92,246,0.15))'
                    : 'transparent',
                  color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {shot.shortName}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '180px 1fr',
            gap: '1.5rem',
          }}
        >
          {/* Image Preview */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            {imageError[`${selectedModel}_${selectedShot}`] ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.875rem',
                  textAlign: 'center',
                  padding: '1rem',
                }}
              >
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🖼️</span>
                <span>{shotType.shortName}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Coming Soon</span>
              </div>
            ) : (
              <Image
                src={`/images/characters/${characterSlug}/${characterSlug}_${selectedModel}_${selectedShot}.png`}
                alt={`${characterName} - ${shotType.name}`}
                fill
                style={{ objectFit: 'cover' }}
                onError={() => setImageError((prev) => ({ ...prev, [`${selectedModel}_${selectedShot}`]: true }))}
              />
            )}
          </div>

          {/* Tips Section */}
          <div>
            <p className="text-[var(--text-secondary)] mb-4">{shotType.description}</p>

            {/* Tags to Add */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                Shot Tags
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.5rem' }}>
                {shotType.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      background: 'var(--accent-secondary)',
                      color: 'white',
                      borderColor: 'var(--accent-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 mt-3">
                Body Descriptors
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {bodyTags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      background: 'var(--accent-primary)',
                      color: 'white',
                      borderColor: 'var(--accent-primary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Two Column Tips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* Angle Tips */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Angle Tips
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.25rem' }}>
                  {shotType.angleTips.slice(0, 3).map((tip, i) => (
                    <li key={i} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <code style={{ background: 'var(--bg-secondary)', padding: '0.125rem 0.25rem', borderRadius: '3px', fontSize: '0.6875rem' }}>
                        {tip.split(' - ')[0]}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pose Tips */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Pose Tips
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.25rem' }}>
                  {shotType.poseTips.slice(0, 3).map((tip, i) => (
                    <li key={i} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <code style={{ background: 'var(--bg-secondary)', padding: '0.125rem 0.25rem', borderRadius: '3px', fontSize: '0.6875rem' }}>
                        {tip.split(' - ')[0]}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Prompts Section */}
      <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-sm">
          ✨
        </span>
        Generated Prompts
      </h2>

      {/* Optimized Prompt */}
      <div className="mb-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-[var(--accent-primary)]">+</span>
            {preset.shortName} + {shotType.shortName}
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
              {basePrompt}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>, </span>
            <span style={{ color: 'var(--accent-secondary)' }}>
              {shotTags.join(', ')}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>, </span>
            <span style={{ color: '#f472b6' }}>
              {bodyTags.join(', ')}
            </span>
          </code>
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-2">
          <span style={{ color: 'var(--accent-primary)' }}>Pink</span> = quality |
          <span style={{ color: 'var(--accent-secondary)' }}> Purple</span> = shot |
          <span style={{ color: '#f472b6' }}> Rose</span> = body
        </p>
      </div>

      {/* Optimized Negative */}
      <div className="mb-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h3 className="font-semibold flex items-center gap-2">
            <span style={{ color: '#ef4444' }}>-</span>
            Negative Prompt
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
              <h3 className="font-bold">Ready to Generate?</h3>
              <p className="text-sm text-[var(--text-muted)]">{preset.shortName} • {shotType.shortName} • Copy both prompts</p>
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

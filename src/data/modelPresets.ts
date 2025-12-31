// Model-specific presets for optimal prompt generation
// Based on WaifuForge research for Illustrious, NoobAI, Pony, etc.

export interface ModelPreset {
  id: string;
  name: string;
  shortName: string;
  qualityTags: string[];
  negativePrompt: string;
  settings: {
    clipSkip: number;
    cfg: number;
    sampler: string;
    steps: string;
  };
  description: string;
}

export const MODEL_PRESETS: Record<string, ModelPreset> = {
  illustrious: {
    id: 'illustrious',
    name: 'Illustrious XL',
    shortName: 'Illustrious',
    qualityTags: ['masterpiece', 'best quality', 'absurdres', 'very aesthetic', 'newest'],
    negativePrompt: 'lowres, (bad), text, error, fewer, extra, missing, worst quality, jpeg artifacts, low quality, watermark, unfinished, displeasing, oldest, early, chromatic aberration, signature, extra digits, artistic error, username, scan, abstract',
    settings: {
      clipSkip: 2,
      cfg: 6,
      sampler: 'Euler a',
      steps: '25-30'
    },
    description: 'Best for high-quality anime art with vivid colors and sharp details'
  },
  noobai: {
    id: 'noobai',
    name: 'NoobAI XL',
    shortName: 'NoobAI',
    qualityTags: ['masterpiece', 'best quality', 'absurdres', 'highres', 'very aesthetic'],
    negativePrompt: 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, bad proportions, bad feet',
    settings: {
      clipSkip: 2,
      cfg: 5,
      sampler: 'DPM++ 2M Karras',
      steps: '20-28'
    },
    description: 'Excellent anatomy and character accuracy, great for detailed illustrations'
  },
  pony: {
    id: 'pony',
    name: 'Pony Diffusion V6',
    shortName: 'Pony',
    qualityTags: ['score_9', 'score_8_up', 'score_7_up', 'source_anime'],
    negativePrompt: 'score_6, score_5, score_4, source_pony, source_furry, low quality, worst quality, bad anatomy, bad hands, deformed, ugly, blurry',
    settings: {
      clipSkip: 2,
      cfg: 7,
      sampler: 'Euler a',
      steps: '25-35'
    },
    description: 'Uses score-based quality tags, versatile for many styles'
  },
  animagine: {
    id: 'animagine',
    name: 'Animagine XL 3.1',
    shortName: 'Animagine',
    qualityTags: ['masterpiece', 'best quality', 'very aesthetic', 'absurdres'],
    negativePrompt: 'lowres, (bad), text, error, fewer, extra, missing, worst quality, jpeg artifacts, low quality, watermark, unfinished, displeasing, oldest, early, chromatic aberration, signature, extra digits, artistic error, username, scan, abstract, bad anatomy, bad hands',
    settings: {
      clipSkip: 2,
      cfg: 7,
      sampler: 'Euler a',
      steps: '25-30'
    },
    description: 'Great general-purpose anime model with consistent style'
  },
  wai: {
    id: 'wai',
    name: 'WAI-NSFW-illustrious',
    shortName: 'WAI',
    qualityTags: ['masterpiece', 'best quality', 'absurdres', 'highres'],
    negativePrompt: 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, bad proportions, bad feet',
    settings: {
      clipSkip: 2,
      cfg: 5,
      sampler: 'DPM++ 2M SDE Karras',
      steps: '20-28'
    },
    description: 'Based on Illustrious with enhanced NSFW capabilities'
  }
};

// Tag ordering priority for optimal prompt structure
export const TAG_ORDER_PRIORITY: Record<string, { priority: number; keywords: string[] }> = {
  quality: {
    priority: 1,
    keywords: ['masterpiece', 'best quality', 'absurdres', 'highres', 'ultra-detailed', 'very aesthetic', 'newest', 'score_']
  },
  rating: {
    priority: 2,
    keywords: ['safe', 'sensitive', 'nsfw', 'explicit', 'rating:']
  },
  subject: {
    priority: 3,
    keywords: ['1girl', '2girls', '3girls', '1boy', '2boys', 'solo', 'multiple girls', 'couple']
  },
  character: {
    priority: 4,
    keywords: ['\\(', 'original', 'oc']
  },
  face: {
    priority: 5,
    keywords: ['looking at viewer', 'smile', 'blush', 'open mouth', 'closed eyes', 'wink', 'tongue', 'expression', 'ahegao']
  },
  hair: {
    priority: 6,
    keywords: ['hair', 'bangs', 'twintails', 'ponytail', 'braid', 'bun']
  },
  eyes: {
    priority: 7,
    keywords: ['eyes', 'pupils', 'heterochromia']
  },
  body: {
    priority: 8,
    keywords: ['breasts', 'chest', 'petite', 'curvy', 'slim', 'muscular', 'tall', 'short', 'thicc', 'abs', 'navel', 'hips', 'thighs', 'ass']
  },
  skin: {
    priority: 9,
    keywords: ['skin', 'tan', 'pale', 'dark-skinned']
  },
  clothing: {
    priority: 10,
    keywords: ['dress', 'shirt', 'blouse', 'jacket', 'uniform', 'bikini', 'bra', 'lingerie', 'skirt', 'pants', 'shorts', 'panties', 'stockings', 'nude', 'naked', 'topless']
  },
  pose: {
    priority: 11,
    keywords: ['standing', 'sitting', 'lying', 'kneeling', 'walking', 'pose', 'arms', 'hands', 'legs', 'from behind', 'from above', 'from below', 'pov']
  },
  background: {
    priority: 12,
    keywords: ['background', 'indoor', 'outdoor', 'bedroom', 'beach', 'forest', 'city', 'night', 'day']
  },
  lighting: {
    priority: 13,
    keywords: ['lighting', 'light', 'shadow', 'sunlight', 'rim light']
  },
  camera: {
    priority: 14,
    keywords: ['close-up', 'portrait', 'full body', 'upper body', 'cowboy shot', 'wide shot', 'depth of field', 'bokeh']
  },
  style: {
    priority: 15,
    keywords: ['anime', 'realistic', 'illustration', 'painting', 'sketch', 'cinematic']
  },
};

// Helper function to get tag priority
export function getTagPriority(tag: string): number {
  const lowerTag = tag.toLowerCase();
  for (const [, data] of Object.entries(TAG_ORDER_PRIORITY)) {
    if (data.keywords.some(keyword => lowerTag.includes(keyword))) {
      return data.priority;
    }
  }
  return 8; // Default to body/middle priority
}

// Helper function to optimize/order tags
export function optimizeTagOrder(tags: string[]): string[] {
  return [...tags].sort((a, b) => getTagPriority(a) - getTagPriority(b));
}

// Generate model-specific prompt from character base prompt
export function generateModelPrompt(basePrompt: string, modelId: string): string {
  const preset = MODEL_PRESETS[modelId];
  if (!preset) return basePrompt;

  // Extract character tags (everything except quality tags at the end)
  const baseTags = basePrompt.split(',').map(t => t.trim());

  // Remove existing quality tags that might conflict
  const qualityKeywords = ['masterpiece', 'best quality', 'absurdres', 'highres', 'very aesthetic', 'newest', 'score_', 'amazing quality'];
  const characterTags = baseTags.filter(tag =>
    !qualityKeywords.some(q => tag.toLowerCase().includes(q))
  );

  // Combine: quality tags first, then character-specific tags
  const finalTags = [...preset.qualityTags, ...characterTags];

  return finalTags.join(', ');
}

// Get negative prompt for a model
export function getModelNegativePrompt(modelId: string, customNegative?: string): string {
  const preset = MODEL_PRESETS[modelId];
  if (!preset) return customNegative || '';

  // If custom negative has specific character exclusions, append them
  if (customNegative) {
    const baseNegative = preset.negativePrompt;
    // Extract custom parts that aren't in the preset
    const customParts = customNegative.split(',').map(t => t.trim())
      .filter(t => !baseNegative.toLowerCase().includes(t.toLowerCase()));

    if (customParts.length > 0) {
      return `${baseNegative}, ${customParts.join(', ')}`;
    }
  }

  return preset.negativePrompt;
}

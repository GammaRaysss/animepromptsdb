// Shot type presets for different framing options

export interface ShotTypePreset {
  id: string;
  name: string;
  shortName: string;
  description: string;
  tags: string[];  // Tags to add for this shot type
  angleTips: string[];  // Tips for different angles
  poseTips: string[];  // Tips for poses that work well
  imageFile: string;  // Filename for the shot type image
}

export const SHOT_TYPES: Record<string, ShotTypePreset> = {
  portrait: {
    id: 'portrait',
    name: 'Portrait / Face',
    shortName: 'Portrait',
    description: 'Close-up focusing on face and expressions',
    tags: ['portrait', 'close-up', 'face focus', 'detailed face', 'detailed eyes'],
    angleTips: [
      'from side - Profile view for dramatic effect',
      'from above - Cute, submissive look',
      'from below - Powerful, intimidating presence',
      'straight-on - Direct eye contact with viewer',
      'three-quarter view - Classic portrait angle',
    ],
    poseTips: [
      'looking at viewer - Direct engagement',
      'looking away - Mysterious, contemplative',
      'eyes closed - Peaceful, serene',
      'head tilt - Playful, curious',
      'chin rest - Thoughtful pose',
    ],
    imageFile: 'portrait.png',
  },
  upper_body: {
    id: 'upper_body',
    name: 'Upper Body',
    shortName: 'Upper Body',
    description: 'Chest up, showing outfit details and gestures',
    tags: ['upper body', 'cowboy shot', 'breasts', 'cleavage', 'navel', 'midriff'],
    angleTips: [
      'from side - Show outfit silhouette',
      'from above - Emphasizes face while showing body',
      'from behind - Back view with head turn',
      'dutch angle - Dynamic, energetic framing',
      'straight-on - Standard pose display',
    ],
    poseTips: [
      'arms crossed - Confident, assertive',
      'hand on hip - Sassy, confident',
      'hands behind head - Relaxed, casual',
      'peace sign - Cheerful, playful',
      'hand on chest - Emotional, sincere',
      'reaching out - Inviting, dynamic',
    ],
    imageFile: 'upper-body.png',
  },
  full_body: {
    id: 'full_body',
    name: 'Full Body',
    shortName: 'Full Body',
    description: 'Complete figure showing full outfit and pose',
    tags: ['full body', 'standing', 'breasts', 'wide hips', 'thick thighs', 'ass', 'legs', 'feet'],
    angleTips: [
      'from above - Bird\'s eye view for creative compositions',
      'from below - Heroic, imposing perspective',
      'from side - Full silhouette display',
      'from behind - Shows back details, hair',
      'wide shot - Environmental context',
    ],
    poseTips: [
      'standing - Classic pose',
      'walking - Dynamic movement',
      'sitting - Relaxed, casual',
      'kneeling - Submissive or action pose',
      'jumping - Energetic, playful',
      'leaning - Against wall or object',
      'contrapposto - Classic art pose with weight shift',
      'hands on hips - Confident stance',
    ],
    imageFile: 'full-body.png',
  },
};

export const SHOT_TYPE_ORDER = ['portrait', 'upper_body', 'full_body'];

// Helper to get shot type by ID
export function getShotType(id: string): ShotTypePreset | undefined {
  return SHOT_TYPES[id];
}

// Helper to build prompt with shot type tags
export function addShotTypeTags(basePrompt: string, shotTypeId: string): string {
  const shotType = SHOT_TYPES[shotTypeId];
  if (!shotType) return basePrompt;

  // Add shot type tags after the character/subject tags but before background
  const shotTags = shotType.tags.join(', ');
  return `${basePrompt}, ${shotTags}`;
}

#!/bin/bash

# Creates all character image folders
# Run from project root: bash scripts/create-image-folders.sh

CHARS_DIR="public/images/characters"

# Extract all slugs from characters.ts and create folders
grep -o 'slug: "[^"]*"' src/data/characters.ts | cut -d'"' -f2 | while read slug; do
  mkdir -p "$CHARS_DIR/$slug"
  echo "Created: $CHARS_DIR/$slug/"
done

echo ""
echo "✅ Created $(ls -d $CHARS_DIR/*/ 2>/dev/null | wc -l) character folders"
echo ""
echo "Now add images to each folder:"
echo "  - noobai.webp"
echo "  - illustrious.webp"
echo "  - pony.webp"

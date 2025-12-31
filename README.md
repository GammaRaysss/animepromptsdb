# AnimePromptsDB - Anime Character AI Art Prompts Database

Your domain: **animepromptsdb.com**

A static site for optimized Stable Diffusion prompts for anime characters. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Quick Deploy to Vercel

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Click "Deploy" - Vercel auto-detects Next.js settings
5. Add your domain: Project Settings → Domains → Add `animepromptsdb.com`
6. Update Namecheap DNS to point to Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [slug]/            # Dynamic character pages (/makima, /rem, etc.)
│   ├── anime/             # Browse by anime
│   │   └── [slug]/       # Anime detail pages
│   ├── tags/              # Browse by tags
│   │   └── [tag]/        # Tag detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── CharacterCard.tsx
│   ├── CopyButton.tsx
│   └── Search.tsx
└── data/
    └── characters.ts      # CHARACTER DATABASE - Add characters here!
```

## ➕ Adding New Characters

Edit `src/data/characters.ts` and add to the `characters` array:

```typescript
{
  slug: "your-character",           // URL-friendly name (becomes the URL)
  name: "Character Name",           // Display name
  anime: "Anime Title",             // Full anime name
  animeSlug: "anime-slug",          // URL-friendly anime name
  tags: ["waifu", "tag1", "tag2"],  // Searchable tags
  prompt: "your optimized prompt here...",
  negativePrompt: "worst quality, low quality, bad anatomy...",
  recommendedModels: ["NoobAI-XL", "Illustrious-XL"],
  recommendedLoras: ["Character LoRA"],
  tips: "Tips for generating this character...",
  seo: {
    title: "Character Name AI Art Prompt - Anime | AnimePromptsDB",
    description: "SEO description for Google..."
  }
}
```

Then rebuild: `npm run build`

## 🛠 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (creates /out folder)
npm run build

# Preview production build
npx serve out
```

## 🌐 Domain Setup (Namecheap → Vercel)

1. In Vercel: Project Settings → Domains → Add `animepromptsdb.com`
2. Vercel will show you the required DNS records
3. In Namecheap: Domain List → Manage → Advanced DNS
4. Add the records Vercel shows (usually A record + CNAME for www)
5. Wait 5-10 minutes for DNS propagation

## 💰 Monetization Setup

### Google AdSense
1. Apply at [adsense.google.com](https://adsense.google.com) (need ~10-20 pages first)
2. Add the AdSense script to `src/app/layout.tsx` in the `<head>`
3. Create ad units in AdSense dashboard
4. Add ad components between content sections

### Affiliate Links
- CivitAI affiliate program (link to LoRAs)
- RunPod/Vast.ai referrals (GPU rental)

## 📈 SEO Strategy

1. **Each character page targets searches like:**
   - "makima stable diffusion prompt"
   - "zero two AI art prompt"
   - "[character name] prompt"

2. **After deploying:**
   - Submit sitemap to Google Search Console
   - Add site to Bing Webmaster Tools

3. **Content growth:**
   - Add 5-10 new characters per week
   - Each new page = new SEO opportunity
   - Focus on popular + trending anime characters

4. **Backlinks:**
   - Post on r/StableDiffusion when launching
   - Share individual character pages on anime subreddits
   - Create tutorials linking back to your site

## 🔧 Customization

### Change colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent-pink: #ff6b9d;
  --accent-purple: #a855f7;
  /* etc. */
}
```

### Change fonts
Edit the Google Fonts import in `globals.css` and update `font-family` in body.

## 📊 Expected Results

**Month 1-3:**
- 50-100 character pages
- 1,000-5,000 monthly visitors
- $5-50/month (if monetized)

**Month 6:**
- 200+ character pages
- 10,000-50,000 monthly visitors
- $100-500/month

**Year 1+:**
- 500+ character pages
- 50,000-200,000 monthly visitors
- $500-2,000/month

## 🎯 Character Ideas to Add

High-demand characters to prioritize:
- Frieren, Fern (Frieren)
- Oshi no Ko characters
- Jujutsu Kaisen characters
- Blue Lock characters
- Bocchi the Rock characters
- Cyberpunk Edgerunners characters
- Demon Slayer (more characters)
- One Piece waifus
- Genshin Impact characters
- Hololive VTubers

## License

MIT - Do whatever you want with this code!

---

Built with Claude AI assistance 🎨

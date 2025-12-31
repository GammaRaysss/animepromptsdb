# Image Generation Checklist

## File Naming Convention
Each character folder needs the following files:

### Model-Specific Images (Original)
- `noobai.webp` - Generated with NoobAI-XL
- `illustrious.webp` - Generated with Illustrious-XL
- `pony.webp` - Generated with Pony Diffusion V6

### Shot Type Images (New)
- `portrait.webp` - Close-up face/portrait shot
- `upper-body.webp` - Cowboy shot / upper body
- `full-body.webp` - Full body standing shot

## Generation Settings (Recommended)

### General
- Resolution: 1024x1024
- Steps: 25-30
- CFG: 7
- Sampler: DPM++ 2M Karras

### Shot Type Specific Tags
**Portrait:**
- Add: `portrait, close-up, face focus, head shot`
- Best for: expressions, eye details, hair details

**Upper Body:**
- Add: `upper body, cowboy shot`
- Best for: outfit details, gestures, accessories

**Full Body:**
- Add: `full body, standing`
- Best for: complete outfit, pose, environment

## Priority Characters (Top Traffic)

### Tier 1 - Do First (60% of traffic)
- [ ] makima
- [ ] zero-two
- [ ] rem
- [ ] marin-kitagawa
- [ ] yor-forger
- [ ] power
- [ ] 2b
- [ ] raiden-shogun
- [ ] hu-tao
- [ ] ganyu

### Tier 2 - High Priority
- [ ] hatsune-miku
- [ ] nezuko-kamado
- [ ] mai-sakurajima
- [ ] rias-gremory
- [ ] asuna-yuuki
- [ ] mikasa-ackerman
- [ ] albedo
- [ ] emilia
- [ ] aqua
- [ ] toga-himiko

### Tier 3 - Medium Priority
- [ ] hinata-hyuga
- [ ] nico-robin
- [ ] shalltear-bloodfallen
- [ ] eula-lawrence
- [ ] keqing
- [ ] yae-miko
- [ ] mona
- [ ] ram
- [ ] echidna
- [ ] frieren

### All Other Characters
- [ ] ai-hoshino
- [ ] akame
- [ ] alice-zuberg
- [ ] android-18
- [ ] anya-forger
- [ ] asuka-langley
- [ ] bocchi
- [ ] bulma
- [ ] cc
- [ ] chizuru-mizuhara
- [ ] cynthia-pokemon
- [ ] darkness
- [ ] elma
- [ ] erza-scarlet
- [ ] esdeath
- [ ] fern
- [ ] fubuki
- [ ] ikuyo-kita
- [ ] ilulu
- [ ] ishtar
- [ ] jeanne-darc
- [ ] jibril
- [ ] jolyne-cujoh
- [ ] kallen-stadtfeld
- [ ] komi-shouko
- [ ] kurisu-makise
- [ ] kurumi-tokisaki
- [ ] lucoa
- [ ] lucy-cyberpunk
- [ ] lucy-elfen-lied
- [ ] lucy-heartfilia
- [ ] maki-zenin
- [ ] mari-makinami
- [ ] marnie-pokemon
- [ ] megumin
- [ ] mirko
- [ ] misato-katsuragi
- [ ] mitsuri-kanroji
- [ ] momo-yaoyorozu
- [ ] nagatoro
- [ ] nami
- [ ] nessa-pokemon
- [ ] nobara-kugisaki
- [ ] ochaco-uraraka
- [ ] rangiku-matsumoto
- [ ] raphtalia
- [ ] rebecca
- [ ] rei-ayanami
- [ ] rin-tohsaka
- [ ] ryuko-matoi
- [ ] saber
- [ ] sakura-haruno
- [ ] satsuki-kiryuin
- [ ] scathach
- [ ] shinobu-kocho
- [ ] shiro
- [ ] shuten-douji
- [ ] sinon
- [ ] sonia-pokemon
- [ ] tamamo-no-mae
- [ ] tatsumaki
- [ ] tohru
- [ ] tsunade
- [ ] uzaki-hana
- [ ] yamato
- [ ] yoruichi-shihouin
- [ ] yuno-gasai

## Progress Tracker
- Total Characters: 97
- Images per character: 6 (3 model + 3 shot type)
- Total Images Needed: 582
- Estimated Time: 15-20 hours

## Folder Structure Example
```
public/images/characters/
├── makima/
│   ├── noobai.webp
│   ├── illustrious.webp
│   ├── pony.webp
│   ├── portrait.webp
│   ├── upper-body.webp
│   └── full-body.webp
├── zero-two/
│   └── ...
```

## WebP Conversion Commands

Using ImageMagick:
```bash
convert input.png -quality 85 -resize 1024x1024 output.webp
```

Batch convert folder:
```bash
for f in *.png; do convert "$f" -quality 85 "${f%.png}.webp"; done
```

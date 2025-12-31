export interface BodyDescriptors {
  portrait: string[];  // Face/head focused tags
  upperBody: string[]; // Chest, torso, arms
  fullBody: string[];  // Full figure including hips, thighs, legs
}

// Body type presets for common archetypes
export const BODY_PRESETS: Record<string, BodyDescriptors> = {
  // Standard female - medium proportions
  standard: {
    portrait: ["detailed face", "detailed eyes", "parted lips"],
    upperBody: ["medium breasts", "slim waist", "navel"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "long legs"]
  },
  // Petite/small build
  petite: {
    portrait: ["detailed face", "detailed eyes", "cute"],
    upperBody: ["small breasts", "flat chest", "slim", "petite"],
    fullBody: ["small breasts", "petite", "slim hips", "slender legs"]
  },
  // Shortstack - short but curvy
  shortstack: {
    portrait: ["detailed face", "detailed eyes"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "short"]
  },
  // Busty/curvy
  curvy: {
    portrait: ["detailed face", "detailed eyes", "full lips"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "curvy", "plump"]
  },
  // Athletic/toned
  athletic: {
    portrait: ["detailed face", "detailed eyes", "sharp features"],
    upperBody: ["medium breasts", "toned", "abs", "slim waist"],
    fullBody: ["medium breasts", "abs", "toned", "athletic", "muscular thighs", "long legs"]
  },
  // Muscular female
  muscular: {
    portrait: ["detailed face", "detailed eyes", "sharp features"],
    upperBody: ["medium breasts", "abs", "muscular", "toned arms"],
    fullBody: ["medium breasts", "abs", "muscular", "muscular thighs", "athletic"]
  },
  // Tall and elegant
  tall: {
    portrait: ["detailed face", "detailed eyes", "elegant"],
    upperBody: ["medium breasts", "slim waist", "elegant"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "long legs", "tall female"]
  },
  // Mature/milf
  mature: {
    portrait: ["detailed face", "detailed eyes", "mature female", "full lips"],
    upperBody: ["large breasts", "cleavage", "slim waist", "mature female"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "mature female"]
  },
  // Child character (no body descriptors)
  child: {
    portrait: ["detailed face", "detailed eyes", "cute"],
    upperBody: ["child", "flat chest"],
    fullBody: ["child", "small"]
  }
};

// Character-specific body descriptor overrides
export const CHARACTER_BODY_OVERRIDES: Record<string, BodyDescriptors> = {
  // Tier S characters with specific body types
  "makima": {
    portrait: ["detailed face", "ringed eyes", "smirk", "red lips"],
    upperBody: ["medium breasts", "white shirt", "black necktie", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "long legs", "black pants"]
  },
  "zero-two": {
    portrait: ["detailed face", "aqua eyes", "red horns", "pink lips", "fangs"],
    upperBody: ["medium breasts", "red bodysuit", "cleavage", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  "rem": {
    portrait: ["detailed face", "blue eyes", "hair over one eye", "cute"],
    upperBody: ["medium breasts", "maid outfit", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "maid outfit"]
  },
  "marin-kitagawa": {
    portrait: ["detailed face", "pink eyes", "gyaru makeup", "smile"],
    upperBody: ["large breasts", "cleavage", "tan", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "tan", "long legs"]
  },
  "yor-forger": {
    portrait: ["detailed face", "red eyes", "elegant", "gentle smile"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  "power": {
    portrait: ["detailed face", "yellow eyes", "fangs", "crazy smile", "red horns"],
    upperBody: ["medium breasts", "slim", "messy"],
    fullBody: ["medium breasts", "slim", "wide hips", "thighs"]
  },
  "2b": {
    portrait: ["detailed face", "blindfold", "mole under mouth", "white hair"],
    upperBody: ["large breasts", "cleavage", "black dress", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "thighhighs", "ass"]
  },
  "asuna-yuuki": {
    portrait: ["detailed face", "brown eyes", "orange hair", "determined"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "long legs", "athletic"]
  },
  "raiden-shogun": {
    portrait: ["detailed face", "purple eyes", "regal", "serious"],
    upperBody: ["large breasts", "cleavage", "kimono", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  "hu-tao": {
    portrait: ["detailed face", "flower-shaped pupils", "playful", "smug"],
    upperBody: ["small breasts", "flat chest", "slim", "petite"],
    fullBody: ["small breasts", "slim", "petite", "slim hips"]
  },
  "ganyu": {
    portrait: ["detailed face", "purple eyes", "horns", "gentle"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  "hatsune-miku": {
    portrait: ["detailed face", "aqua eyes", "twintails"],
    upperBody: ["small breasts", "slim", "detached sleeves"],
    fullBody: ["small breasts", "slim", "thighhighs", "long legs"]
  },
  "nezuko-kamado": {
    portrait: ["detailed face", "pink eyes", "bamboo muzzle", "cute"],
    upperBody: ["medium breasts", "kimono", "slim"],
    fullBody: ["medium breasts", "slim", "kimono", "bare feet"]
  },
  "mai-sakurajima": {
    portrait: ["detailed face", "purple eyes", "elegant", "confident"],
    upperBody: ["large breasts", "bunnysuit", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "pantyhose", "long legs"]
  },
  "rias-gremory": {
    portrait: ["detailed face", "blue eyes", "red hair", "confident"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  "hinata-hyuga": {
    portrait: ["detailed face", "white eyes", "byakugan", "shy", "blush"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs"]
  },
  "nico-robin": {
    portrait: ["detailed face", "blue eyes", "elegant", "mysterious smile"],
    upperBody: ["large breasts", "cleavage", "slim waist", "mature female"],
    fullBody: ["large breasts", "slim waist", "wide hips", "long legs", "tall female"]
  },
  "toga-himiko": {
    portrait: ["detailed face", "yellow eyes", "fangs", "crazy smile", "blush"],
    upperBody: ["medium breasts", "slim"],
    fullBody: ["medium breasts", "slim", "athletic", "thighs"]
  },
  "mikasa-ackerman": {
    portrait: ["detailed face", "grey eyes", "short hair", "serious"],
    upperBody: ["medium breasts", "abs", "muscular", "toned"],
    fullBody: ["medium breasts", "abs", "muscular", "athletic", "muscular thighs"]
  },
  "aqua": {
    portrait: ["detailed face", "blue eyes", "crying", "dramatic"],
    upperBody: ["medium breasts", "cleavage", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  // Tier A
  "albedo": {
    portrait: ["detailed face", "yellow eyes", "horns", "elegant"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "hip wings"]
  },
  "shalltear-bloodfallen": {
    portrait: ["detailed face", "red eyes", "pale skin", "gothic"],
    upperBody: ["flat chest", "small breasts", "petite", "pale skin"],
    fullBody: ["flat chest", "petite", "slim hips", "gothic lolita"]
  },
  "eula-lawrence": {
    portrait: ["detailed face", "yellow eyes", "elegant", "tsundere"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs", "ass"]
  },
  "keqing": {
    portrait: ["detailed face", "purple eyes", "twintails", "elegant"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "long legs"]
  },
  "yae-miko": {
    portrait: ["detailed face", "purple eyes", "fox ears", "teasing", "smug"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs"]
  },
  "mona": {
    portrait: ["detailed face", "blue eyes", "witch hat", "proud"],
    upperBody: ["medium breasts", "leotard", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thick thighs", "ass", "leotard"]
  },
  "ram": {
    portrait: ["detailed face", "red eyes", "pink hair", "smug"],
    upperBody: ["small breasts", "flat chest", "maid outfit", "slim"],
    fullBody: ["small breasts", "slim", "petite", "maid outfit"]
  },
  "emilia": {
    portrait: ["detailed face", "purple eyes", "silver hair", "innocent"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "long legs"]
  },
  "echidna": {
    portrait: ["detailed face", "black sclera", "white pupils", "mysterious smile"],
    upperBody: ["medium breasts", "black dress", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs"]
  },
  "chizuru-mizuhara": {
    portrait: ["detailed face", "brown eyes", "beautiful", "blushing"],
    upperBody: ["medium breasts", "cleavage", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "long legs"]
  },
  "ai-hoshino": {
    portrait: ["detailed face", "star-shaped pupils", "idol", "wink"],
    upperBody: ["medium breasts", "idol outfit", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "long legs"]
  },
  "anya-forger": BODY_PRESETS.child,
  "frieren": {
    portrait: ["detailed face", "green eyes", "elf ears", "expressionless"],
    upperBody: ["small breasts", "flat chest", "petite", "slim"],
    fullBody: ["small breasts", "petite", "slim", "elf"]
  },
  "fern": {
    portrait: ["detailed face", "purple eyes", "serious"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs"]
  },
  "nami": {
    portrait: ["detailed face", "brown eyes", "orange hair", "confident"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "slim waist", "bikini top"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  "yamato": {
    portrait: ["detailed face", "orange eyes", "horns", "confident"],
    upperBody: ["large breasts", "sarashi", "abs", "muscular"],
    fullBody: ["large breasts", "abs", "muscular", "wide hips", "thick thighs", "tall female"]
  },
  "tsunade": {
    portrait: ["detailed face", "brown eyes", "forehead mark", "mature female"],
    upperBody: ["huge breasts", "massive breasts", "cleavage", "slim waist", "mature female"],
    fullBody: ["huge breasts", "slim waist", "wide hips", "thick thighs", "mature female"]
  },
  "sakura-haruno": {
    portrait: ["detailed face", "green eyes", "pink hair", "determined"],
    upperBody: ["small breasts", "athletic", "slim"],
    fullBody: ["small breasts", "athletic", "slim", "toned"]
  },
  "android-18": {
    portrait: ["detailed face", "blue eyes", "blonde hair", "cool"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "athletic"]
  },
  "bulma": {
    portrait: ["detailed face", "blue eyes", "blue hair", "confident"],
    upperBody: ["medium breasts", "cleavage", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs"]
  },
  "lucy-heartfilia": {
    portrait: ["detailed face", "brown eyes", "blonde hair"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs"]
  },
  "erza-scarlet": {
    portrait: ["detailed face", "brown eyes", "red hair", "fierce"],
    upperBody: ["large breasts", "cleavage", "armor", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "athletic"]
  },
  "megumin": {
    portrait: ["detailed face", "red eyes", "eyepatch", "chuunibyou"],
    upperBody: ["flat chest", "small breasts", "petite"],
    fullBody: ["flat chest", "petite", "slim", "small"]
  },
  "darkness": {
    portrait: ["detailed face", "blue eyes", "blonde hair", "blush"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "armor"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "armor"]
  },
  "tatsumaki": {
    portrait: ["detailed face", "green eyes", "green hair", "arrogant"],
    upperBody: ["small breasts", "flat chest", "petite"],
    fullBody: ["small breasts", "petite", "slim hips", "short", "floating"]
  },
  "fubuki": {
    portrait: ["detailed face", "green eyes", "green hair", "elegant"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "fur coat"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "curvy"]
  },
  "yoruichi-shihouin": {
    portrait: ["detailed face", "yellow eyes", "dark skin", "confident"],
    upperBody: ["large breasts", "cleavage", "dark skin", "athletic"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "dark skin", "athletic"]
  },
  "rangiku-matsumoto": {
    portrait: ["detailed face", "blue eyes", "blonde hair", "playful"],
    upperBody: ["huge breasts", "massive breasts", "cleavage", "slim waist"],
    fullBody: ["huge breasts", "slim waist", "wide hips", "thick thighs", "curvy"]
  },
  "ochaco-uraraka": {
    portrait: ["detailed face", "brown eyes", "rosy cheeks", "cheerful"],
    upperBody: ["medium breasts", "slim waist", "athletic"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thick thighs", "athletic"]
  },
  "momo-yaoyorozu": {
    portrait: ["detailed face", "dark eyes", "ponytail", "elegant"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "tall female", "long legs"]
  },
  "mirko": {
    portrait: ["detailed face", "red eyes", "rabbit ears", "dark skin", "fierce"],
    upperBody: ["medium breasts", "abs", "muscular", "dark skin"],
    fullBody: ["medium breasts", "abs", "muscular", "dark skin", "muscular thighs", "athletic"]
  },
  "shinobu-kocho": {
    portrait: ["detailed face", "purple eyes", "butterfly hair ornament", "smile"],
    upperBody: ["small breasts", "petite", "slim"],
    fullBody: ["small breasts", "petite", "slim", "short"]
  },
  "mitsuri-kanroji": {
    portrait: ["detailed face", "green eyes", "pink hair", "cheerful", "blush"],
    upperBody: ["large breasts", "cleavage", "muscular", "slim waist"],
    fullBody: ["large breasts", "muscular", "slim waist", "wide hips", "thick thighs"]
  },
  "nobara-kugisaki": {
    portrait: ["detailed face", "brown eyes", "orange hair", "fierce"],
    upperBody: ["medium breasts", "slim waist", "athletic"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "athletic"]
  },
  "maki-zenin": {
    portrait: ["detailed face", "green eyes", "glasses", "serious"],
    upperBody: ["medium breasts", "athletic", "abs", "toned"],
    fullBody: ["medium breasts", "abs", "athletic", "muscular thighs", "toned"]
  },
  "jolyne-cujoh": {
    portrait: ["detailed face", "green eyes", "buns", "confident"],
    upperBody: ["medium breasts", "slim waist", "midriff"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "athletic"]
  },
  "esdeath": {
    portrait: ["detailed face", "blue eyes", "blue hair", "sadistic smile"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "tall female", "long legs"]
  },
  "akame": {
    portrait: ["detailed face", "red eyes", "black hair", "serious"],
    upperBody: ["medium breasts", "slim waist", "athletic"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "athletic", "long legs"]
  },
  "saber": {
    portrait: ["detailed face", "green eyes", "blonde hair", "ahoge", "noble"],
    upperBody: ["small breasts", "armor", "slim waist"],
    fullBody: ["small breasts", "slim waist", "wide hips", "athletic", "armor"]
  },
  "rin-tohsaka": {
    portrait: ["detailed face", "aqua eyes", "twintails", "tsundere"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighhighs", "zettai ryouiki"]
  },
  "ishtar": {
    portrait: ["detailed face", "red eyes", "twintails", "arrogant"],
    upperBody: ["medium breasts", "cleavage", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thick thighs", "floating"]
  },
  "scathach": {
    portrait: ["detailed face", "red eyes", "purple hair", "warrior"],
    upperBody: ["large breasts", "cleavage", "bodysuit", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "bodysuit", "athletic"]
  },
  "jeanne-darc": {
    portrait: ["detailed face", "purple eyes", "blonde braid", "holy"],
    upperBody: ["medium breasts", "armor", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "armor"]
  },
  "tamamo-no-mae": {
    portrait: ["detailed face", "yellow eyes", "fox ears", "playful"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "fox tail"]
  },
  "shuten-douji": {
    portrait: ["detailed face", "purple eyes", "horns", "seductive", "drunk"],
    upperBody: ["small breasts", "flat chest", "petite", "pale skin"],
    fullBody: ["small breasts", "petite", "slim hips", "short"]
  },
  "raphtalia": {
    portrait: ["detailed face", "red eyes", "raccoon ears", "devoted"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "raccoon tail"]
  },
  "nagatoro": {
    portrait: ["detailed face", "dark skin", "tan", "fangs", "teasing"],
    upperBody: ["small breasts", "tan", "athletic", "slim"],
    fullBody: ["small breasts", "tan", "athletic", "slim", "toned"]
  },
  "uzaki-hana": {
    portrait: ["detailed face", "blue eyes", "fang", "smug"],
    upperBody: ["huge breasts", "massive breasts", "cleavage", "shortstack"],
    fullBody: ["huge breasts", "slim waist", "wide hips", "thick thighs", "short", "shortstack"]
  },
  "komi-shouko": {
    portrait: ["detailed face", "purple eyes", "beautiful", "shy"],
    upperBody: ["medium breasts", "slim waist", "elegant"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "long legs", "tall female"]
  },
  "bocchi": {
    portrait: ["detailed face", "blue eyes", "nervous", "anxious"],
    upperBody: ["small breasts", "flat chest", "slim"],
    fullBody: ["small breasts", "slim", "petite"]
  },
  "ikuyo-kita": {
    portrait: ["detailed face", "orange eyes", "red hair", "cheerful"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs"]
  },
  "lucy-elfen-lied": {
    portrait: ["detailed face", "red eyes", "horns", "innocent"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs"]
  },
  "cc": {
    portrait: ["detailed face", "yellow eyes", "green hair", "mysterious", "smirk"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "long legs", "ass"]
  },
  "kallen-stadtfeld": {
    portrait: ["detailed face", "blue eyes", "red hair", "fierce"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "athletic"]
  },
  "ryuko-matoi": {
    portrait: ["detailed face", "blue eyes", "black hair", "red highlights", "fierce"],
    upperBody: ["medium breasts", "cleavage", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "athletic"]
  },
  "satsuki-kiryuin": {
    portrait: ["detailed face", "blue eyes", "thick eyebrows", "regal"],
    upperBody: ["medium breasts", "slim waist", "athletic"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "long legs", "tall female", "athletic"]
  },
  "yuno-gasai": {
    portrait: ["detailed face", "pink eyes", "yandere", "crazy eyes"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs"]
  },
  "kurisu-makise": {
    portrait: ["detailed face", "blue eyes", "red hair", "tsundere"],
    upperBody: ["medium breasts", "lab coat", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "long legs"]
  },
  "asuka-langley": {
    portrait: ["detailed face", "blue eyes", "red hair", "tsundere", "proud"],
    upperBody: ["medium breasts", "plugsuit", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "plugsuit"]
  },
  "rei-ayanami": {
    portrait: ["detailed face", "red eyes", "blue hair", "emotionless"],
    upperBody: ["small breasts", "plugsuit", "slim", "pale skin"],
    fullBody: ["small breasts", "slim", "petite", "plugsuit", "pale skin"]
  },
  "mari-makinami": {
    portrait: ["detailed face", "glasses", "brown hair", "cheerful"],
    upperBody: ["large breasts", "plugsuit", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "plugsuit"]
  },
  "misato-katsuragi": {
    portrait: ["detailed face", "brown eyes", "purple hair", "mature female"],
    upperBody: ["large breasts", "cleavage", "slim waist", "mature female"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "mature female", "long legs"]
  },
  "cynthia-pokemon": {
    portrait: ["detailed face", "grey eyes", "blonde hair", "elegant"],
    upperBody: ["medium breasts", "slim waist", "elegant"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "long legs", "tall female"]
  },
  "marnie-pokemon": {
    portrait: ["detailed face", "green eyes", "twintails", "cool"],
    upperBody: ["small breasts", "slim"],
    fullBody: ["small breasts", "slim", "petite"]
  },
  "nessa-pokemon": {
    portrait: ["detailed face", "blue eyes", "dark skin"],
    upperBody: ["medium breasts", "dark skin", "athletic", "slim waist"],
    fullBody: ["medium breasts", "dark skin", "athletic", "slim waist", "wide hips", "long legs"]
  },
  "lucoa": {
    portrait: ["detailed face", "heterochromia", "blonde hair", "mature female"],
    upperBody: ["huge breasts", "massive breasts", "cleavage", "mature female"],
    fullBody: ["huge breasts", "slim waist", "wide hips", "thick thighs", "mature female", "tall female"]
  },
  "tohru": {
    portrait: ["detailed face", "red eyes", "blonde hair", "horns", "devoted"],
    upperBody: ["large breasts", "maid outfit", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "dragon tail"]
  },
  "elma": {
    portrait: ["detailed face", "purple eyes", "blue hair", "horn", "hungry"],
    upperBody: ["large breasts", "office lady", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs"]
  },
  "shiro": {
    portrait: ["detailed face", "red eyes", "white hair", "emotionless"],
    upperBody: ["flat chest", "small breasts", "petite"],
    fullBody: ["flat chest", "petite", "slim", "small"]
  },
  "jibril": {
    portrait: ["detailed face", "yellow eyes", "halo", "playful"],
    upperBody: ["large breasts", "cleavage", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thighs", "angel wings"]
  },
  "sinon": {
    portrait: ["detailed face", "blue eyes", "blue hair", "cool"],
    upperBody: ["medium breasts", "slim waist", "athletic"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "athletic"]
  },
  "alice-zuberg": {
    portrait: ["detailed face", "blue eyes", "blonde hair", "noble"],
    upperBody: ["medium breasts", "armor", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "armor"]
  },
  "kurumi-tokisaki": {
    portrait: ["detailed face", "heterochromia", "clock eye", "elegant"],
    upperBody: ["large breasts", "cleavage", "gothic lolita", "slim waist"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "gothic lolita"]
  },
  "rebecca": {
    portrait: ["detailed face", "pink eyes", "white hair", "chaotic"],
    upperBody: ["large breasts", "huge breasts", "cleavage", "shortstack"],
    fullBody: ["large breasts", "wide hips", "thick thighs", "short", "shortstack"]
  },
  "lucy-cyberpunk": {
    portrait: ["detailed face", "blue eyes", "white hair", "mysterious"],
    upperBody: ["medium breasts", "slim waist"],
    fullBody: ["medium breasts", "slim waist", "wide hips", "thighs", "long legs"]
  },
  "ilulu": {
    portrait: ["detailed face", "red eyes", "pink hair", "horns", "fang"],
    upperBody: ["huge breasts", "massive breasts", "cleavage", "shortstack"],
    fullBody: ["huge breasts", "wide hips", "thick thighs", "short", "shortstack", "dragon tail"]
  },
  "sonia-pokemon": {
    portrait: ["detailed face", "green eyes", "orange hair", "mature female"],
    upperBody: ["large breasts", "cleavage", "lab coat", "mature female"],
    fullBody: ["large breasts", "slim waist", "wide hips", "thick thighs", "mature female"]
  }
};

// Helper function to get body descriptors for a character
export function getBodyDescriptors(slug: string): BodyDescriptors {
  // Check for character-specific override first
  if (CHARACTER_BODY_OVERRIDES[slug]) {
    return CHARACTER_BODY_OVERRIDES[slug];
  }
  // Default to standard body type
  return BODY_PRESETS.standard;
}

export interface Character {
  name: string;
  slug: string;
  anime: string;
  animeSlug: string;
  prompt: string;
  negativePrompt: string;
  tags: string[];
  recommendedModels: string[];
  recommendedLoras: string[];
  tips: string;
  seo: {
    title: string;
    description: string;
  };
}

const defaultNegative = "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, jpeg artifacts, signature, watermark, blurry";

export const characters: Character[] = [
  // TIER S (1-20)
  { name: "Makima", slug: "makima", anime: "Chainsaw Man", animeSlug: "chainsaw-man", prompt: "makima \\(chainsaw man\\), 1girl, solo, yellow eyes, red hair, long hair, ringed eyes, black necktie, white shirt, braided ponytail, smirk, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "villain", "red hair", "yellow eyes", "dominant"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Makima LoRA", "Chainsaw Man Style"], tips: "Use 'ringed eyes' for her iconic hypnotic pupils. Adding 'control devil' enhances her menacing aura.", seo: { title: "Makima Stable Diffusion Prompt | Chainsaw Man AI Art", description: "Get the perfect Makima AI art prompt for Stable Diffusion. Optimized tags for the Control Devil from Chainsaw Man." } },
  { name: "Zero Two", slug: "zero-two", anime: "Darling in the Franxx", animeSlug: "darling-in-the-franxx", prompt: "zero two \\(darling in the franxx\\), 1girl, solo, pink hair, long hair, red horns, aqua eyes, pilot suit, red bodysuit, hairband, smile, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "pink hair", "horns", "pilot", "iconic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Zero Two LoRA"], tips: "Include 'red horns' and 'hairband' for accuracy. Add 'oni horns' if horns aren't generating well.", seo: { title: "Zero Two Stable Diffusion Prompt | Darling in the Franxx AI Art", description: "Perfect Zero Two AI art prompt. Generate the iconic pink-haired pilot with her signature red horns." } },
  { name: "Rem", slug: "rem", anime: "Re:Zero", animeSlug: "re-zero", prompt: "rem \\(re:zero\\), 1girl, solo, blue hair, short hair, blue eyes, hair over one eye, maid, maid headdress, x hair ornament, gentle smile, masterpiece, best quality", negativePrompt: defaultNegative + ", ram", tags: ["waifu", "maid", "blue hair", "twin", "devoted"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Rem LoRA", "Re:Zero Style"], tips: "Use 'hair over one eye' for signature hairstyle. Include 'ram' in negative to avoid mixing with twin.", seo: { title: "Rem Stable Diffusion Prompt | Re:Zero AI Art", description: "Generate beautiful Rem AI art. Perfect tags for the beloved blue-haired maid from Re:Zero." } },
  { name: "Marin Kitagawa", slug: "marin-kitagawa", anime: "My Dress-Up Darling", animeSlug: "my-dress-up-darling", prompt: "kitagawa marin, 1girl, solo, blonde hair, long hair, pink eyes, gyaru, tan, earrings, school uniform, smile, excited, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "gyaru", "blonde", "cosplayer", "energetic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Marin Kitagawa LoRA"], tips: "Add 'gyaru' for her fashion style. She has multiple cosplay outfits - 'shizuku-tan' or 'black lobelia'.", seo: { title: "Marin Kitagawa Stable Diffusion Prompt | My Dress-Up Darling AI Art", description: "Create stunning Marin Kitagawa AI art. Perfect for the gyaru cosplayer." } },
  { name: "Yor Forger", slug: "yor-forger", anime: "Spy x Family", animeSlug: "spy-x-family", prompt: "yor forger, 1girl, solo, black hair, long hair, red eyes, gold hairband, red sweater dress, elegant, gentle smile, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "assassin", "black hair", "elegant", "mother"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Yor Forger LoRA", "Spy x Family Style"], tips: "For assassin outfit add 'black dress, thorn princess, weapon'. Her casual look uses 'red sweater dress'.", seo: { title: "Yor Forger Stable Diffusion Prompt | Spy x Family AI Art", description: "Generate beautiful Yor Forger AI art. Capture the elegant assassin from Spy x Family." } },
  { name: "Power", slug: "power", anime: "Chainsaw Man", animeSlug: "chainsaw-man", prompt: "power \\(chainsaw man\\), 1girl, solo, blonde hair, messy hair, red horns, yellow eyes, sharp teeth, fangs, black shirt, crazy smile, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "fiend", "blonde", "horns", "chaotic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Power LoRA", "Chainsaw Man Style"], tips: "Include 'sharp teeth' and 'fangs' for devil features. 'Messy hair' captures her wild look.", seo: { title: "Power Stable Diffusion Prompt | Chainsaw Man AI Art", description: "Create chaotic Power AI art. Perfect tags for the Blood Fiend with her signature horns." } },
  { name: "2B", slug: "2b", anime: "NieR: Automata", animeSlug: "nier-automata", prompt: "yorha no. 2 type b, 2b, 1girl, solo, white hair, short hair, blindfold, black dress, thighhighs, mole under mouth, katana, serious, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "android", "white hair", "blindfold", "gothic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["2B LoRA", "NieR Automata Style"], tips: "Use 'yorha no. 2 type b' for best recognition. 'Black blindfold' is essential.", seo: { title: "2B Stable Diffusion Prompt | NieR Automata AI Art", description: "Generate stunning 2B AI art. Perfect tags for the YoRHa android with her iconic blindfold." } },
  { name: "Asuna Yuuki", slug: "asuna-yuuki", anime: "Sword Art Online", animeSlug: "sword-art-online", prompt: "asuna \\(sao\\), 1girl, solo, orange hair, long hair, brown eyes, braid, knights of the blood uniform, rapier, determined, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "swordswoman", "orange hair", "gamer", "fierce"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Asuna LoRA", "SAO Style"], tips: "Use 'knights of the blood' for iconic red/white uniform. ALO version uses 'pointy ears, fairy wings'.", seo: { title: "Asuna Yuuki Stable Diffusion Prompt | SAO AI Art", description: "Create beautiful Asuna AI art. Generate the Lightning Flash from SAO." } },
  { name: "Raiden Shogun", slug: "raiden-shogun", anime: "Genshin Impact", animeSlug: "genshin-impact", prompt: "raiden shogun, raiden ei, 1girl, solo, purple hair, long hair, purple eyes, kimono, electro, braided ponytail, serious, regal, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "archon", "purple hair", "electro", "goddess"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Raiden Shogun LoRA", "Genshin Impact Style"], tips: "Use 'raiden ei' for her true name. Add 'musou no hitotachi' for signature pose.", seo: { title: "Raiden Shogun Stable Diffusion Prompt | Genshin Impact AI Art", description: "Generate stunning Raiden Shogun AI art. Perfect for the Electro Archon." } },
  { name: "Hu Tao", slug: "hu-tao", anime: "Genshin Impact", animeSlug: "genshin-impact", prompt: "hu tao, 1girl, solo, brown hair, twintails, red eyes, flower-shaped pupils, black hat, chinese clothes, playful, smug, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "pyro", "twintails", "playful", "funeral director"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Hu Tao LoRA", "Genshin Impact Style"], tips: "Her 'flower-shaped pupils' are iconic. Add 'boo tao' for her ghost companion.", seo: { title: "Hu Tao Stable Diffusion Prompt | Genshin Impact AI Art", description: "Create playful Hu Tao AI art. Perfect tags for the Pyro funeral director." } },
  { name: "Ganyu", slug: "ganyu", anime: "Genshin Impact", animeSlug: "genshin-impact", prompt: "ganyu \\(genshin impact\\), 1girl, solo, blue hair, long hair, purple eyes, horns, qilin horns, chinese clothes, cryo, gentle, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "cryo", "blue hair", "horns", "qilin"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Ganyu LoRA", "Genshin Impact Style"], tips: "Use 'qilin horns' or 'goat horns' for her adeptus features. 'Amos bow' for her weapon.", seo: { title: "Ganyu Stable Diffusion Prompt | Genshin Impact AI Art", description: "Generate beautiful Ganyu AI art. Perfect for the Cryo Qilin from Genshin Impact." } },
  { name: "Hatsune Miku", slug: "hatsune-miku", anime: "Vocaloid", animeSlug: "vocaloid", prompt: "hatsune miku, 1girl, solo, aqua hair, twintails, very long hair, aqua eyes, headphones, necktie, detached sleeves, thighhighs, singing, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["vocaloid", "idol", "twintails", "aqua hair", "singer"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Hatsune Miku LoRA", "Vocaloid Style"], tips: "She has many alternate outfits - 'racing miku', 'snow miku', 'magical mirai'. 'Leek' is her iconic item.", seo: { title: "Hatsune Miku Stable Diffusion Prompt | Vocaloid AI Art", description: "Create stunning Hatsune Miku AI art. Generate the iconic virtual idol." } },
  { name: "Nezuko Kamado", slug: "nezuko-kamado", anime: "Demon Slayer", animeSlug: "demon-slayer", prompt: "kamado nezuko, 1girl, solo, black hair, long hair, pink eyes, gradient hair, bamboo muzzle, pink kimono, demon, cute, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "demon", "pink eyes", "bamboo muzzle", "cute"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Nezuko LoRA", "Demon Slayer Style"], tips: "Include 'bamboo muzzle' for her signature look. 'Gradient hair' for black-to-orange tips.", seo: { title: "Nezuko Kamado Stable Diffusion Prompt | Demon Slayer AI Art", description: "Generate adorable Nezuko AI art with her iconic bamboo muzzle." } },
  { name: "Mai Sakurajima", slug: "mai-sakurajima", anime: "Bunny Girl Senpai", animeSlug: "bunny-girl-senpai", prompt: "sakurajima mai, 1girl, solo, black hair, long hair, purple eyes, bunny ears, bunnysuit, black leotard, pantyhose, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "bunny girl", "actress", "tsundere", "elegant"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Mai Sakurajima LoRA"], tips: "Her bunnysuit look is most popular. School uniform uses 'serafuku'.", seo: { title: "Mai Sakurajima Stable Diffusion Prompt | Bunny Girl Senpai AI Art", description: "Create stunning Mai Sakurajima AI art with her signature black leotard." } },
  { name: "Rias Gremory", slug: "rias-gremory", anime: "High School DxD", animeSlug: "high-school-dxd", prompt: "rias gremory, 1girl, solo, red hair, long hair, blue eyes, school uniform, black wings, devil, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "devil", "red hair", "demon wings", "ojou-sama"], recommendedModels: ["NoobAI-XL", "Pony Diffusion V6", "Animagine XL 3.1"], recommendedLoras: ["Rias Gremory LoRA", "DxD Style"], tips: "Add 'power of destruction' for her crimson aura. 'Black wings' for devil form.", seo: { title: "Rias Gremory Stable Diffusion Prompt | High School DxD AI Art", description: "Generate stunning Rias Gremory AI art. The crimson-haired devil." } },
  { name: "Hinata Hyuga", slug: "hinata-hyuga", anime: "Naruto", animeSlug: "naruto", prompt: "hyuuga hinata, 1girl, solo, blue hair, long hair, white eyes, byakugan, forehead protector, ninja, shy, gentle, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "ninja", "byakugan", "shy", "gentle"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Hinata LoRA", "Naruto Style"], tips: "Specify 'shippuden' or 'boruto' for different ages. 'Byakugan' for activated eyes.", seo: { title: "Hinata Hyuga Stable Diffusion Prompt | Naruto AI Art", description: "Create beautiful Hinata AI art. The gentle Byakugan user from Naruto." } },
  { name: "Nico Robin", slug: "nico-robin", anime: "One Piece", animeSlug: "one-piece", prompt: "nico robin, 1girl, solo, black hair, long hair, blue eyes, archaeologist, sunglasses on head, elegant, mysterious smile, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "archaeologist", "mature", "mysterious", "devil fruit"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Nico Robin LoRA", "One Piece Style"], tips: "She has many outfits across arcs. Add 'extra arms' for her devil fruit power.", seo: { title: "Nico Robin Stable Diffusion Prompt | One Piece AI Art", description: "Generate elegant Nico Robin AI art. The archaeologist from One Piece." } },
  { name: "Toga Himiko", slug: "toga-himiko", anime: "My Hero Academia", animeSlug: "my-hero-academia", prompt: "toga himiko, 1girl, solo, blonde hair, messy bun, yellow eyes, fangs, school uniform, yandere, crazy smile, knife, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["villain", "yandere", "blonde", "fangs", "crazy"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Toga Himiko LoRA", "MHA Style"], tips: "Her 'messy bun' and 'blush marks' are iconic. 'Heart eyes' for obsessive look.", seo: { title: "Toga Himiko Stable Diffusion Prompt | MHA AI Art", description: "Create yandere Toga Himiko AI art from My Hero Academia." } },
  { name: "Mikasa Ackerman", slug: "mikasa-ackerman", anime: "Attack on Titan", animeSlug: "attack-on-titan", prompt: "mikasa ackerman, 1girl, solo, black hair, short hair, grey eyes, red scarf, survey corps uniform, 3d maneuver gear, abs, serious, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "soldier", "abs", "short hair", "loyal"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Mikasa LoRA", "Attack on Titan Style"], tips: "Her 'red scarf' is essential. Add 'muscular female' for her athletic build.", seo: { title: "Mikasa Ackerman Stable Diffusion Prompt | Attack on Titan AI Art", description: "Generate fierce Mikasa AI art with her iconic red scarf." } },
  { name: "Aqua", slug: "aqua", anime: "Konosuba", animeSlug: "konosuba", prompt: "aqua \\(konosuba\\), 1girl, solo, blue hair, long hair, blue eyes, detached sleeves, goddess, crying, useless goddess, dramatic, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["goddess", "blue hair", "useless", "comedy", "crying"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Aqua LoRA", "Konosuba Style"], tips: "Add 'crying' or 'tears' for her comedic personality.", seo: { title: "Aqua Stable Diffusion Prompt | Konosuba AI Art", description: "Create hilarious Aqua AI art. The useless goddess from Konosuba." } },
  // TIER A (21-50)
  { name: "Albedo", slug: "albedo", anime: "Overlord", animeSlug: "overlord", prompt: "albedo \\(overlord\\), 1girl, solo, black hair, long hair, yellow eyes, horns, white dress, black wings, succubus, yandere, elegant, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "succubus", "horns", "yandere", "devoted"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Albedo Overlord LoRA"], tips: "Add 'hip wings' for her unique demon features.", seo: { title: "Albedo Stable Diffusion Prompt | Overlord AI Art", description: "Generate stunning Albedo AI art. The devoted succubus from Overlord." } },
  { name: "Shalltear Bloodfallen", slug: "shalltear-bloodfallen", anime: "Overlord", animeSlug: "overlord", prompt: "shalltear bloodfallen, 1girl, solo, silver hair, red eyes, gothic lolita, bonnet, vampire, pale skin, petite, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["vampire", "gothic lolita", "silver hair", "petite", "noble"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Shalltear LoRA"], tips: "'Gothic lolita' and 'bonnet' for her usual appearance.", seo: { title: "Shalltear Bloodfallen Stable Diffusion Prompt | Overlord AI Art", description: "Create elegant Shalltear AI art. The true vampire from Overlord." } },
  { name: "Eula Lawrence", slug: "eula-lawrence", anime: "Genshin Impact", animeSlug: "genshin-impact", prompt: "eula \\(genshin impact\\), 1girl, solo, light blue hair, long hair, yellow eyes, leotard, cape, cryo, claymore, knight, tsundere, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "cryo", "knight", "noble", "tsundere"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Eula LoRA"], tips: "Her catchphrase involves 'vengeance'. Add 'dancing' for elegant poses.", seo: { title: "Eula Lawrence Stable Diffusion Prompt | Genshin Impact AI Art", description: "Generate noble Eula AI art. The Cryo knight from Genshin Impact." } },
  { name: "Keqing", slug: "keqing", anime: "Genshin Impact", animeSlug: "genshin-impact", prompt: "keqing \\(genshin impact\\), 1girl, solo, purple hair, twintails, purple eyes, cat ears hairband, chinese clothes, electro, elegant, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "electro", "twintails", "workaholic", "elegant"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Keqing LoRA"], tips: "Her 'cat ears hairband' gives catgirl appearance.", seo: { title: "Keqing Stable Diffusion Prompt | Genshin Impact AI Art", description: "Create elegant Keqing AI art. The Electro Yuheng from Genshin Impact." } },
  { name: "Yae Miko", slug: "yae-miko", anime: "Genshin Impact", animeSlug: "genshin-impact", prompt: "yae miko, 1girl, solo, pink hair, long hair, purple eyes, fox ears, kitsune, shrine maiden, electro, teasing, smug, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "kitsune", "fox ears", "shrine maiden", "teasing"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Yae Miko LoRA"], tips: "Add 'fox tail' for her kitsune form. 'Teasing' or 'smug' captures her personality.", seo: { title: "Yae Miko Stable Diffusion Prompt | Genshin Impact AI Art", description: "Generate teasing Yae Miko AI art. The kitsune shrine maiden." } },
  { name: "Mona", slug: "mona", anime: "Genshin Impact", animeSlug: "genshin-impact", prompt: "mona \\(genshin impact\\), 1girl, solo, blue hair, twintails, blue eyes, witch hat, leotard, hydro, astrologer, proud, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "hydro", "witch", "astrologer", "dramatic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Mona LoRA"], tips: "Her 'constellation' motifs are iconic. Add 'starry' backgrounds.", seo: { title: "Mona Stable Diffusion Prompt | Genshin Impact AI Art", description: "Create stunning Mona AI art. The proud astrologer from Genshin Impact." } },
  { name: "Ram", slug: "ram", anime: "Re:Zero", animeSlug: "re-zero", prompt: "ram \\(re:zero\\), 1girl, solo, pink hair, short hair, red eyes, hair over one eye, maid, x hair ornament, smug, confident, masterpiece, best quality", negativePrompt: defaultNegative + ", rem, blue hair", tags: ["waifu", "maid", "pink hair", "twin", "smug"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Ram LoRA"], tips: "Use 'rem' in negative to avoid mixing with twin. 'Smug' fits her personality.", seo: { title: "Ram Stable Diffusion Prompt | Re:Zero AI Art", description: "Generate confident Ram AI art. The pink-haired twin maid." } },
  { name: "Emilia", slug: "emilia", anime: "Re:Zero", animeSlug: "re-zero", prompt: "emilia \\(re:zero\\), 1girl, solo, silver hair, long hair, purple eyes, pointy ears, half-elf, white outfit, flower hair ornament, innocent, kind, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "half-elf", "silver hair", "innocent", "kind"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Emilia LoRA"], tips: "Add 'puck' for her spirit companion. 'Pointy ears' for elf heritage.", seo: { title: "Emilia Stable Diffusion Prompt | Re:Zero AI Art", description: "Create beautiful Emilia AI art. The kind half-elf heroine." } },
  { name: "Echidna", slug: "echidna", anime: "Re:Zero", animeSlug: "re-zero", prompt: "echidna \\(re:zero\\), 1girl, solo, white hair, long hair, black sclera, white pupils, black dress, witch, tea, mysterious smile, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["witch", "white hair", "mysterious", "tea lover", "curious"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Echidna LoRA"], tips: "Her 'black sclera' eyes are distinctive. Add 'tea' or 'teacup'.", seo: { title: "Echidna Stable Diffusion Prompt | Re:Zero AI Art", description: "Generate mysterious Echidna AI art. The Witch of Greed." } },
  { name: "Chizuru Mizuhara", slug: "chizuru-mizuhara", anime: "Rent-a-Girlfriend", animeSlug: "rent-a-girlfriend", prompt: "mizuhara chizuru, 1girl, solo, brown hair, long hair, brown eyes, beautiful, dress, actress, tsundere, blushing, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "rental girlfriend", "actress", "tsundere", "beautiful"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Chizuru LoRA"], tips: "She has many date outfits. 'Blushing' for embarrassed moments.", seo: { title: "Chizuru Mizuhara Stable Diffusion Prompt | Rent-a-Girlfriend AI Art", description: "Create beautiful Chizuru AI art. The perfect rental girlfriend." } },
  { name: "Ai Hoshino", slug: "ai-hoshino", anime: "Oshi no Ko", animeSlug: "oshi-no-ko", prompt: "hoshino ai \\(oshi no ko\\), 1girl, solo, purple hair, long hair, star-shaped pupils, idol, microphone, star hair ornament, smile, wink, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["idol", "star eyes", "purple hair", "charismatic", "mother"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Ai Hoshino LoRA"], tips: "Her 'star-shaped pupils' are iconic. Add 'B-Komachi' for her idol group.", seo: { title: "Ai Hoshino Stable Diffusion Prompt | Oshi no Ko AI Art", description: "Generate stunning Ai Hoshino AI art with her star-shaped eyes." } },
  { name: "Anya Forger", slug: "anya-forger", anime: "Spy x Family", animeSlug: "spy-x-family", prompt: "anya forger, 1girl, solo, pink hair, short hair, green eyes, eden academy uniform, child, smug, heh, cute, waku waku, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["child", "esper", "pink hair", "smug face", "cute"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Anya Forger LoRA"], tips: "Her 'smug' or 'heh' face is iconic. Add 'waku waku' for excitement.", seo: { title: "Anya Forger Stable Diffusion Prompt | Spy x Family AI Art", description: "Create adorable Anya AI art with her smug face." } },
  { name: "Frieren", slug: "frieren", anime: "Frieren: Beyond Journey's End", animeSlug: "frieren", prompt: "frieren, 1girl, solo, white hair, long hair, green eyes, pointy ears, elf, twintails, white robe, purple cape, staff, mage, expressionless, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["elf", "mage", "white hair", "ancient", "emotionless"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Frieren LoRA"], tips: "Her 'expressionless' look is characteristic. Add 'collecting spells' for her hobby.", seo: { title: "Frieren Stable Diffusion Prompt | Beyond Journey's End AI Art", description: "Generate beautiful Frieren AI art. The ancient elven mage." } },
  { name: "Fern", slug: "fern", anime: "Frieren: Beyond Journey's End", animeSlug: "frieren", prompt: "fern \\(frieren\\), 1girl, solo, purple hair, long hair, purple eyes, mage, purple robe, staff, serious, diligent, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["mage", "apprentice", "purple hair", "serious", "diligent"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Fern LoRA"], tips: "She's often scolding Frieren. Add 'pouting' for comedic expressions.", seo: { title: "Fern Stable Diffusion Prompt | Frieren AI Art", description: "Create diligent Fern AI art. Frieren's hardworking apprentice." } },
  { name: "Nami", slug: "nami", anime: "One Piece", animeSlug: "one-piece", prompt: "nami \\(one piece\\), 1girl, solo, orange hair, long hair, brown eyes, navigator, bikini top, jeans, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "navigator", "orange hair", "treasure lover", "pirate"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Nami LoRA"], tips: "Specify arc for different outfits - 'alabasta', 'wano', etc.", seo: { title: "Nami Stable Diffusion Prompt | One Piece AI Art", description: "Generate stunning Nami AI art. The Straw Hat navigator." } },
  { name: "Yamato", slug: "yamato", anime: "One Piece", animeSlug: "one-piece", prompt: "yamato \\(one piece\\), 1girl, solo, white hair, long hair, orange eyes, horns, sarashi, hakama, oni, muscular female, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "oni", "horns", "muscular", "tall"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Yamato LoRA"], tips: "Add 'kanabo' for her weapon. 'Hybrid form' for devil fruit transformation.", seo: { title: "Yamato Stable Diffusion Prompt | One Piece AI Art", description: "Create powerful Yamato AI art. Kaido's daughter with oni horns." } },
  { name: "Tsunade", slug: "tsunade", anime: "Naruto", animeSlug: "naruto", prompt: "tsunade \\(naruto\\), 1girl, solo, blonde hair, twintails, brown eyes, forehead mark, green haori, necklace, hokage, medical ninja, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["hokage", "medical ninja", "blonde", "mature", "legendary"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Tsunade LoRA"], tips: "Her 'forehead mark' is her Strength of a Hundred Seal.", seo: { title: "Tsunade Stable Diffusion Prompt | Naruto AI Art", description: "Generate powerful Tsunade AI art. The Fifth Hokage." } },
  { name: "Sakura Haruno", slug: "sakura-haruno", anime: "Naruto", animeSlug: "naruto", prompt: "haruno sakura, 1girl, solo, pink hair, short hair, green eyes, forehead protector, red outfit, ninja, medical ninja, determined, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["ninja", "medical ninja", "pink hair", "determined", "strong"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Sakura LoRA"], tips: "Specify 'shippuden' or 'boruto' for different ages.", seo: { title: "Sakura Haruno Stable Diffusion Prompt | Naruto AI Art", description: "Create beautiful Sakura AI art. The pink-haired medical ninja." } },
  { name: "Android 18", slug: "android-18", anime: "Dragon Ball Z", animeSlug: "dragon-ball", prompt: "android 18, 1girl, solo, blonde hair, short hair, blue eyes, striped shirt, denim vest, android, confident, cool, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["android", "blonde", "cool", "strong", "fighter"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Android 18 LoRA"], tips: "Her outfit varies by saga. 'Fighting pose' for action shots.", seo: { title: "Android 18 Stable Diffusion Prompt | Dragon Ball AI Art", description: "Generate cool Android 18 AI art. The beautiful android fighter." } },
  { name: "Bulma", slug: "bulma", anime: "Dragon Ball", animeSlug: "dragon-ball", prompt: "bulma, 1girl, solo, blue hair, short hair, blue eyes, scientist, capsule corp, lab coat, genius, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["scientist", "blue hair", "genius", "sassy", "inventor"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Bulma LoRA"], tips: "She has many hairstyles across series. Specify era.", seo: { title: "Bulma Stable Diffusion Prompt | Dragon Ball AI Art", description: "Create genius Bulma AI art. The brilliant scientist from Dragon Ball." } },
  { name: "Lucy Heartfilia", slug: "lucy-heartfilia", anime: "Fairy Tail", animeSlug: "fairy-tail", prompt: "lucy heartfilia, 1girl, solo, blonde hair, long hair, brown eyes, side ponytail, celestial wizard, keys, fairy tail guild mark, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["waifu", "celestial wizard", "blonde", "guild member", "spirits"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Lucy Heartfilia LoRA"], tips: "Add 'celestial spirit' names for summoning scenes.", seo: { title: "Lucy Heartfilia Stable Diffusion Prompt | Fairy Tail AI Art", description: "Generate beautiful Lucy AI art. The celestial wizard from Fairy Tail." } },
  { name: "Erza Scarlet", slug: "erza-scarlet", anime: "Fairy Tail", animeSlug: "fairy-tail", prompt: "erza scarlet, 1girl, solo, red hair, long hair, brown eyes, armor, knight, requip, sword, titania, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["knight", "red hair", "armor", "titania", "requip"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Erza Scarlet LoRA"], tips: "She has 100+ armor sets - specify 'heaven's wheel', 'flame empress', etc.", seo: { title: "Erza Scarlet Stable Diffusion Prompt | Fairy Tail AI Art", description: "Create powerful Erza AI art. Titania the Queen of Fairies." } },
  { name: "Megumin", slug: "megumin", anime: "Konosuba", animeSlug: "konosuba", prompt: "megumin \\(konosuba\\), 1girl, solo, brown hair, red eyes, eyepatch, witch hat, black cape, staff, explosion magic, chuunibyou, petite, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["arch wizard", "explosion", "eyepatch", "chuunibyou", "petite"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Megumin LoRA"], tips: "Add 'explosion' or 'magic circles' for her signature spell.", seo: { title: "Megumin Stable Diffusion Prompt | Konosuba AI Art", description: "Generate explosive Megumin AI art. The arch wizard from Konosuba." } },
  { name: "Darkness", slug: "darkness", anime: "Konosuba", animeSlug: "konosuba", prompt: "darkness \\(konosuba\\), lalatina, 1girl, solo, blonde hair, long hair, blue eyes, armor, crusader, ponytail, blush, noble, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["crusader", "blonde", "armor", "masochist", "noble"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Darkness LoRA"], tips: "Her real name 'lalatina' embarrasses her. Add 'blush' for her reactions.", seo: { title: "Darkness Stable Diffusion Prompt | Konosuba AI Art", description: "Create noble Darkness AI art. The crusader from Konosuba." } },
  { name: "Tatsumaki", slug: "tatsumaki", anime: "One Punch Man", animeSlug: "one-punch-man", prompt: "tatsumaki \\(one punch man\\), 1girl, solo, green hair, curly hair, green eyes, petite, black dress, psychic, floating, arrogant, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["esper", "green hair", "petite", "powerful", "arrogant"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Tatsumaki LoRA"], tips: "Add 'floating' and 'green aura' for psychic effects.", seo: { title: "Tatsumaki Stable Diffusion Prompt | One Punch Man AI Art", description: "Generate powerful Tatsumaki AI art. The Tornado of Terror." } },
  { name: "Fubuki", slug: "fubuki", anime: "One Punch Man", animeSlug: "one-punch-man", prompt: "fubuki \\(one punch man\\), 1girl, solo, green hair, short hair, green eyes, fur coat, black dress, psychic, elegant, mature, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["esper", "green hair", "fur coat", "elegant", "mature"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Fubuki LoRA"], tips: "Her 'fur coat' is iconic. Add 'Blizzard Group' for her faction.", seo: { title: "Fubuki Stable Diffusion Prompt | One Punch Man AI Art", description: "Create elegant Fubuki AI art. The Blizzard of Hell." } },
  { name: "Yoruichi Shihouin", slug: "yoruichi-shihouin", anime: "Bleach", animeSlug: "bleach", prompt: "shihouin yoruichi, 1girl, solo, purple hair, long hair, ponytail, yellow eyes, dark skin, ninja, orange jacket, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["shinigami", "dark skin", "ninja", "cat", "purple hair"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Yoruichi LoRA"], tips: "She transforms into 'black cat'. Add 'shunko' for her lightning technique.", seo: { title: "Yoruichi Shihouin Stable Diffusion Prompt | Bleach AI Art", description: "Generate stunning Yoruichi AI art. The Flash Goddess from Bleach." } },
  { name: "Rangiku Matsumoto", slug: "rangiku-matsumoto", anime: "Bleach", animeSlug: "bleach", prompt: "matsumoto rangiku, 1girl, solo, blonde hair, long hair, wavy hair, blue eyes, shinigami, shihakusho, vice captain, playful, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["shinigami", "blonde", "vice captain", "lazy", "playful"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Rangiku LoRA"], tips: "Add 'haineko' for her zanpakuto.", seo: { title: "Rangiku Matsumoto Stable Diffusion Prompt | Bleach AI Art", description: "Create beautiful Rangiku AI art. The playful vice captain." } },
  { name: "Ochaco Uraraka", slug: "ochaco-uraraka", anime: "My Hero Academia", animeSlug: "my-hero-academia", prompt: "uraraka ochaco, 1girl, solo, brown hair, short hair, brown eyes, rosy cheeks, hero costume, zero gravity, cheerful, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["hero", "zero gravity", "cheerful", "brown hair", "determined"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Ochaco LoRA"], tips: "Her 'rosy cheeks' are distinctive. Add 'floating' for her quirk.", seo: { title: "Ochaco Uraraka Stable Diffusion Prompt | MHA AI Art", description: "Generate cheerful Ochaco AI art. The gravity hero Uravity." } },
  // TIER A- (51-75)
  { name: "Momo Yaoyorozu", slug: "momo-yaoyorozu", anime: "My Hero Academia", animeSlug: "my-hero-academia", prompt: "yaoyorozu momo, 1girl, solo, black hair, long hair, ponytail, hero costume, red leotard, creation quirk, intelligent, elegant, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["hero", "creation", "intelligent", "elegant", "wealthy"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Momo Yaoyorozu LoRA"], tips: "Her quirk requires exposed skin. Add 'creating objects' for quirk activation.", seo: { title: "Momo Yaoyorozu Stable Diffusion Prompt | MHA AI Art", description: "Create elegant Momo AI art. The Creation hero from MHA." } },
  { name: "Mirko", slug: "mirko", anime: "My Hero Academia", animeSlug: "my-hero-academia", prompt: "mirko, rumi usagiyama, 1girl, solo, white hair, long hair, red eyes, rabbit ears, dark skin, muscular female, leotard, fierce, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["pro hero", "bunny girl", "muscular", "dark skin", "fierce"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Mirko LoRA"], tips: "Add 'muscular female' and 'abs' for her athletic build.", seo: { title: "Mirko Stable Diffusion Prompt | MHA AI Art", description: "Generate fierce Mirko AI art. The Rabbit Hero from MHA." } },
  { name: "Shinobu Kocho", slug: "shinobu-kocho", anime: "Demon Slayer", animeSlug: "demon-slayer", prompt: "kochou shinobu, 1girl, solo, black hair, purple gradient hair, purple eyes, butterfly hair ornament, haori, demon slayer uniform, smile, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["demon slayer", "insect pillar", "butterfly", "poison", "gentle smile"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Shinobu LoRA"], tips: "Her 'butterfly haori' is iconic. Add 'butterfly wings pattern' for effects.", seo: { title: "Shinobu Kocho Stable Diffusion Prompt | Demon Slayer AI Art", description: "Create beautiful Shinobu AI art. The Insect Pillar." } },
  { name: "Mitsuri Kanroji", slug: "mitsuri-kanroji", anime: "Demon Slayer", animeSlug: "demon-slayer", prompt: "kanroji mitsuri, 1girl, solo, pink hair, green gradient tips, green eyes, braided hair, demon slayer uniform, love breathing, cheerful, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["demon slayer", "love pillar", "pink hair", "muscular", "cheerful"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Mitsuri LoRA"], tips: "Her hair is 'pink to green gradient'. Add 'whip sword' for her unique weapon.", seo: { title: "Mitsuri Kanroji Stable Diffusion Prompt | Demon Slayer AI Art", description: "Generate cheerful Mitsuri AI art. The Love Pillar." } },
  { name: "Nobara Kugisaki", slug: "nobara-kugisaki", anime: "Jujutsu Kaisen", animeSlug: "jujutsu-kaisen", prompt: "kugisaki nobara, 1girl, solo, orange hair, short hair, brown eyes, jujutsu high uniform, hammer, nails, confident, fierce, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["jujutsu sorcerer", "orange hair", "fierce", "fashionable", "confident"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Nobara LoRA"], tips: "Add 'hammer and nails' for her cursed technique.", seo: { title: "Nobara Kugisaki Stable Diffusion Prompt | Jujutsu Kaisen AI Art", description: "Create fierce Nobara AI art. The confident sorcerer from JJK." } },
  { name: "Maki Zenin", slug: "maki-zenin", anime: "Jujutsu Kaisen", animeSlug: "jujutsu-kaisen", prompt: "zenin maki, 1girl, solo, green hair, ponytail, glasses, jujutsu high uniform, polearm, athletic, serious, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["jujutsu sorcerer", "green hair", "glasses", "athletic", "serious"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Maki Zenin LoRA"], tips: "Post-Shibuya she has 'burn scars'. Add 'muscular' for her build.", seo: { title: "Maki Zenin Stable Diffusion Prompt | Jujutsu Kaisen AI Art", description: "Generate fierce Maki AI art. The cursed tool expert from JJK." } },
  { name: "Jolyne Cujoh", slug: "jolyne-cujoh", anime: "JoJo's Bizarre Adventure", animeSlug: "jojos-bizarre-adventure", prompt: "cujoh jolyne, 1girl, solo, green hair, buns, multicolored hair, green eyes, midriff, stone ocean, stand user, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["jojo", "stand user", "green hair", "rebellious", "Stone Free"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Jolyne LoRA"], tips: "Her hair has 'double buns'. Add 'Stone Free' for her Stand.", seo: { title: "Jolyne Cujoh Stable Diffusion Prompt | JoJo AI Art", description: "Create stylish Jolyne AI art. The Stone Ocean protagonist." } },
  { name: "Esdeath", slug: "esdeath", anime: "Akame ga Kill", animeSlug: "akame-ga-kill", prompt: "esdeath \\(akame ga kill\\), 1girl, solo, blue hair, long hair, blue eyes, general uniform, cap, ice, sadistic, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["general", "ice powers", "sadistic", "blue hair", "powerful"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Esdeath LoRA"], tips: "Add 'ice' or 'frost' for her powers. 'Sadistic smile' fits her personality.", seo: { title: "Esdeath Stable Diffusion Prompt | Akame ga Kill AI Art", description: "Generate powerful Esdeath AI art. The ice general." } },
  { name: "Akame", slug: "akame", anime: "Akame ga Kill", animeSlug: "akame-ga-kill", prompt: "akame \\(akame ga kill\\), 1girl, solo, black hair, long hair, red eyes, assassin, black sleeveless top, katana, serious, deadly, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["assassin", "red eyes", "katana", "deadly", "serious"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Akame LoRA"], tips: "Her sword 'Murasame' has a poison curse. Add 'red markings' for trump card.", seo: { title: "Akame Stable Diffusion Prompt | Akame ga Kill AI Art", description: "Create deadly Akame AI art. The red-eyed assassin." } },
  { name: "Saber", slug: "saber", anime: "Fate Series", animeSlug: "fate-series", prompt: "artoria pendragon, saber, 1girl, solo, blonde hair, ahoge, green eyes, armor, armored dress, excalibur, sword, king, noble, masterpiece, best quality", negativePrompt: defaultNegative + ", saber alter", tags: ["servant", "king", "blonde", "armored", "noble"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Saber LoRA"], tips: "She has MANY variants - 'saber alter', 'saber lily', 'lancer artoria'.", seo: { title: "Saber Stable Diffusion Prompt | Fate Series AI Art", description: "Generate noble Saber AI art. The King of Knights from Fate." } },
  { name: "Rin Tohsaka", slug: "rin-tohsaka", anime: "Fate Series", animeSlug: "fate-series", prompt: "tohsaka rin, 1girl, solo, black hair, twintails, aqua eyes, red sweater, thighhighs, tsundere, mage, proud, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["mage", "tsundere", "twintails", "jewel magic", "proud"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Rin Tohsaka LoRA"], tips: "Her 'red outfit' is iconic. Add 'gem' or 'jewel' for her magic.", seo: { title: "Rin Tohsaka Stable Diffusion Prompt | Fate Series AI Art", description: "Create beautiful Rin AI art. The tsundere mage from Fate." } },
  { name: "Ishtar", slug: "ishtar", anime: "Fate Grand Order", animeSlug: "fate-grand-order", prompt: "ishtar \\(fate\\), 1girl, solo, black hair, long hair, twintails, red eyes, tiara, floating, bow weapon, goddess, arrogant, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["goddess", "archer", "arrogant", "mesopotamian", "floating"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Ishtar LoRA"], tips: "She uses Rin's body. Add 'floating' and 'maana' for her boat.", seo: { title: "Ishtar Stable Diffusion Prompt | FGO AI Art", description: "Generate divine Ishtar AI art. The Mesopotamian goddess from FGO." } },
  { name: "Scathach", slug: "scathach", anime: "Fate Grand Order", animeSlug: "fate-grand-order", prompt: "scathach \\(fate\\), 1girl, solo, purple hair, long hair, red eyes, bodysuit, lancer, gae bolg, warrior, immortal, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["lancer", "immortal", "warrior", "celtic", "purple hair"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Scathach LoRA"], tips: "Add 'Gae Bolg Alternative' for her spear.", seo: { title: "Scathach Stable Diffusion Prompt | FGO AI Art", description: "Create legendary Scathach AI art. The immortal warrior from FGO." } },
  { name: "Jeanne d'Arc", slug: "jeanne-darc", anime: "Fate Grand Order", animeSlug: "fate-grand-order", prompt: "jeanne d'arc \\(fate\\), 1girl, solo, blonde hair, long braid, purple eyes, armor, flag, saint, holy, gentle, masterpiece, best quality", negativePrompt: defaultNegative + ", jalter", tags: ["ruler", "saint", "blonde", "holy", "flag bearer"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Jeanne d'Arc LoRA"], tips: "Add 'jalter' for her dark version. 'Holy light' for divine effects.", seo: { title: "Jeanne d'Arc Stable Diffusion Prompt | FGO AI Art", description: "Generate holy Jeanne AI art. The Maiden of Orleans from FGO." } },
  { name: "Tamamo no Mae", slug: "tamamo-no-mae", anime: "Fate Grand Order", animeSlug: "fate-grand-order", prompt: "tamamo no mae \\(fate\\), 1girl, solo, pink hair, long hair, yellow eyes, fox ears, fox tail, miko, caster, playful, devoted, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["caster", "kitsune", "fox ears", "devoted", "miko"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Tamamo LoRA"], tips: "Add 'fox tail' and 'fox ears' for her kitsune features.", seo: { title: "Tamamo no Mae Stable Diffusion Prompt | FGO AI Art", description: "Create playful Tamamo AI art. The devoted fox wife from FGO." } },
  { name: "Shuten Douji", slug: "shuten-douji", anime: "Fate Grand Order", animeSlug: "fate-grand-order", prompt: "shuten douji \\(fate\\), 1girl, solo, purple hair, short hair, purple eyes, horns, oni, purple kimono, sake, drunk, seductive, petite, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["oni", "assassin", "petite", "horns", "seductive"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Shuten Douji LoRA"], tips: "Add 'sake bottle' or 'drinking' for her alcoholic nature.", seo: { title: "Shuten Douji Stable Diffusion Prompt | FGO AI Art", description: "Generate seductive Shuten AI art. The oni assassin from FGO." } },
  { name: "Raphtalia", slug: "raphtalia", anime: "Shield Hero", animeSlug: "shield-hero", prompt: "raphtalia, 1girl, solo, brown hair, long hair, red eyes, raccoon ears, raccoon tail, sword, adventurer, loyal, devoted, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["demi-human", "raccoon girl", "loyal", "swordswoman", "devoted"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Raphtalia LoRA"], tips: "Specify 'adult' to avoid child version. 'Raccoon ears and tail' are essential.", seo: { title: "Raphtalia Stable Diffusion Prompt | Shield Hero AI Art", description: "Create loyal Raphtalia AI art. The raccoon demi-human from Shield Hero." } },
  { name: "Nagatoro", slug: "nagatoro", anime: "Don't Toy with Me, Miss Nagatoro", animeSlug: "nagatoro", prompt: "nagatoro hayase, 1girl, solo, black hair, long hair, tan, dark skin, fangs, school uniform, teasing, smug, athletic, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["gyaru", "tan", "teasing", "fangs", "tomboy"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Nagatoro LoRA"], tips: "Her 'teasing' or 'smug' expressions are iconic. Add 'fangs' for her sharp teeth.", seo: { title: "Nagatoro Stable Diffusion Prompt | Nagatoro AI Art", description: "Generate teasing Nagatoro AI art. The playful gyaru." } },
  { name: "Uzaki Hana", slug: "uzaki-hana", anime: "Uzaki-chan Wants to Hang Out", animeSlug: "uzaki-chan", prompt: "uzaki hana, 1girl, solo, silver hair, short hair, blue eyes, fang, sugoi dekai shirt, energetic, annoying, cute, shortstack, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["shortstack", "fang", "energetic", "college", "annoying cute"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Uzaki LoRA"], tips: "Her 'sugoi dekai' shirt is iconic. Add 'cat mouth' for her expression.", seo: { title: "Uzaki Hana Stable Diffusion Prompt | Uzaki-chan AI Art", description: "Create energetic Uzaki AI art. The playful kouhai." } },
  { name: "Komi Shouko", slug: "komi-shouko", anime: "Komi Can't Communicate", animeSlug: "komi-san", prompt: "komi shouko, 1girl, solo, black hair, long hair, purple eyes, beautiful, goddess, school uniform, tall, elegant, shy, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["goddess", "shy", "beautiful", "tall", "elegant"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Komi LoRA"], tips: "Add 'notebook' for her communication method. 'Cat ears gesture' when excited.", seo: { title: "Komi Shouko Stable Diffusion Prompt | Komi-san AI Art", description: "Generate beautiful Komi AI art. The communication goddess." } },
  { name: "Bocchi", slug: "bocchi", anime: "Bocchi the Rock", animeSlug: "bocchi-the-rock", prompt: "gotoh hitori, bocchi, 1girl, solo, pink hair, long hair, blue eyes, pink jersey, guitar, social anxiety, nervous, melting, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["guitarist", "social anxiety", "pink hair", "nervous", "melting"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Bocchi LoRA"], tips: "Add 'melting' or 'dissolving' for her anxiety visual gags.", seo: { title: "Bocchi Stable Diffusion Prompt | Bocchi the Rock AI Art", description: "Create anxious Bocchi AI art. The socially anxious guitarist." } },
  { name: "Ikuyo Kita", slug: "ikuyo-kita", anime: "Bocchi the Rock", animeSlug: "bocchi-the-rock", prompt: "kita ikuyo, 1girl, solo, red hair, long hair, orange eyes, cheerful, energetic, school uniform, guitar, star hair ornament, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["guitarist", "cheerful", "red hair", "energetic", "idol"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Kita LoRA"], tips: "Her 'star hair ornament' is distinctive. Add 'sparkling' for idol energy.", seo: { title: "Kita Ikuyo Stable Diffusion Prompt | Bocchi the Rock AI Art", description: "Generate cheerful Kita AI art. The energetic guitarist." } },
  // TIER B (76-100)
  { name: "Lucy", slug: "lucy-elfen-lied", anime: "Elfen Lied", animeSlug: "elfen-lied", prompt: "lucy \\(elfen lied\\), nyu, 1girl, solo, pink hair, long hair, red eyes, horns, diclonius, bandages, innocent, dangerous, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["diclonius", "horns", "vectors", "split personality", "dangerous"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Lucy Elfen Lied LoRA"], tips: "She has two personalities - 'Lucy' (dangerous) and 'Nyu' (innocent).", seo: { title: "Lucy Stable Diffusion Prompt | Elfen Lied AI Art", description: "Create haunting Lucy AI art. The diclonius queen from Elfen Lied." } },
  { name: "C.C.", slug: "cc", anime: "Code Geass", animeSlug: "code-geass", prompt: "c.c. \\(code geass\\), 1girl, solo, green hair, very long hair, yellow eyes, immortal, white straitjacket, pizza, mysterious, smirk, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["immortal", "green hair", "mysterious", "pizza lover", "witch"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["C.C. LoRA"], tips: "Add 'pizza' for her obsession. 'Cheese-kun' for her plushie.", seo: { title: "C.C. Stable Diffusion Prompt | Code Geass AI Art", description: "Generate mysterious C.C. AI art. The immortal witch from Code Geass." } },
  { name: "Kallen Stadtfeld", slug: "kallen-stadtfeld", anime: "Code Geass", animeSlug: "code-geass", prompt: "kallen stadtfeld, 1girl, solo, red hair, short hair, blue eyes, pilot suit, black knights, rebel, fierce, determined, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["pilot", "rebel", "red hair", "fierce", "athletic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Kallen LoRA"], tips: "She has two identities - 'Stadtfeld' (student) and 'Kouzuki' (rebel).", seo: { title: "Kallen Stadtfeld Stable Diffusion Prompt | Code Geass AI Art", description: "Create fierce Kallen AI art. The ace pilot from Code Geass." } },
  { name: "Ryuko Matoi", slug: "ryuko-matoi", anime: "Kill la Kill", animeSlug: "kill-la-kill", prompt: "matoi ryuuko, 1girl, solo, black hair, red highlights, blue eyes, senketsu, sailor uniform, scissor blade, rebellious, fierce, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["magical girl", "rebellious", "scissor blade", "senketsu", "fierce"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Ryuko Matoi LoRA"], tips: "Her 'senketsu' transforms for different forms. Add 'scissor blade' for her weapon.", seo: { title: "Ryuko Matoi Stable Diffusion Prompt | Kill la Kill AI Art", description: "Generate fierce Ryuko AI art. The scissor blade wielder from Kill la Kill." } },
  { name: "Satsuki Kiryuin", slug: "satsuki-kiryuin", anime: "Kill la Kill", animeSlug: "kill-la-kill", prompt: "kiryuuin satsuki, 1girl, solo, black hair, long hair, blue eyes, junketsu, regal, thick eyebrows, sword, dominant, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["president", "regal", "dominant", "junketsu", "commander"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Satsuki LoRA"], tips: "Her 'thick eyebrows' are iconic. 'Junketsu' for her kamui.", seo: { title: "Satsuki Kiryuin Stable Diffusion Prompt | Kill la Kill AI Art", description: "Create regal Satsuki AI art. The student council president from Kill la Kill." } },
  { name: "Yuno Gasai", slug: "yuno-gasai", anime: "Future Diary", animeSlug: "future-diary", prompt: "gasai yuno, 1girl, solo, pink hair, long hair, pink eyes, yandere, school uniform, knife, crazy eyes, heart pupils, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["yandere", "pink hair", "crazy", "obsessive", "knife"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Yuno Gasai LoRA"], tips: "The original yandere - 'crazy eyes' and 'heart pupils' when thinking of Yukki.", seo: { title: "Yuno Gasai Stable Diffusion Prompt | Future Diary AI Art", description: "Generate yandere Yuno AI art. The obsessive lover from Future Diary." } },
  { name: "Kurisu Makise", slug: "kurisu-makise", anime: "Steins;Gate", animeSlug: "steins-gate", prompt: "makise kurisu, 1girl, solo, red hair, long hair, blue eyes, lab coat, tie, tsundere, scientist, genius, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["scientist", "genius", "tsundere", "red hair", "lab coat"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Kurisu LoRA"], tips: "She's a tsundere scientist - 'embarrassed' and 'blush' work well.", seo: { title: "Kurisu Makise Stable Diffusion Prompt | Steins;Gate AI Art", description: "Create genius Kurisu AI art. The brilliant scientist from Steins;Gate." } },
  { name: "Asuka Langley", slug: "asuka-langley", anime: "Neon Genesis Evangelion", animeSlug: "evangelion", prompt: "souryuu asuka langley, 1girl, solo, red hair, twintails, blue eyes, interface headset, red plugsuit, eva pilot, tsundere, proud, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["eva pilot", "tsundere", "red hair", "plugsuit", "proud"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Asuka LoRA"], tips: "Rebuild version is 'shikinami'. Add 'interface headset' for neural clips.", seo: { title: "Asuka Langley Stable Diffusion Prompt | Evangelion AI Art", description: "Generate fierce Asuka AI art. The Eva-02 pilot from Evangelion." } },
  { name: "Rei Ayanami", slug: "rei-ayanami", anime: "Neon Genesis Evangelion", animeSlug: "evangelion", prompt: "ayanami rei, 1girl, solo, blue hair, short hair, red eyes, pale skin, white plugsuit, eva pilot, emotionless, mysterious, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["eva pilot", "emotionless", "blue hair", "mysterious", "clone"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Rei Ayanami LoRA"], tips: "Her 'emotionless' expression is key. Add 'bandages' for injured scenes.", seo: { title: "Rei Ayanami Stable Diffusion Prompt | Evangelion AI Art", description: "Create mysterious Rei AI art. The enigmatic pilot from Evangelion." } },
  { name: "Mari Makinami", slug: "mari-makinami", anime: "Evangelion Rebuild", animeSlug: "evangelion", prompt: "makinami mari, 1girl, solo, brown hair, twintails, glasses, pink plugsuit, eva pilot, cheerful, eccentric, singing, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["eva pilot", "glasses", "cheerful", "eccentric", "pink plugsuit"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Mari LoRA"], tips: "She's exclusive to Rebuild films. Add 'glasses' as they're essential.", seo: { title: "Mari Makinami Stable Diffusion Prompt | Evangelion Rebuild AI Art", description: "Generate cheerful Mari AI art. The eccentric pilot from Evangelion Rebuild." } },
  { name: "Misato Katsuragi", slug: "misato-katsuragi", anime: "Neon Genesis Evangelion", animeSlug: "evangelion", prompt: "katsuragi misato, 1girl, solo, purple hair, long hair, brown eyes, red jacket, cross necklace, nerv uniform, mature, beer, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["nerv", "mature", "purple hair", "beer lover", "caring"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Misato LoRA"], tips: "Her 'cross necklace' is important. Add 'beer can' for her alcoholic habits.", seo: { title: "Misato Katsuragi Stable Diffusion Prompt | Evangelion AI Art", description: "Create cool Misato AI art. The NERV operations director from Evangelion." } },
  { name: "Cynthia", slug: "cynthia-pokemon", anime: "Pokemon", animeSlug: "pokemon", prompt: "shirona \\(pokemon\\), cynthia, 1girl, solo, blonde hair, very long hair, grey eyes, black outfit, champion, garchomp, elegant, powerful, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["champion", "blonde", "elegant", "powerful", "garchomp"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Cynthia Pokemon LoRA"], tips: "Add 'garchomp' for her ace Pokemon. 'Ice cream' for her love of it.", seo: { title: "Cynthia Stable Diffusion Prompt | Pokemon AI Art", description: "Create elegant Cynthia AI art. The Sinnoh Champion from Pokemon." } },
  { name: "Marnie", slug: "marnie-pokemon", anime: "Pokemon", animeSlug: "pokemon", prompt: "mary \\(pokemon\\), marnie, 1girl, solo, black hair, twintails, green eyes, gothic, black dress, leather jacket, morpeko, cool, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["rival", "gothic", "twintails", "punk", "morpeko"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Marnie Pokemon LoRA"], tips: "Add 'morpeko' for her partner Pokemon. 'Team Yell' are her fans.", seo: { title: "Marnie Stable Diffusion Prompt | Pokemon AI Art", description: "Generate cool Marnie AI art. The Galar rival from Pokemon." } },
  { name: "Nessa", slug: "nessa-pokemon", anime: "Pokemon", animeSlug: "pokemon", prompt: "rurina \\(pokemon\\), nessa, 1girl, solo, black hair, long hair, blue eyes, dark skin, gym leader, swimsuit, water type, model, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["gym leader", "dark skin", "model", "water type", "athletic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Nessa Pokemon LoRA"], tips: "She's also a model - 'modeling pose' works well.", seo: { title: "Nessa Stable Diffusion Prompt | Pokemon AI Art", description: "Create stunning Nessa AI art. The Water-type Gym Leader from Pokemon." } },
  { name: "Lucoa", slug: "lucoa", anime: "Miss Kobayashi's Dragon Maid", animeSlug: "dragon-maid", prompt: "quetzalcoatl \\(maidragon\\), lucoa, 1girl, solo, blonde hair, very long hair, heterochromia, dragon, aztec, hat, relaxed, mature, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["dragon", "heterochromia", "blonde", "mature", "aztec"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Lucoa LoRA"], tips: "Her eyes are 'heterochromia' - different colors. 'Sleepy' fits her.", seo: { title: "Lucoa Stable Diffusion Prompt | Dragon Maid AI Art", description: "Create relaxed Lucoa AI art. The former goddess dragon from Dragon Maid." } },
  { name: "Tohru", slug: "tohru", anime: "Miss Kobayashi's Dragon Maid", animeSlug: "dragon-maid", prompt: "tohru \\(maidragon\\), 1girl, solo, blonde hair, long hair, red eyes, dragon horns, dragon tail, maid uniform, devoted, energetic, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["dragon", "maid", "devoted", "blonde", "energetic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Tohru LoRA"], tips: "Her tail ends in a 'heart shape'. Add 'dragon horns' for her features.", seo: { title: "Tohru Stable Diffusion Prompt | Dragon Maid AI Art", description: "Generate devoted Tohru AI art. The loving dragon maid." } },
  { name: "Elma", slug: "elma", anime: "Miss Kobayashi's Dragon Maid", animeSlug: "dragon-maid", prompt: "elma \\(maidragon\\), 1girl, solo, blue hair, long hair, purple eyes, horn, dragon, office lady, suit, eating, food lover, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["dragon", "office lady", "food lover", "blue hair", "serious"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Elma LoRA"], tips: "Add 'eating' or 'food' for her obsession with eating.", seo: { title: "Elma Stable Diffusion Prompt | Dragon Maid AI Art", description: "Create hungry Elma AI art. The food-loving dragon from Dragon Maid." } },
  { name: "Shiro", slug: "shiro", anime: "No Game No Life", animeSlug: "no-game-no-life", prompt: "shiro \\(no game no life\\), 1girl, solo, white hair, very long hair, red eyes, pale skin, crown, gothic dress, genius, gamer, emotionless, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["genius", "gamer", "white hair", "emotionless", "gothic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Shiro NGNL LoRA"], tips: "Add 'crown' for her queen aesthetic. 'Expressionless' is her default state.", seo: { title: "Shiro Stable Diffusion Prompt | No Game No Life AI Art", description: "Create genius Shiro AI art. The gaming prodigy from No Game No Life." } },
  { name: "Jibril", slug: "jibril", anime: "No Game No Life", animeSlug: "no-game-no-life", prompt: "jibril \\(no game no life\\), 1girl, solo, pink hair, long hair, yellow eyes, halo, angel wings, multicolored wings, knowledge seeker, playful, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["angel", "fluegel", "halo", "knowledge seeker", "playful"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Jibril LoRA"], tips: "She's a 'Fluegel' not standard angel. Her wings are 'multicolored'.", seo: { title: "Jibril Stable Diffusion Prompt | No Game No Life AI Art", description: "Generate powerful Jibril AI art. The Fluegel from No Game No Life." } },
  { name: "Sinon", slug: "sinon", anime: "Sword Art Online", animeSlug: "sword-art-online", prompt: "asada shino, sinon, 1girl, solo, blue hair, short hair, blue eyes, sniper, gun gale online, hecate ii, scarf, confident, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["sniper", "gamer", "blue hair", "cool", "sharpshooter"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Sinon LoRA"], tips: "GGO outfit uses 'military' and 'scarf'. ALO version has 'cat ears'.", seo: { title: "Sinon Stable Diffusion Prompt | SAO AI Art", description: "Create cool Sinon AI art. The legendary sniper from SAO." } },
  { name: "Alice Zuberg", slug: "alice-zuberg", anime: "Sword Art Online", animeSlug: "sword-art-online", prompt: "alice zuberg, alice synthesis thirty, 1girl, solo, blonde hair, long hair, blue eyes, golden armor, integrity knight, sword, noble, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["knight", "blonde", "armor", "noble", "integrity knight"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Alice Zuberg LoRA"], tips: "'Alice Synthesis Thirty' is her knight name. 'Golden armor' is iconic.", seo: { title: "Alice Zuberg Stable Diffusion Prompt | SAO AI Art", description: "Generate noble Alice AI art. The Integrity Knight from SAO Alicization." } },
  { name: "Kurumi Tokisaki", slug: "kurumi-tokisaki", anime: "Date A Live", animeSlug: "date-a-live", prompt: "tokisaki kurumi, 1girl, solo, black hair, twintails, heterochromia, red eye, yellow clock eye, gothic lolita, clock, yandere, elegant, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["spirit", "gothic lolita", "heterochromia", "clock eye", "yandere"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Kurumi Tokisaki LoRA"], tips: "Her left eye is a 'clock'. Add 'heterochromia' for her unique eyes.", seo: { title: "Kurumi Tokisaki Stable Diffusion Prompt | Date A Live AI Art", description: "Generate elegant Kurumi AI art. The Spirit with time powers from Date A Live." } },
  { name: "Rebecca", slug: "rebecca", anime: "Cyberpunk Edgerunners", animeSlug: "cyberpunk-edgerunners", prompt: "rebecca \\(cyberpunk\\), 1girl, solo, white hair, short hair, pink eyes, cyberpunk, chrome, shotgun, shortstack, chaotic, energetic, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["cyberpunk", "shortstack", "chrome", "chaotic", "energetic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Rebecca Cyberpunk LoRA"], tips: "Add 'cybernetic' or 'chrome' for her augmentations. 'Shotgun' for her weapon.", seo: { title: "Rebecca Stable Diffusion Prompt | Cyberpunk Edgerunners AI Art", description: "Create chaotic Rebecca AI art. The trigger-happy solo from Edgerunners." } },
  { name: "Lucy Cyberpunk", slug: "lucy-cyberpunk", anime: "Cyberpunk Edgerunners", animeSlug: "cyberpunk-edgerunners", prompt: "lucy \\(cyberpunk\\), 1girl, solo, white hair, multicolored hair, blue eyes, cyberpunk, netrunner, moon, mysterious, cool, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["cyberpunk", "netrunner", "mysterious", "cool", "moon"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Lucy Cyberpunk LoRA"], tips: "Her dream is the 'moon'. Add 'netrunner' for her profession.", seo: { title: "Lucy Stable Diffusion Prompt | Cyberpunk Edgerunners AI Art", description: "Generate mysterious Lucy AI art. The netrunner from Edgerunners." } },
  { name: "Ilulu", slug: "ilulu", anime: "Miss Kobayashi's Dragon Maid", animeSlug: "dragon-maid", prompt: "ilulu \\(maidragon\\), 1girl, solo, pink hair, long hair, red eyes, dragon horns, fang, dragon tail, shortstack, energetic, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["dragon", "shortstack", "pink hair", "horns", "energetic"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Pony Diffusion V6"], recommendedLoras: ["Ilulu LoRA"], tips: "She's a 'shortstack' body type. Her horns curl backwards.", seo: { title: "Ilulu Stable Diffusion Prompt | Dragon Maid AI Art", description: "Create energetic Ilulu AI art. The chaos dragon from Dragon Maid." } },
  { name: "Sonia", slug: "sonia-pokemon", anime: "Pokemon", animeSlug: "pokemon", prompt: "sonia \\(pokemon\\), 1girl, solo, orange hair, long hair, green eyes, lab coat, professor, pokemon researcher, mature, glasses, masterpiece, best quality", negativePrompt: defaultNegative, tags: ["professor", "researcher", "orange hair", "mature", "lab coat"], recommendedModels: ["NoobAI-XL", "Illustrious-XL", "Animagine XL 3.1"], recommendedLoras: ["Sonia Pokemon LoRA"], tips: "She becomes a Pokemon Professor. Add 'yamper' for her partner Pokemon.", seo: { title: "Sonia Stable Diffusion Prompt | Pokemon AI Art", description: "Generate elegant Sonia AI art. The Pokemon researcher from Galar." } },
];

// Helper Functions
export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}

export function getCharactersByAnime(animeSlug: string): Character[] {
  return characters.filter((c) => c.animeSlug === animeSlug);
}

export function getCharactersByTag(tag: string): Character[] {
  return characters.filter((c) => c.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  characters.forEach((c) => c.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getAllAnimes(): { name: string; slug: string; count: number }[] {
  const animeMap = new Map<string, { name: string; count: number }>();
  characters.forEach((c) => {
    const existing = animeMap.get(c.animeSlug);
    if (existing) {
      existing.count++;
    } else {
      animeMap.set(c.animeSlug, { name: c.anime, count: 1 });
    }
  });
  return Array.from(animeMap.entries())
    .map(([slug, data]) => ({ slug, ...data }))
    .sort((a, b) => b.count - a.count);
}

export function searchCharacters(query: string): Character[] {
  const lowerQuery = query.toLowerCase();
  return characters.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.anime.toLowerCase().includes(lowerQuery) ||
      c.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  );
}

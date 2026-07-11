// ============================================================
// BLISS GLOW — Product Catalogue (prototype data layer)
// Prices in GBP, VAT inclusive. Replace with CMS/API data
// (or Wix Stores collections) in production.
// ============================================================

const BG_CATEGORIES = [
  { id: "skincare",     name: "Skincare",      desc: "Serums, masks & glow essentials", emoji: "🧴", g: "g-rose" },
  { id: "beauty-tools", name: "Beauty Tools",  desc: "Pro tools for your routine",      emoji: "💎", g: "g-gold" },
  { id: "wellness",     name: "Wellness",      desc: "Relax, restore and unwind",       emoji: "🌸", g: "g-plum" },
  { id: "hair-body",    name: "Hair & Body",   desc: "Head-to-toe self-care",           emoji: "✨", g: "g-mauve" }
];

const BG_PRODUCTS = [
  {
    id: "led-mask", name: "LED Light Therapy Mask", category: "skincare",
    price: 39.99, oldPrice: 54.99, badge: "Best Seller", rating: 4.8, reviews: 214,
    emoji: "✨", g: "g-rose", stock: "in",
    short: "Red and blue light therapy for smoother, clearer-looking skin — a spa treatment at home.",
    features: ["7 light therapy modes", "Rechargeable via USB-C", "Comfortable, lightweight fit", "10-minute daily sessions"],
    specs: { "Light modes": "7 (red, blue, green + combos)", "Battery": "1200 mAh, USB-C", "Weight": "310 g", "In the box": "Mask, USB-C cable, user guide" },
    variants: null
  },
  {
    id: "gua-sha-set", name: "Jade Facial Roller & Gua Sha Set", category: "skincare",
    price: 14.99, oldPrice: 19.99, badge: "Sale", rating: 4.7, reviews: 189,
    emoji: "💚", g: "g-plum", stock: "in",
    short: "Sculpt, de-puff and boost circulation with the classic two-piece jade ritual.",
    features: ["100% natural stone", "Cooling and calming", "Reduces morning puffiness", "Gift-ready box"],
    specs: { "Material": "Natural jade stone", "Pieces": "Roller + gua sha", "Care": "Rinse with cool water", "In the box": "Roller, gua sha, pouch" },
    variants: { label: "Stone", options: ["Jade", "Rose Quartz"] }
  },
  {
    id: "vitamin-c-serum", name: "Vitamin C Brightening Serum", category: "skincare",
    price: 18.99, oldPrice: null, badge: "New", rating: 4.6, reviews: 96,
    emoji: "🍊", g: "g-gold", stock: "in",
    short: "A daily glow shot — 15% vitamin C with hyaluronic acid for brighter, plumper skin.",
    features: ["15% stabilised vitamin C", "With hyaluronic acid", "Fragrance free", "Suitable for daily use"],
    specs: { "Volume": "30 ml", "Key actives": "Vitamin C 15%, HA", "Skin type": "All skin types", "Use": "Morning, before SPF" },
    variants: null
  },
  {
    id: "eye-patches", name: "Collagen Under-Eye Patches (30 pairs)", category: "skincare",
    price: 12.99, oldPrice: 16.99, badge: "Sale", rating: 4.5, reviews: 143,
    emoji: "👁️", g: "g-blush", stock: "in",
    short: "Cooling hydrogel patches that brighten tired eyes in 15 minutes.",
    features: ["30 pairs per jar", "Collagen + hyaluronic acid", "Cooling hydrogel", "Fits all face shapes"],
    specs: { "Quantity": "30 pairs", "Key actives": "Collagen, HA", "Use": "15–20 min, 3x per week", "Storage": "Cool, dry place" },
    variants: null
  },
  {
    id: "cleansing-brush", name: "Sonic Facial Cleansing Brush", category: "beauty-tools",
    price: 19.99, oldPrice: null, badge: null, rating: 4.7, reviews: 167,
    emoji: "🫧", g: "g-blush", stock: "in",
    short: "Soft silicone sonic brush for a deep yet gentle cleanse — waterproof and travel-sized.",
    features: ["8000 sonic pulses/min", "Medical-grade silicone", "100% waterproof", "1 charge = 90 uses"],
    specs: { "Modes": "5 intensities", "Battery": "USB rechargeable", "Waterproof": "IPX7", "In the box": "Brush, USB cable" },
    variants: { label: "Colour", options: ["Blush Pink", "Ivory", "Sage"] }
  },
  {
    id: "facial-steamer", name: "Nano Ionic Facial Steamer", category: "beauty-tools",
    price: 29.99, oldPrice: 39.99, badge: "Sale", rating: 4.6, reviews: 88,
    emoji: "♨️", g: "g-mauve", stock: "low",
    short: "Open pores and prep skin with fine nano-ionic steam — the perfect pre-mask step.",
    features: ["Nano-ionic warm mist", "Ready in 30 seconds", "Auto shut-off", "Quiet operation"],
    specs: { "Tank": "70 ml (≈10 min steam)", "Heat-up": "30 seconds", "Safety": "Auto shut-off", "In the box": "Steamer, measuring cup" },
    variants: null
  },
  {
    id: "ice-roller", name: "Ice Roller for Face & Eyes", category: "beauty-tools",
    price: 11.99, oldPrice: null, badge: null, rating: 4.4, reviews: 121,
    emoji: "🧊", g: "g-plum", stock: "in",
    short: "Instantly de-puff, calm and tighten — keep it in the freezer for a morning reset.",
    features: ["Stays cold for 20+ min", "Soothes and de-puffs", "Detachable head", "Easy-grip handle"],
    specs: { "Material": "Gel core, ABS handle", "Use": "Freeze 15 min before use", "Care": "Wipe clean", "In the box": "Roller + spare head" },
    variants: null
  },
  {
    id: "led-brush", name: "Scalp Massager & Serum Applicator", category: "beauty-tools",
    price: 13.99, oldPrice: null, badge: "New", rating: 4.5, reviews: 54,
    emoji: "💆", g: "g-gold", stock: "in",
    short: "Massage serums into the scalp and boost circulation for healthier-looking hair.",
    features: ["Soft silicone bristles", "Built-in serum reservoir", "Relaxing scalp massage", "Use wet or dry"],
    specs: { "Material": "Food-grade silicone", "Reservoir": "10 ml", "Use": "Wet or dry hair", "Care": "Rinse after use" },
    variants: null
  },
  {
    id: "neck-massager", name: "Neck & Shoulder Heat Massager", category: "wellness",
    price: 29.99, oldPrice: 44.99, badge: "Best Seller", rating: 4.8, reviews: 262,
    emoji: "🤍", g: "g-rose", stock: "in",
    short: "Deep-kneading shiatsu massage with gentle heat — melt away the day in 15 minutes.",
    features: ["Shiatsu deep kneading", "Soothing heat function", "4 intensity levels", "USB rechargeable"],
    specs: { "Modes": "4 intensities + heat", "Battery": "2500 mAh", "Session": "15 min auto-off", "In the box": "Massager, USB cable" },
    variants: null
  },
  {
    id: "diffuser", name: "Aromatherapy Ultrasonic Diffuser", category: "wellness",
    price: 24.99, oldPrice: null, badge: null, rating: 4.7, reviews: 178,
    emoji: "🌫️", g: "g-mauve", stock: "in",
    short: "Whisper-quiet ultrasonic mist with warm ambient light — your nightly wind-down ritual.",
    features: ["300 ml tank (8h mist)", "7-colour ambient light", "Whisper quiet", "Auto shut-off"],
    specs: { "Tank": "300 ml", "Runtime": "Up to 8 hours", "Light": "7 colours, dimmable", "In the box": "Diffuser, adapter" },
    variants: { label: "Finish", options: ["Light Wood", "Dark Wood"] }
  },
  {
    id: "sleep-mask", name: "Silk Sleep Mask & Scrunchie Set", category: "wellness",
    price: 9.99, oldPrice: 13.99, badge: "Sale", rating: 4.6, reviews: 133,
    emoji: "🌙", g: "g-blush", stock: "in",
    short: "Pure mulberry silk that's kind to skin and hair — wake up glowing, not creased.",
    features: ["100% mulberry silk", "Kind to skin & lashes", "Includes 2 scrunchies", "Gift-ready pouch"],
    specs: { "Material": "22-momme mulberry silk", "Set": "Mask + 2 scrunchies", "Care": "Hand wash cold", "Colours": "3 options" },
    variants: { label: "Colour", options: ["Champagne", "Blush", "Charcoal"] }
  },
  {
    id: "heatless-curls", name: "Heatless Curling Ribbon Kit", category: "hair-body",
    price: 13.99, oldPrice: 17.99, badge: null, rating: 4.4, reviews: 109,
    emoji: "🎀", g: "g-rose", stock: "in",
    short: "Overnight curls with zero heat damage — soft satin ribbon, salon-worthy waves.",
    features: ["Zero heat damage", "Soft satin finish", "Works on all hair lengths", "Includes 2 scrunchies + clips"],
    specs: { "Material": "Satin", "Length": "95 cm", "Set": "Ribbon, 2 scrunchies, 2 clips", "Care": "Hand wash" },
    variants: { label: "Colour", options: ["Blush", "Ivory"] }
  },
  {
    id: "body-brush", name: "Dry Body Brush with Natural Bristles", category: "hair-body",
    price: 10.99, oldPrice: null, badge: null, rating: 4.5, reviews: 87,
    emoji: "🌿", g: "g-bronze", stock: "in",
    short: "Daily dry brushing to smooth, exfoliate and energise — a classic ritual done right.",
    features: ["Natural sisal bristles", "Ergonomic wooden handle", "Gentle exfoliation", "Vegan friendly"],
    specs: { "Bristles": "Natural sisal", "Handle": "Beech wood", "Use": "Before showering", "Care": "Keep dry" },
    variants: null
  }
];

const BG_TESTIMONIALS = [
  { name: "Sophie M.", where: "London", stars: 5, text: "The LED mask has genuinely changed my skin. Two weeks in and my texture is noticeably smoother.", product: "LED Light Therapy Mask" },
  { name: "Amelia R.", where: "Manchester", stars: 5, text: "Beautiful packaging, fast delivery and the gua sha set feels far more premium than the price.", product: "Jade Roller & Gua Sha Set" },
  { name: "Charlotte B.", where: "Bristol", stars: 4, text: "The neck massager is my evening ritual now. Heat function is bliss after a desk day.", product: "Neck & Shoulder Massager" }
];

const BG_REVIEWS = {
  "led-mask": [
    { name: "Sophie M.", stars: 5, text: "Two weeks in and my skin texture is noticeably smoother. The timer makes it effortless." },
    { name: "Hannah T.", stars: 5, text: "Comfortable to wear while reading. Visible glow after a few sessions." },
    { name: "Priya K.", stars: 4, text: "Great quality for the price. Wish the strap was slightly longer, otherwise perfect." }
  ],
  "neck-massager": [
    { name: "Charlotte B.", stars: 5, text: "The heat function is bliss after a desk day. Deep kneading feels like real hands." },
    { name: "James W.", stars: 5, text: "Bought it for my wife — now we argue over whose turn it is." },
    { name: "Elena S.", stars: 4, text: "Really effective. A little firm on the highest setting, but that's what the levels are for." }
  ],
  _default: [
    { name: "Verified customer", stars: 5, text: "Exactly as described, beautifully packaged and arrived quickly. Would buy again." },
    { name: "Verified customer", stars: 4, text: "Lovely quality for the price. Delivery to the UK took four days." }
  ]
};

const BG_FAQS = [
  { q: "How long does delivery take?", a: "Delivery is FREE on every UK order and takes 2–4 working days. You will receive a tracking link as soon as your parcel ships." },
  { q: "What is your returns policy?", a: "You have 30 days from delivery to return any unused item in its original packaging for a full refund — no questions asked. Returns are free for UK customers." },
  { q: "Which payment methods do you accept?", a: "We accept all major credit and debit cards, PayPal, Apple Pay and Google Pay. All payments are processed over encrypted, secure connections." },
  { q: "Are your products cruelty-free?", a: "Yes. We only source products that are cruelty-free, and our silk and stone tools are responsibly sourced." },
  { q: "How can I track my order?", a: "As soon as your order ships you'll receive an email with a tracking link. You can also track it any time from the Orders section of your account." }
];

const BG_DELIVERY = {
  freeOver: 0,
  options: [
    { id: "standard", name: "Free UK Delivery", eta: "2–4 working days", price: 0 }
  ]
};

const BG_COUPONS = { GLOW10: 0.10, WELCOME15: 0.15 };

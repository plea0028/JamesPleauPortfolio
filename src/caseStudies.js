import { algonquinGo, konnichiwa, tunementor } from './assets/images';

export const caseStudies = [
  {
    id: '1',
    slug: 'algonquin-go',
    title: 'Algonquin GO',
    category: 'Mobile Safety App',
    img: algonquinGo,
    theme: {
      accent: '#0e7b68',
      accentSoft: 'rgba(14, 123, 104, 0.16)',
      glow: 'rgba(73, 231, 196, 0.8)',
      glowSoft: 'rgba(73, 231, 196, 0.18)',
    },
    summary:
      'Award Winning 🏆 A campus safety companion focused on fast emergency access, clear incident reporting, and peace of mind for students and staff.',
    intro:
      'Algonquin GO was designed around urgency without panic. The experience had to feel immediate, readable, and dependable for students moving between buildings, parking lots, and late-night study sessions.',
    details: [
      { label: 'Role', value: 'Product design, interface system, front-end implementation' },
      { label: 'Focus', value: 'Emergency access, reporting, wayfinding, reassurance' },
      { label: 'Outcome', value: 'A safer-feeling mobile flow with fewer steps and clearer hierarchy' },
    ],
    story: [
      {
        eyebrow: '01 / Context',
        title: 'Start with the highest-stakes actions first.',
        text:
          'The landing experience puts emergency access at the center while keeping support tools close by. The visual language stays minimal so the user can move fast without scanning through decoration.',
        image: algonquinGo,
        alt: 'Algonquin GO home screen and emergency access interface',
        layout: 'right',
      },
      {
        eyebrow: '02 / Flow',
        title: 'Make reporting feel guided, not clinical.',
        text:
          'The reporting flow breaks a stressful task into calm, sequential steps. Each screen reduces choices, explains what happens next, and keeps the user oriented as they move forward.',
        image: algonquinGo,
        alt: 'Algonquin GO reporting flow screen',
        layout: 'left',
      },
      {
        eyebrow: '03 / Impact',
        title: 'End with clarity and a visible next step.',
        text:
          'The final state confirms the report, surfaces support options, and reinforces trust. It closes the loop instead of leaving the user wondering whether the app received their request.',
        image: algonquinGo,
        alt: 'Algonquin GO confirmation and support state',
        layout: 'right',
      },
    ],
    takeaway: {
      title: "Designing for high stakes means stripping away noise.",
      text: "Algonquin GO proved that safety utilities require extreme clarity. By substituting aesthetic decoration with strict hierarchy, distinct context blocks, and intentional visual pacing, the platform builds deep user trust exactly when they need it most."
    }
  },
  {
    id: '2',
    slug: 'tunementor',
    title: 'Tunementor',
    category: 'Mobile Music Education App',
    img: tunementor,
    theme: {
      accent: '#6752e8',
      accentSoft: 'rgba(103, 82, 232, 0.16)',
      glow: 'rgba(150, 121, 255, 0.82)',
      glowSoft: 'rgba(150, 121, 255, 0.2)',
    },
    summary:
      'A music education tool used by students and teachers to track progress, access resources, and foster musical growth in a fun and engaging way.',
    intro:
      'Tunementor needed to work for both practice and teaching. The interface balances progress tracking, lesson discovery, and motivation so the app feels useful in a classroom and at home.',
    details: [
      { label: 'Role', value: 'UX strategy, product visuals, interactive layout' },
      { label: 'Focus', value: 'Progress, lesson flow, encouragement, teacher visibility' },
      { label: 'Outcome', value: 'A clearer practice loop with more momentum for students' },
    ],
    story: [
      {
        eyebrow: '01 / Dashboard',
        title: 'Put progress in sight before the next task.',
        text:
          'The opening screen shows where the student is today and what deserves attention next. Progress, streaks, and upcoming lessons are grouped into a single visual rhythm so the experience feels active, not crowded.',
        image: tunementor,
        alt: 'Tunementor dashboard showing progress and lessons',
        layout: 'left',
      },
      {
        eyebrow: '02 / Practice',
        title: 'Keep the lesson flow short and rewarding.',
        text:
          'Practice screens use large targets, concise prompts, and strong feedback states. The design reduces friction during repetition while still giving teachers enough structure to monitor progress.',
        image: tunementor,
        alt: 'Tunementor practice screen with lesson controls',
        layout: 'right',
      },
      {
        eyebrow: '03 / Momentum',
        title: 'Close with encouragement and a clear next action.',
        text:
          'The final moments focus on accomplishment. A visible completion state, warm color accents, and the next lesson suggestion turn practice into a loop instead of a dead end.',
        image: tunementor,
        alt: 'Tunementor completion and next lesson screen',
        layout: 'left',
      },
    ],
    takeaway: {
      title: "Transforming long-term habits into short, satisfying routines.",
      text: "The success of Tunementor relies on balanced workflows that reward small wins. Creating an open, encouraging loop between teachers and students keeps practice continuous, turning what usually feels like a static chore into active progress."
    }
  },
  {
    id: '3',
    slug: 'konnichiwa',
    title: 'Konnichiwa',
    category: 'Bubble Tea Website',
    img: konnichiwa,
    theme: {
      accent: '#f07c4f',
      accentSoft: 'rgba(240, 124, 79, 0.16)',
      glow: 'rgba(255, 173, 116, 0.84)',
      glowSoft: 'rgba(255, 173, 116, 0.2)',
    },
    summary:
      'A playful product website built to highlight seasonal drinks, simplify ordering journeys, and strengthen brand personality online.',
    intro:
      'Konnichiwa turns a menu into a brand experience. The page needed to feel playful and warm, while still making flavor discovery and ordering straightforward on mobile and desktop.',
    details: [
      { label: 'Role', value: 'Brand-led web design, UI system, motion direction' },
      { label: 'Focus', value: 'Menu discovery, seasonal drops, ordering, brand character' },
      { label: 'Outcome', value: 'A more memorable storefront that still moves people to order' },
    ],
    story: [
      {
        eyebrow: '01 / Arrival',
        title: 'Use the first view to sell the mood.',
        text:
          'The hero introduces the brand with bold typography, textured color, and product-first imagery. It sets the tone quickly so the site feels like an extension of the shop rather than a generic ordering page.',
        image: konnichiwa,
        alt: 'Konnichiwa homepage with featured bubble tea products',
        layout: 'right',
      },
      {
        eyebrow: '02 / Selection',
        title: 'Make the menu easy to scan without flattening the brand.',
        text:
          'Seasonal drinks, add-ons, and flavor notes are arranged into clear modules. The result is playful, but the shopping path stays simple enough for fast decisions.',
        image: konnichiwa,
        alt: 'Konnichiwa seasonal menu and product selection layout',
        layout: 'left',
      },
      {
        eyebrow: '03 / Conversion',
        title: 'Turn checkout into a confident finish.',
        text:
          'The final ordering stage keeps the brand personality intact while stripping away distraction. It is designed to feel like the last easy step in a lively, memorable buying experience.',
        image: konnichiwa,
        alt: 'Konnichiwa ordering and checkout screen',
        layout: 'right',
      },
    ],
    takeaway: {
      title: "A playful UI shouldn't compromise overall usability.",
      text: "Konnichiwa successfully bridges the gap between vibrant brand storytelling and a highly functional, straightforward ordering architecture. It proves you can turn a basic online menu into a warm brand experience without introducing friction to the customer buying journey."
    }
  },
];
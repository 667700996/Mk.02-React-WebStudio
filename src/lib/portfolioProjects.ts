export type PortfolioProject = {
  slug: string;
  index: string;
  title: string;
  type: string;
  year: string;
  context: string;
  role: string;
  duration: string;
  tags: string[];
  accent: 'acid' | 'violet' | 'blue';
  description: string;
  challenge: string;
  idea: string;
  outcome: string;
  metrics: Array<{ value: string; label: string }>;
  principles: Array<{ number: string; title: string; body: string }>;
  system: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'halo',
    index: '01',
    title: 'HALO',
    type: 'Spatial Mission Interface',
    year: '2026',
    context: 'Independent R&D concept',
    role: 'Direction · Product · Engineering',
    duration: '8 week prototype',
    tags: ['Art direction', 'WebGL', 'Product'],
    accent: 'acid',
    description: 'A spatial interface that turns orbital infrastructure into a calm, explorable universe.',
    challenge:
      'Mission tools are dense by necessity, but density should not create hesitation. The challenge was to help an operator understand state, urgency, and spatial relationships without flattening a complex system into another dashboard.',
    idea:
      'Treat orbit as the primary navigation model. Every object, alert, and forecast is placed inside one continuous spatial language, so orientation becomes instinctive and detail remains one gesture away.',
    outcome:
      'The result is a high-fidelity working prototype that combines a real-time orbital scene with a tokenized interface layer. The system adapts detail, effects, and camera behavior to the device while preserving the same mental model.',
    metrics: [
      { value: '60', label: 'Target FPS' },
      { value: '12', label: 'Unified system states' },
      { value: 'AA', label: 'Contrast target' },
      { value: '1.4MB', label: 'Compressed scene budget' },
    ],
    principles: [
      { number: '01', title: 'Orientation before information', body: 'The scene establishes position and priority before exposing controls.' },
      { number: '02', title: 'Motion carries meaning', body: 'Velocity, pulse, and depth communicate state without decorative animation.' },
      { number: '03', title: 'Complexity on demand', body: 'Progressive disclosure keeps expert detail present but never competing.' },
    ],
    system: ['Orbital camera grammar', 'Adaptive WebGL quality', 'Mission-state tokens', 'Keyboard command layer'],
  },
  {
    slug: 'flux',
    index: '02',
    title: 'FLUX',
    type: 'Generative Identity Engine',
    year: '2026',
    context: 'Independent R&D concept',
    role: 'Brand · Motion · Creative code',
    duration: '6 week prototype',
    tags: ['Brand system', 'Motion', 'Realtime'],
    accent: 'violet',
    description: 'A living identity that continuously recomposes itself from sound, movement, and audience.',
    challenge:
      'Generative brands often produce novelty without recognition. The task was to create a system that could change continuously and still feel authored, coherent, and unmistakably itself.',
    idea:
      'Build identity from constraints, not fixed assets. Type, color, tempo, and spatial behavior live inside a controlled grammar whose parameters react to sound and context in real time.',
    outcome:
      'A browser-native identity engine now produces motion compositions, campaign frames, and environmental graphics from one shared set of rules. Every output is different; every output belongs to the same brand.',
    metrics: [
      { value: '<16ms', label: 'Frame budget' },
      { value: '24', label: 'Generative parameters' },
      { value: '1', label: 'Shared visual grammar' },
      { value: '∞', label: 'Possible compositions' },
    ],
    principles: [
      { number: '01', title: 'Recognition through behavior', body: 'A consistent rhythm can be more ownable than a fixed arrangement.' },
      { number: '02', title: 'Designed unpredictability', body: 'Every parameter has boundaries that protect the identity under stress.' },
      { number: '03', title: 'One engine, many surfaces', body: 'The same logic scales from a favicon pulse to a room-sized canvas.' },
    ],
    system: ['Audio-reactive motion', 'Variable typography', 'Seeded composition engine', 'Export-ready capture mode'],
  },
  {
    slug: 'axiom',
    index: '03',
    title: 'AXIOM',
    type: 'Explainable Intelligence Lab',
    year: '2026',
    context: 'Independent R&D concept',
    role: 'Strategy · UX · Frontend architecture',
    duration: '10 week prototype',
    tags: ['Experience', 'Strategy', 'Development'],
    accent: 'blue',
    description: 'Complex machine intelligence translated into a tactile, legible, and deeply human experience.',
    challenge:
      'AI interfaces often hide complexity behind a chat box. That simplicity is useful until the user needs to understand sources, compare alternatives, or challenge the system’s reasoning.',
    idea:
      'Make intelligence navigable. Responses unfold as a visible reasoning landscape with sources, confidence, and alternatives organized into clear layers rather than buried behind modal UI.',
    outcome:
      'The prototype demonstrates a composable reasoning interface for research-heavy work. It keeps the primary answer calm while offering expert users a fast path into provenance, comparison, and revision.',
    metrics: [
      { value: '3', label: 'Information layers' },
      { value: '2', label: 'Input modalities' },
      { value: '100%', label: 'Source visibility' },
      { value: '0', label: 'Blocking modals' },
    ],
    principles: [
      { number: '01', title: 'Calm at the surface', body: 'The answer remains readable even when the underlying system is complex.' },
      { number: '02', title: 'Provenance is interaction', body: 'Sources are not footnotes; they are part of how a conclusion is explored.' },
      { number: '03', title: 'Trust through reversibility', body: 'Every transformation can be inspected, compared, and rolled back.' },
    ],
    system: ['Reasoning map', 'Source provenance layer', 'Command-first workflow', 'Progressive disclosure model'],
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

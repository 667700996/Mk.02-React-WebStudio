import type { CSSProperties } from 'react';
import type { PortfolioProject } from '@/lib/portfolioProjects';

type ProjectArtworkProps = {
  accent: PortfolioProject['accent'];
  index: number;
  compact?: boolean;
};

export default function ProjectArtwork({ accent, index, compact = false }: ProjectArtworkProps) {
  if (index === 0) {
    return (
      <div className={`cx-project-visual cx-project-visual--${accent} ${compact ? 'is-compact' : ''}`} aria-hidden="true">
        <div className="cx-halo">
          <span /><span /><span /><i />
          <b>ORBIT / 37.492</b>
        </div>
        <div className="cx-visual-data"><span>ALT 408 KM</span><span>VEL 7.66 KM/S</span></div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={`cx-project-visual cx-project-visual--${accent} ${compact ? 'is-compact' : ''}`} aria-hidden="true">
        <div className="cx-flux-type">
          <span>F</span><span>L</span><span>U</span><span>X</span>
        </div>
        <div className="cx-flux-orb" />
        <div className="cx-visual-data"><span>FORM 08—26</span><span>LIVE IDENTITY</span></div>
      </div>
    );
  }

  return (
    <div className={`cx-project-visual cx-project-visual--${accent} ${compact ? 'is-compact' : ''}`} aria-hidden="true">
      <div className="cx-axiom-grid">
        {Array.from({ length: 18 }, (_, item) => (
          <i
            key={item}
            style={{
              '--i': item,
              '--bar-start': `${16 + (item % 6) * 13}%`,
              '--bar-end': `${25 + (item % 5) * 12}%`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="cx-axiom-label">A/</div>
      <div className="cx-visual-data"><span>SYNTHETIC MIND</span><span>MODEL 4.02</span></div>
    </div>
  );
}

interface FootballFieldLinesProps {
  className?: string;
  opacity?: number;
}

export default function FootballFieldLines({ className = '', opacity = 0.06 }: FootballFieldLinesProps) {
  return (
    <svg
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="2" opacity={opacity}>
        {/* Outer boundary */}
        <rect x="40" y="40" width="1120" height="620" />

        {/* Halfway line */}
        <line x1="600" y1="40" x2="600" y2="660" />

        {/* Center circle */}
        <circle cx="600" cy="350" r="100" />
        {/* Center spot */}
        <circle cx="600" cy="350" r="4" fill="white" />

        {/* Left penalty area */}
        <rect x="40" y="190" width="180" height="320" />

        {/* Right penalty area */}
        <rect x="980" y="190" width="180" height="320" />

        {/* Left goal area (6-yard box) */}
        <rect x="40" y="280" width="65" height="140" />

        {/* Right goal area (6-yard box) */}
        <rect x="1095" y="280" width="65" height="140" />

        {/* Left penalty spot */}
        <circle cx="155" cy="350" r="4" fill="white" />

        {/* Right penalty spot */}
        <circle cx="1045" cy="350" r="4" fill="white" />

        {/* Left penalty arc */}
        <path d="M 220 280 A 100 100 0 0 1 220 420" />

        {/* Right penalty arc */}
        <path d="M 980 280 A 100 100 0 0 0 980 420" />

        {/* Left goal */}
        <rect x="10" y="305" width="32" height="90" />

        {/* Right goal */}
        <rect x="1158" y="305" width="32" height="90" />

        {/* Corner arcs */}
        <path d="M 40 55 A 15 15 0 0 1 55 40" />
        <path d="M 1145 40 A 15 15 0 0 1 1160 55" />
        <path d="M 40 645 A 15 15 0 0 0 55 660" />
        <path d="M 1145 660 A 15 15 0 0 0 1160 645" />
      </g>
    </svg>
  );
}

interface ShieldProps {
  className?: string;
  size?: number;
}

export default function Shield({ className = '', size = 120 }: ShieldProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Atletico Laeken - Blason"
    >
      {/* Shield outline with shadow */}
      <defs>
        <filter id="shield-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.4)" />
        </filter>
        <linearGradient id="shield-red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8102E" />
          <stop offset="100%" stopColor="#A00D24" />
        </linearGradient>
        <linearGradient id="shield-dark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>

      {/* Main shield shape */}
      <path
        d="M50 4 L94 18 L94 58 C94 82 72 104 50 116 C28 104 6 82 6 58 L6 18 Z"
        fill="url(#shield-dark-gradient)"
        filter="url(#shield-shadow)"
      />

      {/* Shield border */}
      <path
        d="M50 4 L94 18 L94 58 C94 82 72 104 50 116 C28 104 6 82 6 58 L6 18 Z"
        fill="none"
        stroke="#C8102E"
        strokeWidth="2.5"
      />

      {/* Inner shield border line */}
      <path
        d="M50 10 L88 22 L88 58 C88 79 68 100 50 110 C32 100 12 79 12 58 L12 22 Z"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />

      {/* Red diagonal band (top left to middle) */}
      <clipPath id="shield-clip">
        <path d="M50 4 L94 18 L94 58 C94 82 72 104 50 116 C28 104 6 82 6 58 L6 18 Z" />
      </clipPath>

      <g clipPath="url(#shield-clip)">
        {/* Left red section */}
        <path
          d="M6 18 L50 4 L50 60 L6 60 Z"
          fill="url(#shield-red-gradient)"
          opacity="0.9"
        />

        {/* Diagonal split line */}
        <line x1="6" y1="18" x2="94" y2="116" stroke="white" strokeWidth="1.5" opacity="0.6" />

        {/* Top center red banner */}
        <rect x="20" y="26" width="60" height="22" rx="2" fill="url(#shield-red-gradient)" opacity="0.95" />

        {/* "AL" initials */}
        <text
          x="50"
          y="42"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="900"
          fontSize="14"
          fill="white"
          letterSpacing="2"
        >
          AL
        </text>

        {/* Football/ball icon in center */}
        <circle cx="50" cy="68" r="10" fill="white" opacity="0.95" />
        <circle cx="50" cy="68" r="10" fill="none" stroke="#C8102E" strokeWidth="1" />
        {/* Pentagon pattern on ball */}
        <path d="M50 60 L53 63 L52 67 L48 67 L47 63 Z" fill="#0A0A0A" opacity="0.7" />
        <path d="M56 65 L59 68 L57 72 L53 71 L52 67 Z" fill="#0A0A0A" opacity="0.7" />
        <path d="M44 65 L41 68 L43 72 L47 71 L48 67 Z" fill="#0A0A0A" opacity="0.7" />

        {/* Year */}
        <text
          x="50"
          y="90"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="700"
          fontSize="8"
          fill="rgba(255,255,255,0.8)"
          letterSpacing="1"
        >
          2018
        </text>

        {/* Club name arc at bottom */}
        <text
          x="50"
          y="104"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="600"
          fontSize="5.5"
          fill="rgba(255,255,255,0.9)"
          letterSpacing="0.8"
        >
          ATLETICO LAEKEN
        </text>
      </g>

      {/* Top gold star accent */}
      <polygon
        points="50,2 51.2,5.5 54.8,5.5 51.9,7.6 52.9,11 50,9 47.1,11 48.1,7.6 45.2,5.5 48.8,5.5"
        fill="#FFD700"
      />
    </svg>
  );
}

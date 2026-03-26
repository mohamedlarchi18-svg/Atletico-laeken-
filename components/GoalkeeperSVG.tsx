interface GoalkeeperSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function GoalkeeperSVG({ className = '', width = 400, height = 320 }: GoalkeeperSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gardien de but Atletico Laeken"
    >
      {/* Goal post */}
      <rect x="280" y="30" width="6" height="220" fill="white" opacity="0.9" />
      <rect x="280" y="30" width="110" height="6" fill="white" opacity="0.9" />
      <rect x="384" y="30" width="6" height="220" fill="white" opacity="0.9" />
      {/* Net lines */}
      <line x1="286" y1="36" x2="286" y2="248" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="310" y1="36" x2="310" y2="248" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="335" y1="36" x2="335" y2="248" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="360" y1="36" x2="360" y2="248" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="286" y1="60" x2="390" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="286" y1="90" x2="390" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="286" y1="120" x2="390" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="286" y1="150" x2="390" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="286" y1="180" x2="390" y2="180" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="286" y1="210" x2="390" y2="210" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

      {/* Ground shadow */}
      <ellipse cx="140" cy="295" rx="120" ry="12" fill="rgba(0,0,0,0.2)" />
      {/* Ground */}
      <rect x="0" y="290" width="400" height="30" fill="rgba(0,0,0,0.1)" rx="4" />

      {/* ===== GOALKEEPER - diving right ===== */}
      {/* The goalkeeper is diving horizontally to the right */}

      {/* Trailing leg (left, extended back) */}
      <path
        d="M30 240 L110 210 L120 225 L42 255 Z"
        fill="#1a3a6a"
      />
      {/* Left shoe */}
      <path d="M22 242 L42 254 L38 264 L18 252 Z" fill="#0A0A0A" />

      {/* Front leg (right, bent forward) */}
      <path
        d="M110 210 L175 230 L168 245 L105 225 Z"
        fill="#1a3a6a"
      />
      {/* Right shoe */}
      <path d="M168 240 L185 232 L192 244 L175 252 Z" fill="#0A0A0A" />

      {/* Body - horizontal dive */}
      <path
        d="M60 165 L60 215 L170 225 L170 175 C165 165 80 158 60 165 Z"
        fill="#C8102E"
        transform="rotate(-15 115 195)"
      />

      {/* Jersey number on back */}
      <text
        x="115"
        y="198"
        fontFamily="Arial"
        fontWeight="900"
        fontSize="22"
        fill="white"
        textAnchor="middle"
        transform="rotate(-15 115 198)"
      >
        1
      </text>

      {/* Goalkeeper gloves - arms extended reaching for ball */}
      {/* Left arm (trailing) */}
      <path
        d="M60 175 L20 155 L14 168 L55 188 Z"
        fill="#C8102E"
        transform="rotate(-15 40 170)"
      />
      {/* Left glove */}
      <path
        d="M10 148 L28 142 L32 158 L14 164 Z"
        fill="#FFD700"
        transform="rotate(-15 21 153)"
      />
      <path d="M10 150 L28 144" stroke="#C8102E" strokeWidth="1.5" opacity="0.7" transform="rotate(-15 19 147)" />

      {/* Right arm (reaching for ball) */}
      <path
        d="M170 180 L240 140 L248 154 L178 194 Z"
        fill="#C8102E"
        transform="rotate(-15 210 167)"
      />
      {/* Right glove - large, reaching */}
      <path
        d="M235 128 L258 118 L268 136 L245 146 Z"
        fill="#FFD700"
        transform="rotate(-15 252 132)"
      />
      {/* Glove fingers */}
      <path d="M235 130 L258 120" stroke="#C8102E" strokeWidth="1.5" opacity="0.7" transform="rotate(-15 247 125)" />
      <path d="M240 136 L262 126" stroke="#C8102E" strokeWidth="1.5" opacity="0.7" transform="rotate(-15 251 131)" />

      {/* Neck */}
      <rect x="108" y="145" width="14" height="18" rx="5" fill="#d4956a" transform="rotate(-15 115 154)" />

      {/* Head */}
      <circle cx="115" cy="138" r="26" fill="#d4956a" transform="rotate(-15 115 138)" />
      <circle cx="108" cy="130" r="26" fill="#d4956a" />

      {/* Goalkeeper cap */}
      <path
        d="M85 125 C85 108 95 103 108 103 C121 103 131 108 131 125 L128 122 C125 110 116 107 108 107 C100 107 91 110 88 122 Z"
        fill="#0A0A0A"
      />
      {/* Cap brim */}
      <rect x="82" y="122" width="52" height="7" rx="3" fill="#0A0A0A" />

      {/* Face */}
      {/* Eyes (focused, wide) */}
      <ellipse cx="100" cy="128" rx="3.5" ry="4" fill="#2a1a0a" />
      <ellipse cx="116" cy="126" rx="3.5" ry="4" fill="#2a1a0a" />
      <circle cx="101.5" cy="126.5" r="1.2" fill="white" />
      <circle cx="117.5" cy="124.5" r="1.2" fill="white" />

      {/* Intense expression */}
      <path d="M96 122 Q100 120 104 122" stroke="#2a1a0a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M112 120 Q116 118 120 120" stroke="#2a1a0a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Mouth - determined */}
      <path d="M100 136 L116 134" stroke="#c08060" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Ear */}
      <ellipse cx="84" cy="128" rx="4" ry="5" fill="#c4855a" />
      <ellipse cx="132" cy="126" rx="4" ry="5" fill="#c4855a" />

      {/* ===== BALL coming in ===== */}
      <circle cx="290" cy="145" r="22" fill="white" />
      <circle cx="290" cy="145" r="22" fill="none" stroke="#ddd" strokeWidth="1" />
      <path d="M290 125 L294 131 L291 138 L289 138 L286 131 Z" fill="#1a1a1a" />
      <path d="M299 134 L305 138 L304 145 L299 148 L294 143 L296 136 Z" fill="#1a1a1a" />
      <path d="M281 134 L275 138 L276 145 L281 148 L286 143 L284 136 Z" fill="#1a1a1a" />

      {/* Ball motion trail */}
      <circle cx="330" cy="130" r="18" fill="none" stroke="rgba(200,200,200,0.3)" strokeWidth="2" />
      <circle cx="360" cy="118" r="14" fill="none" stroke="rgba(200,200,200,0.2)" strokeWidth="2" />

      {/* Speed lines from ball */}
      <line x1="312" y1="138" x2="340" y2="128" stroke="rgba(200,16,46,0.25)" strokeWidth="2" strokeDasharray="5,4" />
      <line x1="313" y1="145" x2="342" y2="140" stroke="rgba(200,16,46,0.2)" strokeWidth="1.5" strokeDasharray="4,5" />
      <line x1="311" y1="152" x2="336" y2="150" stroke="rgba(200,16,46,0.25)" strokeWidth="2" strokeDasharray="5,4" />
    </svg>
  );
}

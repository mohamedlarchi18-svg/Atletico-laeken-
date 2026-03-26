interface PlayerSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function PlayerSVG({ className = '', width = 320, height = 380 }: PlayerSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Joueur de futsal Atletico Laeken"
    >
      {/* Shadow under player */}
      <ellipse cx="160" cy="368" rx="70" ry="10" fill="rgba(0,0,0,0.25)" />

      {/* ===== BALL ===== */}
      <circle cx="248" cy="295" r="28" fill="white" />
      <circle cx="248" cy="295" r="28" fill="none" stroke="#ddd" strokeWidth="1" />
      {/* Ball pentagon patches */}
      <path d="M248 270 L255 276 L252 285 L244 285 L241 276 Z" fill="#1a1a1a" />
      <path d="M260 280 L268 283 L268 292 L261 296 L255 291 L258 282 Z" fill="#1a1a1a" />
      <path d="M236 280 L228 283 L228 292 L235 296 L241 291 L238 282 Z" fill="#1a1a1a" />
      <path d="M256 298 L262 305 L258 312 L248 312 L238 305 L244 298 Z" fill="#1a1a1a" />
      <path d="M240 298 L234 305 L236 310 L244 312 L244 298 Z" fill="#1a1a1a" opacity="0.5" />

      {/* ===== LEGS ===== */}
      {/* Left leg (standing) */}
      <path
        d="M140 240 L130 285 L125 340 L135 342 L145 290 L155 245 Z"
        fill="#C8102E"
      />
      {/* Right leg (kicking) */}
      <path
        d="M165 235 L175 260 L200 280 L215 268 L190 245 L178 225 Z"
        fill="#C8102E"
      />

      {/* Left shin guard / sock */}
      <path d="M127 295 L135 295 L133 340 L125 340 Z" fill="#0A0A0A" />
      <path d="M129 300 L134 300 L132 320 L127 320 Z" fill="white" opacity="0.2" />

      {/* Right boot (kicking) */}
      <path
        d="M200 280 L218 266 L228 272 L222 285 L215 290 L205 290 Z"
        fill="#0A0A0A"
      />
      {/* Boot detail */}
      <path d="M205 278 L220 268 L222 272 L207 282 Z" fill="#C8102E" opacity="0.6" />

      {/* Left boot */}
      <path
        d="M120 336 L136 336 L140 350 L122 352 Z"
        fill="#0A0A0A"
      />
      {/* Boot sole */}
      <path d="M120 350 L142 348 L143 354 L118 355 Z" fill="#333" />

      {/* ===== SHORTS ===== */}
      <path
        d="M130 210 L175 210 L178 245 L165 248 L155 220 L145 248 L128 245 Z"
        fill="#0A0A0A"
      />
      {/* Shorts stripe */}
      <path d="M130 215 L145 215 L145 248 L128 245 Z" fill="#C8102E" opacity="0.4" />
      <path d="M175 215 L160 215 L165 248 L178 245 Z" fill="#C8102E" opacity="0.4" />

      {/* ===== JERSEY ===== */}
      {/* Main jersey body */}
      <path
        d="M115 155 L115 215 L180 215 L180 155 C175 150 168 147 160 145 L155 150 L150 145 C142 147 120 150 115 155 Z"
        fill="#C8102E"
      />
      {/* Jersey collar */}
      <path
        d="M145 145 L150 152 L155 145 L160 152 L150 158 Z"
        fill="#A00D24"
      />

      {/* Jersey number */}
      <text
        x="148"
        y="195"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="white"
        textAnchor="middle"
      >
        10
      </text>

      {/* Jersey collar V */}
      <path
        d="M142 145 L150 155 L158 145"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Left sleeve */}
      <path
        d="M115 155 L95 175 L100 190 L120 175 L118 158 Z"
        fill="#C8102E"
      />
      {/* Right sleeve */}
      <path
        d="M180 155 L200 170 L198 185 L178 175 L178 158 Z"
        fill="#C8102E"
      />
      {/* Sleeve stripes */}
      <path d="M97 180 L115 166 L116 170 L98 184 Z" fill="white" opacity="0.4" />
      <path d="M198 175 L180 162 L181 166 L199 179 Z" fill="white" opacity="0.4" />

      {/* Left arm (raised/extended) */}
      <path
        d="M100 190 L88 220 L95 225 L108 198 Z"
        fill="#f5c5aa"
      />

      {/* Right arm (kicking pose) */}
      <path
        d="M198 185 L215 205 L210 212 L195 192 Z"
        fill="#f5c5aa"
      />

      {/* ===== HEAD & NECK ===== */}
      {/* Neck */}
      <rect x="145" y="125" width="18" height="22" rx="5" fill="#f5c5aa" />

      {/* Head */}
      <circle cx="154" cy="108" r="28" fill="#f5c5aa" />

      {/* Hair - short dark hair */}
      <path
        d="M127 100 C127 80 142 75 154 75 C166 75 181 80 181 100 C181 90 175 78 154 78 C133 78 127 90 127 100 Z"
        fill="#2a1a0a"
      />
      {/* Hair side part */}
      <path d="M127 100 C130 85 140 80 154 80 L154 78 C140 78 128 85 127 100 Z" fill="#1a0f05" />

      {/* Face features */}
      {/* Eyes */}
      <ellipse cx="146" cy="106" rx="3" ry="3.5" fill="#2a1a0a" />
      <ellipse cx="162" cy="106" rx="3" ry="3.5" fill="#2a1a0a" />
      {/* Eye shine */}
      <circle cx="147.5" cy="104.5" r="1" fill="white" />
      <circle cx="163.5" cy="104.5" r="1" fill="white" />

      {/* Eyebrows (determined expression) */}
      <path d="M142 101 Q146 99 150 100" stroke="#2a1a0a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M158 100 Q162 99 166 101" stroke="#2a1a0a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M154 108 L151 115 L157 115" stroke="#d4a080" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Mouth (slight smile) */}
      <path d="M148 120 Q154 124 160 120" stroke="#c08060" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Ear */}
      <ellipse cx="127" cy="110" rx="4" ry="5" fill="#f0b090" />
      <ellipse cx="181" cy="110" rx="4" ry="5" fill="#f0b090" />

      {/* Motion lines to suggest movement */}
      <line x1="228" y1="290" x2="248" y2="288" stroke="rgba(200,16,46,0.3)" strokeWidth="2" strokeDasharray="4,3" />
      <line x1="230" y1="295" x2="252" y2="295" stroke="rgba(200,16,46,0.2)" strokeWidth="1.5" strokeDasharray="3,4" />
      <line x1="228" y1="300" x2="248" y2="302" stroke="rgba(200,16,46,0.3)" strokeWidth="2" strokeDasharray="4,3" />
    </svg>
  );
}

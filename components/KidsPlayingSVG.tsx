interface KidsPlayingSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function KidsPlayingSVG({ className = '', width = 600, height = 280 }: KidsPlayingSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Enfants célébrant un but"
    >
      {/* Ground */}
      <rect x="0" y="240" width="600" height="40" fill="rgba(0,0,0,0.1)" rx="4" />

      {/* Confetti particles */}
      <rect x="80" y="20" width="8" height="8" rx="2" fill="#FFD700" transform="rotate(30 80 20)" />
      <rect x="160" y="15" width="6" height="6" rx="1" fill="#C8102E" transform="rotate(45 160 15)" />
      <rect x="300" y="10" width="7" height="7" rx="2" fill="#4CAF50" transform="rotate(60 300 10)" />
      <rect x="420" y="18" width="8" height="8" rx="2" fill="#FFD700" transform="rotate(20 420 18)" />
      <rect x="520" y="22" width="6" height="6" rx="1" fill="#C8102E" transform="rotate(50 520 22)" />
      <circle cx="220" cy="30" r="4" fill="#FFD700" />
      <circle cx="380" cy="25" r="3" fill="#C8102E" />
      <circle cx="480" cy="35" r="4" fill="#4CAF50" />
      <rect x="140" y="40" width="5" height="5" rx="1" fill="#4CAF50" transform="rotate(30 140 40)" />
      <rect x="460" y="42" width="6" height="6" rx="2" fill="#FFD700" transform="rotate(45 460 42)" />

      {/* Stars/sparks */}
      <path d="M250 50 L252 44 L254 50 L260 52 L254 54 L252 60 L250 54 L244 52 Z" fill="#FFD700" />
      <path d="M350 35 L351.5 31 L353 35 L357 36.5 L353 38 L351.5 42 L350 38 L346 36.5 Z" fill="#FFD700" />

      {/* ===== GOAL POST (right side) ===== */}
      <rect x="510" y="120" width="6" height="130" fill="white" opacity="0.8" />
      <rect x="510" y="120" width="80" height="6" fill="white" opacity="0.8" />
      <rect x="584" y="120" width="6" height="130" fill="white" opacity="0.8" />
      {/* Net lines */}
      <line x1="516" y1="126" x2="516" y2="248" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="530" y1="126" x2="530" y2="248" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="544" y1="126" x2="544" y2="248" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="558" y1="126" x2="558" y2="248" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="572" y1="126" x2="572" y2="248" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="510" y1="148" x2="590" y2="148" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="510" y1="172" x2="590" y2="172" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="510" y1="196" x2="590" y2="196" stroke="white" strokeWidth="0.5" opacity="0.4" />
      <line x1="510" y1="220" x2="590" y2="220" stroke="white" strokeWidth="0.5" opacity="0.4" />

      {/* ===== BALL ===== */}
      <circle cx="500" cy="220" r="18" fill="white" />
      <circle cx="500" cy="220" r="18" fill="none" stroke="#ddd" strokeWidth="1" />
      <path d="M500 204 L504 209 L502 215 L498 215 L496 209 Z" fill="#1a1a1a" />
      <path d="M507 211 L512 214 L511 220 L507 222 L503 218 L505 212 Z" fill="#1a1a1a" />
      <path d="M493 211 L488 214 L489 220 L493 222 L497 218 L495 212 Z" fill="#1a1a1a" />

      {/* ===== KID 1 - Center (arms raised, celebrating) ===== */}
      {/* Shadow */}
      <ellipse cx="200" cy="245" rx="28" ry="7" fill="rgba(0,0,0,0.2)" />
      {/* Left leg */}
      <path d="M185 200 L178 242 L186 243 L193 205 Z" fill="#1565C0" />
      {/* Right leg */}
      <path d="M210 200 L218 242 L210 243 L203 205 Z" fill="#1565C0" />
      {/* Left shoe */}
      <path d="M177 240 L187 240 L188 248 L175 248 Z" fill="#0A0A0A" />
      {/* Right shoe */}
      <path d="M209 240 L220 240 L222 248 L208 248 Z" fill="#0A0A0A" />
      {/* Body - red jersey */}
      <path d="M180 150 L180 205 L220 205 L220 150 C216 146 200 143 200 143 C200 143 184 146 180 150 Z" fill="#C8102E" />
      {/* Jersey number */}
      <text x="200" y="183" fontFamily="Arial" fontWeight="900" fontSize="16" fill="white" textAnchor="middle">7</text>
      {/* Left arm (raised high) */}
      <path d="M180 158 L155 115 L162 110 L188 155 Z" fill="#C8102E" />
      {/* Right arm (raised high) */}
      <path d="M220 158 L245 115 L238 110 L212 155 Z" fill="#C8102E" />
      {/* Left hand */}
      <circle cx="158" cy="108" r="8" fill="#f5c5aa" />
      {/* Right hand */}
      <circle cx="242" cy="108" r="8" fill="#f5c5aa" />
      {/* Neck */}
      <rect x="193" y="128" width="14" height="18" rx="4" fill="#f5c5aa" />
      {/* Head */}
      <circle cx="200" cy="115" r="22" fill="#f5c5aa" />
      {/* Hair */}
      <path d="M179 108 C179 90 190 84 200 84 C210 84 221 90 221 108 C218 92 208 88 200 88 C192 88 182 92 179 108 Z" fill="#1a0f05" />
      {/* Eyes */}
      <circle cx="193" cy="113" r="2.5" fill="#2a1a0a" />
      <circle cx="207" cy="113" r="2.5" fill="#2a1a0a" />
      {/* Big smile */}
      <path d="M190 122 Q200 130 210 122" stroke="#c08060" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Teeth */}
      <path d="M193 123 Q200 128 207 123 Q200 127 193 123 Z" fill="white" />

      {/* ===== KID 2 - Left (jumping) ===== */}
      <ellipse cx="80" cy="248" rx="22" ry="6" fill="rgba(0,0,0,0.15)" />
      {/* Legs (jumped up) */}
      <path d="M68 195 L58 235 L66 237 L76 200 Z" fill="#2E7D32" />
      <path d="M90 195 L100 232 L92 234 L82 200 Z" fill="#2E7D32" />
      {/* Shoes */}
      <path d="M57 233 L67 233 L68 240 L55 241 Z" fill="#0A0A0A" />
      <path d="M91 230 L101 230 L103 238 L90 238 Z" fill="#0A0A0A" />
      {/* Body - different colored jersey */}
      <path d="M65 152 L65 200 L100 200 L100 152 C96 148 80 145 80 145 C80 145 69 148 65 152 Z" fill="#FF6F00" />
      {/* Jersey detail */}
      <text x="80" y="180" fontFamily="Arial" fontWeight="900" fontSize="14" fill="white" textAnchor="middle">9</text>
      {/* Arms (one raised, one out) */}
      <path d="M65 162 L40 130 L46 125 L70 158 Z" fill="#FF6F00" />
      <path d="M100 165 L120 148 L124 154 L104 170 Z" fill="#FF6F00" />
      {/* Hands */}
      <circle cx="43" cy="122" r="7" fill="#d4956a" />
      <circle cx="121" cy="151" r="7" fill="#d4956a" />
      {/* Neck */}
      <rect x="74" y="130" width="12" height="16" rx="4" fill="#d4956a" />
      {/* Head */}
      <circle cx="80" cy="118" r="20" fill="#d4956a" />
      {/* Afro hair */}
      <circle cx="80" cy="108" r="16" fill="#1a0f05" />
      <path d="M64 115 C64 100 71 96 80 96 C89 96 96 100 96 115 Z" fill="#1a0f05" />
      {/* Eyes */}
      <circle cx="74" cy="117" r="2.5" fill="#2a1a0a" />
      <circle cx="86" cy="117" r="2.5" fill="#2a1a0a" />
      {/* Laughing mouth */}
      <path d="M73 125 Q80 132 87 125" stroke="#c08060" strokeWidth="1.8" fill="rgba(255,200,180,0.5)" strokeLinecap="round" />

      {/* ===== KID 3 - Right (fist pump) ===== */}
      <ellipse cx="340" cy="247" rx="22" ry="6" fill="rgba(0,0,0,0.15)" />
      {/* Legs */}
      <path d="M328 198 L320 240 L328 242 L336 202 Z" fill="#6A1B9A" />
      <path d="M350 198 L356 238 L348 240 L342 202 Z" fill="#6A1B9A" />
      {/* Shoes */}
      <path d="M319 238 L329 238 L330 246 L317 246 Z" fill="#0A0A0A" />
      <path d="M347 236 L357 236 L358 244 L346 244 Z" fill="#0A0A0A" />
      {/* Body - purple jersey */}
      <path d="M322 152 L322 202 L360 202 L360 152 C356 148 340 145 340 145 C340 145 326 148 322 152 Z" fill="#7B1FA2" />
      <text x="340" y="180" fontFamily="Arial" fontWeight="900" fontSize="14" fill="white" textAnchor="middle">11</text>
      {/* Right fist pump up */}
      <path d="M360 162 L382 125 L388 130 L364 166 Z" fill="#7B1FA2" />
      {/* Left arm pointing */}
      <path d="M322 162 L300 155 L298 162 L320 168 Z" fill="#7B1FA2" />
      {/* Hands */}
      <circle cx="386" cy="133" r="7" fill="#f5c5aa" />
      <circle cx="296" cy="158" r="7" fill="#f5c5aa" />
      {/* Neck */}
      <rect x="333" y="130" width="12" height="16" rx="4" fill="#f5c5aa" />
      {/* Head */}
      <circle cx="340" cy="118" r="20" fill="#f5c5aa" />
      {/* Hair (blonde) */}
      <path d="M321 110 C321 93 330 88 340 88 C350 88 359 93 359 110 C356 95 348 91 340 91 C332 91 324 95 321 110 Z" fill="#B8860B" />
      {/* Eyes */}
      <circle cx="334" cy="116" r="2.5" fill="#2a3a5a" />
      <circle cx="346" cy="116" r="2.5" fill="#2a3a5a" />
      {/* Expression - excited */}
      <circle cx="340" cy="124" r="4" fill="rgba(200,100,80,0.3)" />
      <path d="M334 125 Q340 131 346 125" stroke="#c08060" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ===== "OUI!" text ===== */}
      <text
        x="200"
        y="70"
        fontFamily="Georgia, serif"
        fontWeight="900"
        fontSize="28"
        fill="#FFD700"
        textAnchor="middle"
        transform="rotate(-5 200 70)"
      >
        OUI!
      </text>

      {/* ===== Score bubble ===== */}
      <rect x="260" y="55" width="80" height="38" rx="8" fill="#C8102E" />
      <text x="300" y="72" fontFamily="Arial" fontWeight="900" fontSize="10" fill="white" textAnchor="middle">BUT!</text>
      <text x="300" y="86" fontFamily="Arial" fontWeight="900" fontSize="16" fill="white" textAnchor="middle">1 - 0</text>

      {/* Sparkle effects */}
      <path d="M145 65 L147 59 L149 65 L155 67 L149 69 L147 75 L145 69 L139 67 Z" fill="#FFD700" opacity="0.8" />
      <path d="M415 55 L416.5 50 L418 55 L423 57 L418 59 L416.5 64 L415 59 L410 57 Z" fill="#4CAF50" opacity="0.8" />
    </svg>
  );
}

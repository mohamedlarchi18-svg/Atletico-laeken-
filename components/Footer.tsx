import Link from 'next/link';
import Shield from './Shield';
import { NAV_LINKS, SOCIAL_LINKS, CLUB_NAME, CLUB_FOUNDED } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-noir text-white">
      {/* Top bar */}
      <div className="bg-rouge h-1" />

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Club identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <Shield size={56} />
              <div>
                <h2 className="font-display text-xl font-bold text-white">{CLUB_NAME}</h2>
                <p className="text-rouge text-xs font-body tracking-widest uppercase mt-0.5">
                  Football en Salle · Bruxelles
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Club de football en salle fondé en {CLUB_FOUNDED} à Laeken, Bruxelles.
              Une communauté diverse et passionnée qui réunit des joueurs de plus de
              15 nationalités différentes autour du beau jeu.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-rouge flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Suivez-nous sur Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-rouge flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Suivez-nous sur Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-rouge text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-rouge rounded-full transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-rouge mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white/60 text-sm">Place de la Reine<br />1020 Laeken, Bruxelles</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-rouge flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:atleticolaeken@gmail.com"
                  className="text-white/60 hover:text-rouge text-sm transition-colors duration-200"
                >
                  atleticolaeken@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-rouge mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <a
                  href="https://www.lffs.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-rouge text-sm transition-colors duration-200"
                >
                  Affilié LFFS (Club #1466)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} {CLUB_NAME}. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Membre de la Ligue Francophone de Football en Salle
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import GoalkeeperSVG from '@/components/GoalkeeperSVG';
import Shield from '@/components/Shield';
import clubInfo from '@/data/club-info.json';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contactez Atletico Laeken, club de football en salle à Laeken, Bruxelles. Vous souhaitez rejoindre le club, obtenir des informations ou partenariat ? Écrivez-nous.",
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Adresse',
    value: clubInfo.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clubInfo.address)}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: clubInfo.email,
    href: `mailto:${clubInfo.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.57 4.4 2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Téléphone',
    value: clubInfo.phone,
    href: `tel:${clubInfo.phone.replace(/\s/g, '')}`,
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: clubInfo.facebook,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Instagram',
    href: clubInfo.instagram,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Page header */}
      <div className="bg-noir py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-noir via-noir to-rouge/20" />
        {/* Background goalkeeper illustration */}
        <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block">
          <GoalkeeperSVG width={360} height={280} />
        </div>
        <div className="container-custom relative z-10 pt-8">
          <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
            Parlons-nous
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">
            Contactez-nous
          </h1>
          <p className="text-white/60 font-body text-lg max-w-2xl">
            Une question, une demande d&apos;information ou envie de rejoindre le club ?
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact form (3/5) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Right: Club info (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Club card */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-4 mb-5">
                <Shield size={48} />
                <div>
                  <h2 className="font-display font-bold text-lg text-noir">{clubInfo.name}</h2>
                  <p className="text-rouge text-xs font-body tracking-widest uppercase">
                    Club de futsal · Bruxelles
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rouge/10 text-rouge flex items-center justify-center flex-shrink-0 mt-0.5">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-body mb-0.5">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold text-noir hover:text-rouge transition-colors duration-200"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-noir">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-display font-bold text-lg text-noir mb-4">
                Réseaux sociaux
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${social.color}`}
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-400 font-body mt-3">
                Suivez-nous pour les dernières nouvelles du club.
              </p>
            </div>

            {/* LFFS info */}
            <div className="bg-noir rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rouge/20 text-rouge flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Affilié LFFS</p>
                  <p className="text-white/50 text-xs font-body mb-3">
                    Club n°{clubInfo.clubId} — Ligue Francophone de Football en Salle
                  </p>
                  <a
                    href={clubInfo.lffsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rouge text-xs font-semibold hover:text-rouge-light transition-colors duration-200"
                  >
                    Visiter le site LFFS →
                  </a>
                </div>
              </div>
            </div>

            {/* Goalkeeper illustration */}
            <div className="flex justify-center pt-2">
              <GoalkeeperSVG width={320} height={240} className="opacity-80" />
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-noir mb-3">
              Questions fréquentes
            </h2>
            <p className="text-gray-500 font-body">
              Retrouvez les réponses aux questions les plus courantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                q: 'Comment rejoindre le club ?',
                a: "Envoyez-nous un message via le formulaire ci-dessus ou par email. Nous organiserons un entraînement d'essai gratuit pour vous présenter le club et évaluer votre niveau.",
              },
              {
                q: 'Quel est le niveau requis ?',
                a: "Nous accueillons des joueurs de tous niveaux, des débutants aux joueurs expérimentés. L'important est la motivation et l'esprit d'équipe.",
              },
              {
                q: 'Où se déroulent les entraînements ?',
                a: "Les entraînements et matchs se déroulent dans les salles de sport du quartier de Laeken. Les détails exacts sont communiqués lors de votre inscription.",
              },
              {
                q: 'Y a-t-il des frais d\'inscription ?',
                a: "Il y a des frais d'affiliation à la LFFS ainsi que des frais de club. Contactez-nous pour obtenir les tarifs actuels pour la saison en cours.",
              },
              {
                q: 'Le club est-il ouvert aux femmes ?',
                a: "Actuellement nos équipes participent aux compétitions masculines LFFS. N'hésitez pas à nous contacter pour discuter d'éventuelles initiatives féminines.",
              },
              {
                q: 'Comment devenir partenaire du club ?',
                a: "Nous sommes ouverts aux partenariats locaux et aux sponsors. Contactez-nous par email pour discuter des opportunités de partenariat disponibles.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-semibold text-noir mb-2 text-sm">
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

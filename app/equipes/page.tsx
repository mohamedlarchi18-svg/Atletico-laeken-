import type { Metadata } from 'next';
import TeamCard from '@/components/TeamCard';
import Shield from '@/components/Shield';
import equipesData from '@/data/equipes.json';
import type { Team } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Nos Équipes',
  description:
    "Découvrez les 3 équipes d'Atletico Laeken : Seniors A (Provinciale 1), Seniors B (Provinciale 2) et les Vétérans. Club de futsal à Laeken, Bruxelles, affilié à la LFFS.",
};

const teams = equipesData as Team[];

export default function EquipesPage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Page header */}
      <div className="bg-noir py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-noir via-noir to-rouge/20" />
        {/* Decorative shield in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 transform translate-x-1/4">
          <Shield size={400} />
        </div>
        <div className="container-custom relative z-10 pt-8">
          <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
            Structure du club
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">
            Nos Équipes
          </h1>
          <p className="text-white/60 font-body text-lg max-w-2xl">
            Atletico Laeken engage {teams.length} équipes en compétition officielle LFFS,
            représentant différentes catégories et niveaux de jeu.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Teams grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teams.map((team, index) => (
            <div
              key={team.id}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              className="animate-fade-in-up"
            >
              <TeamCard team={team} />
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
                Rejoindre nos rangs
              </span>
              <h2 className="font-display font-bold text-3xl text-noir mt-2 mb-4">
                Intéressé par rejoindre l&apos;équipe ?
              </h2>
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                Quel que soit votre niveau — débutant, intermédiaire ou confirmé — nous avons
                une place pour vous. Contactez-nous pour organiser un entraînement d&apos;essai
                avec l&apos;équipe qui vous convient le mieux.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="btn-primary">
                  Nous contacter
                </a>
                <a
                  href="https://www.lffs.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-rouge"
                >
                  Site LFFS
                </a>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-creme rounded-2xl p-6">
              <h3 className="font-display font-bold text-xl text-noir mb-5">
                Comment rejoindre ?
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: '📋',
                    title: 'Contactez-nous',
                    desc: 'Envoyez-nous un message via le formulaire de contact.',
                  },
                  {
                    icon: '⚽',
                    title: 'Entraînement d\'essai',
                    desc: 'Participez à un entraînement pour nous rencontrer.',
                  },
                  {
                    icon: '📄',
                    title: 'Affiliation LFFS',
                    desc: 'Nous gérons votre inscription officielle à la LFFS.',
                  },
                  {
                    icon: '🏃',
                    title: 'C\'est parti !',
                    desc: 'Rejoignez l\'équipe et profitez des matchs et activités.',
                  },
                ].map((step) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{step.icon}</span>
                    <div>
                      <p className="font-semibold text-noir text-sm">{step.title}</p>
                      <p className="text-gray-500 text-sm font-body">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* LFFS affiliation info */}
        <div className="mt-10 bg-noir rounded-2xl p-7 flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-rouge/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-rouge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm mb-0.5">
              Affilié à la Ligue Francophone de Football en Salle (LFFS)
            </p>
            <p className="text-white/50 text-xs font-body">
              Club #1466 · Compétitions officielles saison 2023-2024 · Organisation #1
            </p>
          </div>
          <a
            href="https://www.lffs.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rouge text-sm font-semibold hover:text-rouge-light transition-colors duration-200 flex-shrink-0 hidden sm:block"
          >
            lffs.eu →
          </a>
        </div>
      </div>
    </div>
  );
}

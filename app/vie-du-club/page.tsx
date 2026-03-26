import type { Metadata } from 'next';
import KidsPlayingSVG from '@/components/KidsPlayingSVG';
import Shield from '@/components/Shield';

export const metadata: Metadata = {
  title: 'Vie du Club',
  description:
    "Découvrez la vie d'Atletico Laeken : tournois annuels, soirées du club, stages vacances, parrainage, soutien scolaire et diversité. Un club de futsal engagé dans sa communauté à Laeken, Bruxelles.",
};

const activities = [
  {
    emoji: '🏆',
    title: 'Tournoi Annuel',
    description:
      "Chaque année, Atletico Laeken organise son tournoi inter-clubs. Un événement festif qui réunit des équipes de toute la région bruxelloise dans une ambiance conviviale et sportive.",
    color: 'bg-yellow-50 border-yellow-200',
    accentColor: 'text-yellow-600',
  },
  {
    emoji: '🎉',
    title: 'Soirées du Club',
    description:
      "Des soirées régulières pour renforcer les liens entre joueurs, familles et supporters. Dîners, events, célébrations — la vie du club ne s'arrête pas sur le terrain !",
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-600',
  },
  {
    emoji: '⛺',
    title: 'Stages Vacances',
    description:
      "Durant les vacances scolaires, nous proposons des stages de futsal pour les jeunes du quartier. Apprentissage technique, fairplay et esprit d'équipe au programme.",
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-600',
  },
  {
    emoji: '🤝',
    title: 'Parrainage',
    description:
      "Notre système de parrainage permet aux nouveaux joueurs de s'intégrer facilement. Chaque nouvel arrivant est accompagné par un joueur expérimenté qui lui fait découvrir le club.",
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-600',
  },
  {
    emoji: '📚',
    title: 'Soutien Scolaire',
    description:
      "Parce que les études passent avant le sport, nous proposons un système de soutien scolaire bénévole pour les jeunes joueurs qui en ont besoin. Sport et réussite vont de pair.",
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-orange-600',
  },
  {
    emoji: '🌍',
    title: 'Diversité & Inclusion',
    description:
      "Avec plus de 15 nationalités représentées, la diversité est notre force. Nous cultivons un environnement inclusif où chaque joueur, quelle que soit son origine, se sent chez lui.",
    color: 'bg-rouge/5 border-rouge/20',
    accentColor: 'text-rouge',
  },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Respect',
    desc: 'Respect des adversaires, des arbitres, des coéquipiers et des règles du jeu. Le fairplay avant tout.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Passion',
    desc: 'L\'amour du ballon et du jeu collectif, la volonté de progresser et de donner le meilleur de soi.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Communauté',
    desc: 'Tisser des liens forts entre joueurs, familles et quartier. Ensemble, nous sommes plus forts.',
  },
];

export default function VieduClubPage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Page header */}
      <div className="bg-noir py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-noir via-noir to-rouge/20" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 transform translate-x-1/4">
          <Shield size={350} />
        </div>
        <div className="container-custom relative z-10 pt-8">
          <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
            Au-delà du terrain
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">
            Vie du Club
          </h1>
          <p className="text-white/60 font-body text-lg max-w-2xl">
            Chez Atletico Laeken, le football en salle est bien plus qu&apos;un sport.
            C&apos;est un lien social, un espace d&apos;épanouissement et un projet de communauté.
          </p>
        </div>
      </div>

      {/* Activities section */}
      <div className="container-custom py-16">
        <div className="text-center mb-12">
          <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
            Activités & initiatives
          </span>
          <h2 className="section-title mt-2">Ce qui nous anime</h2>
          <p className="section-subtitle">
            Au-delà des matchs et entraînements, le club organise de nombreuses activités
            pour renforcer la cohésion et servir sa communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`rounded-2xl p-6 border animate-fade-in-up ${activity.color} hover:-translate-y-1 transition-transform duration-200 group`}
            >
              <div className="text-4xl mb-4">{activity.emoji}</div>
              <h3 className={`font-display font-bold text-xl mb-3 group-hover:${activity.accentColor} transition-colors duration-200 text-noir`}>
                {activity.title}
              </h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Kids banner */}
      <section className="bg-rouge py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-5">
                &ldquo;Le sport est le langage universel que tout le monde comprend&rdquo;
              </h2>
              <p className="text-white/70 font-body text-lg italic">
                — L&apos;esprit Atletico Laeken
              </p>
            </div>
            <div className="flex justify-center">
              <KidsPlayingSVG width={480} height={240} className="drop-shadow-xl max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Club values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
              Notre ADN
            </span>
            <h2 className="section-title mt-2">Les valeurs du club</h2>
            <p className="section-subtitle">
              Trois piliers fondamentaux qui définissent l&apos;identité d&apos;Atletico Laeken
              depuis sa fondation en 2018.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{ animationDelay: `${index * 150}ms` }}
                className="text-center animate-fade-in-up group"
              >
                <div className="w-16 h-16 rounded-2xl bg-rouge/10 text-rouge flex items-center justify-center mx-auto mb-5 group-hover:bg-rouge group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-noir mb-3 group-hover:text-rouge transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-gray-500 font-body leading-relaxed text-sm max-w-xs mx-auto">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History section */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
              Notre histoire
            </span>
            <h2 className="font-display font-bold text-3xl text-noir mt-2 mb-6">
              De Atletico Bruxelles à Atletico Laeken
            </h2>
            <div className="space-y-5 text-gray-600 font-body leading-relaxed">
              <p>
                Fondé en <strong className="text-noir">2018</strong>, le club a d&apos;abord navigué
                sous les noms d&apos;<em>Atletico Bruxelles</em> puis <em>Atletico BXL</em> avant
                de trouver son identité définitive en s&apos;ancrant dans le quartier de Laeken.
              </p>
              <p>
                Basé autour de la <strong className="text-noir">Place de la Reine</strong> à
                Laeken (1020), le club reflète la richesse multiculturelle de ce quartier bruxellois,
                rassemblant des joueurs de plus de <strong className="text-noir">15 nationalités</strong> différentes.
              </p>
              <p>
                En quelques années, Atletico Laeken a bâti une structure solide avec
                <strong className="text-noir"> 3 équipes en compétition</strong> officielle LFFS
                et plus de <strong className="text-noir">60 joueurs</strong> actifs.
                Le club est devenu un acteur reconnu du futsal bruxellois.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 space-y-4 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-rouge/20">
              {[
                { year: '2018', event: 'Fondation du club sous le nom Atletico Bruxelles' },
                { year: '2019', event: 'Affiliation officielle à la LFFS (Club #1466)' },
                { year: '2020', event: 'Création de la deuxième équipe (Seniors B)' },
                { year: '2021', event: 'Lancement de l\'équipe Vétérans' },
                { year: '2022', event: 'Changement de nom en Atletico Laeken' },
                { year: '2023', event: 'Expansion à 3 équipes, 60+ joueurs actifs' },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-5 pl-10 relative">
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-rouge flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <span className="text-rouge font-bold font-display text-sm">{item.year}</span>
                    <p className="text-gray-600 font-body text-sm mt-0.5">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-noir">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Faites partie de l&apos;aventure
          </h2>
          <p className="text-white/60 font-body max-w-lg mx-auto mb-8">
            Rejoignez Atletico Laeken et vivez l&apos;expérience d&apos;un club où le sport
            et la communauté se rejoignent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Nous rejoindre
            </a>
            <a href="/equipes" className="btn-secondary">
              Voir les équipes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

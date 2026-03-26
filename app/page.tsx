'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Shield from '@/components/Shield';
import PlayerSVG from '@/components/PlayerSVG';
import KidsPlayingSVG from '@/components/KidsPlayingSVG';
import FootballFieldLines from '@/components/FootballFieldLines';
import StatsBar from '@/components/StatsBar';
import MatchCard from '@/components/MatchCard';
import resultatsData from '@/data/resultats-1466.json';
import type { Match } from '@/lib/types';

const recentMatches = (resultatsData.matches as Match[])
  .filter((m) => m.status === 'played')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const upcomingMatches = (resultatsData.matches as Match[])
  .filter((m) => m.status === 'upcoming')
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 2);

function FadeInSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
        {/* Football field lines watermark */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FootballFieldLines className="absolute inset-0 w-full h-full" opacity={0.07} />
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rouge/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-noir/50 to-transparent pointer-events-none" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-rouge/20 pointer-events-none" />
        <div className="absolute top-32 right-32 w-40 h-40 rounded-full border border-rouge/10 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />

        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-rouge/20 border border-rouge/30 rounded-full px-4 py-2 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-rouge animate-pulse" />
                <span className="text-rouge text-xs font-semibold tracking-widest uppercase">
                  Saison 2023–2024
                </span>
              </motion.div>

              {/* Main title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
                  <span className="block">Atletico</span>
                  <span className="block text-rouge">Laeken</span>
                </h1>
                <p className="text-white/70 font-body text-lg leading-relaxed max-w-md mb-10">
                  Club de football en salle fondé en 2018 à Laeken, Bruxelles.
                  Une communauté diverse et passionnée, affiliée à la{' '}
                  <a
                    href="https://www.lffs.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rouge hover:text-rouge-light transition-colors"
                  >
                    LFFS
                  </a>
                  .
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact" className="btn-primary">
                  Rejoins-nous
                </Link>
                <Link href="/vie-du-club" className="btn-secondary">
                  Vie du Club
                </Link>
              </motion.div>

              {/* Small stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10"
              >
                {[
                  { value: '3', label: 'Équipes' },
                  { value: '60+', label: 'Joueurs' },
                  { value: '15+', label: 'Nationalités' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-display font-black text-2xl text-white">{item.value}</p>
                    <p className="text-white/40 text-xs font-body tracking-wide uppercase">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Shield + Player illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
            >
              {/* Glowing background circle */}
              <div className="absolute w-80 h-80 rounded-full bg-rouge/15 blur-3xl" />

              {/* Shield centered above player */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Shield size={140} />
                </motion.div>

                {/* Player illustration */}
                <div className="relative">
                  <PlayerSVG width={280} height={320} />
                  {/* Shadow under player */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-4 bg-black/30 blur-lg rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-body tracking-widest uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <StatsBar />

      {/* ===== RECENT RESULTS ===== */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
                Derniers résultats
              </span>
              <h2 className="section-title mt-2">
                Résultats récents
              </h2>
              <p className="section-subtitle">
                Suivez les performances de nos équipes en championnat
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {recentMatches.map((match, index) => (
              <FadeInSection key={match.id} delay={index * 0.1}>
                <MatchCard match={match} />
              </FadeInSection>
            ))}
          </div>

          {/* Upcoming matches */}
          {upcomingMatches.length > 0 && (
            <FadeInSection delay={0.3}>
              <div className="mt-10">
                <h3 className="font-display font-bold text-xl text-noir mb-5 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-gray-300 animate-pulse" />
                  Prochains matchs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {upcomingMatches.map((match, index) => (
                    <FadeInSection key={match.id} delay={index * 0.1}>
                      <MatchCard match={match} />
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </FadeInSection>
          )}

          <FadeInSection delay={0.4} className="text-center mt-10">
            <Link href="/resultats" className="btn-outline-rouge">
              Tous les résultats & classements
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ===== KIDS BANNER ===== */}
      <section className="bg-rouge py-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeInSection>
              <div>
                <span className="text-white/60 text-xs font-semibold tracking-widest uppercase font-body">
                  Communauté & jeunesse
                </span>
                <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
                  Plus qu&apos;un club,<br />une famille
                </h2>
                <p className="text-white/80 font-body text-lg leading-relaxed mb-8 max-w-md">
                  Chez Atletico Laeken, le football en salle est un vecteur de cohésion sociale.
                  Nous accueillons des joueurs de tous horizons dans une ambiance chaleureuse et respectueuse.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/vie-du-club" className="btn-secondary">
                    Découvrir le club
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors duration-200">
                    Nous rejoindre
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2} className="flex justify-center">
              <KidsPlayingSVG width={480} height={240} className="drop-shadow-xl max-w-full" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== TEAMS PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <FadeInSection className="text-center mb-12">
            <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
              Nos équipes
            </span>
            <h2 className="section-title mt-2">3 équipes en compétition</h2>
            <p className="section-subtitle">
              Seniors A, Seniors B et Vétérans — tous affiliés à la LFFS
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: 'Seniors A',
                division: 'Provinciale 1 BBW',
                emoji: '⚽',
                desc: 'Notre équipe première, engagée en Provinciale 1 Bruxelles-Brabant Wallon.',
              },
              {
                name: 'Seniors B',
                division: 'Provinciale 2 BBW',
                emoji: '🔴',
                desc: 'La réserve du club, compétissant en Provinciale 2 avec ambition.',
              },
              {
                name: 'Vétérans',
                division: 'Vétérans BBW',
                emoji: '🏆',
                desc: 'Les anciens du club, toujours aussi passionnés et combatifs.',
              },
            ].map((team, index) => (
              <FadeInSection key={team.name} delay={index * 0.1}>
                <div className="card p-6 text-center group hover:-translate-y-1 transition-transform duration-200">
                  <div className="text-4xl mb-4">{team.emoji}</div>
                  <h3 className="font-display font-bold text-xl text-noir mb-1 group-hover:text-rouge transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-rouge text-xs font-semibold tracking-wide uppercase mb-3">{team.division}</p>
                  <p className="text-gray-500 text-sm font-body leading-relaxed">{team.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center">
            <Link href="/equipes" className="btn-outline-rouge">
              Voir toutes les équipes
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-noir relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <FootballFieldLines className="w-full h-full" opacity={1} />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-rouge/0 via-rouge/30 to-rouge/0 pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <FadeInSection>
            <Shield size={80} className="mx-auto mb-8" />
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-5">
              Rejoignez l&apos;aventure !
            </h2>
            <p className="text-white/60 font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Vous cherchez un club de futsal à Bruxelles ? Quel que soit votre niveau,
              votre âge ou votre nationalité, Atletico Laeken vous accueille à bras ouverts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Nous contacter
              </Link>
              <Link href="/resultats" className="btn-secondary">
                Voir nos résultats
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

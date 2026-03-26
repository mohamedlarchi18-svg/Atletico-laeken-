'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MatchCard from '@/components/MatchCard';
import ClassementTable from '@/components/ClassementTable';
import resultatsData from '@/data/resultats-1466.json';
import classementData from '@/data/classement-1226.json';
import type { Match } from '@/lib/types';

const allMatches = resultatsData.matches as Match[];
const allSeries = Array.from(new Set(allMatches.map((m) => m.serieName))).sort();

function FadeInSection({ children, delay = 0, className = '' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ResultatsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showType, setShowType] = useState<'all' | 'played' | 'upcoming'>('all');

  const filteredMatches = allMatches
    .filter((m) => activeFilter === 'all' || m.serieName === activeFilter)
    .filter((m) => showType === 'all' || m.status === showType)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const playedCount = filteredMatches.filter((m) => m.status === 'played').length;
  const upcomingCount = filteredMatches.filter((m) => m.status === 'upcoming').length;

  return (
    <div className="bg-off-white min-h-screen">
      {/* Page header */}
      <div className="bg-noir py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-noir via-noir to-rouge/20" />
        <div className="container-custom relative z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-rouge text-xs font-semibold tracking-widest uppercase font-body">
              Compétitions
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mt-2 mb-4">
              Résultats & Classements
            </h1>
            <p className="text-white/60 font-body text-lg max-w-2xl">
              Tous les résultats de nos équipes en championnat LFFS, mis à jour régulièrement.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Classement section */}
        <FadeInSection className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-rouge rounded-full" />
            <h2 className="font-display font-bold text-2xl text-noir">Classement — Seniors A</h2>
          </div>
          <ClassementTable
            classement={classementData.classement}
            serieName={classementData.serieName}
          />
        </FadeInSection>

        {/* Filters */}
        <FadeInSection delay={0.1}>
          <div className="bg-white rounded-2xl p-5 shadow-card mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Serie filter */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-body">
                  Filtrer par équipe
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                      activeFilter === 'all'
                        ? 'bg-rouge text-white shadow-rouge'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Toutes
                  </button>
                  {allSeries.map((serie) => (
                    <button
                      key={serie}
                      onClick={() => setActiveFilter(serie)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                        activeFilter === serie
                          ? 'bg-rouge text-white shadow-rouge'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {serie}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status filter */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-body">
                  Statut
                </p>
                <div className="flex gap-2">
                  {[
                    { key: 'all', label: 'Tous' },
                    { key: 'played', label: 'Joués' },
                    { key: 'upcoming', label: 'À venir' },
                  ].map((option) => (
                    <button
                      key={option.key}
                      onClick={() => setShowType(option.key as 'all' | 'played' | 'upcoming')}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                        showType === option.key
                          ? 'bg-noir text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Results count */}
        <FadeInSection delay={0.15} className="mb-6">
          <div className="flex items-center gap-4 text-sm font-body text-gray-500">
            <span>{filteredMatches.length} match{filteredMatches.length !== 1 ? 's' : ''}</span>
            {playedCount > 0 && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                {playedCount} joué{playedCount !== 1 ? 's' : ''}
              </span>
            )}
            {upcomingCount > 0 && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                {upcomingCount} à venir
              </span>
            )}
          </div>
        </FadeInSection>

        {/* Match grid */}
        {filteredMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMatches.map((match, index) => (
              <FadeInSection key={match.id} delay={Math.min(index * 0.05, 0.3)}>
                <MatchCard match={match} />
              </FadeInSection>
            ))}
          </div>
        ) : (
          <FadeInSection>
            <div className="text-center py-16">
              <div className="text-5xl mb-4">📋</div>
              <p className="font-display font-bold text-xl text-gray-400 mb-2">Aucun match trouvé</p>
              <p className="text-gray-400 font-body text-sm">
                Essayez de modifier vos filtres de recherche.
              </p>
              <button
                onClick={() => { setActiveFilter('all'); setShowType('all'); }}
                className="mt-4 btn-outline-rouge !text-xs !px-5 !py-2.5"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </FadeInSection>
        )}

        {/* Legend */}
        <FadeInSection delay={0.2} className="mt-12">
          <div className="bg-white rounded-2xl p-5 shadow-card">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 font-body">
              Légende des résultats
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { color: 'border-green-500', label: 'Victoire' },
                { color: 'border-red-500', label: 'Défaite' },
                { color: 'border-yellow-500', label: 'Match nul' },
                { color: 'border-gray-300', label: 'À venir' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm font-body text-gray-600">
                  <div className={`w-4 h-4 border-l-4 ${item.color} bg-gray-50 rounded`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

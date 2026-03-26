'use client';

import { motion } from 'framer-motion';
import type { Team } from '@/lib/types';
import { LFFS_BASE_URL } from '@/lib/constants';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  const lffsUrl = `${LFFS_BASE_URL}/competition/series/${team.serieId}`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="card p-6 flex flex-col gap-4 group cursor-default"
    >
      {/* Top section */}
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
          style={{ backgroundColor: `${team.color}15` }}
        >
          {team.emoji}
        </div>
        <div
          className="w-2 h-2 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: team.color }}
        />
      </div>

      {/* Team info */}
      <div>
        <h3 className="font-display font-bold text-noir text-xl mb-1 group-hover:text-rouge transition-colors duration-200">
          {team.name}
        </h3>
        <p className="text-xs text-rouge font-body font-semibold tracking-wide uppercase mb-3">
          {team.division}
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-creme rounded-xl p-3">
          <p className="text-xs text-gray-500 font-body mb-0.5">Entraîneur</p>
          <p className="text-sm font-semibold text-noir truncate">{team.coach}</p>
        </div>
        <div className="bg-creme rounded-xl p-3">
          <p className="text-xs text-gray-500 font-body mb-0.5">Effectif</p>
          <p className="text-sm font-semibold text-noir">{team.players} joueurs</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-creme" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: team.color }}
          />
          <span className="text-xs text-gray-400 font-body">Série #{team.serieId}</span>
        </div>

        <a
          href={lffsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rouge hover:text-rouge-dark transition-colors duration-200 group/link"
          onClick={(e) => e.stopPropagation()}
        >
          LFFS
          <svg
            className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

import type { ClassementEntry } from '@/lib/types';
import { goalDifference } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ClassementTableProps {
  classement: ClassementEntry[];
  serieName: string;
}

export default function ClassementTable({ classement, serieName }: ClassementTableProps) {
  return (
    <div className="card overflow-hidden">
      {/* Table header */}
      <div className="px-5 py-4 bg-noir border-b border-gray-100">
        <h3 className="font-display font-bold text-white text-lg">{serieName}</h3>
        <p className="text-white/50 text-xs font-body mt-0.5">Classement général</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm" role="table" aria-label={`Classement ${serieName}`}>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left pl-5 pr-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-8">
                #
              </th>
              <th className="text-left px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase">
                Équipe
              </th>
              <th className="text-center px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-10">
                J
              </th>
              <th className="text-center px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-10 hidden sm:table-cell">
                G
              </th>
              <th className="text-center px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-10 hidden sm:table-cell">
                N
              </th>
              <th className="text-center px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-10 hidden sm:table-cell">
                P
              </th>
              <th className="text-center px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-14 hidden md:table-cell">
                BP
              </th>
              <th className="text-center px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-14 hidden md:table-cell">
                BC
              </th>
              <th className="text-center px-2 py-3 text-xs font-semibold text-gray-500 tracking-wider uppercase w-14 hidden md:table-cell">
                DB
              </th>
              <th className="text-center pr-5 pl-2 py-3 text-xs font-semibold text-gray-800 tracking-wider uppercase w-12 font-black">
                Pts
              </th>
            </tr>
          </thead>
          <tbody>
            {classement.map((entry, index) => (
              <tr
                key={entry.teamName}
                className={cn(
                  'border-b border-gray-50 transition-colors duration-150',
                  entry.isOurClub
                    ? 'bg-rouge/5 hover:bg-rouge/8'
                    : index % 2 === 0
                    ? 'bg-white hover:bg-gray-50'
                    : 'bg-gray-50/50 hover:bg-gray-50'
                )}
              >
                {/* Position */}
                <td className="pl-5 pr-2 py-3.5 w-8">
                  <span className={cn(
                    'inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold',
                    entry.position === 1
                      ? 'bg-yellow-100 text-yellow-700'
                      : entry.position === 2
                      ? 'bg-gray-100 text-gray-600'
                      : entry.position === 3
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-400 font-medium'
                  )}>
                    {entry.position}
                  </span>
                </td>

                {/* Team name */}
                <td className="px-2 py-3.5">
                  <div className="flex items-center gap-2">
                    {entry.isOurClub && (
                      <span className="w-1.5 h-5 bg-rouge rounded-full flex-shrink-0" aria-hidden="true" />
                    )}
                    <span className={cn(
                      'font-body text-sm',
                      entry.isOurClub
                        ? 'font-bold text-noir'
                        : 'text-gray-700'
                    )}>
                      {entry.teamName}
                    </span>
                    {entry.isOurClub && (
                      <span className="text-xs bg-rouge text-white px-1.5 py-0.5 rounded font-semibold tracking-wide hidden sm:inline">
                        ATL
                      </span>
                    )}
                  </div>
                </td>

                {/* Played */}
                <td className="text-center px-2 py-3.5 text-gray-600 font-body text-sm">{entry.played}</td>

                {/* Won */}
                <td className="text-center px-2 py-3.5 text-green-600 font-body text-sm font-medium hidden sm:table-cell">{entry.won}</td>

                {/* Drawn */}
                <td className="text-center px-2 py-3.5 text-yellow-600 font-body text-sm font-medium hidden sm:table-cell">{entry.drawn}</td>

                {/* Lost */}
                <td className="text-center px-2 py-3.5 text-red-500 font-body text-sm font-medium hidden sm:table-cell">{entry.lost}</td>

                {/* Goals for */}
                <td className="text-center px-2 py-3.5 text-gray-600 font-body text-sm hidden md:table-cell">{entry.goalsFor}</td>

                {/* Goals against */}
                <td className="text-center px-2 py-3.5 text-gray-600 font-body text-sm hidden md:table-cell">{entry.goalsAgainst}</td>

                {/* Goal difference */}
                <td className={cn(
                  'text-center px-2 py-3.5 text-sm font-semibold font-body hidden md:table-cell',
                  entry.goalsFor - entry.goalsAgainst > 0
                    ? 'text-green-600'
                    : entry.goalsFor - entry.goalsAgainst < 0
                    ? 'text-red-500'
                    : 'text-gray-500'
                )}>
                  {goalDifference(entry.goalsFor, entry.goalsAgainst)}
                </td>

                {/* Points */}
                <td className="text-center pr-5 pl-2 py-3.5">
                  <span className={cn(
                    'inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-black',
                    entry.isOurClub
                      ? 'bg-rouge text-white'
                      : entry.position <= 3
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-800 bg-gray-100'
                  )}>
                    {entry.points}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-400 font-body">
        <span>J = Joués</span>
        <span className="hidden sm:inline">G = Gagnés · N = Nuls · P = Perdus</span>
        <span className="hidden md:inline">BP = Buts Pour · BC = Buts Contre · DB = Diff. Buts</span>
        <span>Pts = Points</span>
      </div>
    </div>
  );
}

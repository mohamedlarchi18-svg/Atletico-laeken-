import type { Match } from '@/lib/types';
import { formatDateShort, getMatchResult, getResultBorderClass, getResultLabel, isOurTeam } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface MatchCardProps {
  match: Match;
  className?: string;
}

export default function MatchCard({ match, className }: MatchCardProps) {
  const result = getMatchResult(match);
  const borderClass = getResultBorderClass(result);
  const isHomeOurs = isOurTeam(match.homeTeam);
  const isAwayOurs = isOurTeam(match.awayTeam);

  const resultColors = {
    win: 'bg-green-50 text-green-700 border-green-200',
    loss: 'bg-red-50 text-red-700 border-red-200',
    draw: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    upcoming: 'bg-gray-50 text-gray-500 border-gray-200',
  };

  const resultIcons = {
    win: '✓',
    loss: '✗',
    draw: '=',
    upcoming: '●',
  };

  return (
    <div
      className={cn(
        'card border-l-4 p-5 hover:-translate-y-0.5 transition-transform duration-200',
        borderClass,
        className
      )}
    >
      {/* Header: serie name + journée */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-400 font-body font-medium tracking-wide">
          {match.serieName}
        </span>
        <span className="text-xs text-gray-400 font-body">
          J{match.journee}
        </span>
      </div>

      {/* Date */}
      <p className="text-xs text-gray-500 font-body mb-3">
        {formatDateShort(match.date)}
      </p>

      {/* Match info */}
      <div className="flex items-center gap-2">
        {/* Home team */}
        <div className={cn(
          'flex-1 text-right',
          isHomeOurs && 'font-bold'
        )}>
          <span className={cn(
            'text-sm font-body leading-tight',
            isHomeOurs ? 'text-noir font-bold' : 'text-gray-600'
          )}>
            {match.homeTeam}
          </span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-1.5 mx-2 flex-shrink-0">
          {match.status === 'played' && match.homeScore !== null && match.awayScore !== null ? (
            <>
              <span className={cn(
                'w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black font-display',
                isHomeOurs
                  ? result === 'win'
                    ? 'bg-green-100 text-green-800'
                    : result === 'loss'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-700'
              )}>
                {match.homeScore}
              </span>
              <span className="text-gray-300 font-bold text-xs">–</span>
              <span className={cn(
                'w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black font-display',
                isAwayOurs
                  ? result === 'win'
                    ? 'bg-green-100 text-green-800'
                    : result === 'loss'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-700'
              )}>
                {match.awayScore}
              </span>
            </>
          ) : (
            <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-semibold text-gray-500 tracking-wider">
              vs
            </span>
          )}
        </div>

        {/* Away team */}
        <div className={cn(
          'flex-1',
          isAwayOurs && 'font-bold'
        )}>
          <span className={cn(
            'text-sm font-body leading-tight',
            isAwayOurs ? 'text-noir font-bold' : 'text-gray-600'
          )}>
            {match.awayTeam}
          </span>
        </div>
      </div>

      {/* Result badge */}
      {(isHomeOurs || isAwayOurs) && (
        <div className="mt-3 flex justify-center">
          <span className={cn(
            'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border',
            resultColors[result]
          )}>
            <span>{resultIcons[result]}</span>
            <span>{getResultLabel(result)}</span>
          </span>
        </div>
      )}
    </div>
  );
}

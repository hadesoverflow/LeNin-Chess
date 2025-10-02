import React from 'react';
import type { Player } from '../types';
import { TILES } from '../constants';

interface CurrentPlayerStatsProps {
  player: Player;
}

const StatItem: React.FC<{ label: string; value: string | number; className?: string; style?: React.CSSProperties }> = ({ label, value, className = 'text-stone-800', style }) => (
  <div className="flex justify-between items-baseline py-2 border-b border-yellow-700/20">
    <span className="text-sm font-medium text-stone-600">{label}:</span>
    <span className={`text-base font-bold text-right ${className}`} style={style}>{value}</span>
  </div>
);

const CurrentPlayerStats: React.FC<CurrentPlayerStatsProps> = ({ player }) => {
  const currentTile = TILES.find(tile => tile.id === player.position);

  return (
    <div className="bg-[#e0cdaf]/80 p-4 rounded-lg shadow-lg border-2 border-yellow-700/60 backdrop-blur-sm h-fit">
      <h2 className="font-display text-3xl text-[#8B4513] mb-3 border-b-2 border-yellow-700/60 pb-2 text-center" style={{ textShadow: '1px 1px #fdf6e3' }}>
        Thông Tin Lượt
      </h2>
      <div className="space-y-1">
        <StatItem label="Người chơi" value={player.name} className="font-black" style={{ color: player.color }} />
        <StatItem label="Điểm tri thức" value={`${player.kp} KP`} className="text-blue-800" />
        <StatItem label="Vị trí" value={currentTile?.name.split(' ').slice(0, -1).join(' ') || 'Không xác định'} />
        <StatItem label="Câu hỏi đã trả lời" value={player.answeredQuestionsCount} />
        <StatItem label="Số vòng đã đi" value={`${player.laps} / 10`} />
        <StatItem label="Số lần thưởng/phạt" value={player.kpHistory.length} />
      </div>
    </div>
  );
};

export default CurrentPlayerStats;
import React from 'react';
import type { Player } from '../types';

interface PlayerDashboardProps {
    players: Player[];
    currentPlayerId: number;
    kpChanges: { [key: number]: number | null };
}

const PlayerDashboard: React.FC<PlayerDashboardProps> = ({ players, currentPlayerId, kpChanges }) => {
    return (
        <div className="bg-[#e0cdaf]/80 p-4 rounded-lg shadow-lg border-2 border-yellow-700/60 backdrop-blur-sm h-fit">
            <h2 className="font-display text-3xl text-[#8B4513] mb-3 border-b-2 border-yellow-700/60 pb-2 text-center" style={{ textShadow: '1px 1px #fdf6e3' }}>
                Các Nhà Lý Luận
            </h2>
            <div className="space-y-3">
                {players.map(player => {
                    const kpChange = kpChanges[player.id];
                    const isPositive = kpChange && kpChange > 0;
                    const isEliminated = player.isEliminated;

                    return (
                        <div key={player.id} className={`relative p-3 rounded-lg transition-all duration-300 shadow-md border-l-8 ${player.id === currentPlayerId && !isEliminated ? 'bg-yellow-200/50 scale-105 shadow-xl' : 'bg-stone-50/50'} ${isEliminated ? 'opacity-50 bg-gray-300/60' : ''}`} style={{ borderColor: player.color }}>
                             {kpChange && !isEliminated && (
                                <div key={Date.now()} className={`absolute top-0 right-2 font-bold text-lg animate-kp-feedback ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {isPositive ? '+' : ''}{kpChange} KP
                                </div>
                            )}
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg text-stone-800">{player.name}</span>
                                {isEliminated ? (
                                    <span className="font-bold text-lg text-red-700">ĐÃ BỊ LOẠI</span>
                                ) : (
                                    <span className="font-bold text-lg text-[#005f73]">{player.kp} KP</span>
                                )}
                            </div>
                             {player.cards.length > 0 && !isEliminated && (
                                <div className="text-xs mt-1 text-gray-700 flex flex-wrap gap-x-2">
                                    <strong>Thẻ:</strong>
                                    {player.cards.map(card => (
                                        <span key={card.id} className="font-semibold" title={card.description}>
                                            {card.name.replace('Thẻ ', '').replace('Lá Chắn ', '')}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlayerDashboard;
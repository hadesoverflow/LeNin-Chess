import React, { useState } from 'react';
import { PLAYER_COLORS } from '../constants';

interface GameSetupProps {
    onStartGame: (playerNames: string[]) => void;
}

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame }) => {
    const [players, setPlayers] = useState(['Triết gia 1', 'Triết gia 2']);

    const handlePlayerCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const count = parseInt(e.target.value, 10);
        const newPlayers = Array.from({ length: count }, (_, i) => players[i] || `Triết gia ${i + 1}`);
        setPlayers(newPlayers);
    };

    const handleNameChange = (index: number, name: string) => {
        const newPlayers = [...players];
        newPlayers[index] = name;
        setPlayers(newPlayers);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validPlayers = players.filter(name => name.trim() !== '');
        if (validPlayers.length >= 2) {
            onStartGame(validPlayers);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-[#e0cdaf]/80 p-8 rounded-xl shadow-2xl border-2 border-yellow-700/60 backdrop-blur-sm w-full max-w-md">
                <h1 className="font-display text-5xl text-[#8B4513] text-center mb-2" style={{ textShadow: '1px 1px #fdf6e3' }}>
                    Lênin Chess
                </h1>
                <h2 className="text-xl text-center text-stone-700 mb-6 font-semibold">Chế Độ Chơi Tại Máy</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="playerCount" className="block text-lg font-medium text-stone-800 mb-2">Số người chơi:</label>
                        <select
                            id="playerCount"
                            value={players.length}
                            onChange={handlePlayerCountChange}
                            className="w-full p-3 border-2 border-yellow-700/60 rounded-md bg-[#fdf6e3] focus:ring-yellow-500 focus:border-yellow-500 shadow-inner"
                        >
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        {players.map((name, index) => (
                            <div key={index}>
                                <label htmlFor={`player-${index}`} className="block text-lg font-bold mb-2" style={{ color: PLAYER_COLORS[index] }}>
                                    Người chơi {index + 1}:
                                </label>
                                <input
                                    type="text"
                                    id={`player-${index}`}
                                    value={name}
                                    onChange={(e) => handleNameChange(index, e.target.value)}
                                    className="w-full p-3 border-2 border-yellow-700/60 rounded-md bg-[#fdf6e3] focus:ring-yellow-500 focus:border-yellow-500 shadow-inner"
                                    maxLength={20}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-700 text-white font-bold py-4 px-4 rounded-lg shadow-lg hover:bg-red-800 transition-all text-xl transform hover:scale-105"
                    >
                        Bắt Đầu!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GameSetup;

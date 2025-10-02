import React, { useRef, useEffect } from 'react';

interface GameLogProps {
    log: {turn: number, message: string, id: number}[];
    onClearLog: () => void;
}

const GameLog: React.FC<GameLogProps> = ({ log, onClearLog }) => {
    const scrollableContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollableContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [log]);

    return (
        <div className="bg-[#e0cdaf]/80 p-4 rounded-lg shadow-lg border-2 border-yellow-700/60 backdrop-blur-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-3 border-b-2 border-yellow-700/60 pb-2">
                <h2 className="font-display text-3xl text-[#8B4513]" style={{ textShadow: '1px 1px #fdf6e3' }}>
                    Nhật Ký Cách Mạng
                </h2>
                <button
                    onClick={onClearLog}
                    className="text-sm bg-gray-600 text-white font-bold py-1 px-3 rounded-lg shadow hover:bg-gray-700 transition-all transform hover:scale-105"
                    aria-label="Xóa nhật ký"
                >
                    Xóa
                </button>
            </div>
            <div ref={scrollableContainerRef} className="flex-grow overflow-y-auto pr-2 font-mono text-stone-700">
                <ul className="space-y-2 text-sm">
                    {log.map((entry, index) => {
                       const isTurnMarker = entry.message.startsWith('---');
                       return (
                         <li key={entry.id} className={`transition-opacity duration-500 ${isTurnMarker ? 'font-bold text-red-700 pt-2' : ''}`}>
                             {entry.message.replace(/--- \[Lượt \d+\] |---/g, '')}
                         </li>
                       )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default GameLog;
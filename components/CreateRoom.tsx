import React, { useState } from 'react';
import { CHARACTERS_LIST } from '../constants';

interface CreateRoomProps {
  onCreateRoom: (playerName: string, characterImg: string, numBots: number) => void;
  onBack: () => void;
}

const CreateRoom: React.FC<CreateRoomProps> = ({ onCreateRoom, onBack }) => {
  const [name, setName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(CHARACTERS_LIST[0]);
  const [numBots, setNumBots] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreateRoom(name.trim(), selectedCharacter.img, numBots);
    }
  };

  const inputClass =
    'w-full p-3 border border-yellow-800/20 rounded-lg bg-[#fff9e6] focus:ring-yellow-500 focus:border-yellow-500 shadow-inner placeholder-stone-500 text-stone-900';
  const buttonBaseClass =
    'flex-1 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div
        className="p-8 rounded-xl shadow-2xl border-2 border-[#a9997c]/50 w-full max-w-xl"
        style={{
          backgroundColor: '#d3c3a7',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      >
        <h1
          className="font-display text-5xl text-[#6b4c2f] text-center mb-8"
          style={{ textShadow: '1px 1px #fdf6e3' }}
        >
          Tạo Phòng Chơi Online
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="playerName" className="block text-lg font-medium text-stone-800 mb-2">
              Tên của bạn:
            </label>
            <input
              type="text"
              id="playerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="Nhập tên nhà lý luận..."
              maxLength={20}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-stone-800 mb-3">Chọn nhân vật:</label>
            <div className="grid grid-cols-4 gap-4">
              {CHARACTERS_LIST.map((char) => (
                <button
                type="button"
                key={char.name}
                onClick={() => setSelectedCharacter(char)}
                className={`cursor-pointer rounded-lg transition-all duration-200 border-2 p-0.5 ${
                  selectedCharacter.name === char.name ? 'border-red-600' : 'border-transparent'
                  }`}
                  >
                    <div className="bg-[#c2b29a] p-2 rounded-md shadow-sm h-full flex flex-col justify-between">
                      <div className="bg-[#ede4d1] rounded-sm aspect-square flex items-center justify-center overflow-hidden shadow-inner">
                        <img
                        src={char.img}
                        alt={char.name}
                        className="w-full h-full object-contain p-1"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="%23ede4d1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%236b4c2f">No Image</text></svg>';
                        }}
                        />
                        </div>
                        <p className="text-center font-bold text-xs text-stone-800 pt-1.5 leading-snug break-words">
                          {char.name}
                          </p>
                          </div>
                          </button>
                        ))}
                        </div>
          </div>
          
           <div>
              <h2 className="block text-lg font-medium text-stone-800 mb-3">
                Số lượng đối thủ (Bot)
              </h2>
              <div className="flex w-full bg-[#c2b29a] rounded-lg p-1 shadow-inner">
                {[0, 1, 2, 3].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setNumBots(count)}
                    className={`flex-1 text-center font-bold py-2 rounded-md transition-colors duration-200 ${
                      numBots === count
                        ? 'bg-[#ede4d1] text-stone-900 shadow'
                        : 'text-stone-700 hover:bg-[#d3c3a7]'
                    }`}
                  >
                    {count === 0 ? 'Không' : `${count} Bot`}
                  </button>
                ))}
              </div>
            </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onBack}
              className={`${buttonBaseClass} bg-[#585858] hover:bg-[#4a4a4a]`}
            >
              Quay Lại
            </button>
            <button
              type="submit"
              disabled={!name.trim()}
              className={`${buttonBaseClass} bg-green-600 hover:bg-green-700`}
            >
              Tạo Phòng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
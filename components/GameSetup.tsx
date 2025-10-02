import React, { useState } from 'react';
import { CHARACTERS_LIST } from '../constants';

export interface GameSetupConfig {
  name: string;
  characterImg: string;
  numBots: number;
}

interface GameSetupProps {
  mode: 'local' | 'online';
  onStart: (config: GameSetupConfig) => void;
  onBack: () => void;
}

const GameSetup: React.FC<GameSetupProps> = ({ mode, onStart, onBack }) => {
  const [name, setName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(CHARACTERS_LIST[0]);
  const [numBots, setNumBots] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart({
        name: name.trim(),
        characterImg: selectedCharacter.img,
        numBots,
      });
    }
  };

  const title = mode === 'local' ? 'Chế Độ Chơi Đơn' : 'Tạo Phòng Chơi Online';
  const submitButtonText = mode === 'local' ? 'Bắt Đầu' : 'Tạo Phòng';
  const submitButtonColor = mode === 'local' ? 'bg-[#b95c5c] hover:bg-[#a94c4c]' : 'bg-green-600 hover:bg-green-700';

  const inputClass =
    'w-full p-3 border border-yellow-800/20 rounded-lg bg-[#fff9e6] focus:ring-yellow-500 focus:border-yellow-500 shadow-inner placeholder-stone-500 text-stone-900';
  const buttonBaseClass =
    'flex-1 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed';

  const CharacterCard: React.FC<{char: typeof CHARACTERS_LIST[0], isSelected: boolean, onSelect: () => void}> = ({char, isSelected, onSelect}) => (
    <button
        type="button"
        onClick={onSelect}
        className={`cursor-pointer rounded-lg transition-all duration-200 border-2 p-0.5 ${
            isSelected ? 'border-red-600' : 'border-transparent'
        }`}
    >
        <div className="bg-[#c2b29a] p-2 rounded-md shadow-sm h-full flex flex-col justify-between">
            <div className="bg-[#ede4d1] rounded-sm aspect-square flex items-center justify-center overflow-hidden shadow-inner">
                <img
                    src={char.img}
                    alt={char.name}
                    className="w-full h-full object-contain p-1"
                />
            </div>
            <p className="text-center font-bold text-xs text-stone-800 pt-1.5 leading-snug break-words">
                {char.name}
            </p>
        </div>
    </button>
  );

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
          {title}
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
              <h2 className="block text-lg font-medium text-stone-800 mb-3">Chọn nhân vật của bạn:</h2>
              <div className="grid grid-cols-4 gap-4">
                {CHARACTERS_LIST.map((char) => (
                  <CharacterCard
                    key={char.name}
                    char={char}
                    isSelected={selectedCharacter.name === char.name}
                    onSelect={() => setSelectedCharacter(char)}
                  />
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
              className={`${buttonBaseClass} ${submitButtonColor}`}
            >
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameSetup;
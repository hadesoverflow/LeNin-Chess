import React, { useState } from 'react';

interface OnlineMenuProps {
  onCreateRoom: (playerName: string) => void;
  onJoinRoom: (roomId: string, playerName: string) => void;
}

const OnlineMenu: React.FC<OnlineMenuProps> = ({ onCreateRoom, onJoinRoom }) => {
  const [playerName, setPlayerName] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleJoin = () => {
    if (playerName.trim() && roomId.trim()) {
      onJoinRoom(roomId.toUpperCase(), playerName);
    }
  };
  
  const handleCreate = () => {
      if (playerName.trim()) {
          onCreateRoom(playerName);
      }
  }

  const inputClass = "w-full p-3 border-2 border-yellow-700/60 rounded-md bg-[#fdf6e3] focus:ring-yellow-500 focus:border-yellow-500 shadow-inner";
  const buttonClass = "w-full text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-[#e0cdaf]/80 p-8 rounded-xl shadow-2xl border-2 border-yellow-700/60 backdrop-blur-sm w-full max-w-md">
        <h1 className="font-display text-5xl text-[#8B4513] text-center mb-6" style={{ textShadow: '1px 1px #fdf6e3' }}>
          Chơi Online
        </h1>
        <div className="space-y-6">
          <div>
            <label htmlFor="playerName" className="block text-lg font-medium text-stone-800 mb-2">Tên của bạn:</label>
            <input
              id="playerName"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className={inputClass}
              placeholder="Nhập tên..."
              maxLength={20}
            />
          </div>

          <div className="space-y-2">
            <button onClick={handleCreate} disabled={!playerName.trim()} className={`${buttonClass} bg-green-600 hover:bg-green-700`}>
                Tạo Phòng Mới
            </button>
          </div>
          
          <div className="flex items-center text-center">
            <hr className="flex-grow border-t-2 border-yellow-700/50" />
            <span className="px-4 text-stone-600 font-semibold">HOẶC</span>
            <hr className="flex-grow border-t-2 border-yellow-700/50" />
          </div>

          <div className="space-y-4">
             <div>
                <label htmlFor="roomId" className="block text-lg font-medium text-stone-800 mb-2">Mã phòng:</label>
                <input
                  id="roomId"
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className={`${inputClass} uppercase`}
                  placeholder="Nhập mã phòng..."
                  maxLength={6}
                />
              </div>
            <button onClick={handleJoin} disabled={!playerName.trim() || !roomId.trim()} className={`${buttonClass} bg-blue-600 hover:bg-blue-700`}>
              Vào Phòng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineMenu;

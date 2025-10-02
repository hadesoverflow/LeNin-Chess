import React from 'react';

interface MainMenuProps {
  onNavigate: (target: 'local_setup' | 'create_room' | 'join_room') => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onNavigate }) => {
  const buttonClass = "w-full bg-red-700 text-white font-bold py-4 px-4 rounded-lg shadow-lg hover:bg-red-800 transition-all text-xl transform hover:scale-105";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-[#e0cdaf]/80 p-8 rounded-xl shadow-2xl border-2 border-yellow-700/60 backdrop-blur-sm w-full max-w-md text-center">
        <h1 className="font-display text-6xl text-[#8B4513] mb-4" style={{ textShadow: '1px 1px #fdf6e3' }}>
          Lênin Chess
        </h1>
        <p className="text-stone-700 mb-8 text-lg">Chào mừng đến với cuộc cách mạng tri thức!</p>
        <div className="space-y-4">
          <button onClick={() => onNavigate('local_setup')} className={buttonClass}>
            Chơi Đơn
          </button>
          <button onClick={() => onNavigate('create_room')} className={buttonClass}>
            Tạo Phòng Nhiều Người
          </button>
          <button onClick={() => onNavigate('join_room')} className={buttonClass}>
            Tham Gia Phòng
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
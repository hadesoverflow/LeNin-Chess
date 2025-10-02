import React from 'react';
import type { TileData } from '../types';
import { getGroupColors } from '../utils';

type TileOrientation = 'corner' | 'top' | 'bottom' | 'left' | 'right';

interface TileProps {
  tileData: TileData;
  orientation: TileOrientation;
}

/* --------- Corner --------- */
const CornerTile: React.FC<{ tileData: TileData }> = ({ tileData }) => {
  const nameParts = tileData.name.split(' ');
  const icon = nameParts.pop();
  const name = nameParts.join(' ');
  return (
    <div className="w-full h-full bg-[#e0cdaf] border-2 border-stone-500 relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center -rotate-45 scale-90">
        <span className="font-bold text-stone-800 uppercase text-[10px] leading-tight whitespace-normal break-words [overflow-wrap:anywhere] [hyphens:auto]">
          {name}
        </span>
        <span className="text-4xl my-1 leading-none">{icon}</span>
        {tileData.type === 'start' && (
          <span className="font-bold text-red-700 text-[9px] leading-none">NHẬN 200 KP</span>
        )}
      </div>
    </div>
  );
};

/* --------- Jail --------- */
const JailTile: React.FC<{ tileData: TileData }> = ({ tileData }) => {
  const nameParts = tileData.name.split(' ');
  const icon = nameParts.pop();
  return (
    <div className="w-full h-full bg-gray-800 border-2 border-stone-500 flex flex-col items-center justify-around p-1 text-white">
      <span className="font-bold text-[10px] uppercase text-center leading-tight">Trại Cải Tạo</span>
      <span className="text-4xl leading-none">{icon}</span>
      <span className="font-bold text-[10px] uppercase text-center leading-tight">Tư Duy</span>
    </div>
  );
};

/* --------- Standard --------- */
const StandardTile: React.FC<{
  tileData: TileData;
  orientation: 'top' | 'bottom' | 'left' | 'right';
}> = ({ tileData, orientation }) => {
  const nameParts = tileData.name.split(' ');
  const icon = nameParts.pop();
  const name = nameParts.join(' ');
  const colors = getGroupColors(tileData.group);

  // Nội dung chuẩn, cho phép wrap
  const Content = () => (
    <div
      className={`w-full h-full ${colors.name} flex flex-col items-center justify-center text-center p-1
                  whitespace-normal break-words [overflow-wrap:anywhere] [hyphens:auto]`}
    >
      {/* FIX: Removed invalid TileType 'community_chest' from condition. */}
      {(tileData.type === 'opportunity') ? (
        <>
          <span className="font-bold uppercase text-[9px] leading-tight mb-[2px]">
            {name}
          </span>
          <span className={`text-3xl ${colors.icon}`}>{icon}</span>
        </>
      ) : (
        <>
          <span className="font-bold uppercase text-[9.5px] leading-tight">
            {name}
          </span>
          {icon && <span className={`text-2xl mt-[2px] ${colors.icon}`}>{icon}</span>}
        </>
      )}
    </div>
  );

  const borderClass = 'border border-stone-400';

  // ✅ Với left/right, ta không xoay nữa — hiển thị ngang giống top/bottom
  return (
    <div className={`w-full h-full ${borderClass} ${colors.bg}`}>
      <Content />
    </div>
  );
};

const Tile: React.FC<TileProps> = ({ tileData, orientation }) => {
  if (orientation === 'corner') return <CornerTile tileData={tileData} />;
  // FIX: Replaced 'jail' with 'prison' to match the defined TileType.
  if (tileData.type === 'prison') return <JailTile tileData={tileData} />;
  return <StandardTile tileData={tileData} orientation={orientation} />;
};

export default Tile;

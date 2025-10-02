import React from 'react';
import { TILES } from '../constants';
import Tile from './Tile';
import type { Player, TileData, GameState } from '../types';
import PlayerPiece from './PlayerPiece';

interface GameBoardProps {
  children: React.ReactNode;
  highlightedTile: number | null;
  players: Player[];
  tilePositions: { [key: number]: { top: number; left: number; width: number; height: number; } };
  currentPlayerId: number;
  onTileClick: (tileData: TileData) => void;
  attackAnimation: GameState['attackAnimation'];
}

const TILE_POSITIONS: { [key: number]: { row: number; col: number } } = {
  1: { row: 11, col: 11 }, 2: { row: 11, col: 10 }, 3: { row: 11, col: 9 }, 4: { row: 11, col: 8 }, 5: { row: 11, col: 7 }, 6: { row: 11, col: 6 }, 7: { row: 11, col: 5 }, 8: { row: 11, col: 4 }, 9: { row: 11, col: 3 }, 10: { row: 11, col: 2 }, 11: { row: 11, col: 1 },
  12: { row: 10, col: 1 }, 13: { row: 9, col: 1 }, 14: { row: 8, col: 1 }, 15: { row: 7, col: 1 }, 16: { row: 6, col: 1 }, 17: { row: 5, col: 1 }, 18: { row: 4, col: 1 }, 19: { row: 3, col: 1 }, 20: { row: 2, col: 1 }, 21: { row: 1, col: 1 },
  22: { row: 1, col: 2 }, 23: { row: 1, col: 3 }, 24: { row: 1, col: 4 }, 25: { row: 1, col: 5 }, 26: { row: 1, col: 6 }, 27: { row: 1, col: 7 }, 28: { row: 1, col: 8 }, 29: { row: 1, col: 9 }, 30: { row: 1, col: 10 }, 31: { row: 1, col: 11 },
  32: { row: 2, col: 11 }, 33: { row: 3, col: 11 }, 34: { row: 4, col: 11 }, 35: { row: 5, col: 11 }, 36: { row: 6, col: 11 }, 37: { row: 7, col: 11 }, 38: { row: 8, col: 11 }, 39: { row: 9, col: 11 }, 40: { row: 10, col: 11 },
};

type TileOrientation = 'corner' | 'top' | 'bottom' | 'left' | 'right';

const getTileOrientation = (id: number): TileOrientation => {
  if ([1, 11, 21, 31].includes(id)) return 'corner';
  if (id > 1 && id < 11) return 'bottom';
  if (id > 11 && id < 21) return 'left';
  if (id > 21 && id < 31) return 'top';
  if (id > 31 && id <= 40) return 'right';
  return 'bottom'; // Default
};


const GameBoard = React.forwardRef<HTMLDivElement, GameBoardProps>(
  ({ children, highlightedTile, players, tilePositions, currentPlayerId, onTileClick, attackAnimation }, ref) => {
    
    const animatedPlayers = React.useMemo(() => {
        if (!attackAnimation || Object.keys(tilePositions).length === 0) {
            return players;
        }
        
        const { stage, attackerId, targetId, attackerOriginalPosition } = attackAnimation;
        const targetPlayer = players.find(p => p.id === targetId);

        if (stage === 'moving_to_target' || stage === 'impacting') {
            return players.map(p => {
                if (p.id === attackerId && targetPlayer) {
                    // Temporarily move attacker to target's position
                    return { ...p, position: targetPlayer.position };
                }
                return p;
            });
        }
       
        if (stage === 'attacker_returning') {
            return players.map(p => {
                if (p.id === attackerId) {
                    // Temporarily move attacker back to original position for the animation
                    return { ...p, position: attackerOriginalPosition };
                }
                return p;
            });
        }
        
        return players;

    }, [players, attackAnimation, tilePositions]);

    const activePlayers = React.useMemo(() => animatedPlayers.filter(p => !p.isEliminated), [animatedPlayers]);

    const playersByPosition = React.useMemo(() => {
        const groups: { [key: number]: Player[] } = {};
        activePlayers.forEach(p => {
            if (!groups[p.position]) {
                groups[p.position] = [];
            }
            groups[p.position].push(p);
        });
        return groups;
    }, [activePlayers]);

    const styleVars: React.CSSProperties = {
      ['--gap' as any]: '2px',
      ['--pad' as any]: '8px',
      ['--border' as any]: '4px',
      ['--boardH' as any]: 'min(95vw, 92vh, 1100px)',
      // Kích thước board vuông, chiều rộng bằng chiều cao
      width: 'var(--boardH)',
      height: 'var(--boardH)',
      // Chia layout thành 11 cột/dòng. 
      // Cột/dòng ngoài cùng (1.5fr) lớn hơn các cột/dòng bên trong (1fr)
      // để ô góc to hơn, ô cạnh thành hình chữ nhật.
      gridTemplateColumns: '1.5fr repeat(9, 1fr) 1.5fr',
      gridTemplateRows: '1.5fr repeat(9, 1fr) 1.5fr',
    };

    return (
      <div
        ref={ref}
        className="
          relative
          grid
          bg-[#2d1e10]
          rounded-lg shadow-2xl
          border-4 border-[#5d4022]
          transform-gpu
          mx-auto
        "
        style={{
          ...styleVars,
          padding: 'var(--pad)',
          gap: 'var(--gap)',
        }}
      >
        {TILES.map((tile) => {
          const pos = TILE_POSITIONS[tile.id];
          return (
            <div
              key={tile.id}
              data-tile-id={tile.id}
              className={`relative cursor-pointer transition-all duration-150 hover:bg-yellow-400/20 rounded-sm ${highlightedTile === tile.id ? 'animate-tile-highlight' : ''}`}
              style={{ gridRow: pos.row, gridColumn: pos.col }}
              onClick={() => onTileClick(tile)}
            >
              <div className="absolute inset-0">
                <Tile tileData={tile} orientation={getTileOrientation(tile.id)} />
              </div>
            </div>
          );
        })}

        {/* Trung tâm bàn cờ (tỷ lệ theo chiều cao mới) */}
        <div
          className="absolute flex items-center justify-center bg-[#4a3f35] rounded-lg border-4 border-yellow-700/80 shadow-inner"
          style={{
             // inset tính từ cạnh board, bằng 1 ô ngoài + 1 gap
            // 1.5fr / (1.5 + 9 + 1.5)fr ~ 12.5%. Thêm ~1% cho gap/padding.
            inset: '13.5%',
            backgroundImage: `
              radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 60%),
              url('https://www.transparenttextures.com/patterns/wood-pattern.png')
            `,
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.7), 0 5px 15px rgba(0,0,0,0.3)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
             <svg width="60%" height="60%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0 L61.2 34.5 L97.5 34.5 L68.1 55.9 L79.4 90.5 L50 69.1 L20.6 90.5 L31.9 55.9 L2.5 34.5 L38.8 34.5 Z" fill="#b91c1c" />
            </svg>
          </div>
           <div className="relative z-10 w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>

        {/* Quân cờ giữ theo tọa độ tuyệt đối */}
        <div className="absolute inset-0 pointer-events-none">
          {Object.keys(tilePositions).length > 0 &&
            activePlayers.map((player) => {
              const pos = tilePositions[player.position];
              const playersOnSameTile = playersByPosition[player.position] || [];
              const offsetIndex = playersOnSameTile.findIndex(p => p.id === player.id);
              const totalOnTile = playersOnSameTile.length;
              
              const isTargetBeingImpacted = attackAnimation?.stage === 'impacting' && player.id === attackAnimation.targetId;
              const isAttackerAnimating = attackAnimation && player.id === attackAnimation.attackerId && (attackAnimation.stage === 'moving_to_target' || attackAnimation.stage === 'attacker_returning');

              return (
                 <PlayerPiece
                    key={player.id}
                    characterImg={player.characterImg}
                    top={pos?.top ?? 0}
                    left={pos?.left ?? 0}
                    width={pos?.width ?? 0}
                    height={pos?.height ?? 0}
                    isCurrent={player.id === currentPlayerId}
                    offsetIndex={offsetIndex}
                    totalOnTile={totalOnTile}
                    isBeingAttacked={isTargetBeingImpacted}
                    animationDuration={isAttackerAnimating ? 800 : 300}
                  />
              );
            })}
        </div>
      </div>
    );
  }
);

export default GameBoard;
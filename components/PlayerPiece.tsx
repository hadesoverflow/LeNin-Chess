import React from 'react';

interface PlayerPieceProps {
    characterImg: string;
    top: number;
    left: number;
    width: number;
    height: number;
    isCurrent: boolean;
    offsetIndex: number;
    totalOnTile: number;
    isBeingAttacked?: boolean;
    animationDuration?: number;
}

const PlayerPiece: React.FC<PlayerPieceProps> = ({ characterImg, top, left, width, height, isCurrent, offsetIndex, totalOnTile, isBeingAttacked, animationDuration = 300 }) => {
    
    // Calculate transform to center the piece, and then offset it if multiple pieces are present.
    let transformValue = 'translate(-50%, -50%)';
    if (totalOnTile > 1) {
        // Arrange in a small grid
        const columns = totalOnTile <= 2 ? totalOnTile : 2;
        const col = offsetIndex % columns;
        const row = Math.floor(offsetIndex / columns);
        
        // Offset from the center of the tile
        // w-10 is 40px. Let's use 20px as half the piece size for spacing.
        const xOffset = (col - (columns - 1) / 2) * 20; 
        const yOffset = (row - (Math.ceil(totalOnTile / columns) - 1) / 2) * 20;
        
        transformValue += ` translate(${xOffset}px, ${yOffset}px)`;
    }

    return (
        <div
            className={`absolute w-10 h-10 ease-in-out z-10 ${isCurrent ? 'animate-pulse-glow' : ''}`}
            style={{ 
                top: `${top + height / 2}px`,
                left: `${left + width / 2}px`,
                transform: transformValue,
                transition: `all ${animationDuration}ms`,
             }}
        >
            <div className={isBeingAttacked ? 'animate-shake' : ''}>
                <img src={characterImg} alt="Player piece" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
        </div>
    );
};

export default PlayerPiece;
import React, { useState, useEffect, useRef } from 'react';
import type { Player } from '../types';

interface ControlPanelProps {
    currentPlayer: Player;
    onRollDice: () => void;
    dice: number;
    canRoll: boolean;
    isRolling: boolean;
}

const Dice: React.FC<{ value: number; isRolling: boolean }> = ({ value, isRolling }) => {
    // Defines the six faces of a standard die, mapping face value to CSS position class.
    // Opposite faces sum to 7 (1-6, 2-5, 3-4).
    const faces = [
        { faceValue: 1, positionClass: 'face-1' }, // Front
        { faceValue: 6, positionClass: 'face-6' }, // Back
        { faceValue: 2, positionClass: 'face-2' }, // Right
        { faceValue: 5, positionClass: 'face-5' }, // Left
        { faceValue: 3, positionClass: 'face-3' }, // Top
        { faceValue: 4, positionClass: 'face-4' }, // Bottom
    ];

    // A sub-component to render the pips on a given face value.
    const Face: React.FC<{ faceValue: number }> = ({ faceValue }) => {
        // A dot component for reuse
        const Dot = () => <div className="w-3 h-3 bg-gray-800 rounded-full"></div>;

        // Use a CSS grid to position the dots.
        let dots = [];
        switch (faceValue) {
            case 1:
                dots = [ <div key="c" style={{ gridArea: '2 / 2' }}><Dot /></div> ];
                break;
            case 2:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 3:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="c" style={{ gridArea: '2 / 2' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 4:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="tr" style={{ gridArea: '1 / 3' }}><Dot /></div>,
                    <div key="bl" style={{ gridArea: '3 / 1' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 5:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="tr" style={{ gridArea: '1 / 3' }}><Dot /></div>,
                    <div key="c" style={{ gridArea: '2 / 2' }}><Dot /></div>,
                    <div key="bl" style={{ gridArea: '3 / 1' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 6:
                dots = [
                    <div key="t1" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="m1" style={{ gridArea: '2 / 1' }}><Dot /></div>,
                    <div key="b1" style={{ gridArea: '3 / 1' }}><Dot /></div>,
                    <div key="t3" style={{ gridArea: '1 / 3' }}><Dot /></div>,
                    <div key="m3" style={{ gridArea: '2 / 3' }}><Dot /></div>,
                    <div key="b3" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            default:
                dots = [];
        }

        return (
            <div className="w-full h-full p-2 grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                {dots}
            </div>
        );
    };

    // By changing the key, we force React to re-mount the element, which guarantees the animation re-triggers.
    const [animationKey, setAnimationKey] = useState(0);
    const prevIsRolling = useRef(isRolling);

    useEffect(() => {
        // A new roll starts when `isRolling` transitions from false to true.
        if (isRolling && !prevIsRolling.current) {
            setAnimationKey(k => k + 1);
        }
        prevIsRolling.current = isRolling;
    }, [isRolling]);

    // Always apply the final state class `show-X` for stability.
    // The `animate-roll-to-X` class is added during the roll to play the animation.
    // Because the animation has `forwards`, it holds its final state until the class is removed.
    // When `isRolling` becomes false, the animation class is removed, but `show-X` remains,
    // ensuring a seamless transition without any flicker.
    const animationClass = isRolling ? `animate-roll-to-${value}` : '';
    const finalStateClass = `show-${value}`;

    return (
        <div className="dice-container">
            <div
                key={animationKey}
                className={`dice-cube transform-gpu ${finalStateClass} ${animationClass}`}
            >
                {faces.map(({ faceValue, positionClass }) => (
                    <div key={faceValue} className={`dice-face ${positionClass}`}>
                        <Face faceValue={faceValue} />
                    </div>
                ))}
            </div>
        </div>
    );
};


const ControlPanel: React.FC<ControlPanelProps> = ({ currentPlayer, onRollDice, dice, canRoll, isRolling }) => {
    
    return (
        <div className="w-full max-w-xs text-center flex flex-col items-center justify-around h-full p-4">
            <h1 className="font-display text-4xl text-yellow-300" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
                Lênin Chess
            </h1>
            
            <div className="flex flex-col items-center my-2">
                 <h3 className="text-xl font-semibold mb-2 text-white" style={{textShadow: '0 1px 3px #000'}}>
                    Lượt của: <span style={{ color: currentPlayer.color, textShadow: `0 1px 3px ${currentPlayer.color}` }}>{currentPlayer.name}</span>
                </h3>
                <Dice value={dice} isRolling={isRolling} />
                <div className="h-8 flex items-center">
                   {!isRolling && !canRoll && (
                        <p className="text-white text-lg font-bold mt-2 animate-kp-feedback [animation:kp-feedback_2s_ease-out_forwards_reverse]">
                            Kết quả: {dice}
                        </p>
                    )}
                </div>
            </div>

            <div className="w-full px-4">
                <button
                    onClick={onRollDice}
                    disabled={!canRoll || isRolling}
                    className="w-full text-yellow-200 font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none bg-red-800 hover:bg-red-700 disabled:bg-gray-600 border-2 border-red-900 hover:border-red-800"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                >
                    {isRolling ? 'Đang gieo...' : 'Gieo Xúc Xắc'}
                </button>
            </div>
        </div>
    );
};

export default ControlPanel;
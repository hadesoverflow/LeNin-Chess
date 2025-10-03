import React, { useEffect, useRef } from 'react';
import type { AppState } from '../types';

interface SoundManagerProps {
  appState: AppState;
  isQuestionVisible: boolean;
  volume: number;
}

// Audio sources (files in public/ directory)
const MENU_MUSIC_SRC = "/audio/Soundtrack1.mp3";
const GAME_MUSIC_SRC = "/audio/Soundtrack2.mp3";
const QUESTION_MUSIC_SRC = "/audio/Soundtrack3.mp3";

const SoundManager: React.FC<SoundManagerProps> = ({ appState, isQuestionVisible, volume }) => {
  const menuAudioRef = useRef<HTMLAudioElement>(null);
  const gameAudioRef = useRef<HTMLAudioElement>(null);
  const questionAudioRef = useRef<HTMLAudioElement>(null);

  const playAudio = (audio: HTMLAudioElement | null) => {
    if (audio && audio.paused) {
      // play() returns a promise which can be rejected if autoplay is blocked.
      // We can safely ignore this error, as music will start on the first user interaction (e.g., clicking a menu button).
      audio.play().catch(() => {});
    }
  };

  const pauseAudio = (audio: HTMLAudioElement | null) => {
    if (audio && !audio.paused) {
      audio.pause();
    }
  };

  // Effect to manage volumes based on global volume and ducking
  useEffect(() => {
    const menuAudio = menuAudioRef.current;
    const gameAudio = gameAudioRef.current;
    const questionAudio = questionAudioRef.current;

    // Set loop attribute on mount
    if (menuAudio) menuAudio.loop = true;
    if (gameAudio) gameAudio.loop = true;
    if (questionAudio) questionAudio.loop = true;

    // Apply global volume
    if (menuAudio) menuAudio.volume = 0.5 * volume;
    if (questionAudio) questionAudio.volume = 0.7 * volume;
    
    // Apply ducking
    if (gameAudio) {
      gameAudio.volume = (isQuestionVisible ? 0.1 : 0.5) * volume;
    }
  }, [volume, isQuestionVisible]);

  // Effect to switch tracks (play/pause)
  useEffect(() => {
    const menuAudio = menuAudioRef.current;
    const gameAudio = gameAudioRef.current;
    const questionAudio = questionAudioRef.current;

    // If volume is 0, pause everything.
    if (volume === 0) {
      pauseAudio(menuAudio);
      pauseAudio(gameAudio);
      pauseAudio(questionAudio);
      return;
    }

    if (isQuestionVisible) {
      playAudio(questionAudio);
      pauseAudio(menuAudio);
      playAudio(gameAudio); // Keep it playing, but its volume is ducked by the other effect
    } else {
      pauseAudio(questionAudio);
      const isGameScreen = appState === 'playing' || appState === 'gameover';

      if (isGameScreen) {
        playAudio(gameAudio);
        pauseAudio(menuAudio);
      } else { // Menu, lobby, setup, etc.
        playAudio(menuAudio);
        pauseAudio(gameAudio);
      }
    }
  }, [appState, isQuestionVisible, volume]);

  return (
    <>
      <audio ref={menuAudioRef} src={MENU_MUSIC_SRC} preload="auto" />
      <audio ref={gameAudioRef} src={GAME_MUSIC_SRC} preload="auto" />
      <audio ref={questionAudioRef} src={QUESTION_MUSIC_SRC} preload="auto" />
    </>
  );
};

export default SoundManager;

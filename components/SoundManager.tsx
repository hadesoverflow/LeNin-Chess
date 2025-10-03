import React, { useEffect, useRef } from 'react';
import type { AppState } from '../types';

interface SoundManagerProps {
  appState: AppState;
  isQuestionVisible: boolean;
  isMuted: boolean;
}

// Audio sources
const MENU_MUSIC_SRC = "audio/Soundtrack1.mp3";
const GAME_MUSIC_SRC = "audio/Soundtrack2.mp3";
const QUESTION_MUSIC_SRC = "audio/Soundtrack3.mp3";

const SoundManager: React.FC<SoundManagerProps> = ({ appState, isQuestionVisible, isMuted }) => {
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

  // Set initial volumes and mute state
  useEffect(() => {
    const audios = [menuAudioRef.current, gameAudioRef.current, questionAudioRef.current];
    audios.forEach(audio => {
      if (audio) {
        audio.muted = isMuted;
        audio.loop = true;
      }
    });
    if (menuAudioRef.current) menuAudioRef.current.volume = 0.5;
    if (gameAudioRef.current) gameAudioRef.current.volume = 0.5;
    if (questionAudioRef.current) questionAudioRef.current.volume = 0.7;
  }, [isMuted]);

  // Main logic to switch tracks
  useEffect(() => {
    const menuAudio = menuAudioRef.current;
    const gameAudio = gameAudioRef.current;
    const questionAudio = questionAudioRef.current;

    if (isQuestionVisible) {
      // Question is visible
      playAudio(questionAudio);
      pauseAudio(menuAudio);
      if (gameAudio) {
        gameAudio.volume = 0.1; // Duck the game music
        playAudio(gameAudio);
      }
    } else {
      // Question is not visible
      pauseAudio(questionAudio);
      if (gameAudio) gameAudio.volume = 0.5; // Restore game music volume

      const isGameScreen = appState === 'playing' || appState === 'gameover';

      if (isGameScreen) {
        playAudio(gameAudio);
        pauseAudio(menuAudio);
      } else { // Menu, lobby, setup, etc.
        playAudio(menuAudio);
        pauseAudio(gameAudio);
      }
    }
  }, [appState, isQuestionVisible, isMuted]); // isMuted is here to re-trigger play attempts if user unmutes

  return (
    <>
      <audio ref={menuAudioRef} src={MENU_MUSIC_SRC} preload="auto" />
      <audio ref={gameAudioRef} src={GAME_MUSIC_SRC} preload="auto" />
      <audio ref={questionAudioRef} src={QUESTION_MUSIC_SRC} preload="auto" />
    </>
  );
};

export default SoundManager;

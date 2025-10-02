import React, { useState, useEffect, useRef } from 'react';
import type { Question, QuizState, Player, GameState } from '../types';

interface QuestionModalProps {
  question: Question;
  quizState: QuizState | null;
  onAnswer: (answerIndex: number) => void;
  onUseLifeline: (type: 'eliminate' | 'ai_help') => void;
  onCloseAiHelp: () => void;
  lifelineStatus: GameState['lifelineStatus'];
  currentPlayer: Player;
}

const TIMER_DURATION = 30;

const QuestionModal: React.FC<QuestionModalProps> = ({ question, quizState, onAnswer, onUseLifeline, onCloseAiHelp, lifelineStatus, currentPlayer }) => {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const timerRef = useRef<number | null>(null);

  const hasFreeEliminate = currentPlayer.knowledgeFundBuffTurns > 0;

  useEffect(() => {
    setTimeLeft(TIMER_DURATION);

    timerRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          onAnswer(-1); // Automatically submit -1 for timeout
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.content, onAnswer]);


  const handleAnswerClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    onAnswer(index);
  };
  
  const handleEliminateClick = () => {
    if (lifelineStatus.eliminate) return;
    onUseLifeline('eliminate');
  };

  const handleAiHelpClick = () => {
    if (lifelineStatus.ai_help) return;
    onUseLifeline('ai_help');
  };


  const timerProgress = (timeLeft / TIMER_DURATION) * 100;
  const isQuiz = quizState !== null;
  const quizProgressText = isQuiz ? `(Câu ${quizState.currentIndex + 1}/${quizState.questions.length})` : '';
  const eliminatedAnswers = lifelineStatus.eliminate || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div className="bg-[#e0cdaf] rounded-lg shadow-2xl p-6 max-w-2xl w-full border-4 border-yellow-700 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 h-2 bg-green-500" style={{ width: `${timerProgress}%`, transition: 'width 1s linear' }}></div>

        <div className="relative text-center">
            <div className="absolute top-2 right-2 flex items-center gap-3">
                 <button title={hasFreeEliminate ? `Loại trừ (còn ${currentPlayer.knowledgeFundBuffTurns} lượt miễn phí)` : "Loại trừ hai đáp án sai (200 KP)"} onClick={handleEliminateClick} disabled={!!lifelineStatus.eliminate} className="relative p-3 rounded-full bg-stone-600 hover:bg-stone-500 disabled:bg-stone-400/50 disabled:cursor-not-allowed transition-colors text-white shadow-lg">
                    {hasFreeEliminate && <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">{currentPlayer.knowledgeFundBuffTurns}</span>}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#FFD600" stroke="#FF6D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polygon></svg>
                </button>
                 <button title="Hỏi AI Bot (300 KP)" onClick={handleAiHelpClick} disabled={!!lifelineStatus.ai_help} className="p-3 rounded-full bg-stone-600 hover:bg-stone-500 disabled:bg-stone-400/50 disabled:cursor-not-allowed transition-colors text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#90A4AE" d="M19,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6Z" /><path fill="#CFD8DC" d="M17,8H7a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V9A1,1,0,0,0,17,8Z" /><circle fill="#4DD0E1" cx="8.5" cy="11.5" r="1.5" /><circle fill="#4DD0E1" cx="15.5" cy="11.5" r="1.5" /><path fill="#78909C" d="M5,7h2V5A1,1,0,0,0,6,4H4A1,1,0,0,0,3,5V7H5Z" /><path fill="#78909C" d="M19,7h2V5a1,1,0,0,0-1-1H18a1,1,0,0,0-1,1V7h2Z" /><rect fill="#78909C" x="11" y="19" width="2" height="3" rx="0.5" /><rect fill="#78909C" x="4" y="19" width="2" height="3" rx="0.5" /><rect fill="#78909C" x="18" y="19" width="2" height="3" rx="0.5" /></svg>
                </button>
                {lifelineStatus.ai_help && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white p-3 rounded-lg shadow-xl z-20 border-2 border-blue-400 text-left">
                         <button onClick={onCloseAiHelp} className="absolute -top-2 -right-2 text-gray-100 bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center font-bold hover:bg-gray-800">&times;</button>
                        <p className="font-bold text-sm text-blue-800">🤖 AI Bot nói:</p>
                        <p className="text-sm text-stone-800 mt-1">
                            <strong>Đáp án đúng là:</strong> {lifelineStatus.ai_help.answer}
                        </p>
                        <p className="text-xs text-gray-600 mt-2 italic">
                            <strong>Giải thích:</strong> {lifelineStatus.ai_help.explanation}
                        </p>
                         <div className="absolute -top-3 right-4 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent"></div>
                    </div>
                )}
            </div>
            <h2 className="font-display text-2xl text-red-800 mb-2">
                {isQuiz ? `BÀI KIỂM TRA ${quizProgressText}` : 'THỬ THÁCH TRI THỨC!'}
            </h2>
            <p className="font-mono text-4xl font-bold text-stone-800 mb-4">{timeLeft}s</p>
        </div>

        <div className="bg-white/50 p-4 rounded-md mb-5 min-h-[100px]">
            <p className="text-xl text-stone-900 font-semibold text-center leading-relaxed">{question.content}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.answers.map((answer, index) => {
            const isEliminated = eliminatedAnswers.includes(index);
            return (
              <button key={index} onClick={() => handleAnswerClick(index)} disabled={isEliminated} className={`w-full text-stone-800 font-bold py-4 px-5 rounded-lg shadow-md transition-all duration-300 transform text-left border-b-4 disabled:cursor-not-allowed bg-stone-50 hover:bg-yellow-100 border-stone-300 ${isEliminated ? 'opacity-30 !bg-stone-400 line-through' : ''}`}>
                <span className="text-lg">{answer.content}</span>
              </button>
            )
          })}
        </div>

        {isQuiz && quizState.currentIndex >= quizState.questions.length && (
            <div className="text-center mt-4">
                <p className="font-bold text-xl text-yellow-200">
                    Đã hoàn thành bài kiểm tra!
                </p>
            </div>
        )}
      </div>
    </div>
  );
};

export default QuestionModal;
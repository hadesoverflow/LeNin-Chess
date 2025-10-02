import React from 'react';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose, footer }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-[#e0cdaf] rounded-lg shadow-2xl p-6 m-4 max-w-sm w-full border-4 border-yellow-700">
                <h2 className="font-display text-4xl text-red-700 mb-4 text-center" style={{ textShadow: '1px 1px #fff' }}>{title}</h2>
                <div className="text-lg text-stone-800 mb-6 text-center">
                    {children}
                </div>
                {footer ? footer : (
                    <button
                        onClick={onClose}
                        className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-green-700 transition-all transform hover:scale-105"
                    >
                        Đã hiểu
                    </button>
                )}
            </div>
        </div>
    );
};

export default Modal;
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-40"
        onClick={onClose}
        aria-label="Close Modal Overlay"
      />
      {/* Modal Content */}
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 relative w-full max-w-md mx-4 z-50 animate-fade-in-up">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

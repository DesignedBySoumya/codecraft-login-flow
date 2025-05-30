
import React from 'react';

interface LoadingButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
}

const LoadingButton = ({ 
  children, 
  loading, 
  disabled, 
  onClick, 
  type = 'button',
  variant = 'primary' 
}: LoadingButtonProps) => {
  const baseClasses = "w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-poppins transform hover:scale-105 active:scale-95";
  
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green/80 hover:to-neon-blue/80 text-black font-semibold shadow-lg hover:shadow-neon-green/25 disabled:opacity-50 border border-neon-green/30 animate-glow"
    : "bg-gray-700/50 hover:bg-gray-600/50 text-white border border-gray-600 disabled:opacity-50 backdrop-blur-sm";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses}`}
    >
      {loading && (
        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};

export default LoadingButton;

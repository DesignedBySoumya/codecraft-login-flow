
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
  const baseClasses = "w-full px-6 py-4 rounded-xl font-medium transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-poppins relative overflow-hidden";
  
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-neon-green to-neon-blue text-black font-semibold hover:shadow-[0_0_30px_rgba(0,255,171,0.5)] disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98]"
    : "bg-black/30 hover:bg-black/50 text-white border border-neon-green/30 hover:border-neon-green/60 disabled:opacity-50 backdrop-blur-sm";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses}`}
    >
      {loading && (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};

export default LoadingButton;

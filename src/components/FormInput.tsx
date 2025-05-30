
import React, { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

const FormInput = ({ label, type, placeholder, value, onChange, error, required }: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-300 mb-2 font-poppins">
        {label} {required && <span className="text-neon-green">*</span>}
      </label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 bg-gray-800/50 border-b-2 border-gray-600 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none rounded-lg backdrop-blur-sm ${
            error 
              ? 'border-red-500 focus:border-red-400 bg-red-500/10' 
              : isFocused 
                ? 'border-neon-green focus:border-neon-green shadow-[0_0_10px_rgba(0,255,171,0.3)]' 
                : 'hover:border-gray-500'
          }`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-neon-green transition-colors"
          >
            {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2 animate-fade-in font-medium">{error}</p>
      )}
    </div>
  );
};

export default FormInput;

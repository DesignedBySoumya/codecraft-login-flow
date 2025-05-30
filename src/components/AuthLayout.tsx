
import React from 'react';
import MatrixBackground from './MatrixBackground';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4 relative overflow-hidden font-poppins">
      <MatrixBackground />
      
      <div className="w-full max-w-md z-10">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent neon-text">
            CodeCraft
          </h1>
          <p className="text-gray-300 mt-2 font-light">Build. Deploy. Scale.</p>
        </div>

        {/* Auth Card */}
        <div className="bg-black/40 backdrop-blur-xl border border-neon-green/20 rounded-2xl p-8 shadow-2xl neon-glow relative">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-blue/5 rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
              <p className="text-gray-300 font-light">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm font-light">
            © 2024 CodeCraft. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

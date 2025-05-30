
import React from 'react';
import MatrixBackground from './MatrixBackground';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  tagline?: string;
}

const AuthLayout = ({ children, title, subtitle, tagline }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      <MatrixBackground />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-green/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-neon-blue/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-neon-green rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-blue rounded-full animate-ping delay-500"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-poppins bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent neon-text">
            CodeCraft
          </h1>
          <p className="text-gray-400 mt-2 font-medium">Build. Deploy. Scale.</p>
          {tagline && (
            <p className="text-neon-green/80 mt-1 text-sm font-light italic">
              {tagline}
            </p>
          )}
        </div>

        {/* Auth Card */}
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl shadow-neon-green/10 relative">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-green/5 to-neon-blue/5 pointer-events-none"></div>
          
          <div className="text-center mb-6 relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-2 font-poppins">{title}</h2>
            <p className="text-gray-400">{subtitle}</p>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            © 2024 CodeCraft. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

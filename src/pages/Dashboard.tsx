
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockAuth } from '../utils/mockAuth';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = mockAuth.getCurrentUser();

  const handleSignOut = () => {
    mockAuth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate('/');
  };

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                CodeCraft
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Welcome, {user.username}!</span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome to CodeCraft!</h2>
            <p className="text-gray-300 text-lg">
              You're now logged in and ready to start building amazing projects. This is your dashboard where you can manage your projects, collaborate with teams, and deploy your applications.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                Create New Project
              </button>
              <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                Browse Templates
              </button>
              <button className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Projects</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <p className="text-white font-medium">My Portfolio</p>
                <p className="text-gray-400 text-sm">Updated 2 hours ago</p>
              </div>
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <p className="text-white font-medium">E-commerce App</p>
                <p className="text-gray-400 text-sm">Updated yesterday</p>
              </div>
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <p className="text-white font-medium">Landing Page</p>
                <p className="text-gray-400 text-sm">Updated 3 days ago</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Your Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Projects Created</p>
                <p className="text-2xl font-bold text-green-400">12</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Deployments</p>
                <p className="text-2xl font-bold text-blue-400">28</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Collaborators</p>
                <p className="text-2xl font-bold text-purple-400">5</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

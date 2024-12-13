import React from 'react';
import { Menu, MessageSquare, Users, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-20 bg-gray-800 p-4 flex flex-col items-center">
        <div className="mb-8">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <Menu className="w-6 h-6" />
          </div>
        </div>
        
        <nav className="flex-1 flex flex-col gap-4">
          <Link
            to="/chat"
            className={`p-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
              location.pathname === '/chat' ? 'bg-blue-600' : ''
            }`}
          >
            <MessageSquare />
          </Link>
          <Link
            to="/pools"
            className={`p-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
              location.pathname === '/pools' ? 'bg-blue-600' : ''
            }`}
          >
            <Users />
          </Link>
          <Link
            to="/profile"
            className={`p-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
              location.pathname === '/profile' ? 'bg-blue-600' : ''
            }`}
          >
            <User />
          </Link>
        </nav>

        <button className="p-3 rounded-lg hover:bg-gray-700 mt-auto">
          <LogOut />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {children}
      </div>
    </div>
  );
}
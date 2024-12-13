import React from 'react';
import { Search, Plus } from 'lucide-react';
import type { Club } from '../types';

const clubs: Club[] = [
  {
    id: '1',
    name: 'Chess Club',
    description: 'Join us for strategic gameplay and tournaments!',
    memberCount: 24,
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '2',
    name: 'Debate Team',
    description: 'Sharpen your public speaking and argumentation skills',
    memberCount: 18,
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '3',
    name: 'Photography Club',
    description: 'Capture moments and learn photography techniques',
    memberCount: 32,
    imageUrl: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const Pools: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">School Clubs</h1>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Plus className="w-5 h-5" />
            Create Club
          </button>
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search clubs..."
            className="w-full bg-gray-800 text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-200"
            >
              <img
                src={club.imageUrl}
                alt={club.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {club.name}
                </h3>
                <p className="text-gray-400 mb-4">{club.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {club.memberCount} members
                  </span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pools;
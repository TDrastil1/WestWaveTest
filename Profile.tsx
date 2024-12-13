import React, { useState } from 'react';
import { Camera, Edit2 } from 'lucide-react';
import type { User } from '../types';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: '1',
    username: 'johndoe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Student at West High School 📚',
    clubs: ['Chess Club', 'Debate Team', 'Photography Club']
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex-1 bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-full h-full rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl font-bold text-white">{user.username}</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-400 mt-2">{user.bio}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Clubs</h2>
              <div className="flex flex-wrap gap-2">
                {user.clubs.map((club) => (
                  <span
                    key={club}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                  >
                    {club}
                  </span>
                ))}
              </div>
            </div>

            {isEditing && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={user.username}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Bio
                  </label>
                  <textarea
                    value={user.bio}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <button className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
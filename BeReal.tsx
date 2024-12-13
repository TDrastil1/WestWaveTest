import React from 'react';
import { Camera } from 'lucide-react';
import type { BeReal } from '../types';

const BeRealFeed: React.FC<{ posts: BeReal[] }> = ({ posts }) => {
  return (
    <div className="w-full bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Today's Moments</h2>
        <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors">
          <Camera className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4">
        {posts.map((post) => (
          <div key={post.id} className="flex-shrink-0 relative">
            <img
              src={post.imageUrl}
              alt="BeReal moment"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 rounded-b-lg">
              <p className="text-sm text-white">
                {new Date(post.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeRealFeed;
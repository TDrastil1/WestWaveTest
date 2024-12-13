import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Waves } from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
            <Waves className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">WestWave</h2>
          <p className="mt-2 text-gray-400">
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        <form className="mt-8 space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="text-white">Username</label>
              <input
                id="username"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Choose a username"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="text-white">Email</label>
            <input
              id="email"
              type="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-white">Password</label>
            <input
              id="password"
              type="password"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLogin ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:text-blue-500"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
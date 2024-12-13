import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Pools from './pages/Pools';
import Chat from './components/Chat';
import BeRealFeed from './components/BeReal';

// Mock data
const messages = [
  {
    id: '1',
    userId: 'user1',
    content: 'Hey everyone! Who's going to the game tonight?',
    timestamp: new Date(Date.now() - 3600000)
  },
  {
    id: '2',
    userId: 'currentUser',
    content: 'I'll be there! Meet at the entrance?',
    timestamp: new Date(Date.now() - 1800000)
  }
];

const berealPosts = [
  {
    id: '1',
    userId: 'user1',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    timestamp: new Date()
  },
  {
    id: '2',
    userId: 'user2',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    timestamp: new Date()
  }
];

function App() {
  const isAuthenticated = false; // Replace with actual auth logic

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div className="flex-1 grid grid-cols-[1fr,400px] gap-4 p-4">
                        <div className="space-y-4">
                          <BeRealFeed posts={berealPosts} />
                          <Chat messages={messages} />
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                          {/* Additional content or widgets */}
                        </div>
                      </div>
                    }
                  />
                  <Route path="/pools" element={<Pools />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Streams from './pages/Streams';
import Vods from './pages/Vods';
import AdminPage from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-press-start">
        <header className="border-b-8 border-double border-red-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-5xl font-bold text-yellow-400">Decayed Dojo</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="text-lg hover:text-yellow-400">Home</Link></li>
                <li><Link to="/blog" className="text-lg hover:text-yellow-400">Blog</Link></li>
                <li><Link to="/streams" className="text-lg hover:text-yellow-400">Streams</Link></li>
                <li><Link to="/vods" className="text-lg hover:text-yellow-400">VODs</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/vods" element={<Vods />} />
          </Routes>
        </main>
        <footer className="border-t-8 border-double border-red-500 p-4 text-center">
          <p>&copy; 2024 Decayed Dojo</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
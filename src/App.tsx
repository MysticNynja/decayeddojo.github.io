import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Streams from './pages/Streams';
import Vods from './pages/Vods';
import AdminPage from './pages/Admin';
import ErrorPage from './pages/404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// TODO: I will need a function here that pulls the stream status from an API or similar
function App() {
  return (
    <Router>
      <div className="bg-brand-bg text-brand-text font-press-start min-h-screen flex flex-col">
        <Navbar status='offline'/>
        <main className="flex-grow">
          <Routes>
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/vods" element={<Vods />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

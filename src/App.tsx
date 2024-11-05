import React from 'react';
import { BookOpen, TrendingUp, Video, Users, Search, ShoppingCart, Bell } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import LiveSessions from './components/LiveSessions';
import Categories from './components/Categories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <LiveSessions />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">EduMarket</span>
            <div className="hidden md:flex items-center ml-10 space-x-8">
              <a className="text-gray-700 hover:text-indigo-600" href="#">Courses</a>
              <a className="text-gray-700 hover:text-indigo-600" href="#">Live Sessions</a>
              <a className="text-gray-700 hover:text-indigo-600" href="#">Teach</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Sign In
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a className="block px-3 py-2 text-gray-700" href="#">Courses</a>
            <a className="block px-3 py-2 text-gray-700" href="#">Live Sessions</a>
            <a className="block px-3 py-2 text-gray-700" href="#">Teach</a>
            <a className="block px-3 py-2 text-gray-700" href="#">Sign In</a>
          </div>
        </div>
      )}
    </nav>
  );
}
"use client";
import React from 'react';

export default function SearchBar() {
  return (
    <div className="container relative z-10">
      <div className="search-container">
        <h2 className="text-2xl font-bold mb-4 text-primary-blue">Find the care you need</h2>
        <form className="flex">
          <div className="flex-grow mr-2">
            <input
              type="text"
              placeholder="Search Doctors, conditions, or procedures..."
              className="w-full p-3 border rounded-l-full"
            />
          </div>
          <div className="flex-grow-0 mr-2">
            <input
              type="text"
              defaultValue="Chicago, IL"
              className="w-full p-3 border"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-r-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
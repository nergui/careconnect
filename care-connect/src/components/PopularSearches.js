"use client";
import React from 'react';

export default function PopularSearches() {
  return (
    <div className="container mt-16">
      <h2 className="text-3xl font-bold mb-4">Popular Searches on Healthgrades</h2>
      <div className="flex space-x-4 border-b border-gray-300">
        <button className="px-4 py-2 text-blue-300 font-medium border-b-2 border-blue-300">Specialties</button>
        <button className="px-4 py-2 text-blue-300 font-medium">Conditions</button>
        <button className="px-4 py-2 text-blue-300 font-medium">Procedures</button>
      </div>
    </div>
  );
}
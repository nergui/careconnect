"use client";
import React from 'react';

export default function CategoryButtons() {
  const categories = [
    "Family Medicine",
    "Pediatrics",
    "Top Hospitals",
    "COVID-19",
    "Dentistry",
    "Orthopedic Surgery"
  ];

  return (
    <div className="container mt-6">
      <div className="flex justify-center space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 text-blue-500 font-medium hover:underline"
          >
            {category}
          </button>
        ))}
        <button className="px-4 py-2 text-blue-500 font-medium hover:underline">
          + More
        </button>
      </div>
    </div>
  );
}
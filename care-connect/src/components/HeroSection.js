"use client";
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-primary-blue text-white py-16 hero-section">
      <div className="container flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-8">Feel better about<br />finding healthcare</h1>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-center text-sm">Profiles for Every<br />Doctor in America</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-center text-sm">Search by What<br />Matters Most to You</p>
            </div>
            <div className="flex flex-col items-center">
            

            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="w-96 h-96 bg-light-blue rounded-full overflow-hidden">
            <Image src="/healthcare-professionals.jpg" alt="Healthcare Professionals" width={384} height={384} objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
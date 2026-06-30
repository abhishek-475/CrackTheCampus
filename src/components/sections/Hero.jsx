import React from 'react';
import heroImage from '../../assets/images/hero.jpg';

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:pl-16 text-center md:text-left">
        <h1 className="text-5xl font-bold text-white">
          Crack Your Dream Placement
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Prepare for coding interviews, aptitude, and placements.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

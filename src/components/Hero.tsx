import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      
      {/* YouTube Background Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="https://www.youtube.com/embed/Ay4gGW8pqbY?autoplay=1&mute=1&loop=1&playlist=Ay4gGW8pqbY&controls=0&disablekb=1&modestbranding=1&rel=0"
        title="YouTube video background"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
          Affordable Laundry & Dry Cleaning Rates Near Me - 
          <br />
          No Hidden Costs
        </h1>
      </div>
    </section>
  );
};

export default Hero;

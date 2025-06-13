'use client';

import Image from "next/image";
import React from "react";

interface HomepageProps {
  name: string;
}

const Homepage: React.FC<HomepageProps> = ({ name }) => {
  return (
    <div className="relative w-full" style={{ height: 'calc(100vh - 72px)' }}>
      <Image 
        src="http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg"
        alt="homepage-bg"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center px-4">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Homepage;

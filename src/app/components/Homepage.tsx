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
      <div className="container">
        <div className="wrapper absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="intro text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center px-4">
            <div className="greeting">{name}
              <span className="dynamic-text" id='dynamic-text'></span>
            </div>
          </h1>
        </div>
      </div>
      <style>{`
        .wrapper {
          width: 80%;
          padding: 30px 20px;
          background-color: #1e1e1e;
          text-align: center;
          box-shadow:0 20px 5px rgba(0,0,0,0.7);
          text-align: center;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }
        .greeting {
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #61dafb;
        }

        .intro {
          font-size: 1.25rem;
          color: #ccc;
        }
        .dynamic-text {
          font-weight: 600;
          color: #e06c75;
          border-right: 2px solid #e06c75;
          white-space: nowrap;
          display: inline-block;
          padding-right: 5px;
          margin-left: 5px;
          animation: blink 0.8s step-end infinite;
          vertical-align: bottom;
        }

        @keyframes blink {
          0%, 49% { border-color: #e06c75; }
          50%, 100% { border-color: transparent; }
        }
      
      `}</style>
    </div>
  );
};

export default Homepage;

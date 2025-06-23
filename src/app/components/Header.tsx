'use client';
import React, { useEffect, useRef, useState } from 'react';

const letters = ['N','O','O','R',' ','M','O','H','A','M','M','E','D'];
const TIMER = 30; 
const CYCLE = 15000;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [display, setDisplay] = useState(Array(letters.length).fill('0'));
  const changes = useRef<number[]>([]);
  const counters = useRef<number[]>([]);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    changes.current = letters.map(() => Math.floor(Math.random() * 100));
    counters.current = Array(letters.length).fill(0);

    if (animationRef.current) clearInterval(animationRef.current);

    animationRef.current = setInterval(() => {
      setDisplay((prev) => {
        const updated = [...prev];
        let allDone = true;

        for (let i = 0; i < updated.length; i++) {
          if (counters.current[i] <= changes.current[i]) {
            updated[i] = Math.floor(Math.random() * 10).toString();
            counters.current[i]++;
            allDone = false;
          } else {
            updated[i] = letters[i];
          }
        }

        // Stop animation once all letters have completed
        if (allDone && animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }

        return updated;
      });
    }, TIMER);
  };

  useEffect(() => {
    startAnimation(); // initial run

    const repeat = setInterval(() => {
      startAnimation(); // every 30 seconds
    }, CYCLE);

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
      clearInterval(repeat);
    };
  }, []);
  const commonClass = "hover:underline px-3 py-2 text-sm font-medium text-black lg:text-[16px] inline-block"
  return (
    <nav className="">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => setShowMenu(!showMenu)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center sm:items-stretch justify-end lg:justify-between">
            <div className={`px-3 py-2 text-[16px] text-black font-normal sm:justify-end`}>
              <div className='font-orbitron uppercase flex justify-center items-center gap-3 text-[12px] md:text-[14px] lg:text-[16px]'>
                {display.map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-black">
                <a href="/aboutme" className={`${commonClass} `} aria-current="page">About Me</a>
                <a href="/projects" className={`${commonClass}`} aria-current='page'>My Projects</a>
                <a href="/resume" className={`${commonClass}`} aria-current='page'>Resume Download</a>
                <a href="/contactme" className={`${commonClass}`} aria-current='page'>Contact Me</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 z-50
            transition-all duration-500 ease-in-out
            transform ${showMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
          `}
        id="mobile-menu"
      >
        <div onClick={() => setShowMenu(false)} className='text-white flex justify-end px-5 py-5 hover:cursor-pointer'>close</div>
        <div className="space-y-1 px-4 pt-5 pb-3 text-black">
          <a href="/aboutme" className="block rounded-md text-black px-3 py-2 text-base font-medium">About Me</a>
          <a href="/myprojects" className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white">My Projects</a>
          <a href="/resume" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Resume Download</a>
          <a href="/contact" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Contact Me</a>
        </div>
      </div>
    </nav>

  );

};

export default Header;

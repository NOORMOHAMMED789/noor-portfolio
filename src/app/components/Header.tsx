'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";



const letters = ['N', 'O', 'O', 'R', ' ', 'M', 'O', 'H', 'A', 'M', 'M', 'E', 'D'];
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
    startAnimation();

    const repeat = setInterval(() => {
      startAnimation();
    }, CYCLE);

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
      clearInterval(repeat);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if(showMenu) {
        setShowMenu(!showMenu)
      }
    },10000)
  },[showMenu])
  return (
    <div>
      <nav>
        <div>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => setShowMenu(!showMenu)} type="button" className="relative inline-flex items-center justify-center text-gray-400 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">
                <GiHamburgerMenu size={20} />
              </button>
            </div>
            <div className="flex flex-1 items-center sm:items-stretch justify-end md:justify-between lg:justify-between">
              <div className={`text-[16px] text-black font-normal sm:justify-end`}>
                <div className='font-orbitron uppercase flex justify-center items-center gap-3 text-[12px] md:text-[14px] lg:text-[16px]'>
                  {display.map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </div>
              </div>
              
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-9 text-black">
                  <a href="/aboutme" className={`stroke-link hover:text-white transition-all duration-300`}>About Me</a>
                  <a href="/projects" className="stroke-link  hover:text-white transition-all duration-300">My Projects</a>
                  <a href="/resume" className="stroke-link  hover:text-white transition-all duration-300">Resume Download</a>
                  <a href="/contactme" className="stroke-link  hover:text-white transition-all duration-300">Contact Me</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white opacity-70 z-50
            transition-all duration-500 ease-in-out
            transform ${showMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
          `}
          id="mobile-menu"
        >
          <div onClick={() => setShowMenu(false)} className='text-white flex justify-end px-5 py-5 hover:cursor-pointer'>
            <IoMdClose size={25} color='#000'/>
          </div> 
          <div className="space-y-1 px-4 pt-5 pb-3 text-black">
            <a href="/aboutme" className="block rounded-md text-black px-3 py-2 text-base font-medium">About Me</a>
            <a href="/myprojects" className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:bg-gray-700">My Projects</a>
            <a href="/resume" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700">Resume Download</a>
            <a href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700">Contact Me</a>
          </div>
        </div>
      </nav>
      <style>{`
        .stroke-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
          text-align: center;
        }

        .stroke-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 0%;
          height: 1px;
          background: var(--hover);
          transition: width 0.5s ease;
        }

        .stroke-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );

};

export default Header;

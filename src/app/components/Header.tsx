'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from '../constants/Ulity';



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
      if (showMenu) {
        setShowMenu(!showMenu)
      }
    }, 10000)
  }, [showMenu])

  return (
    <>
      <div>
        <button 
        onClick={() => setShowMenu(!showMenu)} type="button" className="lg:hidden md:hidden relative inline-flex items-center justify-center text-gray-400 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">
          <GiHamburgerMenu size={20} />
        </button>

        <div className='lg-flex'>
          <div className='logo'>
            {display.map((char, i) => (
              <span key={`${char}_${i}`}>{char}</span>
            ))}
          </div>

          <nav className='list-none flex gap-4'>
            {navLinks.map((nav, idx) => {
              return <li key={`${nav.title}_${idx}`}>
                <a href={nav.href} className={`stroke-link lg:text-[1.6rem] md:text-[1.4rem] hover:text-white no-underline transition-all duration-300`}>{nav.title || "Missing"}</a>
              </li>
            })}
          </nav>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white opacity-70 z-50
            transition-all duration-500 ease-in-out
            transform ${showMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
          `}
        id="mobile-menu"
      >
        <button
          onClick={() => setShowMenu(false)}
          className='text-white flex justify-end px-5 py-5 hover:cursor-pointer'
        >
          <IoMdClose size={25} color='#000' />
        </button>
        <nav className="space-y-1 px-4 pt-5 pb-3 text-black list-none">
          {navLinks.map((nav, idx) => {
            return <li key={`${nav.title}_${idx}`}>
              <a href={nav.href} className={`stroke-link list-none hover:text-white no-underline transition-all duration-300`}>{nav.title || "Missing"}</a>
            </li>
          })}
        </nav>
      </div>
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
    </>
  );

};

export default Header;

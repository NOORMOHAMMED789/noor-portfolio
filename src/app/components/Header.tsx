'use client';
import React from 'react';

interface HeaderProps {
  NavbarItems: string[];
}

const Header: React.FC<HeaderProps> = ({ NavbarItems }) => {
  const commonClasses =
    'underline decoration-[0.15em] decoration-slate-500 underline-offset-[0.2em] transition-[text-decoration-color,text-underline-offset,transform] hover:decoration-black duration-300 hover:underline-offset-[0.4em] hover:-translate-y-1 text-slate-500 hover:text-black';


  return (
    <div className='flex justify-between items-center bg-[#C6E2FF] p-3 md:p-4 lg:p-6'>
      <div className='container'>
        <div className='text'>
          <span>N</span>
          <span>O</span>
          <span>O</span>
          <span>R</span>
          <span>M</span>
          <span>O</span>
          <span>H</span>
          <span>A</span>
          <span>M</span>
          <span>M</span>
          <span>M</span>
          <span>E</span>
          <span>D</span>
        </div>
      </div>
      <nav className='hover:cursor-pointer hidden md:block lg:block'>
        <ul className='flex justify-end items-end flex-row gap-4'>
          {NavbarItems.map((nav, index) => (
            <li
              key={`${nav}_${index}`}
              className={`${commonClasses}`}
            >
              {nav}
            </li>
          ))}
        </ul>
      </nav>
      <style>{`
        .container {
          width: 100%;
          height: 100%;
        }
        
        .text {
          font-size: clamp(1rem, 1vw, 1rem);
          letter-spacing: 7px;
          color: #000;
        }
      
        .text span {
          display: inline-block;
          animation: pop 1.6s ease-in-out infinite both;
        }

        .text span:nth-child(1) {
          animation-delay: 0.4s;
        }

        .text span:nth-child(2) {
          animation-delay: 0.5s;
        }

        .text span:nth-child(3) {
          animation-delay: 0.6s;
        }

        .text span:nth-child(4) {
          animation-delay: 0.7s;
        }

        .text span:nth-child(5) {
          animation-delay: 0.8s;
        }
        .text span:nth-child(6) {
          animation-delay: 0.9s;
        }
        .text span:nth-child(7) {
          animation-delay: 1s;
        }
        .text span:nth-child(8) {
          animation-delay: 1.1s;
        }
        .text span:nth-child(9) {
          animation-delay: 1.2s;
        }
        .text span:nth-child(10) {
          animation-delay: 1.3s;
        }
        .text span:nth-child(11) {
          animation-delay: 1.4s;
        }
        .text span:nth-child(12) {
          animation-delay: 1.5s;
        }
        .text span:nth-child(13) {
          animation-delay: 1.6s;
        }

        @keyframes pop {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

      
      `}</style>
    </div>
  );

};

export default Header;

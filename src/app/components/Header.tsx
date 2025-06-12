'use client';
import React from 'react';

interface HeaderProps {
  NavbarItems: string[];
}

const Header: React.FC<HeaderProps> = ({ NavbarItems }) => {
  const commonClasses =
    'underline decoration-[0.15em] decoration-slate-500 underline-offset-[0.2em] transition-[text-decoration-color,text-underline-offset,transform] hover:decoration-black duration-300 hover:underline-offset-[0.4em] hover:-translate-y-1 text-slate-500 hover:text-black';


  return (
    <div className='flex justify-between items-center bg-slate-400 p-3 md:p-4 lg:p-6'>
      <span>NOOR MOHAMMED</span>
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
    </div>
  );
};

export default Header;

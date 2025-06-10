'use client';
import React from 'react';

interface HeaderProps {
  NavbarItems: string[];
}

const Header: React.FC<HeaderProps> = ({ NavbarItems }) => {
  const commonClasses =
    'underline decoration-[0.15em] decoration-slate-500 underline-offset-[0.2em] transition-[text-decoration-color,text-underline-offset,transform] hover:decoration-black duration-300 hover:underline-offset-[0.4em] hover:-translate-y-1 text-slate-500 hover:text-black';


  return (
    <nav className='mx-20 my-4 flex justify-end items-end gap-4 hover:cursor-pointer'>
      <ul className='flex gap-4'>
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
  );
};

export default Header;

'use client'
import React from 'react'

const Header = () => {
  return (
    <nav className='mx-20 my-4'>
      <ul className='flex justify-end items-end gap-4 hover:cursor-pointer'>
        <li className="underline decoration-[0.15em] decoration-slate-500 underline-offset-[0.2em] transition-[text-decoration-color,text-underline-offset,transform] hover:decoration-black duration-300 hover:underline-offset-[0.4em] hover:-translate-y-1 text-slate-500 hover:text-black">
          Home
        </li>

        <li className="underline decoration-[0.15em] decoration-slate-500 underline-offset-[0.2em] transition-[text-decoration-color,text-underline-offset,transform] hover:decoration-black duration-300 hover:underline-offset-[0.4em] hover:-translate-y-1 text-slate-500 hover:text-black">
          About me
        </li>
        <li className="underline decoration-[0.15em] decoration-slate-500 underline-offset-[0.2em] transition-[text-decoration-color,text-underline-offset,transform] hover:decoration-black duration-300 hover:underline-offset-[0.4em] hover:-translate-y-1 text-slate-500 hover:text-black">
          Projects
        </li>
        <li className="underline decoration-[0.15em] decoration-slate-500 underline-offset-[0.2em] transition-[text-decoration-color,text-underline-offset,transform] hover:decoration-black duration-300 hover:underline-offset-[0.4em] hover:-translate-y-1 text-slate-500 hover:text-black">
          Hire me
        </li>
      </ul>
    </nav>
  )
}

export default Header

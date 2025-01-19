'use client'
import React from 'react'
import { motion } from 'motion/react'
import { headerArray } from '@/app/Constants/Header'

export default function Header() {
  return (
    <div className='py-4 px-2 md:py-6 md:px-4 lg:py-8 lg:px-6 bg-slate-500 text-[12px] md:text-[16px] lg:text-[18px] font-sans'>
      <motion.div animate={{ opacity: true ? 1 : 0 }} />
      {headerArray.map(val => { return val})}
    </div>
  )
}

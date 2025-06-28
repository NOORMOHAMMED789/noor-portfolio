import Image from 'next/image';
import React from 'react';


const HomePage = () => {
    return (
        <div className='relative'>
            <div className='relative'>
                <div>
                    <Image src='/image.png'  width={300} height={300} alt='logo-bg' />
                </div>
                <div className='absolute top-[15%] left-[2%]'>
                    <Image src="/image copy.png" width={250} height={250} alt='logo' />
                </div>
            </div>
            <div className='absolute -top-9  left-52'>
                <Image src='/arrow.svg' width={100} height={100} alt='arrow' />
            </div>
            <div className='absolute -top-8 left-72'>
                <span className='font-Preahvihear'>Hello! I Am </span>
                <span className='font-Preahvihear text-[#7127BA]'>Noor Mohammed</span>
            </div>
        </div>
    )
}

export default HomePage
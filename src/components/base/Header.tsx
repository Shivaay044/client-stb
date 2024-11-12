import Image from 'next/image';
import React from 'react';
import logo from "@/utils/Image/logo.png";


export default function Header() {
  return (
    <div className='flex justify-between md:p-2 fixed top-6 md:top-1 z-10 w-full'>
         <Image className='ms-5 h-22 md:h-25 w-40' src={logo} alt='logo'/>
         <ul className='md:flex hidden gap-5 items-center cursor-pointer me-20 font-semibold text-[#F5F5F5] text-lg'>
            <li className='relative group'>
                Home
               <div className='absolute bg-[#F14E00] duration-700 ease-in-out h-[3px] w-0 transition-all group-hover:w-full'></div>
            </li>
            <li className='relative group'>
                Price
               <div className='absolute bg-[#F14E00] duration-700 ease-in-out h-[3px] w-0 transition-all group-hover:w-full'></div>
            </li>
            <li className='relative group'>
                Channel List
               <div className='absolute bg-[#F14E00] duration-700 ease-in-out h-[3px] w-0 transition-all group-hover:w-full'></div>
            </li>
            <li className='relative group'>
                About
               <div className='absolute bg-[#F14E00] duration-700 ease-in-out h-[3px] w-0 transition-all group-hover:w-full'></div>
            </li>
            <li>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl text-sm px-5 py-2.5 dark focus:outline-none dark:focus:ring-blue-800">Free Trial</button>
            </li>
         </ul>
    </div>
  )
}

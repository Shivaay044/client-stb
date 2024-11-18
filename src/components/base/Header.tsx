"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "@/utils/Image/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";


export default function Header() {
   const [hameburger, setHameBurger] = useState<boolean>(true)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:p-2 fixed top-0 items-center top-6 md:top-1 z-10 w-full'>
         <div className='flex justify-between items-center'>
         <Image className='ms-5 h-22 md:h-25 w-40' src={logo} alt='logo'/>
         <FiMenu onClick={()=>{setHameBurger(false)}} className={`${hameburger?"":"hidden"} text-white font-bold text-4xl me-5 md:hidden`} />
         <IoClose onClick={()=>{setHameBurger(true)}} className={`${hameburger==false?"visible":"hidden"} text-white font-bold text-4xl me-5 md:hidden`} />
         </div>
         <ul className={`md:flex ${hameburger ? "hidden":"visible bg-[#0000Ff20]"} flex-col w-full text-center justify-end md:flex-row gap-5 items-center cursor-pointer me-20 font-semibold text-[#F5F5F5] text-lg`}>
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

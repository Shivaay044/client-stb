import Image from 'next/image'
import React from 'react'
import logo from "../../../public/Image/logo.png"

export default function Footer() {
  return (
    <>
    <div className='bg-[#304146] text-white'>
      <div className='grid grid-cols-4 p-3'>
        <div className='col-span-4 md:col-span-2'>
             <Image height={200} width={200} src={logo} alt='logo'/>
             <p className='text-xs mt-4 text-justify ps-6 md:w-1/2'>
             We are a premium IPTV service available 24/7, offering over 21,000 live TV channels and more than 25,000 VOD options. Our service also includes anti-freezing technology and dedicated customer support, always ready to assist you.
             </p>
        </div>
        <div className='col-span-2 md:col-span-1 m-auto md:m-0'>
            <ul className='mt-5 text-xs md:text-sm lg:text-xl font-bold cursor-pointer '>
              <li className='text-[#F14E00]'>Need Help</li>
              <li className='mt-3'>Contact</li>
              <li className='py-1'>Refund Policy</li>
              <li className='py-1'>Terms of Service</li>
              <li className='py-1'>Privacy Policy</li>
            </ul>
        </div>
        <div className=' col-span-2 md:col-span-1'>
        <ul className='mt-5 text-xs md:text-sm lg:text-xl font-bold cursor-pointer'>
              <li className='text-[#F14E00]'>Get In Touch</li>
              <li className='mt-3 h-3'>
                <span className='font-bold'>Email: </span>Sales@quicktvsolutions.com
              </li>
              <li className='mt-4 h-3'>
                <span className='font-bold'>Contact: </span>+19046188055
              </li>
            </ul>
        </div>
      </div>
      <p className=' bottom-0 text-center w-full p-2'>quicktvOffical©2024</p>
    </div>
    </>
  )
}

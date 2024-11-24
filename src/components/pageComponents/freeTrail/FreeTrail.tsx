"use client"
import Image from 'next/image';
import React from 'react';
import freeTrailImg from "@/utils/Image/free_trial.jpg";
import multiple_Screen from "@/utils/Image/multiple_screen.avif";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function FreeTrail() {
    return (
        <>
            <div className='relative h-screen w-full'>
                <Image className='absolute h-screen w-full object-fit' src={freeTrailImg} alt={"Free Trail"} />
                <div className='absolute h-screen w-full flex flex-col justify-center items-center'>
                    <p className='text-sm text-white md:text-3xl font-semibold text-center'>
                        QUICK TV Free Trial
                    </p>
                    <p className='text-xl font-bold text-white text-center p-2'>
                        After filling out the complete information We will send the trial account and usage process to your WhatsApp.
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap justify-cente'>
                <Image className='object-fit' src={multiple_Screen} alt={"Free Trail"} />
                <form className='w-full md:w-1/2 m-4'>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='font-bold' htmlFor="name">Name <span className='text-red-500'>*</span></label>
                        <input required className='border rounded-md p-2' name='name' type="text" placeholder='type your name' />
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                        <label className='font-bold' htmlFor="">Whatsapp (Phone Number) <span className='text-red-500'>*</span></label>
                        <PhoneInput
                            className='border rounded-md p-2'
                            defaultCountry='IN'
                            onChange={()=>{}}
                          />
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                        <label className='font-bold' htmlFor="name">Name <span className='text-red-500'>*</span></label>
                        <input className='border rounded-md p-2' name='name' type="text" placeholder='type your name' />
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                        <label className='font-bold' htmlFor="email">Email <span className='text-red-500'>*</span></label>
                        <input id='email' className='border rounded-md p-2' name='email' type="email" placeholder='type your name' />
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                        <label className='font-bold' htmlFor="device">Device <span className='text-red-500'>*</span></label>
                        <select className='border rounded-md p-2' name="device" id="device">
                            <option value="" selected>Choose the right device</option>
                            <option value="Amazone Fire Stick">Amazone Fire Stick</option>
                            <option value="Smart TVs">Smart TVs</option>
                            <option value="Android boxes">Android boxes</option>
                            <option value="Apple devices">Apple devices</option>
                            <option value="PC">PC (Mac & Windows)</option>
                            <option value="KODI & MAG Box">KODI & MAG Box</option>
                            <option value="Phones">Phones</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                       <label className='font-bold' htmlFor="device">Customize Channel <span className='text-red-500'>*</span></label>
                       <div className='flex gap-2'>
                          <input type="checkbox" name="" id="Only English Channels" />
                          <label htmlFor="Only English Channels">Only English Channels</label>
                          <input type="checkbox" name="" id="American" />
                          <label htmlFor="American">American</label>
                          <input type="checkbox" name="" id="European" />
                          <label htmlFor="European">European</label>
                          <input type="checkbox" name="" id="Arabian" />
                          <label htmlFor="Arabian">Arabian</label>
                          <input type="checkbox" name="" id="Asian" />
                          <label htmlFor="Asian">Asian</label>
                          <input type="checkbox" name="" id="Others" />
                          <label htmlFor="Others">Others</label>
                       </div>
                    </div>
                    <input className=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-md text-sm px-5 py-2.5 dark focus:outline-none dark:focus:ring-blue-800" type="submit" value="Start Trail" />
                </form>
            </div>
        </>
    )
}

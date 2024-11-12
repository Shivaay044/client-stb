"use client"
import React from 'react';
import style from "./Landing.module.css";
import { Typewriter } from 'react-simple-typewriter';
import BannerSlider from './BannerSlider';
import poster_1 from "@/utils/Image/professional-suspense-movie-poster_1.avif"
import poster_2 from "@/utils/Image/halloween-make-up-woman-triangle-glitch-effect_2.avif"
import poster_3 from "@/utils/Image/new-movie_3.jpg"
import benifit_1 from "@/utils/Image/people-watching-movie-home_23-2148565277.png";
import benifit_2 from "@/utils/Image/multiple_screen.avif";
import benifit_3 from "@/utils/Image/working-with-servers_335657-2440.avif";
import tvBannerwithChannel from "@/utils/Image/tvBannerwithChannel.png"
import Image, { StaticImageData } from 'next/image';
import { IoMdCheckboxOutline } from "react-icons/io";


export default function Landing() {

  const image: StaticImageData[] = [
    poster_2,
    poster_3,
    poster_2,
    poster_1,
    poster_2,
    poster_2,
    poster_3,
    poster_2,
    poster_1,
    poster_2,
    poster_3,
    poster_2,
    poster_1,
    poster_3,
    poster_2,
  ]

  return (<>
    <div className='relative w-full h-screen'>
      <div className={`${style.landingPageImg} w-full h-full absolute`}>
      </div>
      <div className='z-100 bg-[rgba(0,0,0,0.4)] absolute w-full h-full flex items-center'>
        <div className='text-center'>
          <p className='md:text-4xl text-2xl font-bold text-white'>PREMIUM <span className='text-[#F14E00] italic'>
            <Typewriter
              words={["IPTV"]}
              loop={true}
              typeSpeed={120}
              deleteSpeed={120}
            />
          </span>  SERVICE</p>
          <p className='text-white text-xl md:text-2xl'>Top-Tier Streaming Solutions for Unmatched Quality</p>
          <p className='md:w-3/4 w-[90%] text-white text-center mt-6 md:mt-4 m-auto'>
            Dive into a world of over 21,000 live TV channels, 25,000 movies, and 19,000 TV shows—all in breathtaking 4K quality. Whether you are at home or on the go, stream effortlessly across any device—smart TVs, Android boxes, PCs, tablets, and smartphones. Experience seamless IPTV access with unmatched flexibility and interactive features, so you can enjoy your favorite content, anytime, anywhere.
          </p>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl text-sm px-8 py-3.5 dark focus:outline-none dark:focus:ring-blue-800 relative top-12">Free Trial</button>
        </div>
      </div>

    </div>
    <hr className='border border-[#7d7d7d]' />
    <div className="my-0.5">
      <BannerSlider
        height="100px"
        data={image}
        width="100%"
        preview={6}
        spacing={2}
        loop={true}
        duration={5000}
      />
    </div>
    <BannerSlider
      height="270px"
      data={image}
      width="100%"
      preview={6}
      spacing={2}
      loop={true}
      duration={600}
    />
    <p className='text-sm md:text-3xl text-white font-semibold p-4 text-center'>Premium 4K IPTV Channels & Movie Streaming Sources</p>
    <BannerSlider
      height="270px"
      data={image}
      width="100%"
      preview={6}
      spacing={2}
      loop={true}
      duration={600} />
    <p className='text-sm md:text-3xl text-white font-semibold p-4 text-center'>Quick tv Premium IPTV Service – Exceptional Entertainment at Its Best</p>
    <p className='text-sm md:text-2xl font-semibold text-center text-[#F14E00]'>Continuously Updating</p>
    <div className='grid grid-cols-3 mt-12'>
      <div>
        <Image className='m-auto h-28' src={benifit_1} alt='' />
        <p className='text-sm md:text-xl text-white font-semibold text-center'>High-Speed and Reliable Streaming Technology</p>
        <p className='text-xs md:text-sm text-white text-center w-[80%] m-auto mt-'>
          A Team of Experienced Engineers with Over 9 Years of Expertise. Enjoy Buffer-Free, Freeze-Free Streaming – Our IPTV Service is Up 99.99% of the Time!
        </p>
      </div>
      <div>
        <Image className='h-28 w-36 m-auto rounded-xl' src={benifit_2} alt='' />
        <p className='text-sm md:text-xl text-white font-semibold text-center'>Benefits of Multiple Connections</p>
        <p className='text-xs md:text-sm text-white text-center w-[80%] m-auto'>
          With a multiScreen account, you will be able to enjoy TV on many devices at a time without any interruption.
        </p>
      </div>
      <div>
        <Image className='h-28 w-36 m-auto rounded-xl' src={benifit_3} alt='' />
        <p className='text-sm md:text-xl text-white font-semibold text-center'>USA & European-based Servers</p>
        <p className='text-xs md:text-sm text-white text-center w-[80%] m-auto'>
          Powered by USA and European-based servers, our IPTV service ensures fast, reliable, and high-quality streaming with minimal interruptions.
        </p>
      </div>
    </div>
    <div className='flex flex-row-reverse mt-12'>
      <Image alt='' className='h-[30%] w-[40%] me-14' src={tvBannerwithChannel} />
      <div className='mt-12 p-1 w-[60%]'>
        <p className='text-sm md:text-3xl text-white font-semibold text-center'>
          Quick tv Premium IPTV Service – Exceptional Entertainment at Its Best
        </p>
        <p className='md:w-3/4 w-[90%] text-white text-center mt-6 md:mt-4 m-auto'>
          Our IPTV service is fully compatible with a wide range of devices, including Smart TVs, Android boxes and phones, Apple devices, Amazon Fire Stick, KODI, MAG Box, and more. We support virtually every device out there.
        </p>
        <div className='flex justify-center mt-3'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl text-sm px-8 py-3.5 dark:focus:ring-blue-800">
            Get Discount
          </button>
        </div>
      </div>
    </div>
    <div className='flex flex-col items-center w-full border'>
      <p className='text-[#F14E00] text-sm md:text-3xl font-semibold p-4 text-center'>
        Shop Risk-Free with Our 14-Day Money-Back Guarantee!
      </p>
      <div className='flex gap-20'>
        <div className='bg-white hover:border border-8 inset-3 border-[#F14E00] rounded-3xl py-8 text-center '>
          <p className='text-[#F14E00] text-2xl font-semibold'>PREMIUM IPTV</p>
          <p className='text-4xl font-[800]'>1 Month</p>
          <div className='mt-2 bg-[#CBDCEB] w-full'>
            <span className='line-through text-2xl mx-2'>$19.9</span>
            <span className='text-[#F14E00] text-3xl'>$13.9</span>
            <p className='text-slate-600'>Starting From</p>
          </div>
          <ul className='mx-4 mt-4 flex flex-col gap-1'>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
          </ul>
        </div>
        <div className='bg-white border border-[#F14E00]'>
          <p className='text-[#F14E00] text-2xl font-semibold'>PREMIUM IPTV</p>
          <p className='text-4xl font-[800]'>1 Month</p>
          <div>
            <span>$19.9</span>
            <span>$13.9</span>
            <p>Starting From</p>
          </div>
          <ul>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline className='text-[#F14E00]' /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
          </ul>
        </div>
        <div className='bg-white border border-[#F14E00]'>
          <p className='text-[#F14E00] text-2xl font-semibold'>PREMIUM IPTV</p>
          <p className='text-4xl font-[800]'>1 Month</p>
          <div>
            <span>$19.9</span>
            <span>$13.9</span>
            <p>Starting From</p>
          </div>
          <ul>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
          </ul>
        </div>
        <div className='bg-white border border-[#F14E00]'>
          <p className='text-[#F14E00] text-2xl font-semibold'>PREMIUM IPTV</p>
          <p className='text-4xl font-[800]'>1 Month</p>
          <div>
            <span>$19.9</span>
            <span>$13.9</span>
            <p>Starting From</p>
          </div>
          <ul>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
            <li className='flex items-center gap-1'> <IoMdCheckboxOutline /> + 18000 Live IPTV Channels</li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

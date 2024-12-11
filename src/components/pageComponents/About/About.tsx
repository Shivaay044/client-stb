import React from 'react';
import freeTrailImg from "@/../public/Image/free_trial.jpg";
import Image from 'next/image';


export default function About() {
    return (
        <>
        <div className='relative h-screen w-full'>
            <Image className='absolute h-screen w-full object-fit' src={freeTrailImg} alt={"Free Trail"} />
            <div className='absolute h-screen w-full flex flex-col justify-center items-center'>
                <p className='text-sm text-white md:text-3xl font-semibold text-center'>
                    Quick TV: Stream Your Favorites Instantly
                </p>
                <p className='text-xl font-bold text-white text-center p-2'>
                    Quick TV offers fast and seamless online streaming of your favorite movies, shows, and live channels. Entertainment anytime, anywhere!
                </p>
            </div>
        </div>
        <div className='p-10 text-justify bg-[#0001Ff20]'>
        <div className='md:w-[70%] m-auto'> 
              <p>
              Our IPTV service uses cutting-edge, stable streaming technology, allowing expats to enjoy TV channels from their home countries effortlessly.
              </p>
              <p>
              We offer over 19,000+ live TV channels worldwide, including NileSat, HotBird, ARABSAT, and Eutelsat, with popular European channels from the UK, France, Germany, Italy, Spain, and more. Access channels from regions like the Middle East, South Asia, the Americas, and beyond.
              </p>
              <p>
              Enjoy 25,000+ movies on demand, live TV with EPG, time-shift, catch-up TV for up to 48 hours, and fast channel zapping.
              </p>
              <p>
              No satellite dishes or cables needed—just a stable internet connection, an IPTV box from us, and your TV. Our signal delivers near-HD quality with as little as 4 Mbps bandwidth, perfect for global streaming convenience.   
              </p>
        </div>
        </div>
        </>
    )
}

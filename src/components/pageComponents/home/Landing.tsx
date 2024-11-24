"use client"
import React from 'react';
import style from "./Landing.module.css";
import { Typewriter } from 'react-simple-typewriter';
import BannerSlider from './BannerSlider';
import poster_1 from "@/utils/Image/movies/Do Patti.jpg"
import poster_2 from "@/utils/Image/movies/Dil Kabaddi.jpg"
import poster_3 from "@/utils/Image/movies/Palasa 1978.jpg"
import poster_4 from "@/utils/Image/movies/The Goat Life.jpg";
import poster_5 from "@/utils/Image/movies/Maharaja.jpg";
import poster_6 from "@/utils/Image/movies/stree 2.jpg";
import poster_7 from "@/utils/Image/movies/Deadpool & Wolverine.jpg";
import poster_8 from "@/utils/Image/movies/kalki.jpg";
import poster_9 from "@/utils/Image/movies/Venom.jpg";
import poster_10 from "@/utils/Image/movies/sex  education.jpg";
import poster_11 from "@/utils/Image/movies/Top Gun Maverick.jpg";
import poster_12 from "@/utils/Image/movies/lagaan.jpg";
import poster_13 from "@/utils/Image/movies/3 idiots.jpg";
import poster_14 from "@/utils/Image/movies/Squid Game.jpg";
import poster_15 from "@/utils/Image/movies/boiling point.jpg";
import benifit_1 from "@/utils/Image/people-watching-movie-home_23-2148565277.png";
import benifit_2 from "@/utils/Image/multiple_screen.avif";
import benifit_3 from "@/utils/Image/working-with-servers_335657-2440.avif";
import tvBannerwithChannel from "@/utils/Image/tvBannerwithChannel.png"
import channel1 from '@/utils/Image/channel/gotv.png';
import channel2 from '@/utils/Image/channel/hotstar.png';
import channel3 from '@/utils/Image/channel/cnn.png';
import channel4 from '@/utils/Image/channel/cnbc.png';
import channel5 from '@/utils/Image/channel/hotstar.png';
import channel6 from '@/utils/Image/channel/zee.png';
import payment1 from '@/utils/Image/payment/visa.png';
import payment2 from '@/utils/Image/payment/apple-pay.png';
import payment3 from '@/utils/Image/payment/paypal.png';
import payment4 from '@/utils/Image/payment/google-pay.png';
import payment5 from '@/utils/Image/payment/stripe.png';
import payment6 from '@/utils/Image/payment/american-express.png';
import Image, { StaticImageData } from 'next/image';
import { IoMdCheckboxOutline } from "react-icons/io";
import type_of_chnl from "@/utils/Image/type_of _chnl.jpg";
import chat2 from "@/utils/Image/whatsappchat/chat2.jpg";
import chat3 from "@/utils/Image/whatsappchat/chat3.jpg";
import chat4 from "@/utils/Image/whatsappchat/chat4.jpg";
import chat5 from "@/utils/Image/whatsappchat/chat5.jpg";
import { useRouter } from 'next/navigation';

type Pricing = {
  orgPrice: string;
  disPrice: string;
  duration: string;
  benifits: string[]
}


export default function Landing() {

  const {push} = useRouter();

  const image: StaticImageData[] = [
    poster_1,
    poster_2,
    poster_3,
    poster_4,
    poster_5,
    poster_6,
    poster_7,
    poster_8,
    poster_9,
    poster_10,
    poster_11,
    poster_12,
    poster_13,
    poster_14,
    poster_15
  ]

  const Pricing: Pricing[] = [
    {
      orgPrice: "$19",
      disPrice: "$11",
      duration: "1 Month",
      benifits: [
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
      ]
    },
    {
      orgPrice: "$49.99",
      disPrice: "$29.99",
      duration: "3 Month",
      benifits: [
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
      ]
    },
    {
      orgPrice: "$79.99",
      disPrice: "$47.99",
      duration: "6 Month",
      benifits: [
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
      ]
    },
    {
      orgPrice: "$119.99",
      disPrice: "$71.99",
      duration: "12 Month",
      benifits: [
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
      ]
    },
    {
      orgPrice: "$129.99",
      disPrice: "$77.99",
      duration: "12 month All TV + Adult Section",
      benifits: [
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
        "+ 18000 Live IPTV Channels",
      ]
    }
  ]

  const channel: StaticImageData[] = [
        channel1,
        channel2,
        channel3,
        channel4,
        channel5,
        channel6
  ]

  const payment: StaticImageData[] = [
       payment1,
       payment2,
       payment3,
       payment4,
       payment5,
       payment6,
  ]

  return (<>
    <div className='relative w-full h-screen'>
      <div className={`${style.landingPageImg} w-full h-full absolute`}>
      </div>
      <div className='z-100 bg-[rgba(0,0,0,0.4)] absolute w-full h-full flex items-center mt-12 md:mt-0'>
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
          <button onClick={()=>{push("/free-trail")}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl text-sm px-8 py-3.5 dark focus:outline-none dark:focus:ring-blue-800 relative top-12">Free Trial</button>
        </div>
      </div>

    </div>
    <div className="my-0.5 mb-4">
      <BannerSlider
        height="60px"
        data={channel}
        width="100%"
        preview={4}
        spacing={8}
        loop={true}
        duration={5000}
      />
    </div>
    <BannerSlider
      height="270px"
      data={image.slice(0,8)}
      width="100%"
      preview={6}
      spacing={2}
      loop={true}
      duration={600}
    />
    <p className='text-sm md:text-3xl text-white font-semibold p-4 text-center'>Premium 4K IPTV Channels & Movie Streaming Sources</p>
    <BannerSlider
      height="270px"
      data={image.slice(8,15)}
      width="100%"
      preview={6}
      spacing={2}
      loop={true}
      duration={600} />
    <p className='text-sm md:text-3xl text-white font-semibold p-4 text-center'>Quick tv Premium IPTV Service – Exceptional Entertainment at Its Best</p>
    <p className='text-sm md:text-2xl font-semibold text-center text-[#F14E00]'>Continuously Updating</p>
    <div className='flex flex-wrap justify-center lg:flex-nowrap gap-6 mt-12'>
      <div>
        <Image className='h-28 w-36 m-auto rounded-xl' src={benifit_2} alt='' />
        <p className='text-sm md:text-xl text-white font-semibold text-center'>Benefits of Multiple Connections</p>
        <p className='text-xs md:text-sm text-white text-center w-[80%] m-auto'>
          With a multiScreen account, you will be able to enjoy TV on many devices at a time without any interruption.
        </p>
      </div> 
      <div>
      <Image className='m-auto h-28' src={benifit_1} alt='' />
        <p className='text-sm md:text-xl text-white font-semibold text-center'>High-Speed and Reliable Streaming Technology</p>
        <p className='text-xs md:text-sm text-white text-center w-[80%] m-auto mt-'>
          A Team of Experienced Engineers with Over 9 Years of Expertise. Enjoy Buffer-Free, Freeze-Free Streaming – Our IPTV Service is Up 99.99% of the Time!
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
    <div className='flex flex-row-reverse mt-8 flex-col lg:flex-row justify-center items-center w-[95%] mx-auto'>
      <Image alt='' src={tvBannerwithChannel} />
      <div className='mt-12 p-1 lg:w-[60%]'>
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
    <div className='flex flex-col items-center'>
      <p className='text-[#F14E00] text-sm md:text-3xl font-semibold p-4 text-center'>
        Shop Risk-Free with Our 14-Day Money-Back Guarantee!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        {Pricing.map((item: Pricing, idx) => (
          <div
            key={idx}
            className="mx-auto bg-white border border-[#F14E00] rounded-3xl py-4 text-center box-border hover:shadow-[0_0_0_8px_#F14E00] w-full max-w-xs">
            <p className="text-[#F14E00] text-xl font-semibold">PREMIUM IPTV</p>
            <p className="flex items-center justify-center text-md h-14 m-1 font-[900]">{item.duration}</p>
            <div className="mt-2 bg-[#CBDCEB] w-full py-2">
              <span className="line-through text-xl mx-2">{item.orgPrice}</span>
              <span className="text-[#F14E00] text-2xl">{item.disPrice}</span>
              <p className="text-slate-600">Starting From</p>
            </div>
            <ul className=" mt-4 flex flex-col gap-1">
              {item.benifits.map((description: string, idx: number) => (
                <li key={idx} className="flex items-center justify-center gap-1 text-xs p-1">
                  <IoMdCheckboxOutline className="text-[#F14E00]" />
                  {description}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl text-sm px-6 py-2.5 dark:focus:ring-blue-800">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div className='h-5'></div>
      <BannerSlider
        height="70px"
        data={payment}
        width="100%"
        preview={5}
        spacing={4}
        loop={false}
        duration={600} />
      <div className='mt-8'>
        <p className='text-sm text-white md:text-3xl font-semibold text-center'>
          Live TV: Your Destination for Sports, News, and Entertainment!
        </p>
        <p className='text-[#F14E00] text-sm md:text-3xl font-semibold text-center'>
          Access Channels from Every Country Worldwide
        </p>
        <Image className='w-[75%] m-auto object-fit mt-2' src={type_of_chnl} alt='' />
      </div>
    </div>
    <div className='flex justify-center flex-col items-center gap-2 mt-8'>
      <p className='text-white text-sm md:text-3xl font-semibold text-center'>
        IPTV Service Reviews: What Our Customers Say
      </p>
      <button type="button"
        className="text-white bg-blue-700 hover:bg-blue-800
       focus:ring-4 focus:ring-blue-300 rounded-3xl 
       text-sm px-8 py-3.5 dark:focus:ring-blue-800">
        Get Discount
      </button>
      <div className='flex flex-wrap justify-center gap-1 w-[80%] mb-8'>
        {/* <Image className='object-fit w-[220px]  rounded-sm' src={chat1} alt='chat'/> */}
        <Image className='object-fit w-[230px]  rounded-md' src={chat2} alt='chat' />
        <Image className='object-fit w-[230px]  rounded-md' src={chat3} alt='chat' />
        <Image className='object-fit w-[230px]  rounded-md' src={chat4} alt='chat' />
        <Image className='object-fit w-[230px]  rounded-md' src={chat5} alt='chat' />
      </div>
    </div>
  </>
  )
}

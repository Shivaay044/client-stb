import React from 'react';
import contactImg from "@/../public/Image/contact.jpg";
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='relative h-screen flex justify-center'>
     <Image className='absolute h-screen object-fit' src={contactImg} alt=''/>
      <section className="mt-16 z-2 absolute w-96 font-sans text-sm leading-6 text-[#0E0B3D] bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="fc-generated-1-name" className="block cursor-pointer">Full Name</label>
            <input
              type="text"
              name="name"
              id="fc-generated-1-name"
              placeholder="Your first and last name"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-[#F7F9FC] p-2.5 shadow-sm transition duration-150 focus:border-[#1463FF] focus:outline-none focus:ring-[#1463FF] hover:border-gray-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fc-generated-1-email" className="block cursor-pointer">Your Email Address</label>
            <input
              type="email"
              name="email"
              id="fc-generated-1-email"
              placeholder="john@doe.com"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-[#F7F9FC] p-2.5 shadow-sm transition duration-150 focus:border-[#1463FF] focus:outline-none focus:ring-[#1463FF] hover:border-gray-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fc-generated-1-message" className="block cursor-pointer">Your message</label>
            <textarea
              name="message"
              id="fc-generated-1-message"
              placeholder="Enter your message..."
              className="mt-1 w-full rounded-lg border border-gray-300 bg-[#F7F9FC] p-2.5 shadow-sm transition duration-150 focus:border-[#1463FF] focus:outline-none focus:ring-[#1463FF] hover:border-gray-400 min-h-[188px]"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#1463FF] py-2.5 font-medium text-white shadow-md transition duration-150 hover:bg-[#0049bf] focus:ring-2 focus:ring-[#1463FF] focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      </div>
  );
}

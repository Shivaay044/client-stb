"use client"
import Image from 'next/image';
import React from 'react';
import freeTrailImg from "@/../public/Image/free_trial.jpg"; 
import multiple_Screen from "@/../public/Image/multiple_screen.avif";
import 'react-phone-number-input/style.css';
import { useForm } from 'react-hook-form';
import zod, { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser'; 

const Validate = zod.object({
    name: z.string(),
    mobileno:z.string(),
    email:z.string(),
    device:z.string(),
    english:z.boolean(),
    american:z.boolean(),
    european:z.boolean(),
    arabian:z.boolean(),
    asian:z.boolean(), 
    others:z.boolean(),
})




export default function FreeTrail() {

    const {handleSubmit,register,reset} = useForm<z.infer<typeof Validate>>({resolver:zodResolver(Validate)});

    const onSubmit = async (data: z.infer<typeof Validate>) => {
        console.log(data,"check")
        try {
            const channels = [
                data.english && "English",
                data.american && "American",
                data.european && "European",
                data.arabian && "Arabian",
                data.asian && "Asian",
                data.others && "Others",
            ]
                .filter(Boolean)
                .join(", ");
    
            const templateParams = {
                name: data.name,
                mobileno: data.mobileno,
                email: data.email,
                device: data.device,
                channels: channels || "None",
            };

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,    
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            reset();    
            alert("Email sent successfully!");
        } catch (error) {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
        }
    };
    
 
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
                <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2 m-4'>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='font-bold' htmlFor="name">Name <span className='text-red-500'>*</span></label>
                        <input {...register("name")} required className='border rounded-md p-2' name='name' type="text" placeholder='type your name' />
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                        <label className='font-bold' htmlFor="">Whatsapp (Phone Number) <span className='text-red-500'>*</span></label>
                        <input
                           required
                           placeholder='type number'
                           type="tel"
                            className='border rounded-md p-2'
                            {...register("mobileno")}
                          />
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                        <label className='font-bold' htmlFor="email">Email <span className='text-red-500'>*</span></label>
                        <input required {...register("email")} id='email' className='border rounded-md p-2' name='email' type="email" placeholder='type your name' />
                    </div>
                    <div className='flex flex-col w-full gap-2 mt-2'>
                        <label className='font-bold' htmlFor="device">Device <span className='text-red-500'>*</span></label>
                        <select required {...register("device")} className='border rounded-md p-2' name="device" id="device">
                            <option value="">Choose the right device</option>
                            <option value="Amazon Fire Stick">Amazon Fire Stick</option>
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
                       <div className='flex flex-wrap gap-2'>
                          <input {...register("english")} type="checkbox" id="Only English Channels" />
                          <label htmlFor="Only English Channels">Only English Channels</label>
                          <input {...register("american")} type="checkbox" id="American" />
                          <label htmlFor="American">American</label>
                          <input {...register("european")} type="checkbox" id="European" />
                          <label htmlFor="European">European</label>
                          <input {...register("arabian")} type="checkbox" id="Arabian" />
                          <label htmlFor="Arabian">Arabian</label>
                          <input {...register("asian")} type="checkbox" id="Asian" />
                          <label htmlFor="Asian">Asian</label>
                          <input {...register("others")} type="checkbox" id="Others" />
                          <label htmlFor="Others">Others</label>
                       </div>
                        </div>
                    <input className="mt-2 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-md text-sm px-5 py-2.5 dark focus:outline-none dark:focus:ring-blue-800" type="submit" value="Start Trail" />
                </form>
            </div>
        </>
    )
}

import Image from 'next/image'
import React from 'react'
import RefundPolicyImg from "@/../public/Image/RefundPolicy.jpg"
import Link from 'next/link'

function RefundPolicy() {
    return (
        <div className="relative h-screen">
            <Image className='h-screen absolute' alt='Refund Policy' src={RefundPolicyImg} />
            <div className='z-100 bg-[rgba(0,0,0,0.4)] absolute w-full h-full flex items-center mt-12 md:mt-0'></div>
            <div className='h-screen text-[#F14E00] flex flex-col justify-center items-center absolute mx-auto my-8 z-8'>
                <div className='w-[80%] mt-4'>
                    <h1 className='font-extrabold'>Refund Policy</h1>
                    <p>
                        At QuickIPTV.net, we want our customers to be completely satisfied with their IPTV subscription. If you are not satisfied for any reason, please read our refund policy below.
                    </p>
                </div>
                <div className='w-[80%] mt-4'>
                    <h1 className='font-extrabold'>Refunds for New Customers</h1>
                    <p>
                        If you are a new customer and you are not satisfied with our IPTV service, you may be eligible for a full refund within 7 days of your initial purchase. To request a refund, please contact our customer service team at <Link className='underline' href={"support@quickiptv.net"}>support@quickiptv.net</Link> with your order number and a brief explanation of why you are requesting a refund.
                    </p>
                </div>
                <div className='w-[80%] mt-4'>
                    <h1 className='font-extrabold'>Refunds for Existing Customers</h1>
                    <p>
                    If you are an existing customer and you experience technical issues with our IPTV service, we will do our best to resolve the issue promptly. In some cases, we may offer a partial refund or credit for future service, at our discretion.
                    </p>
                </div>
                <div className='w-[80%] mt-4'>
                Please note that we do not offer refunds for issues related to third-party apps or devices used to access our service.
                </div>
            </div>
        </div>
    )
}

export default RefundPolicy

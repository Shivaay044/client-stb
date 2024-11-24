import Link from 'next/link';
import React from 'react'
import { SiWhatsapp } from "react-icons/si";

function WhatsaapConnect() {
  return (
   <Link target="_self" href="https://wa.me/+13323787714">
      <div className='bg-[#25D366] border-none fixed bottom-16 end-10 border h-10 w-40 flex items-center justify-center gap-2 rounded-3xl'>
       <span className='font-bold text-white'> Whatsapp Us</span>  <SiWhatsapp className='text-white me-3 text-2xl' />  
    </div>
   </Link>
  )
}

export default WhatsaapConnect

import ChannelList from '@/components/pageComponents/ChannelList/ChannelList'
import Image from 'next/image'
import React from 'react';
import channelListImg from "@/../public/Image/channel-list.jpg";

export default function page() {
  return (
    <div>
        <Image className='h-screen w-full' src={channelListImg} alt='Channel List'/>
        <ChannelList/>
    </div>
  )
}

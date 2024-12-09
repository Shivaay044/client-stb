"use client";
import React, { useState } from "react";

type Channel = {
  title: string;
  ch_name: string[];
};

function ChannelCard({ channel }: { channel: Channel[] }) {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleMore = (id: number) => {
    setOpenCardId(openCardId === id ? null : id); // Toggle the clicked card
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {channel.map((item: Channel, id: number) => (
        <div
          key={id}
          className={`relative text-center shadow-md rounded-2xl p-4 bg-white transition-all duration-300 ${
            openCardId === id ? "h-auto" : "h-40"
          }`}
          style={{
            overflow: openCardId === id ? "visible" : "hidden",
          }}
        >
          <div className="">
            <span className="text-md font-bold text-[#F14E00]">
              {item.title}
            </span>
            <ul className="text-center">
              {/* Always display the first two items */}
              {item.ch_name.slice(0, 4).map((channel: string, idx: number) => (
                <li key={idx}>{channel}</li>
              ))}
              {/* Conditionally display additional items within the card */}   
              {openCardId === id &&
                item.ch_name.slice(4).map((channel: string, idx: number) => (
                  <li key={`more-${idx}`}>{channel}</li>
                ))}
            </ul>
            <div
              className="absolute text-right text-[#F14E00] text-xs cursor-pointer bottom-2 right-2"
              onClick={() => toggleMore(id)}
            >
              {openCardId === id ? "less-" : "more+"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChannelCard;

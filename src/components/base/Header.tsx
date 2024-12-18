"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/Image/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Path = {
  id: string;
  link: string;
  title: string;
};

export default function Header() {
  const [hameburger, setHameBurger] = useState<boolean>(true);
  const pathname = usePathname();
  const router = useRouter();

  const path: Path[] = [
    { id: "home", link: "/", title: "Home" },
    { id: "price", link: "#Pricing", title: "Price" },
    { id: "channelList", link: "/channel-list", title: "Channel List" },
    { id: "about", link: "/about", title: "About" },
  ];

  const handleNavigation = (item: Path) => {
    if (item.id === "price") {
      // If already on the home route, scroll to the pricing section
      if (pathname === "/") {
        const pricingSection = document.getElementById("Pricing");
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Redirect to the home route and append the hash
        router.push(`/${item.link}`);
      }
    } else {
      router.push(item.link);
    }
    setHameBurger(true); // Close the menu
  };

  return (
    <div
      className={`flex flex-col md:flex-row fixed top-0 z-10 w-full ${
        hameburger ? "" : "bg-[#0000Ff20] h-screen"
      }`}
    >
      <div className="flex justify-between items-center md:w-1/2">
        <Link href="/">
          <Image
            className="ms-5 h-22 md:h-25 w-40"
            src={logo}
            alt="logo"
          />
        </Link>
        <FiMenu
          onClick={() => setHameBurger(false)}
          className={`${
            hameburger ? "" : "hidden"
          } text-white font-bold text-4xl me-5 md:hidden`}
        />
        <IoClose
          onClick={() => setHameBurger(true)}
          className={`${
            hameburger == false ? "visible" : "hidden"
          } text-white font-bold text-4xl me-5 md:hidden`}
        />
      </div>
      <ul
        className={`md:flex md:w-1/2 h-22 ${
          hameburger ? "hidden" : "visible"
        } flex-col w-full text-center justify-evenly md:flex-row gap-2 lg:gap-0 items-center cursor-pointer font-semibold text-[#F5F5F5] text-lg`}
      >
        {path.map((item: Path) => (
          <li
            key={item.id}
            onClick={() => handleNavigation(item)}
            className="relative group mt-2"
          >
            {item.title}
            <div className="absolute bg-[#F14E00] duration-700 ease-in-out h-[3px] w-0 transition-all group-hover:w-full"></div>
          </li>
        ))}
        <li className="mt-2">
          <Link
            href={"/free-trail"}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl text-sm px-5 py-2.5 dark focus:outline-none dark:focus:ring-blue-800"
          >
            Free Trial
          </Link>
        </li>
      </ul>
    </div>
  );
}

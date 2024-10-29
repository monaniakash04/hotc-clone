"use client";
import React, { useState } from "react";
import logo from "../media/logo2.png";
import Image from "next/image";
import "../app/globals.css";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

const Header = ({ textc }) => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-full glass flex lg:justify-between justify-center relative  items-center h-[90px] md:px-16">
      {/* logo */}
      <div className="flex p-2  items-center max-w-xl h-[50px]">
        <RiMenu2Fill
          onClick={() => {
            setNav(!nav);
          }}
          className="text-3xl lg:ml-0 mr-10   text-black lg:hidden block"
        />
        <div className="h-[70px] lg:max-w-[400px] max-w-[500px]">
          <Image src={logo} className="w-full h-full " alt="logo" />
        </div>
      </div>
      {/* link */}
      <div className="hidden lg:flex  justify-center items-center h-[50px]">
        <ul
          style={{ color: textc }}
          className="flex text-md justify-center  gap-3 font-serif items-center list-none"
        >
          <li>
            <Link href="/photography" prefetch={true}>
              Photography
            </Link>
          </li>
          <li>
            <Link href="/Films" prefetch={true}>
              Films
            </Link>
          </li>
          <li>
            <Link href="/contact-us" prefetch={true}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/carres" prefetch={true}>
              Carees
            </Link>
          </li>
          <li className="relative group">
            More
            <div className="absolute hidden duration-500 group-hover:block max-w-[100px] h-[100px] inset-0">
              <ul className="flex flex-col items-center mt-10 justify-center gap-2">
                <li>
                  <Link href="/more/editorials" prefetch={true}>
                    Editor
                  </Link>
                </li>
                <li>
                  <Link href="/more/Travel" prefetch={true}>
                    Traveler
                  </Link>
                </li>
                <li>
                  <Link href="/more/backyard" prefetch={true}>
                    Backyard
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <button className="px-2 rounded-md text-sm text-white py-1 bg-amber-800">
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
      <div
        style={{ transform: nav ? "translateX(0%)" : "translateX(-100%)" }}
        className="max-w-md md:hidden  absolute z-50 flex flex-col gap-3 duration-300 justify-center p-5 inset-0 min-h-[350px] bg-[#020D19] text-white mt-[100px]"
      >
        <ul className="list-none font-serif  flex flex-col gap-5  items-center">
          <li>
            {" "}
            <Link href="/photography" prefetch={true}>
              Photography
            </Link>
          </li>
          <li>
            <Link href="/Films" prefetch={true}>
              Films
            </Link>
          </li>
          <li>
            <Link href="/contact-us" prefetch={true}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/carres" prefetch={true}>
              Carees
            </Link>
          </li>
          <li className="flex-col group  gap-2 justify-center items-center">
            <div className="flex justify-center items-center">
              More
              <IoMdArrowDropdown className="group-hover:rotate-[180deg] duration-150" />
            </div>

            <ul className="group-hover:flex duration-500 hidden flex-col items-center ml-2 list-none justify-center ">
              <li>
                <Link href="/more/editorials" prefetch={true}>
                  Editor
                </Link>
              </li>
              <li>
                <Link href="/more/Travel" prefetch={true}>
                  Traveler
                </Link>
              </li>
              <li>
                <Link href="/more/backyard" prefetch={true}>
                  Backyard
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center gap-2">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <button className="px-2 rounded-md text-sm text-white py-1 bg-amber-800">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="justify-between gap-8 pl-[62px] pr-[64px] py-3 font-roboto hidden md:flex">
        <div className="flex gap-4">
          <p>Phone Number: 956 742 455 678</p>
          <div className="border-r-[1px] border-solid border-black"></div>
          <p>Email:info@ddsgnr.com</p>
        </div>
        <div className="flex gap-3 justify-end">
          <FaFacebookF className="text-2xl text-brown-500" />
          <FaInstagram className="text-2xl text-brown-500" />
          <FaTwitter className="text-2xl text-brown-500" />
          <IoLogoLinkedin className="text-2xl text-brown-500" />
        </div>
      </div>
      <div className="px-[64px] flex justify-between">
        <div className="p-3">
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={130.6}
            height={41}
          />
        </div>
        <div className="flex gap-8 p-[10px] font-roboto text-[16px]">
          <h1 className="p-[10px]">Home</h1>
          <h1 className="p-[10px]">Courses</h1>
          <h1 className="p-[10px]">Services</h1>
          <h1 className="p-[10px]">Acheivements</h1>
          <h1 className="p-[10px]">About Us</h1>
          <h1 className="p-[10px]">Testimonial</h1>
          <button className="py-2 px-5 border-solid border-[1px] border-black rounded-[5px]">
            Login
          </button>
          <button className="py-2 px-5 border-solid border-[1px] border-black bg-black text-white rounded-[5px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

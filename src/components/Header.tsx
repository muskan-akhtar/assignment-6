import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

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
      <div className="lg:px-[64px] px-6 py-4 flex justify-between">
        <div className="p-3">
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={130.6}
            height={41}
          />
        </div>
        <div className="flex gap-8 p-[10px] font-roboto text-[16px]">
          <h1 className="p-[10px] hidden lg:block border-b-[1px] border-black border-solid">
            Home
          </h1>
          <h1 className="p-[10px] hidden lg:block">Courses</h1>
          <h1 className="p-[10px] hidden lg:block">Services</h1>
          <h1 className="p-[10px] hidden lg:block">Acheivements</h1>
          <h1 className="p-[10px] hidden lg:block">About Us</h1>
          <h1 className="p-[10px] hidden lg:block">Testimonial</h1>
          <button className="py-2 px-5 border-solid border-[1px] border-black rounded-[5px] hidden lg:block">
            Login
          </button>
          <button className="py-2 px-5 border-solid border-[1px] border-black bg-black text-white rounded-[5px] hidden lg:block">
            Sign Up
          </button>
          <div className="flex gap-6 w-12 h-12 justify-center items-center lg:hidden">
            <IoMdMenu className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

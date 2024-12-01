import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="py-12 md:py-[112px] md:px-[64px] px-6 flex flex-col gap-12 md:gap-[80px] w-full justify-center items-center">
        <div className="flex flex-col w-full md:w-[1120px] h-auto md:h-[524px] gap-12 md:gap-[80px] text-center md:text-left justify-center items-center">
          <div className="flex flex-col md:flex-row w-full md:w-[1120px] gap-6 md:gap-[80px] items-center md:items-start justify-center">
            <div className="flex flex-col w-full md:w-[500px] gap-4 text-center md:text-left">
              <h1 className="font-semibold text-[18px]">
                Subscribe to our newsletter
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-[400px]">
              <div className="flex md:flex-row flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-[5px] w-full md:w-[256px] h-[48px] p-3 border-black border-[1px] border-solid"
                />
                <button
                  name="submit"
                  className="rounded-[5px] h-12 md:w-[119px] w-full border-black border-[1px] border-solid"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[12px]">
                By subscribing you agree to with our <u>Privacy Policy</u>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full md:w-[1120px] gap-8 md:gap-[40px] justify-center items-center">
            <div className="w-full md:w-[250px] flex justify-center md:justify-start">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={130.6}
                height={30.38}
              />
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[250px]">
              <h1 className="text-[16px] font-semibold">Courses</h1>
              <p>Business</p>
              <p>Development</p>
              <p>Technology</p>
              <p>Design</p>
              <p>Programming</p>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[250px]">
              <h1 className="text-[16px] font-semibold">Resources</h1>
              <p>Career</p>
              <p>Resume</p>
              <p>Learning</p>
              <p>Interview Preparation</p>
              <p>Jobs</p>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-[250px]">
              <h1 className="text-[16px] font-semibold">About Us</h1>
              <p>Contact</p>
              <p>Help/Support</p>
              <p>FAQ</p>
              <p>Terms and Conditions</p>
              <p>Partners</p>
            </div>
          </div>

          <div className="w-full md:w-[1120px]">
            <div className="border-black border-solid border-t-2 w-full h-6 mb-4"></div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6 md:gap-0">
              <div className="flex flex-col md:flex-row gap-6 text-[14px] justify-center items-center">
                <div>
                  <u>2023 Ddsgnr. All right reserved.</u>
                </div>
                <div className="flex gap-6">
                  <u>Privacy Policy</u>
                  <u>Terms of Service</u>
                  <u>Cookies Settings</u>
                </div>
              </div>
              <div className="flex gap-3">
                <FaFacebookF className="text-2xl text-brown-500 w-6 h-6" />
                <FaInstagram className="text-2xl text-brown-500 w-6 h-6" />
                <FaTwitter className="text-2xl text-brown-500 w-6 h-6" />
                <IoLogoLinkedin className="text-2xl text-brown-500 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

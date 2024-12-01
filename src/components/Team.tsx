import React from "react";
import Image from "next/image";
import { FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";

function Team() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between py-[112px] px-[64px] gap-[60px]">
        <div className="flex w-full flex-col justify-between items-center gap-6">
          <h1 className="text-2xl font-bold text-[56px]">Our team</h1>
          <p className="text-[18px] mt-4 text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-[180px] gap-[96px] place-items-center">
          <div className="flex flex-col gap-6 p-6 justify-between items-center max-w-[394px]">
            <Image
              src="/images/person1.png"
              alt="Profile1"
              height={80}
              width={80}
            />
            <div>
              <h1 className="font-bold text-[20px] text-center">James Nkudu</h1>
              <p className="text-center text-[18px]">Marketing Coordinator</p>
            </div>
            <div className="flex gap-[14px]">
              <FaLinkedin className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaDribbble className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 justify-between items-center max-w-[394px]">
            <Image
              src="/images/person2.png"
              alt="Profile2"
              height={80}
              width={80}
            />
            <div>
              <h1 className="font-bold text-[20px] text-center">
                Joseph Munyambu
              </h1>
              <p className="text-center text-[18px]">Nursing Assistant</p>
            </div>
            <div className="flex gap-[14px]">
              <FaLinkedin className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaDribbble className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 justify-between items-center max-w-[394px]">
            <Image
              src="/images/person3.png"
              alt="Profile3"
              height={80}
              width={80}
            />
            <div>
              <h1 className="font-bold text-[20px] text-center">
                Joseph Ngumbau
              </h1>
              <p className="text-center text-[18px]">Medical Assistant</p>
            </div>
            <div className="flex gap-[14px]">
              <FaLinkedin className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaDribbble className="w-6 h-6" />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6 p-6 justify-between items-center max-w-[394px]">
            <Image
              src="/images/person4.png"
              alt="Profile4"
              height={80}
              width={80}
            />
            <div>
              <h1 className="font-bold text-[20px] text-center">
                Erick Kipkemboi
              </h1>
              <p className="text-center text-[18px]">Web Designer</p>
            </div>
            <div className="flex gap-[14px]">
              <FaLinkedin className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaDribbble className="w-6 h-6" />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6 p-6 justify-between items-center max-w-[394px]">
            <Image
              src="/images/person5.png"
              alt="Profile5"
              height={80}
              width={80}
            />
            <div>
              <h1 className="font-bold text-[20px] text-center">
                Stephen Kerubo
              </h1>
              <p className="text-center text-[18px]">President of Sales</p>
            </div>
            <div className="flex gap-[14px]">
              <FaLinkedin className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaDribbble className="w-6 h-6" />
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-6 p-6 justify-between items-center max-w-[394px]">
            <Image
              src="/images/person6.png"
              alt="Profile6"
              height={80}
              width={80}
            />
            <div>
              <h1 className="font-bold text-[20px] text-center">John Leboo</h1>
              <p className="text-center text-[18px]">Dog Trainer</p>
            </div>
            <div className="flex gap-[14px]">
              <FaLinkedin className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaDribbble className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex col-span-3 justify-center items-center">
          <button className="text-[16px] rounded-[5px] border-[1px] border-solid border-black md:px-6 px-4 md:py-3 py-2">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;

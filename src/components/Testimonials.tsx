import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";

function Testimonials() {
  return (
    <div>
      <div className="flex md:w-full md:py-[124px] py-12 md:px-[64px] px-6 flex-col gap-[80px] justify-start items-start">
        <div className="flex justify-start items-start flex-col gap-6 md:text-left md:w-[560px] h-[109px] w-[361px]">
          <h1 className="font-bold text-[32px] md:text-[48px]">
            Customer testimonials
          </h1>
          <p className="text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col text-left p-8 gap-6 border-solid border-black border-[1px] w-[362px] h-[321px]">
              <div className="flex flex-row gap-[1px]">
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
              </div>
              <div className="bg-white text-[18px] flex flex-col gap-6">
                <p>
                  "Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. <br />
                  Suspendisse varius enim in eros <br />
                  elementum tristique. Duis cursus, mi <br />
                  quis viverra ornare."
                </p>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-5">
                    <Image
                      src="/images/person3.png"
                      alt="photo"
                      height={56}
                      width={56}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div>
                    <h1 className="text-base font-semibold">James Nduku</h1>
                    <p className="text-base">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col text-left p-8 gap-6 border-solid border-black border-[1px] w-[362px] h-[321px]">
              <div className="flex flex-row gap-[1px]">
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
              </div>
              <div className="bg-white text-[18px] flex flex-col gap-6">
                <p>
                  "Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. <br />
                  Suspendisse varius enim in eros <br />
                  elementum tristique. Duis cursus, mi <br />
                  quis viverra ornare."
                </p>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-5">
                    <Image
                      src="/images/person1.png"
                      alt="photo"
                      height={56}
                      width={56}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div>
                    <h1 className="text-base font-semibold">Erick Kipkemboi</h1>
                    <p className="text-base">Scrum Master</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col text-left p-8 gap-6 border-solid border-black border-[1px] w-[362px] h-[321px]">
              <div className="flex flex-row gap-[1px]">
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
                <FaStar className="w-5 h-[18.89px]" />
              </div>
              <div className="bg-white text-[18px] flex flex-col gap-6">
                <p>
                  "Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. <br />
                  Suspendisse varius enim in eros <br />
                  elementum tristique. Duis cursus, mi <br />
                  quis viverra ornare."
                </p>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-5">
                    <Image
                      src="/images/person6.png"
                      alt="photo"
                      height={56}
                      width={56}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div>
                    <h1 className="text-base font-semibold">Stephen Kerubo</h1>
                    <p className="text-base">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2 h-2 w-[72px]">
              <GoDotFill className="w-2 h-2" />
              <GoDotFill className="w-2 h-2" />
              <GoDotFill className="w-2 h-2" />
              <GoDotFill className="w-2 h-2" />
              <GoDotFill className="w-2 h-2" />
            </div>

            <div className="flex gap-[15px] h-12 w-[111px]">
              <div className="border-solid border-black border-[1px] rounded-[50px] p-3">
                <IoMdArrowForward className="h-6 w-6" />
              </div>
              <div className="border-solid border-black border-[1px] rounded-[50px] p-3">
                <IoMdArrowForward className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

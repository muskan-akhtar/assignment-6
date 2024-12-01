import React from "react";
import Image from "next/image";

function Courses1() {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-[24px] py-[112px] px-[64px]">
          <h1 className="text-[32px] md:text-[48px] font-bold text-center md:text-left w-[386px] md:w-[768px] h-[84px] md:h-[58px]">
            Explore Courses By Category
          </h1>
          <p className="text-[18px] font-normal text-center md:text-left">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 grid-cols-1 gap-[64px] md:gap-4">
        <div className="bg-[#F7F7F7] p-4 mb-4 lg:mb-0 gap-8 flex justify-between items-center rounded-[5px]">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/pentooll.png"
              alt="pentool"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px] whitespace-nowrap">
              Design & Development
            </h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-8 mb-4 lg:mb-0 flex justify-between items-center rounded-[5px]">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/volume-high.png"
              alt="volume"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Marketing</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-8 mb-4 lg:mb-0 flex justify-between items-center rounded-[5px]">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/group.png"
              alt="shuffle"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Development</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-8 justify-between items-center rounded-[5px] hidden md:flex">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/microphone.png"
              alt="mic"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex-col mr-8 p-4 flex">
            <h1 className="font-semibold text-[20px]">Communication</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-[32px] justify-between items-center rounded-[5px] hidden md:flex">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/link.png"
              alt="link"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex-col mr-8 p-4 flex">
            <h1 className="font-semibold text-[20px]">Digital Marketing</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-[32px] justify-between items-center rounded-[5px] hidden md:flex">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/arrow-2.png"
              alt="Double arrows"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Self Development</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-[32px] justify-between items-center rounded-[5px] hidden md:flex">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/briefcase.png"
              alt="bag"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Business</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-[32px] justify-between items-center rounded-[5px] hidden md:flex">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/book2.png"
              alt="book"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Finance</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-[32px] justify-between items-center rounded-[5px] hidden md:flex">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/book.png"
              alt="Consulting"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Consulting</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="flex col-span-3 justify-center items-center mt-[64px]">
          <button className="text-[16px] rounded-[5px] border-[1px] border-solid border-black px-6 py-3">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses1;

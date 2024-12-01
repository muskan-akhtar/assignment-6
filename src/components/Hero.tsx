import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="md:flex items-center justify-between flex-col-1">
        <div className="lg:pr-[60px] lg:pl-[80px] flex flex-col gap-6 md:w-1/2 lg:py-[141px] py-[64px] px-6 w-[428px] h-[390px]">
          <h1 className="text-[40px] sm:text-[56px] font-bold">
            Learn new skills online with ease
          </h1>
          <p className="text-[18px] sm:text-[18px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex gap-[16px] pt-4">
            <button className="md:py-2 py-3 md:px-5 px-6 bg-black text-white rounded-[5px]">
              Start learning now
            </button>
            <button className="py-2 px-5 border-solid border-[1px] border-black rounded-[5px]">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <Image
            src="/images/tablet2.jpeg"
            alt="Tablet image"
            width={640}
            height={900}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

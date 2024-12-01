import React from "react";
import Image from "next/image";

function Hero2() {
  return (
    <div className="md:flex flex-col md:flex-row py-[80px] justify-between gap-[19.4px]">
      <h1 className="text-[24px] font-bold">
        Trusted by 2000+ companies <br /> worldwide.
      </h1>
      <div className="flex md:justify-between justify-start pl-5 md:pl-0 md:gap-[19.12px] gap-4 py-4 md:py-[8.74px] w-[1376px] md:w-[880px] md:h-[56px] h-[65px]">
        <div className="w-[107px] md:w-1/6">
          <Image
            src="/images/logo1-.png"
            alt="Image 1"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-[107px] md:w-1/6">
          <Image
            src="/images/logo2-.png"
            alt="Image 2"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-[107px] md:w-1/6">
          <Image
            src="/images/logo3-.png"
            alt="Image 3"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6 hidden md:block">
          <Image
            src="/images/logo4.png"
            alt="Image 4"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6 hidden md:block">
          <Image
            src="/images/logo5-.png"
            alt="Image 5"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6 hidden md:block">
          <Image
            src="/images/logo6-.png"
            alt="Image 6"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero2;

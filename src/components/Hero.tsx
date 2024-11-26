import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex py-[80px] justify-between gap-[19.4px]">
      <h1 className="text-[24px] font-bold">
        Trusted by 2000+ companies <br /> worldwide.
      </h1>
      <div className="flex justify-between gap-4 py-[8.74]">
        <div className="w-1/6">
          <Image
            src="/images/logo1-.png"
            alt="Image 1"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6">
          <Image
            src="/images/logo2-.png"
            alt="Image 2"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6">
          <Image
            src="/images/logo3-.png"
            alt="Image 3"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6">
          <Image
            src="/images/logo-4.png"
            alt="Image 4"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6">
          <Image
            src="/images/logo5-.png"
            alt="Image 5"
            width={123.8}
            height={38.52}
            className="object-cover"
          />
        </div>
        <div className="w-1/6">
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

export default Hero;

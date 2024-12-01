import React from "react";
import Image from "next/image";

function Courses() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between md:py-[112px] md:px-[64px] md:gap-[60px] gap-[64px] m-3">
        <div className="flex w-full flex-col justify-between items-center gap-6">
          <h1 className="text-2xl font-bold md:text-[56px] text-[32px]">
            Courses
          </h1>
          <p className="text-[18px] mt-4 text-base font-semibold">
            Your Ultimate Guide to learning
          </p>
        </div>

        <div className="flex">
          <div className="flex md:w-full w-[336px] md:h-0 h-10 justify-between items-center gap-2">
            <h1 className="py-2 px-4 border-b border-black border-solid">
              Popular
            </h1>
            <h1 className="py-2 px-4">Recommended</h1>
            <h1 className="py-2 px-4">Best Price</h1>
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-[64px] md:gap-4">
          <div className="rounded-px flex flex-col gap-6">
            <Image
              src="/images/uiux.png"
              alt="uiux"
              width={416}
              height={300}
              className="md:rounded-none rounded-[5px]"
            />
            <div className="flex justify-between items-center gap-6 mr-3">
              <div>Design</div>
              <div className="flex">
                <Image
                  src="/images/star1.png"
                  alt="star"
                  width={24}
                  height={24}
                />
                <h1>5.0</h1>
              </div>
            </div>
            <h1 className="text-2xl font-bold">UI/UX DESIGN 201</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex md:gap-2 gap-4 md:justify-between text-center mb-3">
              <button className="py-2 px-5 rounded-[5px] border-black border-solid border-[1px] font-semibold">
                Enroll Now
              </button>
              <h1 className="text-center m-3 font-semibold">$400</h1>
            </div>
          </div>

          <div className="rounded-px flex flex-col gap-6">
            <Image
              src="/images/coding2.png"
              alt="uiux"
              width={416}
              height={300}
              className="md:rounded-none rounded-[5px]"
            />
            <div className="flex justify-between items-center gap-6 mr-3">
              <div>Design</div>
              <div className="flex">
                <Image
                  src="/images/star1.png"
                  alt="star"
                  width={24}
                  height={24}
                />
                <h1>5.0</h1>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Introduction to Python</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex md:gap-2 gap-4 md:justify-between text-center mb-3">
              <button className="py-2 px-5 rounded-[5px] border-black border-solid border-[1px] font-semibold">
                Enroll Now
              </button>
              <h1 className="text-center m-3 font-semibold">$400</h1>
            </div>
          </div>

          <div className="rounded-px flex flex-col gap-6">
            <Image
              src="/images/graph.png"
              alt="uiux"
              width={416}
              height={300}
              className="md:rounded-none rounded-[5px]"
            />
            <div className="flex justify-between items-center gap-6 mr-3">
              <div>Business</div>
              <div className="flex">
                <Image
                  src="/images/star1.png"
                  alt="star"
                  width={24}
                  height={24}
                />
                <h1>5.0</h1>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Data Analysis For Beginners</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex md:gap-2 gap-4 md:justify-between text-center mb-3">
              <button className="py-2 px-5 rounded-[5px] border-black border-solid border-[1px] font-semibold">
                Enroll Now
              </button>
              <h1 className="text-center m-3 font-semibold">$400</h1>
            </div>
          </div>

          <div className="rounded-px flex-col gap-6 hidden md:flex">
            <Image
              src="/images/Image1.png"
              alt="uiux"
              width={416}
              height={300}
            />
            <div className="flex justify-between items-center gap-6 mr-3">
              <div>Art</div>
              <div className="flex">
                <Image
                  src="/images/star1.png"
                  alt="star"
                  width={24}
                  height={24}
                />
                <h1>5.0</h1>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Art Specialization</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex gap-2 justify-between text-center">
              <button className="py-2 px-5 rounded-[5px] border-black border-solid border-[1px] font-semibold">
                Enroll Now
              </button>
              <h1 className="text-center m-3 font-semibold">$400</h1>
            </div>
          </div>

          <div className="rounded-px flex-col gap-6 hidden md:flex">
            <Image
              src="/images/Image2.png"
              alt="uiux"
              width={416}
              height={300}
            />
            <div className="flex justify-between items-center gap-6 mr-3">
              <div>Law</div>
              <div className="flex">
                <Image
                  src="/images/star1.png"
                  alt="star"
                  width={24}
                  height={24}
                />
                <h1>5.0</h1>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Rule of Law</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex gap-2 justify-between text-center">
              <button className="py-2 px-5 rounded-[5px] border-black border-solid border-[1px] font-semibold">
                Enroll Now
              </button>
              <h1 className="text-center m-3 font-semibold">$400</h1>
            </div>
          </div>

          <div className="rounded-px flex-col gap-6 hidden md:flex">
            <Image
              src="/images/Image3.png"
              alt="uiux"
              width={416}
              height={300}
            />
            <div className="flex justify-between items-center gap-6 mr-3">
              <div>Tech</div>
              <div className="flex">
                <Image
                  src="/images/star1.png"
                  alt="star"
                  width={24}
                  height={24}
                />
                <h1>5.0</h1>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Introduction to Webflow</h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="flex gap-2 justify-between text-center mb-3">
              <button className="py-2 px-5 rounded-[5px] border-black border-solid border-[1px] font-semibold">
                Enroll Now
              </button>
              <h1 className="text-center mb-3 font-semibold">$400</h1>
            </div>
          </div>

          <div className="flex col-span-3 justify-center items-center mt-[64px]">
            <button className="text-[16px] rounded-[5px] border-[1px] border-solid border-black md:px-6 px-4 md:py-3 py-2">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

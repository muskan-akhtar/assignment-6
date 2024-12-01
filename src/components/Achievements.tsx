import React from "react";

function Achievements() {
  return (
    <div>
      <div className="py-[48px] md:py-[112px] px-6 md:px-[64px] md:flex gap-12 md:gap-[80px] w-[428px] md:w-[1280px] h-[451px] md:h-[488px] ">
        <div className="flex flex-col gap-6 md:gap-5">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold md:text-5xl text-[32px] flex justify-center items-center">
              Our Achivements
            </h1>
            <p className="text-[18px] flex justify-center text-center md:pl-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:mt-6 mt-0">
            <div className="flex flex-col items-center">
              <h1 className="font-bold md:text-[40px] text-[20px]">+200</h1>
              <p>Courses</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold md:text-[40px] text-[20px]">50K</h1>
              <p>Mentors</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold md:text-[40px] text-[20px]">370K</h1>
              <p>Students</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold md:text-[40px] text-[20px]">100+</h1>
              <p>Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

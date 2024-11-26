import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoLogoLinkedin, IoMdArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-between">
        <div className="pr-[60px] pl-[80px] flex flex-col gap-6 w-1/2 py-[141px]">
          <h1 className="text-[56px] font-bold ">
            Learn new skills online with ease
          </h1>
          <p className="text-[40px] font-bold sm:text-[18px]">
            Discover a wide range of courses covering a variety of <br />
            subjects, taught by expert instructors.
          </p>
          <div className="flex gap-[16px] pt-4">
            <button className="py-2 px-5 bg-black text-white rounded-[5px]">
              Start learning now
            </button>
            <button className="py-2 px-5 border-solid border-[1px] border-black rounded-[5px]">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="w-1/2 hidden sm:block">
          <Image
            src="/images/tablet2.jpeg"
            alt="Tablet image"
            width={640}
            height={900}
          />
        </div>
      </div>
      <Hero />
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-[24px] py-[112px] px-[64px]">
          <h1 className="text-[48px] font-bold">Explore Courses By Category</h1>
          <p className="text-[18px] font-normal">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
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

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
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

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
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

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/microphone.png"
              alt="mic"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Communication</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
          <div className="gap-[10px] bg-white">
            <Image
              src="/images/link.png"
              alt="link"
              width={32}
              height={32}
              className="m-8"
            />
          </div>
          <div className="flex flex-col mr-8 p-4">
            <h1 className="font-semibold text-[20px]">Digital Marketing</h1>
            <p className="text-[18px]">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
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

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
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

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
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

        <div className="bg-[#F7F7F7] p-4 gap-[32px] flex justify-between items-center rounded-[5px]">
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

      <div className="py-[112px] px-[64px] flex gap-[80px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-5xl flex justify-center items-center">
              Our Achivements
            </h1>
            <p className="text-[18px] flex justify-center text-center pl-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="flex after:justify-between items-center">
            <div className="flex flex-col-2 gap-[80px] py-2">
              <div className="flex flex-col justify-center px-[75px] py-2 gap-2 text-center">
                <h1 className="font-bold text-[40px]">+200</h1>
                <p>Courses</p>
              </div>

              <div className="flex flex-col justify-center px-[75px] py-3 gap-2 text-center">
                <h1 className="font-bold text-[40px]">50K</h1>
                <p>Mentor</p>
              </div>
            </div>

            <div className="flex flex-col-2 gap-[80px] py-2">
              <div className="flex flex-col justify-center px-[75px] py-2 gap-2 text-center">
                <h1 className="font-bold text-[40px]">370K</h1>
                <p>Students</p>
              </div>

              <div className="flex flex-col justify-center px-[75px] py-3 gap-2 text-center">
                <h1 className="font-bold text-[40px]">100+</h1>
                <p>Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between py-[112px] px-[64px] gap-[60px]">
        <div className="flex w-full flex-col justify-between items-center gap-6">
          <h1 className="text-2xl font-bold text-[56px]">Courses</h1>
          <p className="text-[18px] mt-4 text-base">
            Your Ultimate Guide to learning
          </p>
        </div>

        <div className="flex">
          <div className="flex w-full justify-between items-center gap-2">
            <h1 className="py-2 px-4 border-b border-black border-solid">
              Popular
            </h1>
            <h1 className="py-2 px-4">Recommended</h1>
            <h1 className="py-2 px-4">Best Price</h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-px flex flex-col gap-6">
            <Image src="/images/uiux.png" alt="uiux" width={416} height={300} />
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
            <div className="flex gap-2 justify-between text-center mb-3">
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
            <div className="flex gap-2 justify-between text-center mb-3">
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
            <div className="flex gap-2 justify-between text-center mb-3">
              <button className="py-2 px-5 rounded-[5px] border-black border-solid border-[1px] font-semibold">
                Enroll Now
              </button>
              <h1 className="text-center m-3 font-semibold">$400</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-px flex flex-col gap-6">
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
            <h1 className="text-2xl font-bold">Art Specilization</h1>
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

          <div className="rounded-px flex flex-col gap-6">
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

          <div className="rounded-px flex flex-col gap-6">
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
            <h1 className="text-2xl font-bold">Introduction to webflow</h1>
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
            <button className="text-[16px] rounded-[5px] border-[1px] border-solid border-black px-6 py-3">
              View All Courses
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between py-[112px] px-[64px] gap-[60px]">
          <div className="flex w-full flex-col justify-between items-center gap-6">
            <h1 className="text-2xl font-bold text-[56px]">Our team</h1>
            <p className="text-[18px] mt-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col gap-[96px] p-4">
            <div className="flex justify-between items-center gap-12 ">
              <div className="flex flex-col gap-6 p-6 justify-between items-center w-[394px]">
                <Image
                  src="/images/person1.png"
                  alt="Profile1"
                  height={80}
                  width={80}
                />
                <div className="">
                  <h1 className="font-bold text-[20px] text-center">
                    James Nkudu
                  </h1>
                  <p className="text-center text-[18px]">
                    Marketing Cordinator
                  </p>
                </div>

                <div className="flex gap-[14px]">
                  <FaLinkedin className="w-6 h-6" />
                  <FaTwitter className="w-6 h-6" />
                  <FaDribbble className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 justify-between items-center w-[394px]">
                <Image
                  src="/images/person2.png"
                  alt="Profile1"
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

              <div className="flex flex-col gap-6 p-6 justify-between items-center w-[394px]">
                <Image
                  src="/images/person3.png"
                  alt="Profile1"
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
            </div>

            <div className="flex justify-between items-center gap-12">
              <div className="flex flex-col gap-6 p-6 justify-between items-center w-[394px]">
                <Image
                  src="/images/person4.png"
                  alt="Profile1"
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

              <div className="flex flex-col gap-6 p-6 justify-between items-center w-[394px]">
                <Image
                  src="/images/person5.png"
                  alt="Profile1"
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

              <div className="flex flex-col gap-6 p-6 justify-between items-center w-[394px]">
                <Image
                  src="/images/person6.png"
                  alt="Profile1"
                  height={80}
                  width={80}
                />
                <div>
                  <h1 className="font-bold text-[20px] text-center">
                    John Leboo
                  </h1>
                  <p className="text-center text-[18px]">Dog Trainer</p>
                </div>

                <div className="flex gap-[14px]">
                  <FaLinkedin className="w-6 h-6" />
                  <FaTwitter className="w-6 h-6" />
                  <FaDribbble className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full py-[124px] px-[64px] flex-col gap-[80px] justify-start items-start">
        <div className="flex flex-col gap-6 text-left w-[560px] h-[109px]">
          <h1 className="font-bold text-[48px]">Customer testimonials</h1>
          <p className="text-[18px]">
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
          <div className="flex flex-row justify-between items-start">
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

        <div className="py-[112px] px-[64px] flex gap-[80px]">
          <div className="flex flex-col w-[1120px] h-[524px] gap-[80px]">
            <div className="flex w-[1120px] h-[82px] justify-between">
              <div className="flex flex-col w-[500px] h-[51px]">
                <h1 className="font-semibold text-[18px]">
                  Subscribe to our newsletter
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col gap-4 w-[400px] h-[82px]">
                <div className="w-[400px] h-[48px] flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-[5px] w-[256px] h-[48px] p-3"
                  />
                  <button
                    name="submit"
                    className="rounded-[5px] h-12 w-[119px]"
                  >
                    Subscribe
                  </button>
                </div>
                <div>
                  <p className="text-[12px]">
                    By subscribing you agree to with our Privacy Policy
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[40px] w-[1120px] h-[225px]">
              <div className="w-[250px] h-10">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={130.6}
                  height={30.38}
                ></Image>
              </div>
              <div className="w-[250px] h-[225px] flex flex-col gap-4">
                <h1 className="text-[16px] font-semibold">Courses</h1>
                <p>Business</p>
                <p>Development</p>
                <p>Technology</p>
                <p>Design</p>
                <p>Programming</p>
              </div>
              <div className="w-[250px] h-[225px] flex flex-col gap-4">
                <h1 className="text-[16px] font-semibold">Resources</h1>
                <p>Career</p>
                <p>Resume</p>
                <p>Learning</p>
                <p>Interview Preparation</p>
                <p>Jobs</p>
              </div>
              <div className="w-[250px] h-[225px] flex flex-col gap-4">
                <h1 className="text-[16px] font-semibold">About Us</h1>
                <p>Contact</p>
                <p>Help/Support</p>
                <p>FAQ</p>
                <p>Terms and Conditions</p>
                <p>Partners</p>
              </div>
            </div>
            <div className="w-[1120px] h-[57px]">
              <div className="border-black border-solid border-t-2 w-[1120px] h-6 flex gap-8"></div>
              <div className="w-[1120px] h-6 flex gap-8 justify-between">
                <div className="flex flex-row gap-6 text-[14px]">
                  <u>2023 Ddsgnr. All right reserved.</u>
                  <u>Privacy Policy</u>
                  <u>Terms of Service</u>
                  <u>Cookies Settings</u>
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
    </div>
  );
}
export default Home;

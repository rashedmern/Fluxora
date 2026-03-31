import React from "react";
import Container from "./Container";

export default function Banner() {
  return (
    <div className="w-full py-10 flex items-center justify-center">
      <Container>
        <h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">
          Your Growth Partner in <br />
          Branding & Digital Innovation.
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">
          We craft high-impact brand, product, and digital experiences that{" "}
          <br />
          accelerate growth and create competitive advantage.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="w-27.75 h-8.75 bg-[#1C1C1C] text-white rounded-md font-semibold hover:bg-white hover:text-black hover:border transition font-inter text-[14px] mt-10">
            View Portfolio
          </button>
          <button
            className="w-30 h-8.75 bg-[#1C1C1C] text-white rounded-md 
flex items-center justify-center 
font-semibold hover:bg-white hover:text-black hover:border 
transition font-inter text-[14px] mt-10 whitespace-nowrap px-1"
          >
            Build Your Brand
          </button>
        </div>

        {/* image section start */}
        <div className="flex justify-center items-center gap-6 p-10 bg-linear-to-r from-gray-100 to-gray-100 mt-[64px] rounded-xl">
          {/* Image 1 */}
          <div className="relative w-48 h-48  rounded-xl overflow-hidden transform transition duration-500 hover:scale-110 hover:-rotate-3 shadow-lg">
            <img
              src="./Images/banner.png"
              alt="VR person"
              className="w-[300px] h-[200px] object-cover transition duration-500 "
            />
          </div>
          {/* Image 2 */}
          <div className="relative w-48 h-48 rounded-xl overflow-hidden transform transition duration-500 hover:scale-110 hover:rotate-2 shadow-lg">
            <img
              src="./Images/banner.png"
              alt="Girl on phone"
              className="w-[300px] h-[200px] object-cover transition duration-500 "
            />
          </div>
          {/* Image 3 */}
          <div className="relative w-48 h-48 rounded-xl overflow-hidden transform transition duration-500 hover:scale-110 hover:-rotate-2 shadow-lg">
            <img
              src="./Images/banner.png"
              alt="Woman working"
              className="w-[300px] h-[200px] object-cover transition duration-500 "
            />
          </div>
          {/* Image 4 */}
          <div className="relative w-48 h-48 rounded-xl overflow-hidden transform transition duration-500 hover:scale-110 hover:rotate-3 shadow-lg">
            <img
              src="./Images/banner.png"
              alt="Man working"
              className="w-[300px] h-[200px] object-cover transition duration-500 "
            />
          </div>
        </div>
        {/* image section end */}

        {/* journey section start */}

        <h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">
          Our Journey
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">
          We are a strategy-led creative agency focused on building brands,
          <br />
          digital products, and experiences that drive measurable growth. In{" "}
          <br />a world where attention is limited and competition is
          relentless.
        </p>

        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 bg-[#1C1C1C] text-white rounded-md 
font-semibold hover:bg-white hover:text-black hover:border 
transition font-inter text-[14px] mt-10 px-4 py-2"
          >
            Our Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-4 h-4 fill-current"
            >
              <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
            </svg>
          </button>
        </div>
        {/* journey section end */}

        <div className="flex justify-center items-center mt-[64px] gap-[24px]">
            <img src="./Images/story.png" alt="Our Story" className="transition duration-200 hover:scale-110 blur-sm hover:blur-none" />
            <img src="./Images/story.png" alt="Our Story" className="transition duration-200 hover:scale-110 blur-sm hover:blur-none" />
            <img src="./Images/story.png" alt="Our Story" className="transition duration-200 hover:scale-110 blur-sm hover:blur-none" />
            <img src="./Images/story.png" alt="Our Story" className="transition duration-200 hover:scale-110 blur-sm hover:blur-none" />
            <img src="./Images/story.png" alt="Our Story" className="transition duration-200 hover:scale-110 blur-md hover:blur-none" />


        </div>
      </Container>
    </div>
  );
}

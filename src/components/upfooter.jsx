import React from "react"
import Container from "./Container"
import Button from "./Button"

export default function UpFooter() {
  return (
    <div className="w-full py-10">
      <Container>
      <div className="flex justify-center items-center mt-[64px]">
        <img src="./Images/upperfooter.png" alt="upperfooter" />
      </div>
        <h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-[40px] leading-[110%]">
         Your Next Big Move Starts Here.
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] mb-[32px] text-[#575757] mt-5">
          We partner with founders and product teams to design <br /> meaningful, high-performance digital experiences.
        </p>
         <section className=" flex items-center justify-center">
           <button
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white rounded-md 
font-medium font-inter leading-[136%] hover:bg-white hover:text-black hover:border  
transition font-inter text-[16px] mt-10 px-4 py-4"
          >
            Book a Strategy Call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-4 h-4 fill-current"
            >
              <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
            </svg>
          </button>
         </section>
      </Container>
    </div>
  )
}

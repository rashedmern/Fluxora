import React from "react"
import Container from "./Container"

export default function Banner() {
  return (
    <div className="w-full py-10 flex items-center justify-center">
      <Container>
        <h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-[120px] leading-[110%]">Your Growth Partner in <br /> 
        Branding & Digital Innovation.</h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-[20px]">We craft high-impact brand, product, and digital experiences that <br />
        accelerate growth and create competitive advantage.</p>
       <div className="flex items-center justify-center gap-4">
         <button className="w-[111px] h-[35px] bg-[#1C1C1C] text-white rounded-md font-semibold hover:bg-white hover:text-black hover:border-1 transition font-inter text-[14px] mt-[20px]">
          View Portfolio
        </button>
        <button className="w-[111px] h-[35px] px-[10px] bg-[#1C1C1C] text-white rounded-md font-semibold hover:bg-white hover:text-black hover:border-1 transition font-inter text-[14px] mt-[20px]">
          Build Your Brand
        </button>
       </div>
      </Container>
    </div>
  )
}

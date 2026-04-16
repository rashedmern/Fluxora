import React from "react"
import Container from "./Container"

export default function QA() {
  return (
    <div className="w-full py-10">
      <Container>
       <h1 className="text-center text-[40px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">Everything you need to know</h1>
       <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">Find out what to expect in terms of timelines and how we ensure timely <br />
        delivery without compromising on quality.</p>

        <div className="bg-linear-to-r from-gray-100 to-gray-100 mt-[64px] rounded-[10px] px-6 py-6">
          <h1 className="text-[24px] font-inter font-regular text-[#2C2C2C] leading-[110%] mt-[24px]" >What types of projects do you specialize in?</h1>
          <p className=" text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-4">We focus on SaaS platforms, digital products, operational systems, and conversion-focused websites. <br />
           We do not take on small one-page brochure sites unless they align strategically.</p>
        </div>
      </Container>
    </div>
  )
}

import React from "react"
import Container from "./Container"

export default function BetterPart() {
  return (
    <div className="w-full py-10">
      <Container>
         <h1 className="text-center text-4xl font-poppins font-bold text-[#2C2C2C] mt-12 leading-tight">
         Insights That Shape Better Products
        </h1>
        <p className="text-center text-base font-inter font-normal leading-relaxed tracking-tight text-[#575757] mt-5 mb-[64px]">
          Strategic thinking on SaaS design, UX systems, and <br /> product growth — built from real-world execution.
        </p>
        <div className="flex items-center justify-center gap-[24px]">
          <div>
            <img src="./Images/better1.png" alt="better1" />
            <div className="flex items-center justify-between  font-inter font-normal text-[14px] text-[#575757] mt-2 ">
            <p>Product Strategy</p>
            <p>13.11.26</p>
            </div>
            <h3 className="mt-2 font-inter font-regular  text-[24px] text-[#2C2C2C] ">Most dashboards look good <br /> but fail to guide decisions.</h3>
          </div>
          <div>
            <img src="./Images/better2.png" alt="better2" />
            <div className="flex items-center justify-between font-inter font-normal text-[14px] text-[#575757] mt-2 ">
            <p>Product Strategy</p>
            <p>13.11.26</p>
            </div>
            <h3 className="mt-2 font-inter font-regular  text-[24px] text-[#2C2C2C] ">Most dashboards look good <br /> but fail to guide decisions.</h3>
          </div>
          <div>
            <img src="./Images/better3.png" alt="better3" />
            <div className="flex items-center justify-between font-inter font-normal text-[14px] text-[#575757] mt-2 ">
            <p>Product Strategy</p>
            <p>13.11.26</p>
            </div>
            <h3 className="mt-2 font-inter font-regular  text-[24px] text-[#2C2C2C] ">Here’s how to design <br /> operational clarity instead.</h3>
          </div>
        </div>
      </Container>
    </div>
  )
}

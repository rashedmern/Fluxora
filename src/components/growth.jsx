import React from "react"
import Container from "./Container"

export default function Growth() {
  return (
    <div className="w-full py-10">
      <Container>
             <h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">
         Where Ideas Became Growth.
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">
         Strategic thinking on SaaS design, UX systems, and <br /> product growth — built from real-world execution.
        </p>

        <div className="grid grid-cols-2 gap-[24px] mt-[64px]">
          <img src="./Images/flowgrid.png" alt="flowgrid" />
          <img src="./Images/loopnest.png" alt="loopnest" />
          <img src="./Images/savora.png" alt="savora" />
          <img src="./Images/lunara.png" alt="lunara" />

        </div>
      </Container>
    </div>
  )
}

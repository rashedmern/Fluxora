import React from "react"
import Container from "./Container"

export default function Growth() {
  return (
    <div className="w-full py-10">
      <Container>
             <h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">
         Selected Clients
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">
          Our impact spans from Fortune 500 titans to visionary startups born in <br />
          basements. Wherever you start, we help you go bigger, faster, louder.
        </p>
      </Container>
    </div>
  )
}

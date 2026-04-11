import React from "react"
import Container from "./Container"

export default function BetterPart() {
  return (
    <div className="w-full py-10">
      <Container>
         <h1 className="text-center text-4xl font-poppins font-bold text-[#2C2C2C] mt-12 leading-tight">
         Insights That Shape Better Products
        </h1>
        <p className="text-center text-base font-inter font-normal leading-relaxed tracking-tight text-[#575757] mt-5">
          Strategic thinking on SaaS design, UX systems, and <br /> product growth — built from real-world execution.
        </p>
      </Container>
    </div>
  )
}

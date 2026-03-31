import React from "react"
import Container from "./Container"
import Button from "./Button"

export default function Journey() {
  return (
    <div className="w-full py-10 flex items-center justify-center">
      <Container>
        <h1 className="text-center text-4xl font-poppins font-bold text-[#2C2C2C] mt-12 leading-tight">
          Build Your Brand
        </h1>
        <p className="text-center text-base font-inter font-normal leading-relaxed tracking-tight text-[#575757] mt-5">
          We craft high-impact brand, product, and digital experiences that <br />
          accelerate growth and create competitive advantage.
        </p>
        <div className="flex justify-center">
          <Button className="mt-8">Get Started</Button>
        </div>
      </Container>
    </div>
  )
}

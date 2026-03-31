import React from "react"
import Container from "./Container"
import Button from "./Button"

export default function Navbar() {
  return (
    <div className="w-full py-4">
      <Container>
        <div className="w-252.5 h-14.75 bg-[#EBEBEB] flex items-center justify-center rounded-xl">
          <div className="flex items-center justify-between w-full">
          <img src="../Images/Fluxora.png" alt="Fluxora Logo" className="w-30.25 h-4.5 px-5" />
          <ul className="flex gap-8">
            <li className="font-inter text-[#575757] cursor-pointer hover:text-black">Home</li>
            <li className="font-inter text-[#575757] cursor-pointer hover:text-black">Services</li>
            <li className="font-inter text-[#575757] cursor-pointer hover:text-black">Projects</li>
            <li className="font-inter text-[#575757] cursor-pointer hover:text-black">About</li>
            <li className="font-inter text-[#575757] cursor-pointer hover:text-black">Blogs</li>
          </ul>
          <Button className="mr-5 hover:bg-white hover:text-black hover:border">Get Started</Button>
        </div>
        </div>
      </Container>
    </div>
  )
}

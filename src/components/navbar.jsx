import React from "react"
import Container from "./Container"

export default function Navbar() {
  return (
    <div className="w-full py-4">
      <Container>
        <div className="flex items-center justify-between ">
          <img src="../Images/Logo.png" alt="Fluxora Logo" className=" w-[121px] h-[18px]" />
          <ul className="flex gap-8">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">Services</li>
            <li className="cursor-pointer hover:text-blue-500">Projects</li>
            <li className="cursor-pointer hover:text-blue-500">About</li>
            <li className="cursor-pointer hover:text-blue-500">Blogs</li>
          </ul>
          <button className="w-[111px] h-[35px] bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition font-">
            Get Started
          </button>
        </div>
      </Container>
    </div>
  )
}

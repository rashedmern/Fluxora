import React from "react"
import Container from "./Container"

export default function Navbar() {
  return (
    <div className="w-full py-4 ">
      <Container>
        <div>
            <div className="flex items-center justify-between mt-4 ">
            <img src="../Images/Logo.png" alt="Fluxora Logo" className="h-8" />
        </div>
        <div>
          <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          </ul>
        </div>
        </div>
      </Container>
    </div>
  )
}

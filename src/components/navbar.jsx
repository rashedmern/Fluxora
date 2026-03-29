import React from "react"
import Container from "./Container"

export default function Navbar() {
  return (
    <div className="w-full py-4">
      <Container>
        <div>
            <img src="../Images/Logo.png" alt="Fluxora Logo" className="h-8" />
        </div>
      </Container>
    </div>
  )
}

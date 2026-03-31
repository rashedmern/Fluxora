import React from "react"
import Container from "./Container"

export default function Clients() {
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

        <div className="grid grid-cols-4 gap-[40px] mt-[64px] justify-items-center">
          <img src="./Images/adove.png" alt="Adove" />
          <img src="./Images/grok.png" alt="Grok" />
          <img src="./Images/huawei.png" alt="Huawei" />
          <img src="./Images/nespresso.png" alt="Nespresso" />
          <img src="./Images/ipsum.png" alt="Ipsum" className="mt-[100px]" />
          <img src="./Images/instagram.png" alt="Instagram" className="mt-[100px]"/>
          <img src="./Images/nescafe.png" alt="Nescafe" className="mt-[100px]"/>
          <img src="./Images/google.png" alt="Google" className="mt-[100px]"/>
          <img src="./Images/logoipsum.png" alt="logoIpsum"className="mt-[100px]" />
          <img src="./Images/tumblr.png" alt="Tumblr" className="mt-[100px]"/>
          <img src="./Images/klaviyo.png" alt="Klaviyo" className="mt-[100px]"/>
          <img src="./Images/dropbox.png" alt="Dropbox"className="mt-[100px]" />
        </div>
      </Container>
    </div>
  )
}

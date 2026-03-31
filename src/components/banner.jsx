import React from "react"
import Container from "./Container"

export default function Banner() {
  return (
    <div className="w-full py-10 flex items-center justify-center">
      <Container>
        <h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">Your Growth Partner in <br /> 
        Branding & Digital Innovation.</h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">We craft high-impact brand, product, and digital experiences that <br />
        accelerate growth and create competitive advantage.</p>
       <div className="flex items-center justify-center gap-4">
         <button className="w-27.75 h-8.75 bg-[#1C1C1C] text-white rounded-md font-semibold hover:bg-white hover:text-black hover:border transition font-inter text-[14px] mt-10">
          View Portfolio
        </button>
       <button className="w-30 h-8.75 bg-[#1C1C1C] text-white rounded-md 
flex items-center justify-center 
font-semibold hover:bg-white hover:text-black hover:border 
transition font-inter text-[14px] mt-10 whitespace-nowrap px-1">
  Build Your Brand
</button>
       </div>

{/* image section start */}
       <div className="flex justify-center items-center gap-6 p-10 bg-linear-to-r from-gray-100 to-gray-100 mt-[64px] rounded-xl">
  {/* Image 1 */}
  <div className="relative w-48 h-48  rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-3 shadow-lg">
    <img src="./Images/banner.png" alt="VR person" className="w-[300px] h-[200px] object-cover" />
  </div>
  {/* Image 2 */}
  <div className="relative w-48 h-48 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:rotate-2 shadow-lg">
    <img src="./Images/banner.png" alt="Girl on phone" className="w-[300px] h-[200px] object-cover" />
  </div>
  {/* Image 3 */}
  <div className="relative w-48 h-48 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-2 shadow-lg">
    <img src="./Images/banner.png" alt="Woman working" className="w-[300px] h-[200px] object-cover" />
  </div>
  {/* Image 4 */}
  <div className="relative w-48 h-48 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:rotate-3 shadow-lg">
    <img src="./Images/banner.png" alt="Man working" className="w-[300px] h-[200px] object-cover" />
  </div>
</div>
{/* image section end */}
<h1 className="text-center text-[48px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">Our Journey
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">We are a strategy-led creative agency focused on building brands,<br /> 
        digital products, and experiences that drive measurable growth. In <br /> 
        a world where attention is limited and competition is relentless.</p>

             <button className="w-30 h-8.75 bg-[#1C1C1C] text-white rounded-md 
flex items-center justify-center 
font-semibold hover:bg-white hover:text-black hover:border 
transition font-inter text-[14px] mt-10 whitespace-nowrap px-1">
  Our Story 
</button>

{/* journey section start */}


{/* journey section end */}
      </Container>
    </div>
  )
}

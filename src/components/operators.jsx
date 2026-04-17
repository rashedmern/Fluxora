import React from 'react'
import Container from './Container'

const oparetors = () => {
  return (
    <div className='w-full py-10'>
      <Container>
         <h1 className="text-center text-[40px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">
        Built for Operators Who Move Fast
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">
         Designed to simplify operations, reduce friction, and <br />
          create measurable impact from day one.
        </p>
        <div>
 <div className='flex items-center justify-center gap-[24px]'>

  <div className='mt-[32px] bg-[#EBEBEB] rounded-[20px] p-6 max-w-sm'>
  
  {/* Header: Avatar + Name + Stars */}
  <div className='flex items-center gap-4 mb-6'>
    <img 
      src="./Images/operator1.png" 
      alt="operator1" 
      className='w-12 h-12 rounded-full object-cover'
    />
    <div>
      <h5 className='text-[16px] font-in font-semibold text-gray-900'>Jessica Lee</h5>
      <p className='text-sm text-gray-500'>Startup Hub</p>
    </div>
  </div>

  {/* Stars */}
  <div className='mb-[16px]'>
    <img src="./Images/stars.png" alt="stars" />
  </div>

  {/* Review Text */}
  <p className='text-[16px] font-inter text-[#2C2C2C] leading-[140%] tracking-[-4%]   mb-[32px]'>
    "They translated our vision into a <br /> modern, scalable digital identity - <br />
    crafted, fast, and ahead of the curve <br /> with precision."
  </p>

</div>


<div className='mt-[32px] bg-[#EBEBEB] rounded-[20px] p-6 max-w-sm'>
  
  {/* Header: Avatar + Name + Stars */}
  <div className='flex items-center gap-4 mb-6'>
    <img 
      src="./Images/operator2.png" 
      alt="operator2" 
      className='w-12 h-12 rounded-full object-cover'
    />
    <div>
      <h5 className='text-[16px] font-in font-semibold text-gray-900'>Eleanor Whitman</h5>
      <p className='text-sm text-gray-500'>CEO, SphereUs</p>
    </div>
  </div>

  {/* Stars */}
  <div className='mb-[16px]'>
    <img src="./Images/stars.png" alt="stars" />
  </div>

  {/* Review Text */}
  <p className='text-[16px] font-inter text-[#2C2C2C] leading-[140%] tracking-[-4%]   mb-[32px]'>
    "They translated our vision into a <br /> modern, scalable digital identity - <br />
    crafted, fast, and ahead of the curve <br /> with precision."
  </p>

</div>

<div className='mt-[32px] bg-[#EBEBEB] rounded-[20px] p-6 max-w-sm'>
  
  {/* Header: Avatar + Name + Stars */}
  <div className='flex items-center gap-4 mb-6'>
    <img 
      src="./Images/operator3.png" 
      alt="operator3" 
      className='w-12 h-12 rounded-full object-cover'
    />
    <div>
      <h5 className='text-[16px] font-in font-semibold text-gray-900'>Olivia Smith</h5>
      <p className='text-sm text-gray-500'>Startup Hub</p>
    </div>
  </div>

  {/* Stars */}
  <div className='mb-[16px]'>
    <img src="./Images/stars.png" alt="stars" />
  </div>

  {/* Review Text */}
  <p className='text-[16px] font-inter text-[#2C2C2C] leading-[140%] tracking-[-4%]   mb-[32px]'>
    "They translated our vision into a <br /> modern, scalable digital identity - <br />
    crafted, fast, and ahead of the curve <br /> with precision."
  </p>

</div>
 </div>
        </div>
      </Container>
      
    </div>
  )
}

export default oparetors

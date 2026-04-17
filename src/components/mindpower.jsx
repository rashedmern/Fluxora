import React from 'react'
import Container from './Container'

const mindpower = () => {
  return (
    <div className='w-full py-10'>
      <Container>
        <h1 className="text-center text-[40px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">
         The Minds Powering Your Growth
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">
         We turn complexity into clarity.We partner with startups and growing brands to craft <br />
          digital products, design systems, and high-performing web experiences. 
        </p>

        <div className='flex items-center justify-center mt-[64px] gap-[24px] '>
         <div>
           <img src="./Images/mind1.png" alt="mind1" />
           <h3 className='text-regular text-[24px] font-inter leading-[140%] tracking-[-4%] text-[#2C2C2C] mt-[16px] '>Matteo Ricci</h3>
           <p className='text-regular text-[16px] font-inter leading-[140%] tracking-[-4%] text-[#575757]'>Co-Founder & CEO</p>
         </div>

          <div>
            <img src="./Images/mind2.png" alt="mind2" />
            <h3 className='text-regular text-[24px] font-inter leading-[140%] tracking-[-4%] text-[#2C2C2C] mt-[16px] '>Martina Rossi</h3>
            <p className='text-regular text-[16px] font-inter leading-[140%] tracking-[-4%] text-[#575757]'>Growth Speciallist </p>
          </div>
          <div>
            <img src="./Images/mind3.png " alt="mind3" />
            <h3 className='text-regular text-[24px] font-inter leading-[140%] tracking-[-4%] text-[#2C2C2C] mt-[16px] '>Davide Lombardi</h3>
            <p className='text-regular text-[16px] font-inter leading-[140%] tracking-[-4%] text-[#575757]'>Creative Lead</p>
          </div>

        </div>

      </Container>
       
     
    </div>
    
    
  )
}

export default mindpower

import React from "react";
import Container from "./Container";

export default function QA() {
  return (
    <div className="w-full py-10">
      <Container>
        <h1 className="text-center text-[40px] font-inter font-medium text-[#2C2C2C] mt-30 leading-[110%]">
          Everything you need to know
        </h1>
        <p className="text-center text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757] mt-5">
          Find out what to expect in terms of timelines and how we ensure timely{" "}
          <br />
          delivery without compromising on quality.
        </p>

        <div>
          <details className="group bg-gradient-to-r from-gray-100 to-gray-100 mt-[64px] rounded-[10px] px-6 py-6 cursor-pointer">
            {/* Question */}
            <summary className="flex justify-between items-center list-none">
              <h1 className="text-[24px] font-inter font-regular text-[#2C2C2C] leading-[110%] py-[24px] text-middle">
                What types of projects do you specialize in?
              </h1>

              {/* Icon */}
              <span className="text-2xl text-gray-500 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            {/* Answer (Animated) */}
            <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0 group-open:grid-rows-[1fr] group-open:opacity-100 mt-0 group-open:mt-4">
              <div className="overflow-hidden">
                <p className="text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757]">
                  We focus on SaaS platforms, digital products, operational
                  systems, and conversion-focused websites. <br />
                  We do not take on small one-page brochure sites unless they
                  align strategically.
                </p>
              </div>
            </div>
          </details>
        </div>
        <div>
          <details className="group bg-gradient-to-r from-gray-100 to-gray-100 mt-[24px] rounded-[10px] px-6 py-6 cursor-pointer">
            {/* Question */}
            <summary className="flex justify-between items-center list-none">
              <h1 className="text-[24px] font-inter font-regular text-[#2C2C2C] leading-[110%] py-[24px] text-middle">
                 What does your design process look like?
              </h1>

              {/* Icon */}
              <span className="text-2xl text-gray-500 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            {/* Answer (Animated) */}
            <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0 group-open:grid-rows-[1fr] group-open:opacity-100 mt-0 group-open:mt-4">
              <div className="overflow-hidden">
                <p className="text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757]">
                  We focus on SaaS platforms, digital products, operational
                  systems, and conversion-focused websites. <br />
                  We do not take on small one-page brochure sites unless they
                  align strategically.
                </p>
              </div>
            </div>
          </details>
        </div>
        <div>
          <details className="group bg-gradient-to-r from-gray-100 to-gray-100 mt-[24px] rounded-[10px] px-6 py-6 cursor-pointer">
            {/* Question */}
            <summary className="flex justify-between items-center list-none">
              <h1 className="text-[24px] font-inter font-regular text-[#2C2C2C] leading-[110%] py-[24px] text-middle">
               How much does a typical project cost?
              </h1>

              {/* Icon */}
              <span className="text-2xl text-gray-500 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            {/* Answer (Animated) */}
            <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0 group-open:grid-rows-[1fr] group-open:opacity-100 mt-0 group-open:mt-4">
              <div className="overflow-hidden">
                <p className="text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757]">
                  We focus on SaaS platforms, digital products, operational
                  systems, and conversion-focused websites. <br />
                  We do not take on small one-page brochure sites unless they
                  align strategically.
                </p>
              </div>
            </div>
          </details>
        </div>
        <div>
          <details className="group bg-gradient-to-r from-gray-100 to-gray-100 mt-[24px] rounded-[10px] px-6 py-6 cursor-pointer">
            {/* Question */}
            <summary className="flex justify-between items-center list-none">
              <h1 className="text-[24px] font-inter font-regular text-[#2C2C2C] leading-[110%] py-[24px] text-middle">
               What makes you different from other agencies?
              </h1>

              {/* Icon */}
              <span className="text-2xl text-gray-500 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            {/* Answer (Animated) */}
            <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0 group-open:grid-rows-[1fr] group-open:opacity-100 mt-0 group-open:mt-4">
              <div className="overflow-hidden">
                <p className="text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757]">
                  We focus on SaaS platforms, digital products, operational
                  systems, and conversion-focused websites. <br />
                  We do not take on small one-page brochure sites unless they
                  align strategically.
                </p>
              </div>
            </div>
          </details>
        </div>
        <div>
          <details className="group bg-gradient-to-r from-gray-100 to-gray-100 mt-[24px] rounded-[10px] px-6 py-6 cursor-pointer">
            {/* Question */}
            <summary className="flex justify-between items-center list-none">
              <h1 className="text-[24px] font-inter font-regular text-[#2C2C2C] leading-[110%] py-[24px] text-middle">
                Do you provide development as well?
              </h1>

              {/* Icon */}
              <span className="text-2xl text-gray-500 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            {/* Answer (Animated) */}
            <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0 group-open:grid-rows-[1fr] group-open:opacity-100 mt-0 group-open:mt-4">
              <div className="overflow-hidden">
                <p className="text-[16px] font-inter font-regular leading-[140%] tracking-[-4%] text-[#575757]">
                  We focus on SaaS platforms, digital products, operational
                  systems, and conversion-focused websites. <br />
                  We do not take on small one-page brochure sites unless they
                  align strategically.
                </p>
              </div>
            </div>
          </details>
        </div>
      </Container>
    </div>
  );
}

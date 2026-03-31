import React from "react"

export default function Button({ children, className = "", ...props }) {
  return (
    <button 
      className={`w-27.75 h-8.75 bg-[#1C1C1C] text-white rounded-md font-semibold hover:bg-black transition font-inter text-[14px] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

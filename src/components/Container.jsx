import React from 'react'

export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto ${className}`} style={{ width: '933px' }}>
      {children}
    </div>
  )
}

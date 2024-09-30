import React from 'react'

function WideButton({text, className}) {
  return (
    <div>
      <button className={`${className}`}>{text}</button>
    </div>
  )
}

export default WideButton
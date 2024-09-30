import React from 'react'

function NarrowButton({text1, className}) {
  return (
    <div>
        <button className={`${className}`}>{text1}</button>
    </div>
  )
}

export default NarrowButton
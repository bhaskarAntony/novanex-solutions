import React from 'react'

function Desc({data}) {
  return (
  <div className="section description p-3 p-md-5 text-center">
        <h1 className="fs-1 fw-bold">{data.heroTitle}</h1>
        <p className="fs-5">{data.d2}</p>
        <button className="main-btn px-5">Contact us</button>
  </div>
  )
}

export default Desc
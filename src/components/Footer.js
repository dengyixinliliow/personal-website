import React from 'react'

function Footer() {
  return (
    <div>
      <div className="bg-transparent p-10 font-barlow text-l flex justify-center ">
        <p className="text-fontcolor">Designed and Developed by Yixin Deng @ {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
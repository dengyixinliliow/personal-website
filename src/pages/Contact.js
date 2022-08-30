import React from 'react'
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
    <div className="bg-primary h-screen flex items-center justify-center">
      <div className="bg-highlight2 h-1/2 w-2/3 border-4 border-highlight rounded-xl flex justify-center items-center">
        <div className="flex justify-center flex-col">
          <div>
          <h1 className="text-4xl font-dynapuff text-highlight md:hidden">Contact me to know more</h1>
          </div>
          
          <div className="flex items-center justify-center flex-col">
          <h1>E-mail: yixindeng1999@gmail.com</h1>
          <h1>Phone Number: 978-930-4527</h1>
          <h1>Providence, RI</h1>
          </div>

        </div>
      </div>
    </div>
</Layout>
  )
}

export default Contact
import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div className="bg-transparent h-screen flex items-center justify-center">
        <div className="flex justify-center flex-row md:flex-col">
          <img
            src="/images/proj.png"
            alt="girl_with_computer"
            className="w-2/3 md:w-full"
          />
          <div className="flex items-start justify-center flex-col text-fontcolor w-1/3 text-2xl font-nunito md:hidden">
            <h1 className="text-3xl text-highlight/80 mb-3">
              Contact me to know more...
            </h1>
            <h1>E-mail: yixindeng1999@gmail.com</h1>
            <h1>Phone Number: 978-930-4527</h1>
            <h1>Seattle, WA</h1>
          </div>
          <div className="hidden md:block font-nunito text-fontcolor m-5">
            <h1 className="text-3xl text-highlight/80 mb-3">
              Contact me to know more...
            </h1>
            <h1>E-mail: yixindeng1999@gmail.com</h1>
            <h1>Phone Number: 978-930-4527</h1>
            <h1>Seattle, WA</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

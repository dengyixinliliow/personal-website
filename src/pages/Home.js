import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";

function Home() {
  const [selfImage, setSelfImage] = useState("/images/self1.png");

  return (
    <Layout>
      <div>
        <div className="h-screen bg-primary md:h-max">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen md:h-max">
            <div
              onMouseEnter={() => {
                if (selfImage == "/images/self1.png") {
                  setSelfImage("/images/self2.png");
                } else {
                  setSelfImage("/images/self1.png");
                }
              }}
              className=" cursor-pointer flex md:items-start items-center justify-center"
            >
              <img src={`${selfImage}`} alt="self-image-anime" className="" />
            </div>
            <div className="flex flex-col md:items-start justify-center items-center mx-5 px-3">
              <h1 className="text-3xl font-dynapuff">
                <b className="text-6xl">Hi!</b> I am{" "}
                <b className="text-highlight">Yixin Deng Emily</b>, a computer
                science graduate student at Brown University.{" "} As I'm passionate about both communication and technology, I'm interested in building software that can promote the connection between people.
              </h1>
              <div className="flex justify-center mt-7">
                <a href="https://www.linkedin.com/in/yixin-deng-b77b7b1a0/">
                  <img
                    src="/images/linkedin.png"
                    alt="linkedin-logo"
                    className="h-1/3 p-2"
                  />
                </a>
                <a href="https://github.com/dengyixinliliow">
                  <img
                    src="/images/github.png"
                    alt="github-logo"
                    className="h-1/3 p-2"
                  />
                </a>
                <a href="./images/ResumeYixinDeng.pdf">
                  <img
                    src="/images/resume.png"
                    alt="resume-logo"
                    className="h-1/3 p-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

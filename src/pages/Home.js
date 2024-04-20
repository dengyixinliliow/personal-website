import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <div className="min-h-screen">
          <div className="grid grid-cols-2 h-screen md:h-max md:grid-cols-1">
            <div className="flex flex-col justify-center items-center ml-32 w-5/6 md:ml-8 md:my-8 md:w-11/12">
              <div className="flex items-center justify-center w-0 md:w-full">
                <img src="/images/self.png" alt="self-anime" />
              </div>

              <h1 className="font-light font-ubuntu text-xl text-fontcolor leading-relaxed mr-16 w-full md:mr-8">
                <b className="text-6xl md:text-xl">Hi!</b>
                <b className="text-3xl md:text-xl">I'm Emily Yixin Deng, a </b>
                <br className="md:hidden" />
                <b className="text-6xl font-extrabold font-nunito text-highlight text-opacity-75 md:text-xl md:font-ubuntu">
                  <span>Full Stack </span>
                  <br className="md:hidden" />
                  <span>Developer </span>
                </b>
                <br className="md:hidden" />
                <b>
                  with a fervent passion for creating innovative software
                  solutions. With creativity and technical expertise, I thrive
                  on tackling complex challenges and embracing new technologies.
                </b>
              </h1>
              <div className="flex mt-7 md:w-full">
                <a
                  href="https://www.linkedin.com/in/yixin-deng-b77b7b1a0/"
                  className="cursor-pointer md:w-1/3"
                >
                  <img
                    src="/images/linkedin.png"
                    alt="linkedin-logo"
                    className="h-32 md:h-20 p-2"
                  />
                </a>
                <a
                  href="https://github.com/dengyixinliliow"
                  className="cursor-pointer md:w-1/3"
                >
                  <img
                    src="/images/github.png"
                    alt="github-logo"
                    className="h-32 p-2 md:h-20"
                  />
                </a>
                <a
                  href="./images/ResumeYixinDeng.pdf"
                  className="cursor-pointer md:w-1/3"
                >
                  <img
                    src="/images/resume.png"
                    alt="resume-logo"
                    className="h-32 p-2 md:h-20"
                  />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center w-11/12 md:hidden">
              <img src="/images/self.png" alt="self-anime" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

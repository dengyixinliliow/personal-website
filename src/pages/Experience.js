import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { FcCalendar } from "react-icons/fc";
import { FcOrganization } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";

function Experiences() {
  const developerJobs = [
    {
      title: "Frontend Software Engineer Intern",
      startTime: "2023.9",
      endTime: "2024.3",
      company: "Bugfree.ai",
      location: "San Jose, CA",
      technologies: "NextJS, TypeScript, Flask, Jest, React Testing Library",
      description:
        "I Collaborated with the CTO to craft and manage the frontend of an AI-driven job interview preparation platform, serving 200+ daily users. This product leveraged an LLM model to refine resumes and prepare interview question. During the internship, I independently engineered diverse UI elements such as file uploaders and multi-page forms, while also constructing APIs for backend data access. Besides, I boosted code reliability by increasing test coverage from 55% to 85% through the implementation of unit tests using React Testing Library and Jest.",
    },
    {
      title: "Full Stack Software Engineer Intern",
      startTime: "2023.8",
      endTime: "2023.9",
      company: "China Telecom",
      location: "Shanxi, China",
      technologies: "VueJS, Spring Boot",
      description:
        "I contributed to the development of a business management system tailored for SIM card sales. This system facilitated seamless sale recording via mobile devices and provided administrators with robust tools for overseeing business operations. In the frontend, I implemented multiple statistical charts using VueJS and ECharts, with the goal of enhancing administrators' understanding of business trends and performance by over 25%. Leveraging myBatis, I extracted statistical data from the MySQL database and developed RESTful APIs with Spring Boot. Additionally, I advocated for the adoption of Swagger for autogenerating API documentation, resulting in the acceleration of development processes.",
    },
    {
      title: "Software Development Engineer Intern",
      startTime: "2023.5",
      endTime: "2023.7",
      company: "Expedia Group",
      location: "Austin, TX",
      technologies: "Swift, SwiftUI, GraphQL, Agile Development",
      description:
        "I spearheaded the design and implementation of a dynamic component preview feature for the Explorer app, which showcases components from a company-wide iOS UI library, employing Swift, GraphQL, and SwiftUI. This initiative elevated the preview app's functionality by facilitating data querying across multiple brands within the company, enabling direct testing of UI modifications within the app itself, and enhancing the efficiency of iOS teams by over 30%. Additionally, I led a team of interns in sprint planning using Agile methodology, orchestrating the utilization of JIRA for ticket creation, establishing roadmap timelines, and monitoring peer progress through daily standup meetings.",
    },
    {
      title: "Frontend Software Developer",
      startTime: "2022.12",
      endTime: "2023.4",
      company: "To Your Rescue",
      location: "Southport, NC",
      technologies: "React, Redux, TypeScript, Microsoft Azure, RESTful API",
      description:
        "I created a web version of animal shelter management software. This strategic move significantly bolstered responsiveness and usability, culminating in a remarkable 45% surge in user satisfaction levels. Additionally, I introduced an interactive animal webpage, empowering users to seamlessly access, add, and modify animal information stored in the database via RESTful API integration. Leveraging localStorage for backend response caching, I achieved a notable 15% enhancement in performance, further optimizing the user experience.",
    },
    {
      title: "iOS Engineer",
      startTime: "2021.10",
      endTime: "2022.5",
      company: "VolunteerMatch",
      location: "Southport, NC",
      technologies: "UI Kit, Storyboard, GraphQL API",
      description:
        "I participated in the development of an iOS social media app connecting volunteers and non-profit organizations to foster communication and boost user engagement by 30%. I introduced a Moment feature enabling users to share pictures and thoughts seamlessly, utilizing UIKit, Cloudinary API, and MySQL. To bridge the gap between frontend and backend, I integrated Apollo iOS and GraphQL. Additionally, I crafted a preference feature empowering users to save their volunteering interests and employ them to filter volunteer opportunities effectively.",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <Layout>
      <div className="bg-transparent min-h-screen">
        <div className="flex justify-around md:hidden">
          <div className="w-full h-full flex flex-col justify-center">
            {developerJobs.map((job, i) => {
              return (
                <button
                  key={i}
                  className={`block font-semibold font-nunito text-xl bg-transparent p-8 text-fontcolor mb-5 ${
                    i === selected ? "text-highlight/80" : ""
                  }`}
                  onClick={() => {
                    setSelected(i);
                  }}
                >
                  <p className="font-bold text-4xl mb-3">{job.company}</p>
                  <p>{job.title}</p>
                </button>
              );
            })}
          </div>

          <div className="bg-stone-100/20 w-full mr-36 my-20 rounded-3xl text-slate-700 text-2xl p-12  font-ubuntu font-light">
            <p className="mb-2">
              <FcBusinesswoman className="inline mr-3" />
              <span className="text-slate-600 font-bold">
                {developerJobs[selected].title}
              </span>
            </p>
            <p className="mb-2">
              <FcOrganization className="inline mr-3" />
              <span className="text-slate-600 font-bold">
                {developerJobs[selected].company}
              </span>
            </p>
            <p className="mb-2">
              <FcCalendar className="inline mr-3" />
              {developerJobs[selected].startTime} -{" "}
              {developerJobs[selected].endTime}
            </p>
            <p className="mb-2">
              <FcGlobe className="inline mr-3" />
              <span className="text-slate-600 font-bold">Location: </span>
              {developerJobs[selected].location}
            </p>
            <p className="mb-2">
              <FcServices className="inline mr-3" />
              <span className="text-slate-600 font-bold">Technologies: </span>
              {developerJobs[selected].technologies}
            </p>
            <p className="mb-2">
              <FcIdea className="inline mr-3" />
              <span className="text-slate-600 font-bold">My Achievement:</span>
              <p>{developerJobs[selected].description}</p>
            </p>
          </div>
        </div>

        <div className="m-8 hidden md:block">
          <h1
            className="text-highlight/70 text-3xl font-nunito font-black text-center"
            style={{ "text-shadow": "1px 1px 2px #DEAABC" }}
          >
            EXPERIENCE
          </h1>
          {developerJobs.map((job, i) => {
            return (
              <div className="bg-stone-100/20 w-full mr-36 my-20 rounded-3xl text-slate-700 p-12 font-ubuntu font-light">
                <p className="mb-2">
                  <FcBusinesswoman className="inline mr-3" />
                  <span className="text-slate-600 font-bold">{job.title}</span>
                </p>
                <p className="mb-2">
                  <FcOrganization className="inline mr-3" />
                  <span className="text-slate-600 font-bold">
                    {job.company}
                  </span>
                </p>
                <p className="mb-2">
                  <FcCalendar className="inline mr-3" />
                  {job.startTime} - {job.endTime}
                </p>
                <p className="mb-2">
                  <FcGlobe className="inline mr-3" />
                  <span className="text-slate-600 font-bold">Location: </span>
                  {job.location}
                </p>
                <p className="mb-2">
                  <FcServices className="inline mr-3" />
                  <span className="text-slate-600 font-bold">
                    Technologies:{" "}
                  </span>
                  {job.technologies}
                </p>
                <p className="mb-2">
                  <FcIdea className="inline mr-3" />
                  <span className="text-slate-600 font-bold">
                    My Achievement:
                  </span>
                  <p>{job.description}</p>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Experiences;

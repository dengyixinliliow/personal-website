import React from "react";
import Layout from "../components/Layout";
import JobContainer from "../components/JobContainer";
import { useState } from "react";

function Contact() {
  const developerJobs = [
    {
      title: "Web Developer",
      startTime: "2021/12",
      endTime: "2022/5",
      company: "Boston University CleanTech Club",
      location: "Boston, MA",
      technologies: "Flask, HTML, CSS, Bootstrap, SQL",
      description: [
        "Participated in building a ride sharing web application exculusively for BU students",
      ],
    },

    {
      title: "iOS Mobile Application Developer",
      startTime: "2021/10",
      endTime: "2022/5",
      company: "VolunteerMatch",
      location: "Oakland, CA",
      technologies: "XCode",
      description: [
        "Participated in building an iOS social media app for volunteers and non-profit organizations to communicate with each other aimed to increase the users by 30%. ",
        "Developed a moment function to allow users to share their pictures and thoughts.",
        "Designed and implemented a preference feature to allow users to save users’ preferences on their volunteering interests and used them to filter the volunteer opportunities.",
        "Used Apollo iOS and GraphQL API to connect frontend with backend.",
      ],
    },

    {
      title: "Mobile Application Developer",
      startTime: "2021/6",
      endTime: "2021/11",
      company: "Develop for Good - Environmental Defense Fund",
      location: "Stanford, CA",
      technologies: "React Native, Figma, Flask",
      description: [
        "Led the team to develop an app intended to help more than 2,500 local users automatically format an environmental pollution report and send it to governors.",
        "Designed the UI and built a prototype using Figma.",
        "Implemented the mobile app frontend with React Native for cross-platform usage.",
      ],
    },
  ];

  const marketerJobs = [
    {
      title: "Communications Internship",
      startTime: "2020/6",
      endTime: "2021/10",
      company: "Flaming Heart Ministries",
      location: "Tucker, GA",
      technologies: "",
      description: [
        "Managed multiple official social media accounts with HootSuite",
        "Created engaging content like social media posts and event posters using Canva and Adobe Photoshop",
      ],
    },
    {
      title: "Marketing and Content Internship",
      startTime: "2020/7",
      endTime: "2020/10",
      company: "Frog Social Inc.",
      location: "Beijing, China",
      technologies: "",
      description: [
        "Updated and monitored hashtags inside Frog, an international social media platform for teenagers.",
        "Participated in developing marketing campaigns and attracted more than 100,000 new users.",
        "Created content to increase user engagement by 30%.",
        "Served as a contact for customer service while using the official account for marketing and public relation tools.",
        "Maintained and updated the user database on daily basis.",
      ],
    },
    {
      title: "Event Planner",
      startTime: "2020/1",
      endTime: "2020/9",
      company: "Boston University Chinese Students and Scholars Association",
      location: "Boston, MA",
      technologies: "",
      description: [
        "Organized several career development events that attracted hundreds of students to attend",
        "Created promotional content for Chinese social media platforms such as WeChat and Weibo",
      ],
    },
    {
      title: "Alumni and Fundraising Coordinator",
      startTime: "2019/6",
      endTime: "2019/7",
      company: "Boston University Alumni Office",
      location: "Boston, MA",
      technologies: "",
      description: [
        "Contacted more than 80,000 alumni, parents, and friends of the University to update database information and share the latest campus news.",
        "Requested and facilitated donations from alumni and parents.",
      ],
    },
  ];

  const [jobs, setJobs] = useState(developerJobs);

  return (
    <Layout>
      <div className="bg-primary">
        <div className="flex flex-col p-5 ">
          <div className="flex justify-center">
            <h1 className="text-5xl font-dynapuff mb-3">My Experience as ...</h1>
          </div>
          <div className="flex font-dynapuff text-xl justify-around">
            <button
              className="rounded-full bg-highlight p-3 drop-shadow-lg"
              onClick={() => {
                setJobs(developerJobs);
              }}
            >
              A Developer
            </button>
            <button
              className="rounded-full bg-highlight p-3 drop-shadow-lg"
              onClick={() => {
                setJobs(marketerJobs);
              }}
            >
              A Communicator
            </button>
          </div>
        </div>

        <div className="py-3">
          {jobs.map((job) => {
            return (
              <JobContainer
                title={job.title}
                description={job.description}
                startTime={job.startTime}
                endTime={job.endTime}
                company={job.company}
                location={job.location}
                technologies={job.technologies}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

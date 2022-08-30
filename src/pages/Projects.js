import React from "react";
import Layout from "../components/Layout";
import ProjectContainer from "../components/ProjectContainer";

function Projects() {
  const projects = [
    {
      project: "Personal Website",
      technologies: "ReactJS, TailwindCSS",
      description:
        "A personal website used to display my experience and projects.",
      date: "2022/7",
      img: "/images/personalWeb.jpg",
    },

    {
      project: "ConcertGuru",
      technologies: "ReactJS, MongoDB, ExpressJS",
      description:
        "A web application for users to prepare for their upcoming concert by creating music list for them automatically.",
      date: "2022/5",
      img: "/images/concert.jpg",
    },

    {
      project: "Clothes Rental App",
      technologies: "Firebase, Android Studio",
      description:
        "An Android app aimed for 1,000 users to list their clothes for rental and rent clothes from others within a 4-member team.",
      date: "2021/12",
      img: "/images/reco.jpg",
    },

    {
      project: "Bostonia",
      technologies: "JavaScript, HTML, CSS, JQuery, BootStrap",
      description:
        "Bostonia is a website for travelers to explore Boston and plan their trip to Boston. While building the App, I used 3rd party APIs (Google Map, Yelp, etc.) to provide the most updated information about Boston.",
      date: "2021/5",
      img: "/images/bostonia.jpg",
    },

    {
      project: "Online Social Photo Network Application ",
      technologies: "SQL, Flask, Jinja2",
      description:
        "An online photo sharing application intended to allow 500 users to create accounts, upload photos, search photos, like, and comment on others' photos with Flask and Jinja2. I developed photo and friend recommendations function using the relational database",
      date: "2021/2",
      img: "/images/social.jpeg",
    },
  ];

  return (
    <Layout>
      <div className="bg-primary">
        <div className="flex justify-center">
          <h1 className="font-dynapuff text-5xl p-5">
            Projects I worked on...
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1">
          {projects.map((project) => {
            return (
              <ProjectContainer
                name={project.project}
                technologies={project.technologies}
                description={project.description}
                date={project.date}
                img={project.img}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;

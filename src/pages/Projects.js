import React from "react";
import Layout from "../components/Layout";
import { FcHome } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcAdvance } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";
import { FcIphone } from "react-icons/fc";

function Projects() {
  const projects = [
    {
      project: "Realist",
      technologies: "MongoDB, ExpressJS, React, NodeJS, AWS",
      description: "A Real Estate Marketplace App",
      logo: FcHome,
    },
    {
      project: "Documentation Generation",
      technologies: "React, Flask, oAuth",
      description:
        "An app Utilized Power of LLM to Autogenerate Documentation for any Github Repo",
      logo: FcDocument,
      github: "https://github.com/dbhatia00/documentation-generation",
    },
    {
      project: "Pocket Pokedex",
      technologies: "React, Material UI, GraphQL api, Redux, charJS",
      description:
        "A React App Help users to Build Pokedex while Playing a Pokemon Game",
      logo: FcLandscape,
      github: "https://github.com/dengyixinliliow/Pocket-Pokedex",
    },
    {
      project: "RECO",
      technologies:
        "Android Development, Java, Strip api, Search api, Firebase",
      description: "An Android marketplace App allow Users to Rent Clothes",
      logo: FcIphone,
      github: "https://github.com/dengyixinliliow/CS501FinalProject",
    },
  ];

  return (
    <Layout>
      <div className="bg-transparent min-h-screen">
        <div className="md:hidden">
          <h1
            className="text-highlight/70 text-8xl font-nunito font-black text-center"
            style={{ "text-shadow": "1px 1px 2px #DEAABC" }}
          >
            PROJECTS
          </h1>
          <div className="flex flex-wrap justify-center text-slate-700 font-ubuntu font-light">
            {projects.map((project) => {
              return (
                <div className="w-1/4 bg-stone-100/20 m-12 min-h-56 p-5 flex flex-col align-center justify-center text-center rounded-3xl relative">
                  <p className="text-slate-600 font-bold text-xl">
                    <project.logo className="inline mb-1" />
                    <span> {project.project}</span>
                  </p>
                  <p>{project.description}</p>
                  <p className="mt-2">
                    <FcServices className="inline mb-1" />
                    <span> {project.technologies}</span>
                  </p>
                  {project.github && (
                    <a className="text-blue-600" href={project.github}>
                      <FcAdvance className="inline mb-1" />
                      <span> Github</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="m-8 hidden md:block">
          <h1
            className="text-highlight/70 text-3xl font-nunito font-black text-center"
            style={{ "text-shadow": "1px 1px 2px #DEAABC" }}
          >
            PROJECTS
          </h1>

          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="w-full bg-stone-100/20 mt-8 min-h-56 p-5 flex flex-col align-center justify-center text-center rounded-3xl relative text-slate-700 font-ubuntu font-light"
              >
                <p className="text-slate-600 font-bold text-lg">
                  <project.logo className="inline mb-1" />
                  <span> {project.project}</span>
                </p>
                <p>{project.description}</p>
                <p className="mt-2">
                  <FcServices className="inline mb-1" />
                  <span> {project.technologies}</span>
                </p>
                {project.github && (
                  <a className="text-blue-600" href={project.github}>
                    <FcAdvance className="inline mb-1" />
                    <span> Github</span>
                  </a>
                )}
              </div>
            );
          })}

        </div>
      </div>
    </Layout>
  );
}

export default Projects;

import React, { useEffect, useState } from "react";
import client from "../client";

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type =="project"]{
      title,
      date,
      mainImage,
      inspiration,
      description,
      technologies,
      github,
      youtube
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  });
  return (
    <main className="bg-gray-900 min-h-screen p-12 pt-40">
      <section className="container mx-auto">
        <h1 className="text-6xl flex justify-center mb-4">My Projects</h1>
        <h2 className="text-2xl text-gray-100 flex justify-center">
          "We Build the Tools that Shape the World We End Up Living In."
        </h2>
        <h2 className="text-1xl text-gray-100 flex justify-center mb-12">
          - Jack 'Ballers' Mallers
        </h2>
        <section className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shadow-xl bg-gray-200 p-16"
              >
                <h3 className="text-gray-800 text-3xl font-bold mb-2">
                  {project.title}
                </h3>
                <div className="text-yellow-600 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">
                      {project.technologies}
                    </strong>
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.inspiration}
                  </p>
                  <span className="flex justify-around gap-8">
                    <a
                      href={project.github}
                      alt="github_repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl font-bold px-6 py-3 rounded bg-gray-900 hover:bg-gray-400 transform transition duration-500 hover:scale-110"
                    >
                      Github Repo
                    </a>
                    <a
                      href={project.youtube}
                      alt="github_repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl font-bold px-6 py-3 rounded bg-gray-900 hover:bg-gray-400 transform transition duration-500 hover:scale-110"
                    >
                      Demo Video
                    </a>
                  </span>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;

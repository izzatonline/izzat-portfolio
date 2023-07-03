import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import Link from "next/link";
import ProjectItem1 from "./ProjectItem1";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import todoappImg from "../public/assets/projects/todo-app.png";
import simplewebpageImg from "../public/assets/projects/singlewebpage-project.png";
import ProjectItem2 from "./ProjectItem2";
import nextauthImg from "../public/assets/projects/next-auth.png";
import ProjectItem3 from "./ProjectItem3";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem1
                        title="Todo App"
                        backgroundImg={todoappImg}
                        projectUrl="https://github.com/izzatonline/to-dos"
                    />
                    <ProjectItem2
                        title="Single HTML Web Page"
                        backgroundImg={simplewebpageImg}
                        projectUrl="https://izzatonline.github.io/IzzatJamal-portfolio/#home"
                    />
                    <ProjectItem3
                        title="Next-Auth Login Page"
                        backgroundImg={nextauthImg}
                        projectUrl="/property"
                    />
                    <ProjectItem1
                        title="Property Finder"
                        backgroundImg={twitchImg}
                        projectUrl="/property"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;

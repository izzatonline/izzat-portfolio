import React from "react";
import ProjectItem1 from "./ProjectItem1";

import todoappImg from "../public/assets/projects/todo-app.png";
import reactportfolioImg from "../public/assets/projects/react-portfolio.png";
import ProjectItem2 from "./ProjectItem2";
import nextauthImg from "../public/assets/projects/next-auth.png";
import ProjectItem3 from "./ProjectItem3";
import izzatportfolioImg from "../public/assets/projects/izzat-portfolio.png";
import ProjectItem4 from "./ProjectItem4";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4 dark:text-white">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem1
                        title="Todo App"
                        backgroundImg={todoappImg}
                        projectUrl="https://github.com/izzatonline/to-dos"
                    />
                    <ProjectItem3
                        title="Next-Auth Login Page"
                        backgroundImg={nextauthImg}
                        projectUrl="https://github.com/izzatonline/nav-bar-project"
                    />
                    <ProjectItem4
                        title="Izzat-Portfolio"
                        backgroundImg={izzatportfolioImg}
                        projectUrl="https://izzat-portfolio.vercel.app/"
                    />
                    <ProjectItem2
                        title="Portfolio with Night Mode"
                        backgroundImg={reactportfolioImg}
                        projectUrl="https://react-portfolio-izzatjamal-dhn1h7y33-izzatonline.vercel.app/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;

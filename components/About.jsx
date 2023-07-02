import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImg from "../public/assets/profilepic-izzat.jpg";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        About
                    </p>
                    <h2 className="py-2 text-gray-600">Who I Am</h2>
                    <p className="py-2 text-gray-600">Hello and Hi!</p>
                    <p className="py-2 text-gray-600">
                        I am an experienced Project Engineer transitioning to a
                        career as a versatile professional in the fields of Full
                        Stack Development and Data Analysis. Passionate about
                        leveraging technology to drive innovation and solve
                        complex problems, I bring a unique blend of technical
                        expertise and project management skills to the table.
                        With a solid foundation in engineering principles and a
                        strong analytical mindset, I am adept at translating
                        business requirements into practical solutions.
                    </p>
                    <p className="py-2 text-gray-600">
                        Eager to apply my programming knowledge, data
                        manipulation skills, and problem-solving abilities to
                        contribute effectively as a Full Stack Developer or Data
                        Analyst. Committed to continuous learning and growth, I
                        thrive in dynamic and collaborative environments where I
                        can make a meaningful impact.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={AboutImg} alt="/" className="rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default About;

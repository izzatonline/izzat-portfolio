import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Let&apos;s Build Something Together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m{" "}
                        <span className="text-[#5651e5]">Izzat J</span> !
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Full-Stack Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        Passionate about building robust and user-friendly web
                        applications. Seeking opportunities to grow and learn in
                        the ever-evolving world of web development.
                        <br /> #CodeEnthusiast #WebDeveloper #TechLover
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link
                            href="https://www.linkedin.com/in/izzatjamalullail/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/izzatonline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <Link href="/resume">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

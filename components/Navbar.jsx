import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
    BsFillPersonLinesFill,
    BsFillSunFill,
    BsFillMoonStarsFill,
} from "react-icons/bs";
import { useRouter } from "next/router";
import IzzatLogo from "../public/assets/izzat-logo2.png";
import { useTheme } from "next-themes";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");
    const [position, setPosition] = useState("fixed");
    const router = useRouter();

    useEffect(() => {
        if (
            router.asPath === "/property" ||
            router.asPath === "/crypto" ||
            router.asPath === "/netflix" ||
            router.asPath === "/twitch"
        ) {
            setNavBg("transparent");
            setLinkColor("#ecf0f3");
        } else {
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <div
            className={
                shadow
                    ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 dark:bg-gray-900"
                    : "fixed w-full h-20 z-[100] dark:bg-gray-900"
            }
        >
            <div className="flex flex-row justify-between items-center w-full h-full px-2 2xl:px-16">
                <div className="p-2">
                    <Link href="/">
                        <Image
                            src={IzzatLogo}
                            alt="/"
                            width="150"
                            height="50"
                            className="cursor-pointer dark:invert"
                        />
                    </Link>
                </div>

                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className="hidden md:flex md:px-4 dark:invert"
                    >
                        <div className="flex px-2">
                            {currentTheme === "dark" ? (
                                <button
                                    className="rounded-md"
                                    onClick={() => setTheme("light")}
                                >
                                    {" "}
                                    <BsFillSunFill className="text-2xl" />
                                </button>
                            ) : (
                                <button
                                    className="rounded-md"
                                    onClick={() => setTheme("dark")}
                                >
                                    <BsFillMoonStarsFill className="text-2xl" />
                                </button>
                            )}
                        </div>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#about">About</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#projects">Projects</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/resume">Resume</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon and Dark Mode Icon*/}
                    <div className="flex items-center md:hidden">
                        <div className="px-2 dark:invert items-center">
                            {currentTheme === "dark" ? (
                                <button
                                    className="rounded-md"
                                    onClick={() => setTheme("light")}
                                >
                                    {" "}
                                    <BsFillSunFill className="text-2xl" />
                                </button>
                            ) : (
                                <button
                                    className="rounded-md"
                                    onClick={() => setTheme("dark")}
                                >
                                    <BsFillMoonStarsFill className="text-2xl" />
                                </button>
                            )}
                        </div>
                        <div
                            style={{ color: `${linkColor}` }}
                            onClick={handleNav}
                            className="px-10 dark:invert hover:cursor-pointer items-center"
                        >
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                <Image
                                    src={IzzatLogo}
                                    width="150"
                                    height="50"
                                    alt="/"
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Projects
                                </li>
                            </Link>
                            <Link href="/resume">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Resume
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Contact
                                </li>
                            </Link>
                            <div className="flex py-4">
                                {currentTheme === "dark" ? (
                                    <button
                                        className="rounded-md"
                                        onClick={() => setTheme("light")}
                                    >
                                        {" "}
                                        <BsFillSunFill className="text-2xl" />
                                    </button>
                                ) : (
                                    <button
                                        className="rounded-md"
                                        onClick={() => setTheme("dark")}
                                    >
                                        <BsFillMoonStarsFill className="text-2xl" />
                                    </button>
                                )}
                            </div>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let&#39;s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href="https://www.linkedin.com/in/izzatjamalullail/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/izzatonline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href="/#contact">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href="/resume">
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

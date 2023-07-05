import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4 dark:text-white">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-20">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-10 dark:bg-gray-900">
                        <div className="lg:p-4 h-full ">
                            <div>
                                <Image
                                    className="rounded-xl ease-in duration-300 "
                                    src={ContactImg}
                                    alt="/"
                                />
                            </div>
                            <div>
                                <h2 className="py-6 dark:text-white">
                                    Izzat Jamal
                                </h2>
                                <p className="dark:text-gray-200">
                                    Front-End Developer
                                </p>
                                <p className="py-4 dark:text-gray-200">
                                    I am available for freelance or full-time
                                    positions. Contact me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8 dark:text-gray-200">
                                    Connect With Me
                                </p>
                                <div className="flex items-center justify-between py-4 dark:text-white">
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

                                    <Link
                                        href="mailto:izzat.online@gmail.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <AiOutlineMail />
                                        </div>
                                    </Link>

                                    <Link href="/resume">
                                        <div>
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <BsFillPersonLinesFill />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:text-white dark:bg-gray-900">
                        <div className="p-4">
                            <form
                                action="/"
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Name
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Phone Number
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="phone"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="text"
                                        name="subject"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300"
                                        rows="10"
                                        name="message"
                                    ></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] dark:shadow-none">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-900">
                            <HiOutlineChevronDoubleUp
                                className="text-[#5651e5]"
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;

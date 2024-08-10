import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            ABOUT ME
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building front-end UI mobile applications that
            connect with APIs and other back-end technologies. I am passionate
            about learning new technologies and understand that there is more
            than one way to accomplish a task. Although I am most proficient at
            building front-end applications using HTML, CSS, Javascript and
            React, I am a fast learner and can learn new technologies as needed.
          </p>
          <p className="py-2 text-gray-600">
            I started web development in 2016, managing multiple e-commerce
            websites on CMS platforms such as WordPress and Shopify. I have
            experience working directly with clients and taking mock wireframes
            through to deployed applications.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Take a look at some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

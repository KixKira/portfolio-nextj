import React from "react";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>KixKira | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Oscar Machado</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/kixkira/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/KixKira"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        {/* Contact */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">CONTACT</h5>
          <p className="py-2 flex">
            <FaPhone size={20} />
            <span className="px-2">+58 412 708 9438</span>
          </p>
          <p className="py-2 flex">
            <FaEnvelope size={20} />
            <span className="px-2">oemqkix@gmail.com</span>
          </p>
          <p className="py-2 flex">
            <FaGlobe size={20} />
            <span className="px-2">Aragua - Venezuela</span>
          </p>
        </div>
        {/* Education */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-2">EDUCATION</h5>
          <div>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                <span className="font-bold">TSU Computer Science</span> | IUTAR
                | <span className="italic">2013 - 2016</span>
              </li>
              <li>
                <span className="font-bold">Customer Support</span> | Chicks
                Gold Inc. | <span className="italic">2022</span>
              </li>
              <li>
                <span className="font-bold">Angular</span> | Udemy |{" "}
                <span className="italic">2023</span>
              </li>
              <li>
                <span className="font-bold">React Router</span> | Platzi |{" "}
                <span className="italic">2023</span>
              </li>
              <li>
                <span className="font-bold">Algorithms and Flowcharts</span> |
                Platzi | <span className="italic">2023</span>
              </li>
              <li>
                <span className="font-bold">Git & GitHub</span> | Platzi |{" "}
                <span className="italic">2023</span>
              </li>
              <li>
                <span className="font-bold">Web Scrapping</span> | Udemy |{" "}
                <span className="italic">2024</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Skills */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-2">SKILLS</h5>
          <div>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                <span className="font-bold">Programming Languages</span> | HTML,
                CSS, JavaScript
              </li>
              <li>
                <span className="font-bold">Frameworks</span> | ReactJS, NextJS,
                Angular, Aurelia
              </li>
              <li>
                <span className="font-bold">Utilities</span> | Git, Gitlab,
                GitHub, Bitbucket, Trello, Azure
              </li>
              <li>
                <span className="font-bold">Others</span> | Photoshop,
                Illustrator, Audition, Premiere, Lightroom, WordPress, Agile
                development process and Scrum
              </li>
            </ul>
          </div>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Sisprot Global Fiber</span>
            <span className="px-2">|</span>Turmero, Ve
          </p>
          <p className="py-1 italic">Full-Stack Developer (Jun. 2024 - Act.)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Development of Contact Form to obtain information from potential
              prospects, made in React connected to Supabase
            </li>
            <li>Updating of internal company pages in WordPress.</li>
            <li>
              Construction of new pages for different purposes in WordPress.
            </li>
            <li>Migration of pages to React, connected to Supabase</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Venemergencia</span>
            <span className="px-2">|</span>Caracas, Ve
          </p>
          <p className="py-1 italic">
            Front-End Development (Sep. 2023 - Nov. 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Development of a school nursing system, ensuring functionality and
              ease of use.
            </li>
            <li>
              Optimisation tasks in the company&apos;s internal system,
              improving its performance and operational efficiency.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Chicks Gold, Inc.</span>
            <span className="px-2">|</span>Mississauga, CA
          </p>
          <p className="py-1 italic">
            Product Engineer (Mar. 2022 - Aug. 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Design and development of components for the exchange, ensuring
              optimal functionality and performance
            </li>
            <li>
              Creation and maintenance of a company blog, providing relevant and
              up-to-date content for users.
            </li>
            <li>
              Implementation of components in different areas of the product to
              improve the user experience.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Banco Itaú</span>
            <span className="px-2">|</span>Santiago de Chile, CL
          </p>
          <p className="py-1 italic">IT Support (Feb. 2021 - Feb. 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Provided technical assistance to bank branches, ensuring the
              continuous operation of the systems
            </li>
            <li>
              Solved operational problems in the applications used, ensuring the
              operational efficiency of the bank.
            </li>
            <li>
              Led the migration of corporate emails, ensuring a smooth and
              uninterrupted transition.
            </li>
            <li>
              Carried out the installation of applications according to the user
              profile, customising the environment for each employee.
            </li>
            <li>
              Implemented and configured the corporate image on corporate
              computers, maintaining the coherence and visual identity of the
              company.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Control4</span>
            <span className="px-2">|</span>Santiago de Chile, CL
          </p>
          <p className="py-1 italic">Web Developer (Oct. 2020 - Feb. 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed an eCommerce on WordPress, providing a robust and easy
              to use online sales platform
            </li>
            <li>
              Implemented plugins to extend the functionality of the website to
              meet specific business needs.
            </li>
            <li>
              Improved the visual environment of the website, ensuring an
              engaging and consistent user experience.
            </li>
            <li>
              Implemented SEO strategies to improve site visibility in search
              engines and increase organic traffic.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Glass & Wood</span>
            <span className="px-2">|</span>Santiago de Chile, CL
          </p>
          <p className="py-1 italic">Web Developer (Mar. 2020 - Oct. 2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a WordPress eCommerce for the company, providing an
              effective online sales platform.
            </li>
            <li>
              Implemented plugins to extend the functionality of the website and
              improve the user experience.
            </li>
            <li>
              Managed email marketing campaigns using MailChimp to increase
              engagement and sales.
            </li>
            <li>
              Managed the company&apos;s social media, creating relevant content
              and engaging in community interaction to improve online presence
              and increase brand visibility.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Eazyroof</span>
            <span className="px-2">|</span>Santiago de Chile, CL
          </p>
          <p className="py-1 italic">Web Developer (Feb. 2019 - Mar. 2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Made significant improvements to the web application, optimising
              its performance and functionality.
            </li>
            <li>
              Designed and developed new components for the application,
              improving the user experience and adding value to the product.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Banco BCI</span>
            <span className="px-2">|</span>Santiago de Chile, CL
          </p>
          <p className="py-1 italic">IT Support (Aug. 2017 - Jan. 2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Provided comprehensive technical support, ensuring the continuous
              operation of computer systems.
            </li>
            <li>
              Efficiently resolved application performance issues, minimising
              downtime and maximising productivity.
            </li>
            <li>
              Successfully led the migration of corporate emails, ensuring a
              smooth and seamless transition.
            </li>
            <li>
              Installed applications according to user profile, customising work
              environments to meet the individual needs of each employee.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

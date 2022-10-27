import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>KixKira | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Oscar Machado</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/kixkira/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/KixKira'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className='text-justify'>
          Higher University Technician in Computer Science with more than 5
          years of experience in Web Developtment. With analytical and technical
          skills to offer efficient web solutions, provide insights technicians
          and experience and build new websites from start to finish. I also
          have skills to develop applications from scratch, with 2 years of
          experience and continuous learning.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> Angular
            <span className='px-2'>|</span> Aurelia
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span>Github
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>Next
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>WordPress
            <span className='px-2'>|</span> MySQL
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            CHICKS GOLD
            </span>
            <span className='px-2'>|</span>Toronto, CA
          </p>
          <p className='py-1 italic'>Product Engineer. Front-End Development (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Mobile responsive UI layouts with understanding of Aurelia, HTML, SCSS and TypeScript.
            </li>
            <li>
              Troubleshoot issues and concerns and design changes as needed.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              BANCO ITAÚ
            </span>
            <span className='px-2'>|</span>Santiago de Chile, CL
          </p>
          <p className='py-1 italic'>IT Support (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Technical support to bank level users.
            </li>
            <li>
              Solve problems with application operation.
            </li>
            <li>
              Migration of corporate emails.
            </li>
            <li>
              Installation of applications, according to user profile.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              CONTROL4
            </span>
            <span className='px-2'>|</span>Santiago de Chile, CL
          </p>
          <p className='py-1 italic'>Web Developer (2020 - 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Website developement for sub-companies within it, all within WordPress.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              GLASS & WOOD
            </span>
            <span className='px-2'>|</span>Santiago de Chile, CL
          </p>
          <p className='py-1 italic'>Web Developer (2020 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Web development in WordPress.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              EAZYROOF
            </span>
            <span className='px-2'>|</span>Santiago de Chile, CL
          </p>
          <p className='py-1 italic'>Web Developer (2019 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Continuity of website development in React with Strapi database.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              BANCO BCI
            </span>
            <span className='px-2'>|</span>Santiago de Chile, CL
          </p>
          <p className='py-1 italic'>IT Support (2017 - 2017)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Migration of physical equipment.
            </li>
            <li>
              Transfer of data, installation and configuration of applications to bank level users.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              KING MONNEY
            </span>
            <span className='px-2'>|</span>Barcelona, ES
          </p>
          <p className='py-1 italic'>Front-End Developer (2016 - 2016)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              App and website development.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              SAVIRAM
            </span>
            <span className='px-2'>|</span>Maracay, VE
          </p>
          <p className='py-1 italic'>App Developer (2016 - 2016)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Development and programming of business software.
            </li>
          </ul>
        </div>

        {/*  */}
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}
      
        {/* Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;

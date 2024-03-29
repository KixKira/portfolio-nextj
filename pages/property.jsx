import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/eazyroof.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Head from 'next/head';

const property = () => {
  return (
    <>
      <Head>
        <title>KixKira | Real State</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={propertyImg}
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Real State</h2>
            <h3>React JS / SCSS / Strapi</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This application was built using React JS and is hosted on Strapi. Users can list properties and even sell/rent their own directly on the platform.
              The user will be able to make an accurate quotation, as it has integration with Google Maps API, and thanks to this, the application will give a value to the property taking into account other properties for sale in a given range.
            </p>
            <a
              href='https://www.eazyroof.com/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4'>Site</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> SCSS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Javascript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Strapi
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Google API
                </p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default property;

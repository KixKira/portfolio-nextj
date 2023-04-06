import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            SOBRE MI
          </p>
          <h2 className='py-4'>Quién soy</h2>
          <p className='py-2 text-gray-600'>
            Me especializo en la construcción de aplicaciones móviles de interfaz de usuario front-end que se conectan con las API y otras tecnologías de back-end. Me apasiona aprender nuevas tecnologías y entiendo que hay más de una manera de realizar una tarea. Aunque soy más competente en la construcción de aplicaciones front-end usando HTML, CSS, Javascript y React, soy un aprendiz rápido y puedo aprender nuevas tecnologías según sea necesario.
          </p>
          <p className='py-2 text-gray-600'>
            Empecé desarrollo web en 2016, la gestión de múltiples sitios web de comercio electrónico en plataformas CMS como WordPress y Shopify. Tengo experiencia trabajando directamente con clientes y llevando wireframes simulados hasta aplicaciones desplegadas.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Echa un vistazo a algunos de mis últimos proyectos.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

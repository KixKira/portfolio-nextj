import React from 'react';
import propertyImg from '../public/assets/projects/eazyroof.png';
import cryptoImg from '../public/assets/projects/soundadvisors.png'
import netflixImg from '../public/assets/projects/simultaneo.png'
import twitchImg from '../public/assets/projects/studio23.png'
import randomImg from '../public/assets/projects/random.png'
import lpsImg from '../public/assets/projects/lps.png'
import growersImg from '../public/assets/projects/growers.png'
import muyImg from '../public/assets/projects/muy.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Real State'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='eCommerce'
            backgroundImg={cryptoImg}
            projectUrl='/ecommerces'
            tech='WordPress'
          />
          <ProjectItem
            title='Creative Agency'
            backgroundImg={netflixImg}
            projectUrl='/agencyc'
            tech='WordPress'
          />
          <ProjectItem
            title='Creative Agency'
            backgroundImg={twitchImg}
            projectUrl='/creativea'
            tech='HTML'
          />
          <ProjectItem
            title='Radom User Generator'
            backgroundImg={randomImg}
            projectUrl='/random'
            tech='JavaScript'
          />
          <ProjectItem
            title='Logistics Operations'
            backgroundImg={lpsImg}
            projectUrl='/lps'
            tech='WordPress'
          />
          <ProjectItem
            title='eCommerce'
            backgroundImg={growersImg}
            projectUrl='/growers'
            tech='WordPress'
          />
          <ProjectItem
            title='Personal Agency'
            backgroundImg={muyImg}
            projectUrl='/muymala'
            tech='WordPress'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

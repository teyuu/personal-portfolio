
import React from 'react';
import ProjectItem from './ProyectItem'
import videogamesImg from '../public/assets/proyects/videogames.png';
import coinPlus from '../public/assets/proyects/coinplus.png';
import strongCenter from '../public/assets/proyects/strongcenter.png';
import cineFilm from '../public/assets/proyects/moviesapp.png';

const Proyects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyects</p>
            <h2 className='py-4'>What I&#39;ve Built </h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem
            title='Cinefilm'
            backgroundImg={cineFilm}
            projectUrl='/cinefilm'
            tech='React JS, Nextjs 13, Tailwind css'
          />
            <ProjectItem
            title='Coin+'
            backgroundImg={coinPlus}
            projectUrl='/coinplus'
            tech='React JS, Redux-Toolkit, Node, Express,Typescript, MongoDB'
          />
            <ProjectItem
            title='Videogames App+'
            backgroundImg={videogamesImg}
            projectUrl='/videogamesapp'
            tech='React JS, Redux, Node, Express, PostgreSQL'
          />
           <ProjectItem
            title='Gym Strong Center'
            backgroundImg={strongCenter}
            projectUrl='https://strongcenter.000webhostapp.com/index.html#'
            tech='HTML, CSS, Bootstrap, SASS'
          />


            </div>
        </div>
    </div>
  )
}

export default Proyects
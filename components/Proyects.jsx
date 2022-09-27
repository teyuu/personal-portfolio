
import React from 'react';
import ProjectItem from './ProyectItem'
import videogamesImg from '../public/assets/proyects/videogames.png';
import coinPlus from '../public/assets/proyects/coinplus.png';
import strongCenter from '../public/assets/proyects/strongcenter.png';

const Proyects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Proyects</p>
            <h2 className='py-4'>What I've Built </h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem
            title='Coin+'
            backgroundImg={coinPlus}
            projectUrl='https://www.linkedin.com/posts/esteban-nahuel-carrizo-69715422b_react-css-typescript-ugcPost-6976591455754571776-ATQo?utm_source=share&utm_medium=member_desktop'
            tech='React JS, Redux-Toolkit, Node, Express,Typescript, MongoDB'
          />
            <ProjectItem
            title='Videogames App+'
            backgroundImg={videogamesImg}
            projectUrl='https://www.linkedin.com/feed/update/urn:li:activity:6964349437510856706/'
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
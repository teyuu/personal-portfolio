import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>My first steps in programming were taking some web development courses and doing small projects.</p>
          <p className='py-2 text-gray-600'>After a while I decided to start my career as a Full Stack developer at Henry&#39;s bootcamp, where for 5 months with a lot of effort and dedication I learned different technologies, worked as a team, constantly paired programming and carried out projects in which you can see their fruits.</p>
          <p className='py-2 text-gray-600'>I&#39;m still looking to grow professionally, either learning new technologies or being part of projects that are challenging.</p>
          <Link href='/#projects'>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my last proyects</p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
          <img className='rounded-xl' src="https://i.ibb.co/Rznpsz7/IMG-20200507-204414-544.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-scren p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, qui.</p>
          <p className='py-2 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis iusto saepe. Porro, excepturi soluta rem facere voluptatibus voluptatem ut.</p>
          <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur, ducimus saepe ullam fugit repellendus distinctio, repellat delectus eum, nostrum facilis quas quaerat quam maiores odio laudantium voluptatem veniam sint!</p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my last proyects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
          <img className='rounded-xl' src="https://i.ibb.co/Rznpsz7/IMG-20200507-204414-544.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
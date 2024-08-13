import React from 'react';
import Herovideo1 from './image/video1.mp4';
import Herovideo2 from './image/video2.mp4';

export default function Hero() {
  return (
    <main className='pt-24 w-full bg-primary text-white h-screen flex justify-center'>
      <section>
        <h1 className='text-6xl xs:text-4xl sm:text-5xl  md:text-5xl  lg:text-6xl  xl:text-6xl 2xl:text-6xl text-center'>
          VirtualR build tools <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-900'>for</span><br/>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-900'>developers</span>
        </h1>
        <p className='xs:p-7 sm:p-6 md:p-0 lg:p-0 xl:p-0 2xl:p-0 mt-4  text-center text-gray-500'>
          Empower your creativity and bring your VR app ideas to life with our intuitive development tools.<br/>
          Get started today and turn your imagination into immersive reality!
        </p>
        <div className='flex items-center justify-center pt-5'>
          <button className='text-slate-100 px-3 py-2 rounded-md mr-2 text-sm bg-gradient-to-l from-orange-500 to-orange-900'>
            Start for free
          </button>
          <button className='bg-transparent border mr-2 border-slate-100 text-slate-100 text-sm rounded-md px-4 py-2'>
            Documentation
          </button>
        </div>
        <div className='flex items-center justify-center pt-10'>
          <video autoPlay loop muted  className='rounded-lg xs:w-52 sm:w-72 md:w-96 lg:w-1/3 xl:w-1/3 2xl:w-1/3  border border-orange-700 shadow-orange-400 mx-2  my-4'>
            <source type='video/mp4' src={Herovideo1}></source>
          </video>
          <video autoPlay loop muted  className='rounded-lg xs:w-52 sm:w-72 md:w-96 lg:w-1/3 xl:w-1/3 2xl:w-1/3 border border-orange-700 shadow-orange-400 mx-2  my-4'>
            <source type='video/mp4' src={Herovideo2}></source>
          </video>
        </div>
      </section>
    </main>
  );
}

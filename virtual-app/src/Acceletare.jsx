import React from 'react'
import Code from "./image/code.jpg"
import { FaCheckCircle } from "react-icons/fa";

export default function Acceletare() {
  const acc = [
    {
      icon: <FaCheckCircle style={{color : "green", fontSize : "30px"}} />,
      title: "Code merge made easy",
      description: "Track the performance of your VR apps and gain insights into user behavior."
    },
    {
      icon: <FaCheckCircle style={{color : "green", fontSize : "30px"}} />,
      title: "Review code without worry",
      description: "Track the performance of your VR apps and gain insights into user behavior."
    },
    {
      icon: <FaCheckCircle style={{color : "green", fontSize : "30px"}} />,
      title: "AI Assistance to reduce time",
      description: "Track the performance of your VR apps and gain insights into user behavior."
    },
    {
      icon: <FaCheckCircle style={{color : "green", fontSize : "30px"}} />,
      title: "Share work in minutes",
      description: "Track the performance of your VR apps and gain insights into user behavior."
    },
  ]

  return (
    <section id='acceletare' className='acceletare  bg-primary'>
      <div className='acc-title text-center pt-10'>
        <h1 className='xs:text-4xl sm:text-5x md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-white'>Accelerate your <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-900'>coding workflow.</span></h1>
      </div>
      <div className="container flex items-center justify-center mt-10 gap-16 mx-auto xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <section>
          <img className='h-[500px] w-full' alt='CodeImg' src={Code}></img>
        </section>
        <section className='flex flex-col gap-4'> 
          {
            acc.map((acc, index) => (
              <div key={index} className='flex h-[100px] items-start gap-2'> {/* Icon ve text arasında boşluk bırakıyoruz */}
                <div className='icon w-10 mt-2'>
                  {acc.icon}
                </div>
                <div>
                  <h4 className='font-semibold text-white'>{acc.title}</h4>
                  <p className='text-gray-400 text-sm pt-2'>{acc.description}</p>
                </div>
              </div>
            ))
          }
        </section>
      </div>
    </section>
  )
}

import React from 'react';
import { SiProbot } from "react-icons/si";
import { FaSolarPanel } from "react-icons/fa6";
import { BiSolidBank, BiSolidAlarm, BiSolidBarChartAlt2 } from "react-icons/bi";

export default function Feature() {
  const features = [
    {
      icon: <SiProbot/>,
      text: "Drag-and-Drop Interface",
      description: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      icon: <FaSolarPanel />,
      text: "Multi-Platform Compatibility",
      description: "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
      icon: <BiSolidBank />,
      text: "Built-in Templates",
      description: "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      icon: <BiSolidAlarm />,
      text: "Real-Time Preview",
      description: "Preview your applications in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
      icon: <BiSolidBarChartAlt2 />,
      text: "Collaboration Tools",
      description: "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
      icon: <SiProbot />,
      text: "Analytics Dashboard",
      description: "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
  ];

  return (
    <section id='feature' className='feature bg-primary h-[700px]  '>
      <div className='feature-title text-center'>
        <h6 className='text-orange-500 pt-14 font-semibold text-sm'>FEATURE</h6>
        <h2 className='text-5xl pt-10 text-white'>
          Easily build <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-900'>your code</span>
        </h2>
      </div>
      <div className="container mx-auto">
        <div className='flex flex-wrap  pt-10'>
          {features.map((feature, index) => (
            <div key={index} className='w-full mt-20 sm:w-1/2 md:w-1/3'>
              <div className='flex items-center justify-center'>
                <div className='flex mx-6 h-10  w-10 bg-neutral-900 text-orange-600 justify-center items-center rounded-full'>
                  {feature.icon}
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg text-white'>{feature.text}</h4>
                  <p className='text-sm leading-7 pt-3 text-gray-400'>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

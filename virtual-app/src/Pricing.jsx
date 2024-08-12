import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const pricing = [
    {
      title: "Free",
      price: "$0",
      month: "/ Month",
      icon: <FaCheckCircle />,
      text: [
        "Private board sharing",
        "5 Gb Storage",
        "Web Analytics",
        "Private Mode",
      ],
    },
    {
      title: "Pro",
      span: "(Most Popular)",
      price: "$49",
      month: "/ Month",
      icon: <FaCheckCircle />,
      text: [
        "Private board sharing",
        "10 Gb Storage",
        "Web Analytics (Advanced)",
        "Private Mode",
      ],
    },
    {
      title: "Enterprise",
      price: "$200",
      month: "/ Month",
      icon: <FaCheckCircle />,
      text: [
        "Private board sharing",
        "Unlimited Storage",
        "High Performance Network",
        "Private Mode",
      ],
    },
  ];

  return (
    <section id='pricing' className='pricing h-[auto] pb-[40px] bg-primary'>
      <h2 className='text-center text-white text-6xl pt-16'>Pricing</h2>
      <div className="container flex mx-auto justify-center flex-wrap   gap-16  pt-24">
        {pricing.map((price, index) => (
          <div key={index} className="pricing-card flex  items-start rounded-md  flex-col border w-[333px] h-[433px] border-gray-600 p-6">
            <h4 className='text-center text-4xl text-white '>{price.title}</h4>
            <div className='flex items-center pt-5 justify-center'>
              <h2 className='text-white pr-2 text-3xl'>{price.price}</h2>
              <p className='text-gray-500'>{price.month}</p>
            </div>
            <div className='flex flex-col items-start  '>
              {price.text.map((feature, i) => (
                <div className='flex  pt-8 items-center' key={i}>
                  <span className='mr-2 text-green-600 text-2xl'>{price.icon}</span>
                  <p className='text-white'>{feature}</p>
                </div>
              ))}
            </div>

            <div className='flex items-center w-[100%] justify-center  '><button className='bg-transparent border w-[100%] border-orange-800 text-white  py-2 mt-6 rounded-md '>Subscribe</button></div>

          </div>
        ))}
      </div>
    </section>
  );
}

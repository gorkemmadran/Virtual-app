import React from 'react';
import user1 from "./image/profile-pictures/user1.jpg";
import user2 from "./image/profile-pictures/user2.jpg";
import user3 from "./image/profile-pictures/user3.jpg";
import user4 from "./image/profile-pictures/user4.jpg";
import user5 from "./image/profile-pictures/user5.jpg";
import user6 from "./image/profile-pictures/user6.jpg";

export default function About() {
    const personCard = [
        {
            text: "I am extremely satisfied with the services provided. The team was responsive, professional and delivered results beyond my expectations.",
            image: user1,
            alt: "John Doe",
            name: "John Doe",
            job: "Stellar Solutions",
        },
        {
            text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
            image: user2,
            alt: "Jane Smith",
            name: "Jane Smith",
            job: "Blue Horizon Technologies",
        },
        {
            text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
            image: user3,
            alt: "David Johnson",
            name: "David Johnson",
            job: "Quantum Innovations",
        },
        {
            text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
            image: user4,
            alt: "Ranee Brown",
            name: "Ranee Brown",
            job: "Fusion Dynamics",
        },
        {
            text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
            image: user5,
            alt: "Michael Wilson",
            name: "Michael Wilson",
            job: "Visionary Creations",
        },
        {
            text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
            image: user6,
            alt: "Emily Davis",
            name: "Emily Davis",
            job: "Synergy Systems",
        },
    ];

    return (
        <section className='about bg-primary pt-10 h-auto pb-20'>
            <h2 className='text-center text-6xl text-white'>What People are Saying</h2>
            <div className="container pt-10 mx-auto flex flex-wrap justify-center gap-5 mt-10">
                {personCard.map((person, index) => (
                    <div key={index}  className="card  flex flex-col justify-between bg-zinc-800 text-white p-5 rounded-md shadow-lg w-80">
                        <div className='card-text mb-4'>
                            <p className='text-gray-400 text-sm'>{person.text}</p>
                        </div>
                        <div className='card-footer pt-4 flex items-center'>
                            <img className='w-12 h-12 rounded-full mr-4' src={person.image} alt={person.alt} />
                            <div>
                                <p className='font-bold'>{person.name}</p>
                                <p className='text-sm text-gray-400'>{person.job}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

import React from 'react';

export default function Footer() {

    const res = [
        {
            title: "Resources",
            links: [
                { text: "Getting Started", href: "#" },
                { text: "Documentation", href: "#" },
                { text: "Tutorials", href: "#" },
                { text: "API Reference", href: "#" },
                { text: "Community Forums", href: "#" }
            ]
        }
    ];

    const platform = [
        { title: "Platform", links: [  // title ekledim
            { text: "Features", href: "#" },
            { text: "Supported Devices", href: "#" },
            { text: "System Requirements", href: "#" },
            { text: "Downloads", href: "#" },
            { text: "Release Notes", href: "#" }
        ]}
    ];

    const community = [
        { title: "Community", links: [  // title ekledim
            { text: "Events", href: "#" },
            { text: "Meetups", href: "#" },
            { text: "Conferences", href: "#" },
            { text: "Hackathons", href: "#" },
            { text: "Jobs", href: "#" }
        ]}
    ];

    return (
        <footer className='bg-primary pb-5'>
            <div className="container border-t-2 pt-4 border-gray-700  mx-auto flex   justify-evenly ">
                {
                    res.map((section, index) => (
                        <div key={index}>
                            <h6 className='text-white text-2xl xs:text-xl xs:pb-3'>{section.title}</h6>
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className='text-gray-400 text-sm'>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
                {
                    platform.map((section, index) => (
                        <div key={index}>
                            <h6 className='text-white text-2xl xs:text-xl xs:pb-3'>{section.title}</h6>
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className='text-gray-400 text-sm'>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
                {
                    community.map((section, index) => (
                        <div key={index}>
                            <h6 className='text-white text-2xl xs:text-xl xs:pb-3'>{section.title}</h6>
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.href} className='text-gray-400 text-sm'>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </footer>
    );
}

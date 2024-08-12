import React, { useState } from 'react'
import NavLogo from "./image/logo.png"

export default function Navbar() {
    const [menuClicked, setMenuClicked] = useState(false);

    const dropDownClick = () => {
        setMenuClicked(!menuClicked);
    };

    return (
        <>
            <nav className='bg-primary border-b-[1px] border-slate-700 z-50 h-[66px] fixed w-full'>
                <div className='container mx-auto flex items-center justify-between xs:justify-between sm:justify-around md:justify-around'>
                    <section className='flex items-center justify-center'>
                        <img className='w-16' alt='NavbarLogo' src={NavLogo} />
                        <h4 className='text-slate-100 text-xl'>VirtualR</h4>
                    </section>

                    <section className='xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
                        <ul className='flex flex-row'>
                            <li className='px-5 text-sm text-slate-100'><a>Features</a></li>
                            <li className='px-5 text-sm text-slate-100'><a>Workflow</a></li>
                            <li className='px-5 text-sm text-slate-100'><a>Pricing</a></li>
                            <li className='px-5 text-sm text-slate-100'><a>Testimonials</a></li>
                        </ul>
                    </section>

                    <section className='xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
                        <button className='bg-transparent border mr-3 border-slate-100 text-slate-100 text-sm rounded-md px-4 py-2'>Sign In</button>
                        <button className='text-slate-100 px-3 py-2 rounded-md text-sm bg-gradient-to-l from-orange-400 to-orange-800'>Create an account</button>
                    </section>

                    <div onClick={dropDownClick} className='dropdown cursor-pointer xs:block sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
                        <div className='bg-orange-500 w-7 mt-2 h-[2px]'></div>
                        <div className='bg-orange-600 w-6 mt-2 h-[2px]'></div>
                        <div className='bg-orange-700 w-5 mt-2 h-[2px]'></div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {menuClicked && (
                <div className='fixed inset-0 bg-primary bg-opacity-95 z-40 flex flex-col h-[600px] justify-center items-center text-center'>
                    <ul className='text-white text-lg space-y-8'>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Workflow</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                    <div className='mt-10'>
                        <button className='bg-transparent border border-slate-100 text-slate-100 text-lg rounded-md px-8 py-3 mr-4'>Sign In</button>
                        <button className='text-slate-100 px-8 py-3 rounded-md text-lg bg-gradient-to-l from-orange-400 to-orange-800'>Create an account</button>
                    </div>
                </div>
            )}
        </>
    );
}

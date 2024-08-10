import React from 'react'
import NavLogo from "./image/logo.png"

export default function Navbar() {
  return (
<>
<nav className='bg-primary border-b-slate-500 z-50 fixed w-full '>
    <div className='container mx-auto flex items-center justify-between'>
        <section className='flex items-center justify-center'>
            <img className='w-16' alt='NavbarLogo' src={NavLogo}></img>
            <h4 className='text-slate-100 text-xl'>VirtualR</h4>
        </section>

        <section >
            <ul className='flex flex-row'>
                <li className='px-5 text-sm text-slate-100'> <a>Features</a> </li>
                <li className='px-5 text-sm text-slate-100'> <a>Workflow</a> </li>
                <li className='px-5 text-sm text-slate-100'> <a>Pricing</a> </li>
                <li className='px-5 text-sm text-slate-100'> <a>Testimonials</a></li>

            </ul>
        </section>

        <section>
            <button className='bg-transparent border mr-3 border-slate-100 text-slate-100 text-sm rounded-md px-4 py-2'>Sign In </button>
            <button className='text-slate-100 px-4 py-2 rounded-md text-sm bg-gradient-to-l  from-orange-400  to-orange-800 '>Create an account</button>

        </section>
    </div>
 </nav>
</>
  )
}

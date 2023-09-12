import React from 'react'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className='bg-gray-500 h-[12vh] text-white flex'>
        <div className='flex justify-between items-center w-full'>
            <h1 className='text-xl'>Practice</h1>
            <ul className='flex gap-5 font-semibold'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
      
    </nav>
  )
}

export default Navbar

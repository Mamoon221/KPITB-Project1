import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between bg-[#111827] p-4  font-serif'>
      <ul>
        <li className='text-white text-2xl flex gap-8 '>
          <a href="" className='hover:text-purple-700 transition'>Explore</a>
          <a href="" className='hover:text-purple-700 transition'>Signup</a>
          <a href="" className='hover:text-purple-700 transition'>Login</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar

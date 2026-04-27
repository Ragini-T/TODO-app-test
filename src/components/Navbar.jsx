import React from 'react'

const Navbar = () => {
  return (
//  flex used and justify between-horizontal spacing b/w items and bg-backgroundcolor and text white
    <nav className='flex justify-between bg-slate-700 text-white py-2'>
      <div className='logo'>
        {/* span stays in same line and adds what we want */}
        <span className='font-bold text-2xl mx-8'>TODO</span>
      </div>
      <ul className="flex gap-8 text-xl mx-9 ">
         <li className='cursor-pointer hover:font-bold transition-all duration-  '>Home</li>
         <li className='cursor-pointer hover:font-bold transition-all duration-  ' >Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar

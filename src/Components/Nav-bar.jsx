import React from 'react'

const NavBar = ({color, handleColorChange}) => {
  return (
     <header className={` ${color ? "bg-gray-800" : " bg-white"} px-3 py-3 md:py-3 shadow-md`}>
            <div className="container mx-auto flex gap-2 md:items-center justify-between">
            <h1 className={` ${color ? "text-white" : "text-black"} text-1xl md:text-3xl font-bold`}>Where in the world?</h1>
            {/*  */}
            <button className='flex gap-2 items-center justify-between' onClick={handleColorChange}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`${color ? "white" : "black"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
                <p className={` ${color ? "text-white" : "text-black"} font-medium`}>Dark Mode</p>
            </button>
            </div>
        </header>
  )
}

export default NavBar

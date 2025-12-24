import React from 'react'

const SearchInput = ({color, search, handleSearch, region, handleRegionChange}) => {
  return (
     <div className="container mx-auto my-12 md:flex items-center justify-between">
            <div className={` ${color ? "bg-gray-800" : "bg-white"} flex gap-3 items-center justify-center mx-3 mb-3 md:px-6 shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            <input type="text" value={search} onChange={(e) => handleSearch(e)} placeholder='Search for a country...'className={` ${color ? "bg-gray-800 text-white" : "bg-white"} p-2 w-[300px] outline-none`}/>
            </div>
            {/*  */}
            <div className={` ${color ? "bg-gray-800" : "bg-white"} mx-3 py-2 md:py-2 shadow-md`}>
            <select name="region" id="region" className={` ${color ? "bg-gray-800 text-white" : "bg-white"} outline-none`} value={region} onChange={handleRegionChange}>
                <option value="">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>
        </div>
  )
}

export default SearchInput

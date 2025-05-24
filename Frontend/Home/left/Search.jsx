import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function Search() {
  return (
    <div className=' h-[10vh]'>
    <div className='px-6 py-4'>
    <form action=" ">
    <div className=' flex space-x-3  px-6  '>
  
    <label className=" border-[1px] rounded-lg flex items-center gap-2 w-[80%] p-3  bg-slate-700">
  <input type="text" className="grow outline-none" placeholder="Search" />
  
</label>
<button><IoSearchSharp className=' text-5xl p-2 hover:bg-gray-300 rounded-full duration-300' /></button>

    </div>
    </form>
      </div>
      </div>
  )
}

export default Search

import React from 'react'
import { MdSend } from "react-icons/md";
function Typemsg() {
  return (
    <>
      <div className=' flex space-x-3 h-[8vh] text-center bg-gray-800'>
      <div className='w-[70%] mx-4'>
      <input type="text" placeholder="Type here" className="  border  input-neutral input border-gray-600 grow outline-none w-full   py-4 px-3 mt-1 rounded-xl" />
      </div>
      
      <button className=' text-3xl pb-5'><MdSend /></button>
    </div>
      </>
    
  )
}

export default Typemsg

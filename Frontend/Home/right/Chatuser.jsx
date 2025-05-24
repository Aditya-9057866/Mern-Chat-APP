import React from 'react'

function Chatuser() {
  return (
    <>
      <div className=' pt-5 pl-5 pb-3 flex space-x-4 bg-gray-800 hover:bg-gray-600 h-[8vh]duration-300'>
      <div>
      <div className="avatar avatar-online">
  <div className="w-13 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
      </div>
      <div>
        <h1 className=' font-bold text-xl text-white'>
          Daisy
        </h1>
        <span className='text-sm text-white'>Online</span>
      </div>
      </div>
    </>
  )
}

export default Chatuser

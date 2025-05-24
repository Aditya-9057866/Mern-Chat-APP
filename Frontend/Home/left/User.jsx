import React from 'react'

function User() {
  return (
    <>
        <div className=' flex space-x-4 px-8 py-3 items-center hover:bg-slate-600 duration-300 cursor-pointer'>
        <div className="avatar avatar-online">
  <div className="w-13 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
      <div>
        <h1 className='font-bold'>
          Daisy
        </h1>
        <span>
          daisy@gmail.com
        </span>
      </div>
      </div>
    </>
  )
}

export default User

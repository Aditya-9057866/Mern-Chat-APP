import React from 'react'
import Search from './Search'
import Users from './Users'
function Left() {
  return (
    <div className=' border border-black w-[30%] h-screen text-white bg-black'>
      <h1 className=' font-bold text-2xl p-2 items-center px-11'>Chat</h1>
      <Search></Search>
      <hr className=' m-2' />
      <Users></Users>
    </div>
  )
}

export default Left

import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typemsg from './Typemsg'

function Right() {
  return (
    <div className=' border border-black w-[70%] h-screen' >
      <Chatuser></Chatuser>
      <div  className='flex-ankit overflow-y-auto' style={{ maxHeight: "calc(92vh - 9vh)" }}>
      <Messages></Messages>

      </div>
      <Typemsg></Typemsg>
    </div>
  )
}

export default Right

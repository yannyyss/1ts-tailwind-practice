import React from 'react'
import Chitchat from '../../styles/icons/Chitchat/ChitChat'

const Notification = () => {
  return (
    <div className="flex items-center max-w-sm mx-auto p-6 rounded-xl bg-white shadow-lg">
      <picture className='w-12 h-12'>
        <Chitchat/>
      </picture>
      <div className='ml-6 pt-1'>
        <div className="text-black text-xl font-medium">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  )
}

export default Notification
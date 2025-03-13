import React from 'react'
import Search from './Search'
import Users from './Users'

const Left = () => {
  return (
    <div className='w-[30%] bg-black text-white'>
    <h1 className='p-6 font-semibold text-xl'>Chats</h1>
    
    <Search />
    <hr />
    <Users />
    </div>
  )
}

export default Left
import React from 'react'
import User from './User'

const Users = () => {
  return (
    <div style={{maxHeight:"calc(84vh - 10vh )"}} className=' scroll-bar overflow-y-auto'>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  )
}

export default Users
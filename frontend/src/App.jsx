import React from 'react'
import Left from './assets/home/left/Left';
import Right from './assets/home/right/Right';
import Logout from './assets/home/left1/Logout';

const App = () => {
  return (
    <>
      <div className='flex h-screen'>
        <Logout /> 
        <Left />
        <Right />
   
      </div>
    </>
  )
}

export default App;
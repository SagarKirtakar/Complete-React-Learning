import React from 'react'
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className='min-h-screen min-w-screen bg-amber-100'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-4xl font-semibold bg-amber-400 py-2 px-4
          rounded-2xl '>COUNTER</h1>
          <h2 className='my-6 font-semibold text-6xl'>{count}</h2>
        </div>
      </div>
    </>
  )
}

export default App;

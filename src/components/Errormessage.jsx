import React from 'react'

const Errormessage = ({message}) => {
  return (
    <div className='w-full rounded-lg text-white bg-red-500 mx-auto px-4 py-2'>
     <p>{message}</p>
    </div>
  )
}

export default Errormessage
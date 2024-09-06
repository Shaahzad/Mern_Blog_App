import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
const Cropeasy = ({photo}) => {
const [crop, setCrop] = useState({ x: 0, y: 0 })
  return (
    <div className='fixed z-[1000] inset-0 bg-black/50 flex justify-center p-5 overflow-auto'>
   <div className='bg-white h-fit w-full sm:max-w-[350px] p-5 rounded-lg'>
  <h2 className='font-bold text-Dark-hard mb-2'>Crop Image</h2>
  <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
   <Cropper image={photo?.url} crop={crop} />
  </div>
   </div>
    </div>
  )
}

export default Cropeasy
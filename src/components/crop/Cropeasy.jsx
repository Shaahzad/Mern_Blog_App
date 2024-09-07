import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../store/reducers/userReducer'
import {useQueryClient} from "@tanstack/react-query"
import { toast } from 'react-hot-toast'
import { uploadProfilePicture } from '../../services/index/User'
const Cropeasy = ({photo, setopencrop}) => {
const userstate = useSelector(state => state.user)
const queryClient = useQueryClient()
const dispatch = useDispatch()
const [crop, setCrop] = useState({ x: 0, y: 0 })
const [zoom, setZoom] = useState(1)
const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)



const {mutate, isloading } = useMutation({
    mutationFn: ({token, formData}) => {
      return uploadProfilePicture({
        token: token,
        formData: formData
      })
    },
    onSuccess: (data) => {
      dispatch(userAction.setUserInfo(data))
      setopencrop(false)
      localStorage.setItem('user', JSON.stringify(data))
      queryClient.invalidateQueries(['profile'])
      toast.success('Profile picture updated successfully')
    },
    onError: (error) => {
      toast.error(error.message)
      console.log(error)
    }
  })


const HandleCropImage = async ()=>{
    try {
        const croppedImg = await getCroppedImg(photo?.url, croppedAreaPixels)

        const file = new File([croppedImg.file], `${photo?.file.name}`,{
            type: photo?.file.type
        })


        const formData = new FormData()
        formData.append('profilePicture', file)
        
        mutate({token: userstate.userinfo.token, formData: formData})
    } catch (error) {
        toast.error(error.message)
    }
}
const HandleCropcomplete = (cropedArea, cropedAreaPixels)=>{
setCroppedAreaPixels(cropedAreaPixels)
}
  return (
    <div className='fixed z-[1000] inset-0 bg-black/50 flex justify-center p-5 overflow-auto'>
   <div className='bg-white h-fit w-full sm:max-w-[350px] p-5 rounded-lg'>
  <h2 className='font-bold text-Dark-hard mb-2'>Crop Image</h2>
  <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
   <Cropper image={photo?.url} crop={crop} zoom={zoom} aspect={1} onCropChange={setCrop} onZoomChange={setZoom}
   onCropComplete={HandleCropcomplete}
   />
  </div>
  <div>
    <label htmlFor="zoomRage" className='block mt-2 mb-0.5 text-sm font-medium text-gray-900'>Zoom: {`${Math.round(zoom * 100)} % `}</label>
    <input type="range" min={1} max={3} step={0.1} value={zoom} onChange={e => setZoom(e.target.value)} id="zoomRage"
    className='w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm mb-6'
    />
  </div>
  <div className='flex justify-between gap-2 flex-wrap'>
 <button disabled={isloading} onClick={()=> setopencrop(false)} className='px-5 py-2.5 rounded-lg text-red-500 border border-red-500 text-sm disabled:opacity-70'>Cancel</button>
 <button disabled={isloading} onClick={HandleCropImage} className='px-5 py-2.5 text-white rounded-lg border bg-blue-500 text-sm disabled:opacity-70'>Crop & Upload</button>
  </div>
   </div>
    </div>
  )
}

export default Cropeasy
import React from 'react'
import { stables } from '../constants'
import { FaCamera } from "react-icons/fa";
import Cropeasy from './crop/Cropeasy';
import { createPortal } from 'react-dom';
const Profilepicture = ({avatar}) => {
    const [opencrop, setopencrop] = useState(false)
    const [photo, setphoto] = useState(null)



    const HandleFileChange = (e)=>{
     const file = e.target.files[0]
     setphoto({url: URL.createObjectURL(file), file: file})
     setopencrop(true)
    }


  return (
    <>
    {opencrop && createPortal(<Cropeasy photo={photo} setopencrop={setopencrop}/>, document.getElementById('portal'))}
        <div className='w-full flex items-center gap-x-4'>
      <div className='relative w-20 h-20 outline outline-offset-2 outline-1 overflow-hidden rounded-full
      outline-primary
      '>
     <label htmlFor="profile" className='cursor-pointer absolute inset-0 rounded-full bg-transparent'>
        {avatar ? (
            <img src={stables.upload_Folder_Base_Url + avatar} alt="Profile" className='w-full h-full object-cover'/>
        ):(
            <div className='w-full h-full flex justify-center items-center bg-blue-50/50'>
                <FaCamera className='w-7 h-auto text-primary'/>
            </div>
        )}
     </label>
     <input type="file" className='sr-only' id='profile' onChange={HandleFileChange}/>
      </div>
      <button type='button' className='border border-red-500 px-3 py-1 rounded-lg text-red-500'>
      Delete
      </button>
    </div>
    </>

  )
}

export default Profilepicture
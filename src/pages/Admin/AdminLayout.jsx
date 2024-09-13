import React from 'react'
import Header from './Component/Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserProfile } from '../../services/index/User'
import toast from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'

const AdminLayout = () => {
  const navigate = useNavigate()
  const userstate = useSelector(state => state.user)

  const {data: profile, isLoading: profileisloading, isError: profileiserror} = useQuery({
    queryFn: () => {
        return getUserProfile({token: userstate.userinfo.token})
    },
    queryKey: ['profile'],
    onSuccess: (data) => {
      if(!data?.admin){
        navigate('/')
        toast.error('You are not an admin')
      }
    },
    onError: (error) => {
      toast.error(error.message)
      console.log(error)
      navigate('/')
    }
})

if(profileisloading){
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h3 className='text-2xl text-slate-700'>Loading...</h3>
    </div>
  )
}

  return (
    <div className='flex flex-col h-screen lg:flex-row'>
    <Header/>
    <main className='bg-[#F9F9F9] flex-1 p-4 lg:p-6'>
   <Outlet/>
    </main>
    </div>
  )
}

export default AdminLayout
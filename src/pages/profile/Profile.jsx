import React, { useMemo } from 'react'
import Mainlayout from '../../components/Mainlayout'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useQuery} from "@tanstack/react-query"
import {getUserProfile, updateProfile} from "../../services/index/User"
import Profilepicture from '../../components/Profilepicture'
import {useMutation, useQueryClient} from "@tanstack/react-query"
import { userAction } from '../../store/reducers/userReducer'
import { toast } from 'react-hot-toast'
const ProfilePage = () => {
const dispatch = useDispatch()
const userstate = useSelector(state => state.user)
const navigate = useNavigate()
const queryClient = useQueryClient()


const {data: profile, isLoading: profileisloading, isError: profileiserror} = useQuery({
    queryFn: () => {
        return getUserProfile({token: userstate.userinfo.token})
    },
    queryKey: ['profile'],
})

const {mutate, isloading:updateprofileisloading } = useMutation({
    mutationFn: ({name, email, password}) => {
      return updateProfile({
        token: userstate.userinfo.token,
        userData: {name, email, password}
      })
    },
    onSuccess: (data) => {
      dispatch(userAction.setUserInfo(data))
      localStorage.setItem('user', JSON.stringify(data))
      queryClient.invalidateQueries(['profile'])
      toast.success('Profile updated successfully')
    },
    onError: (error) => {
      toast.error(error.message)
      console.log(error)
    }
  })


useEffect(() => {
 if(!userstate.userinfo){
navigate('/')
 }
},[navigate, userstate.userinfo])

const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    defaultValues: {
        name: '',
        email: '',
        password: ''
    },
    values: useMemo(()=>{
     return {
      name: profileisloading ? "" : profile.name,
      email: profileisloading ? "" : profile.email
  }
    },[profileisloading, profile?.name, profile?.email]),
    mode: 'onChange'
})
const submitHandler = (data) => {
    const {name, email, password} = data
    mutate({name, email, password})
}


console.log(profile)


  return (
    <Mainlayout>
     <section className='container mx-auto px-5 py-10'>
       <div className='w-full max-w-sm mx-auto'>
       <Profilepicture avatar={profile?.avatar}/>
     <form  onSubmit={handleSubmit(submitHandler)}>
     <div className='flex flex-col mb-6 w-full'>
       <label htmlFor="name" className='text-[#959EAD] font-semibold block'>Name</label>
       <input type="text" id='name' {...register('name',{
        minLength: {
            value: 1,
            message: 'Min length should be 1'
        },
        required: {
            value: true,
            message: 'This field is required'
        }
       })} placeholder='Enter your name'  className={`placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? 'border-red-500' : 'border-[#959EAD]'}`}/>
       {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
     </div>
     <div className='flex flex-col mb-6 w-full'>
       <label htmlFor="email" className='text-[#959EAD] font-semibold block'>Email</label>
       <input type="email" id='email'
       {...register('email',{
       pattern: {
         value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         message: 'Invalid email address'
       },
        required: {
            value: true,
            message: 'This field is required'
        }
       })}
         placeholder='Enter your email'  className={`placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? 'border-red-500' :  "border-[#959EAD]"}`}/>
      {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
     </div>
     <div className='flex flex-col mb-6 w-full'>
       <label htmlFor="password" className='text-[#959EAD] font-semibold block'>New Password (optional)</label>
       <input type="password" id='password' {...register('password')} placeholder='Enter your new password'  className={`placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? 'border-red-500' :  "border-[#959EAD]"}`}/>
        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
     </div>
     <button disabled={!isValid || profileisloading || updateprofileisloading} type='submit' className='w-full text-center bg-primary
      text-white font-semibold rounded-lg py-3 px-5 mb-6 disabled:opacity-70 disabled:cursor-not-allowed'
     >Update</button>
     
     </form>
       </div>
     </section>
    </Mainlayout>
  )
}

export default ProfilePage
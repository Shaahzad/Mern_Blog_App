import React from 'react'
import Mainlayout from '../../components/Mainlayout'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { signup } from '../../services/index/User'
import toast from "react-hot-toast"
const Register = () => {

const {mutate, isloading } = useMutation({
  mutationFn: ({name, email, password}) => {
    return signup({name, email, password})
  },
  onSuccess: (data) => {
    console.log(data)
  },
  onError: (error) => {
    toast.error(error.message)
    console.log(error)
  }
})



const {register, handleSubmit, formState: {errors, isValid}, watch} = useForm({
    defaultValues: {
        name: '',
        email: '',
        password: '',
        Cpassword: ''
    },
    mode: 'onChange'
})
const submitHandler = (data) => {
    const {name, email, password} = data
    mutate({name, email, password})
}

const password = watch('password')

  return (
    <Mainlayout>
     <section className='container mx-auto px-5 py-10'>
       <div className='w-full max-w-sm mx-auto'>
     <h1 className='text-3xl font-bold text-center text-Dark-hard mb-8'>Sign Up</h1>
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
       <label htmlFor="password" className='text-[#959EAD] font-semibold block'>Password</label>
       <input type="password" id='password' {...register('password',{
        minLength: {
            value: 6,
            message: 'Min length should be 6'
        },
        required: {
            value: true,
            message: 'This field is required'
        }
       })} placeholder='Enter your password'  className={`placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? 'border-red-500' :  "border-[#959EAD]"}`}/>
        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
     </div>
     <div className='flex flex-col mb-6 w-full'>
       <label htmlFor="Cpassword" className='text-[#959EAD] font-semibold block'>Confirm Password</label>
       <input type="password" id='Cpassword' {...register('Cpassword',{
        required: {
            value: true,
            message: 'This field is required'
        },
        validate: (value)=>{
          if(value !== password) {
            return 'Password does not match'
        }
      }
       })} placeholder='Enter your Confirm Password'  className={`placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.Cpassword ? 'border-red-500' :  "border-[#959EAD]"}`}/>
      {errors.Cpassword && <p className='text-red-500 text-sm mt-1'>{errors.Cpassword.message}</p>}
     </div>
     <Link to="/forget-password" className='text-sm text-primary font-semibold'>
     Forget Password ?
     </Link>
     <button disabled={!isValid || isloading} type='submit' className='w-full text-center bg-primary
      text-white font-semibold rounded-lg py-3 px-5 my-6 disabled:opacity-70 disabled:cursor-not-allowed'
     >Register</button>
     <p className='text-sm font-semibold text-[#959EAD]'>Don't Have An Account ? {" "}
        <Link to="/login" className='text-primary'>login now</Link>
     </p>
     </form>
       </div>
     </section>
    </Mainlayout>
  )
}

export default Register
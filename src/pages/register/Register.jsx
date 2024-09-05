import React from 'react'
import Mainlayout from '../../components/Mainlayout'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {
const {register, handleSubmit, formState: {errors, isValid}, watch} = useForm({
    defaultValues: {
        name: '',
        email: '',
        password: '',
        Cpassword: ''
    },
    mode: 'onChange'
})
const submitHandler = (e) => {
    
}


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
       <input type="email" id='email' {...register('email')} placeholder='Enter your email'  className='placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#959EAD] focus:border-primary'/>
     </div>
     <div className='flex flex-col mb-6 w-full'>
       <label htmlFor="password" className='text-[#959EAD] font-semibold block'>Password</label>
       <input type="password" id='password' {...register('password')} placeholder='Enter your password'  className='placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#959EAD] focus:border-primary'/>
     </div><div className='flex flex-col mb-6 w-full'>
       <label htmlFor="Cpassword" className='text-[#959EAD] font-semibold block'>Confirm Password</label>
       <input type="password" id='Cpassword' {...register('Cpassword')} placeholder='Enter your Confirm Password'  className='placeholder:text-[#959EAD] text-Dark-hard
       mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#959EAD] focus:border-primary'/>
     </div>
     <Link to="/forget-password" className='text-sm text-primary font-semibold'>
     Forget Password ?
     </Link>
     <button type='submit' className='w-full text-center bg-primary text-white font-semibold rounded-lg py-3 px-5 my-8'
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
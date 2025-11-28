import React from 'react'

const Login = () => {
  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-white'>
      <form className='bg-white p-8 rounded-xl shadow-lg w-full max-w-sm'>
        <div className ='mb-6'>
          <p className='text-2xl font-semibold text-center text-gray-800'>Welcome Back!</p>
        </div>

        <div className='flex flex-col gap-4'>
          <input type="email" name='email' placeholder='Enter Your Email' className='p-3 border rounder-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <input type="password" name='password' placeholder='Enter Your Password' className='p-3 border rounder-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <p className=' text-sm text-gray-600 text-center'>
            If you have to create account? <a href="/" className="text-blue-600 font-medium hover:underline ml-1'" >SignUp</a>
          </p>
        </div>
        <button className='mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-900'>Login</button>
      </form>
    </div>
    </>
    
  )
}

export default Login

import React, { useState } from 'react'

const Login = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleInput = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    if('email' == name){
      setemail(value);
    }

    if('password'== name){
      setpassword(value);
    }



  }
  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-white'>
      <form className='bg-white p-8 rounded-xl shadow-lg w-full max-w-sm'>
        <div className ='mb-6'>
          <p className='text-2xl font-semibold text-center text-gray-800'>Welcome Back!</p>
        </div>

        <div className='flex flex-col gap-4'>
          <input type="email" name='email' placeholder='Enter Your Email' onChange={handleInput} className='p-3 border rounder-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <input type="password" name='password' placeholder='Enter Your Password' onChange={handleInput} className='p-3 border rounder-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
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

// first we will get data.. login pr jo kuch hum likhein osko pehle get karein 
// pehley hum email password ko get karein gy humne kia likha hai iskliye hum aik function likhein gy 
// const handleInput function will made two variables 
// const value is se jo bhi value hogi osko get karlein gy 
// const name  
//we made this logic here because 
// we have 2 field here email and password we will make usestate for this

// IMPORTANT: we write if else statement if('email' == name) agr ye jo email hai 
// so ye email usesate mai kuch name ayega humare pass  ye current state hai humare pass tu isky andr hum email ko store karein gy 
// so is current state ky andr jo bhi email aye gaa wu name ky equal rehta hai tu hum setemail ky andr 
// So hum yahn pr condition check kar rahe hai basically ky 

// so if('email' == name){
//                   setemail(value)

//} 

// hum is mai ye condition check kar rahe hai jis input field pr hum likh rahe hai wu email hai ya password... Agar wu email (name mamoon@gamil)
// humarey pass is name ky equal hai  tu os email ky andar hum value ko pass karein gy 

// Similarly same condition for password also 
// humne ye condition isliye lagai haihum properly email ko email ky andr set kare password ko password ky andr 
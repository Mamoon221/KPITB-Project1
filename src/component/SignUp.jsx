import React from 'react'

const SignUp = () => {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
    
    <div className="mb-6">
      <p className="text-2xl font-semibold text-center text-gray-800">Signup</p>
    </div>

    <div className="flex flex-col gap-4">

      <input 
    
        type="text" 
        name="name" 
        placeholder="Enter Your Name"
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input 
        type="text" 
        name="email" 
        placeholder="Enter Your Email"
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input 
        type="password" 
        name="password" 
        placeholder="Enter Your Password"
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="text-sm text-gray-600 text-center">
        Already have an account? 
        <a href="/login" className="text-blue-600 font-medium hover:underline ml-1">Login</a>
      </p>

    </div>

    <button 
      className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Sign Up
    </button>
  </form>
</div>


      </>
  )
}

export default SignUp

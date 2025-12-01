import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {


  const navigate = useNavigate()
  const logout = () =>{
  
    localStorage.removeItem('user')
    navigate('/')

  }
  return (
    <div className='bg-white min-h-screen'>
    <div className='flex items-center justify-around'>
      <h1 className='text-3xl mt-2 '>Welcome to home</h1>
      <button onClick={logout} className='  mt-2 bg-[#033452] text-3xl text-white hover:to-blue-700 transition shadow-lg shadow-blue-500/50 ... rounded-lg border-none w-[130px] h[40px]'>Logout</button>
    </div>
      </div>
  )
}

export default Dashboard

// If user want to logout 
// we will apply onclick event on button
// we will apply function to remove user and logout and will redirect to signup he will to signup again because his data will be deleted
//  from local storage he will not login he as to signup first 
// we will use method localstorage.removeitem() and will pass key name in it 

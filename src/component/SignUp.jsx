import React, { use, useState } from 'react'
import { data } from 'react-router-dom';

const SignUp = () => {

  const userDetail ={
    name: "",
    email: "",
    password:""
  }
  const handleInput = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name)
    const name = event.target.name; 
    const value = event.target.value; 

    setdata({...data,[name]:value})

  }
  const [data, setdata] = useState(userDetail);
  console.log(data)
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
        placeholder="Enter Your Name" onChange={handleInput}
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input 
        type="email" 
        name="email" 
        placeholder="Enter Your Email" onChange={handleInput}
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input 
        type="password" 
        name="password" 
        placeholder="Enter Your Password" onChange={handleInput}
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

// We write onchange in inputs and pass handleinput function when will change this function will run

// we create function and passed event in that iska matlb jo bhi hum is inputs ke andr likhein gy tu osko event.target.value ki help se target 
// kar sakein gy 

// step 3
// Ab humein 3 data ki zarorat hai email name aur password ki tu isky liye hum aik object ko banaye gy 

// Step4 
// Now we will make use state .. so what we do we make useState.variable is data and function is setdata and in variable we pass
// userDetail which is object in which we have name emeil password . So it means data current state is this object matlb agr hum 
// data ko access karein tu is object ko access karein gy 
// Ab hum chahty hai ky agr mai name likho Babar ya email babar@ tu is object ky andr update ho jaye 
// Agr name ky andr name likho tu name ajaye, email ky andr email likho tu email ajaye password ky andr password ajaye

// Tu isky liye hum aik event use karein gy event.target.name so ye event humein bataye ga ky apne name type kiya hai ya email 
// agr password ky input pr type karein gy tu password milega 

// AFTER THAT IF WE WRITE TEXT IN CONSOLE IT WILL SHOW NAME AND IF IN PASSWORD INPUT IT WILL SHOW PASSWORD SIMILARLY EMAIL

// SO NOW WILL KNOW BOTH VALUE AND NAME.. VALUE MEANS WHAT WE ARE WRITING NAME PASSWORD OR EMAIL AND NAME KIS PR LIKH RAHE HAI NAME ON NAME

//Now we will store this in variable both value and name  and we can update the setData in which we pass object

// now we will use spread operator which is 3 dots current state ({...data}) means current state is data so we store our
// previous data which is name, email, password which is empty also.. So now we will store new data like email if we write anything email
// it will update lets see  ({...data,[name]:value})
// jb bhi hum kisi input pr kuch likhein gy tu oska name pata chaljaye ga ye name hai, email hai, or password so then we assign value 
// value is key ...... basically is name mai hum wu name pass karein gy jiski value ko pass karna ho agr email hoga tu email ky andr value ko pass 
// karein gy 
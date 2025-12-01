import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [msg, setMsg] = useState('')

  const navigate  = useNavigate();
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
  const handleSubmit = (event) =>{
    event.preventDefault()

    if(email == '' || password == ''){
      alert('Please enter details')
    }
    else{
       let getDetails = JSON.parse(localStorage.getItem('user'));
    console.log(getDetails);
    getDetails.map((curValue)=>{
      console.log(curValue.email)

      let storeEmail = curValue.email;
      let storePassword = curValue.password;
      if(storeEmail == email && storePassword == password){
        alert('Login successfully')
        navigate('/dashboard')
      }
      else{
        return setMsg('Invalid email or password ')
      }
    })

    }



    // let getDetails = JSON.parse(localStorage.getItem('user'));
    // console.log(getDetails);
    // getDetails.map((curValue)=>{
    //   console.log(curValue.email)

    //   let storeEmail = curValue.email;
    //   let storePassword = curValue.password;
    //   if(storeEmail == email && storePassword == password){
    //     alert('Login successfully')
    //   }
    //   else{
    //     return setMsg('Invalid email or password ')
    //   }
    // })

  }






  return (
    <>
      <p className='text-center text-red-600 font-semibold text-xl mt-4'>{msg}</p>

    <div className='min-h-screen flex items-center justify-center bg-[#0c67A0]'>
      

      {/* <p className='text-bold text-2xl flex flex-col items-center justify-center h-screen'>{msg}</p> */}
      <form className='bg-white p-8 rounded-xl shadow-lg w-full max-w-sm' onSubmit={handleSubmit}>
        <div className ='mb-6'>
          <p className='text-2xl font-bold text-center text-[#007bff]'>Welcome Back!</p>
        </div>

        <div className='flex flex-col gap-4'>
          <input type="email" name='email' placeholder='Enter Your Email' onChange={handleInput} className='p-3 border rounder-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <input type="password" name='password' placeholder='Enter Your Password' onChange={handleInput} className='p-3 border rounder-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <p className=' text-sm text-gray-600 text-center'>
            If you have to create account? <a href="/" className="text-blue-600 font-medium hover:underline ml-1'" >SignUp</a>
          </p>
        </div>
        <button className='mt-5 w-full bg-[#033452]  shadow-lg shadow-blue-500/50 ...  text-white py-3 rounded-lg hover:bg-blue-700'>Login</button>
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

// Ab hum chahty hai jb mai is form pr click karo tu hum verify kare User exist karta hai ya ni 
// we will apply event in form onSubmit {handle submit} 
// Create function and write event.preventDefault to prevent from refreshing 
// now we will verify data of user email, password ky wu humare local storge ky andr exist krta hai bhi ya ni 
// for that we will create variable const = getDetails
//    const getDetails = localStorage.getItem('user)::: basically means hum local storage se data ko get karein gy aur 
// humari jo key hai wu user:::: user ko get karein gy oski data ko 
//  Aur isko object ky andr convert karein gy 
// jb bhi data get karo osko JSON mai se object convert karo 
// ab jb mai login pr click karein gy tu data ko get karien gy  jo humne store kiya tha means jin user ny signup kiya hai 
// ab humne just login pr click kiya tu humare pass kuch data aye jis se laga ky jitni bar signup kiya itne user agaye hai
// Ab humne ye dekhna hai ky agr koi data means email humne likhi login mai ye local storage mai exist krta hai agr exist krta hai 
// tu user verify hai. agr verify hai tu redirect kardengy home page pr... agr exist ni krta tu verify nhi karein gy 
// Now in these getDetails we will apply map Method::: Because map creates new array, Map updates on array map iterates on array
// So basically map humein iterate karky data deta hai matlb humre pass 4 data hai tu sbko alag alag karky dey gaa 
// in map we have 3 perameters
// Tu is se data iterate ho kar milegaa  
// means sb user ka data alag alag mila sperate hoga sb data 
// Ab agar hum curValue.email likhein tu humein sb hi ki email dekhein gi seperate
// agr password likhein sb ky password nazar ayein gy seperate 
// now we create two variables store email and store password assign to curValue.email and password
//Ab if condition ko lagaye gy check karein gy ky 
// storeEmail hai wu equal hai jo humare pass email hai storeEmail se murad jo email local storage mai hai AND operator
// similarly store password hai humare pass osko bhi check karein gy equal hai humare store password se jo local storage mai hai 
// agar ye equal hotein hai tu alert show karein gy login successfully 
// If agar email ya password match na ho tu hum aik msg show karein gy jisky liye hum useState banaye gy 
// Agar humre pass password email ghalat likha hai tu ye msg pass karein gy
// setMsg("Invalid Email or Password ")
// Isko hum return kardein gy thaky ye yahn pr execution stop ho jaye 

// One more validation on email and password if user keep empty it will show message 
// so we write if condition and alert msg 


// AB LAST THING HUM CHAHTY HAI JB HUM SUCESSFULLY LOGIN HO TU REDIRECT HO JAYE LOGIN PY
// tu isky liye variable banaye gy const navigate = usenavigate();
// and now we will navigate where we want to do 
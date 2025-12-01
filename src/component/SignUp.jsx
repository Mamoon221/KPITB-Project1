import React, { use, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';

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
  
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if(data.name == '' || data.email == '' || data.password == ''){
      alert("Enter Your Details ")
    }
    else{
       const getData = JSON.parse(localStorage.getItem('user') || '[]');
    let arr = [];
    arr = [...getData]
    arr.push(data)

    // }
    // const getData = JSON.parse(localStorage.getItem('user') || '[]')
    // let arr = [];
    // arr = [...getData]
    // arr.push(data)

    localStorage.setItem('user', JSON.stringify(arr))

    alert("SignUp Successfully");
    navigate("/login")

  }
}


  const [data, setdata] = useState(userDetail);
  // console.log(data)
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-[#0c67A0]">
  <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm" onSubmit={handleSubmit}>
    
    <div className="mb-6">
      <p className="text-2xl font-bold text-center text-[#007bff]">Signup</p>
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
      className="mt-5 w-full bg-[#033452]  shadow-lg shadow-blue-500/50 ... text-white py-3 rounded-lg hover:bg-blue-700 transition"
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

// Now our next target is to store this data of email,name,password  in local storage 

// So on form we will apply onsubmit event and then we will take variable this handleSUbmit
// because The default nature of form is jb bhi hum isky opr click krty hai ye refresh hota hai. So is bydefault nature ko rokhne ke liye 
// event.prevent use krty hai 
// Ab hum handleSubmit pr chaty hai ky local storage mai humara data store ho jaye.. now we will create getData variable 
// getData.locatstorgre.getItems agr local storge ky andr data ko store krna hai tu likhna hoga setItms or agr localStorage se
// data ko lena hai tu getItems 

// localStorage.setItems('user', data) in braces First we will give key name and other is object

// When ever we store data in local storge we will convert to json
// IMPORTANT WHEN WE SET DATA WE SET IT IN JSON BUT WHEN WE NEED TO GET IT OUT WE NEED TO CONVERT TO OBJECT 
// JSON.parse convert JSON into object 

// const getData = JSON.parse(localStorage.getItem('user') || '[]')
// we use OR operator because agr hum get kar rahe hai user ko jo humari key hai agr humare pass key ni hoti to empty array milni chaye 
// let arr = [];
// So now we make array which is empty 
//    arr = [...getData]
// now is array ky andr hum assign karein gy is get data ko is se ye hoga jo humare pass get data hai isko hum store kar rahe hai 
// get data mai humare pass previous data hoga isko hum store karein gy 
//   arr.push(data)
// Now in this array we will push data so array.push  method will add it in last

// getdata is previous data store hoga osky saat jo new data hoga wu bhi store ho jaye ga 

// we do this all because we need data in arry inside object 

// --------------------------------------
// If we to add pop ups and validations  

// want condition to success navigation

// we add statement if any of this is empty show message show alert msg for enter details and also for signup successfully 

// ab hum chahty hai jaisy hi successfully signup ho jaye hum navigate ho jaye login py 
// So in create router we have method use navigate with the help of that we cam navigate from one screen to another screen we can navigate
//  so we decleare usenavigate function() and after delceartion we will now write it after aleart(signup successfully) we will navigate and will
// give path 
// Now we will go to login will create login logic 
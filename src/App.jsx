// import './App.css'
import Navbar from "./component/Navbar"
import SignUp from "./component/SignUp"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './component/Login';
import Dashboard from "./component/Dashboard"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
  

    </>
  )
}

export default App

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login(){
const [email,setEmail]=useState("")
const[password,setPassword]=useState("")
const navigate=useNavigate()

const HandleLogin=()=>{
    if(email==="admin@gmail.com" && password==="admin@123"){
        localStorage.setItem("isLoggedIn",true)
        navigate("/todos")
    }else{
       alert("wrong email or invalid pasword")
    }
}


    return(
        <div>
            <h2>Login page</h2>
            <input type="text" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
            <input type="password" placeholder=" password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br><br></br>
            <button onClick={HandleLogin}>login</button>

        </div>
    )
}
export default Login
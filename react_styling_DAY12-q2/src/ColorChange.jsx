import { useState } from "react"

function ColorChange(){
 const [change,setChange]=useState(true)
 const Change=()=>{
   setChange(!change)
 }

    return(
        <div>
            <div style={{backgroundColor:change?"red":"blue", width: "200px",height: "50px",marginBottom: "10px",color:change?"black":"white",fontStyle:"italic",fontWeight:"bolder"}}>Welcome to our class</div>
            <button onClick={Change}>Change Color</button>
            
        </div>
    )
}
export default ColorChange;
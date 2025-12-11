import React,{useState} from "react"

function Counter(){
    const [Count,setCount]=useState(0)
    const increment=()=>{
        setCount(Count+1)
    }
    return(
           <div>
           <p>Count:{Count}</p>
           <button onClick={increment}>Increment</button>
           </div>
        
    )
}
export default Counter;
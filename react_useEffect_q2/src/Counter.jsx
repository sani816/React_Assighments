import { useEffect,useState } from "react";

function Counter(){
    let[count,setCount]=useState(0)

   function incresed(){
    setCount(count+1)
   }
   useEffect(()=>{
        if(count%3==0){
            alert(`The current number ${count} is divisible by 3`)
        }
    })



    return(
        <div>
            <h2>{count}</h2>
            <button onClick={incresed}>Increase</button>
        </div>
    )
}
export default Counter
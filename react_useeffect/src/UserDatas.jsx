import { useEffect,useState } from "react";

function UserData(){
    let [user,setUser]=useState(null)
    let[loading,setLoading]=useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((Response)=>Response.json())
        .then((data)=>{
            setUser(data)
            setLoading(false)
        })
    },[])

    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )

}
export default UserData;
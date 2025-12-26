import { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";

function App(){
    const[count,setCount]=useState(0)
const[product]=useState([
    {id:1,name:"laptop",price:3000},
    {id:2,name:"mouse",price:1000},
    {id:3,name:"remote",price:500}
])
const total=useMemo(()=>{
    console.log("total price")
    return product.reduce((sum,item)=>sum+item.price,0)
},[product])

const handle=useCallback(()=>{
    console.log("selected product",product.name)
},[])



    return(
        <div>
        <h1>Total price:{total}</h1>
        <button onClick={()=>setCount(count=>count+1)}>Increment{count}</button>

        <ProductList product={product} onselect={handle}></ProductList>
        </div>
    )
}
export default App;
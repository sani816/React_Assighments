import React from "react"
function ProductList({product,onselect}){
    console.log("productlist render")
    return(
        <div>
       <h2>products</h2>
       {product.map((p)=>(
        <div key={p.id} onClick={()=>onselect(p)}>{p.name}-{p.price}</div>
       ))}
        </div>
    )
}
export default ProductList
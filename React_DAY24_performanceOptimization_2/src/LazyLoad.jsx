import React from "react"
function LazyLoad(){
console.log("lazy load render")

const item=[]
for(let i=0;i<100000;i++){
    item.push(<div key={i}>item {i}</div>)
}

return(
    <div>
        <h2>heavy component loaded....</h2>
        {item}
    </div>
)
}
export default React.memo(LazyLoad);
import { lazy, Suspense, useState } from "react";
  const LazyLoad=lazy(()=>import("./LazyLoad"))
function App(){
  
const[count,setCount]=useState(0)

return(
    <div>
        <h1>Lazy loading..</h1>
        <h2>Counter {count}</h2>
        <button onClick={()=>setCount(count+1)}>increse</button>

        <Suspense fallback={<p>loading heavy component...</p>}>
        <LazyLoad/>
        </Suspense>
    </div>
)



}
export default App
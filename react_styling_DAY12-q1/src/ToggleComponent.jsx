import { useState } from "react";
import A from "./ComponentA.jsx";
import B from "./ComponentB.jsx";

function ToggleComponent() {
  const [status, setStatus] = useState(false);
  const toggle=()=>{
    setStatus(!status)
  }
  return (
    <div>
        {status ? <A /> : <B/>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;

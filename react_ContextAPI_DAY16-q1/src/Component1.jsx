import Component2 from "./Component2"

function Component1(){
    let a="apple"
    let b="ball"
    let c="cat"
    let d="dog"
    let e="egg"
    let f="fox"
 return(
    <div>
        <h2>component 1</h2>
       <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
 )
}
export default Component1;
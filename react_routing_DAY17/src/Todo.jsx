import { useEffect,useState } from "react";
function Todo(){
 const[todo,setTodo]=useState([])
 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((Response)=>Response.json())
    .then((data)=>setTodo(data.slice(0,10)))

 },[])

return (
<div className="todo-grid">
{todo.map((todo) => (
<div key={todo.id} className="todo-card">
<h4>Title:{todo.title}</h4>
<p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
</div>
))}
</div>
);
}
export default Todo;
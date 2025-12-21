import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>response.json())
    .then((data)=>{
        setTodos(data.slice(0,10))
    })
  },[])

  return (
    <div>
      <h1>Todos List</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todos/${todo.id}`}>
            Title:{todo.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Todos;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
   .then((response)=>response.json())
   .then((data)=>{
    setTodo(data)
   })
   
  }, [todoId]);

  if (!todo) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Todo Details</h1>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TodoDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoById } from "../API/todoService";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    async function loadTodo() {
      const data = await getTodoById(id);
      setTodo(data);
    }
    loadTodo();
  }, [id]);

  if (!todo) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo Details</h1>
      <h2>ID: {todo.id}</h2>
      <h3>Title: {todo.title}</h3>
      <p>Status: {todo.completed ? "✔ Completed" : "❌ Not Completed"}</p>
    </div>
  );
}

export default TodoDetails;

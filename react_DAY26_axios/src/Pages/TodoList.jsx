import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../API/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function loadTodos() {
      const data = await getTodos();
      setTodos(data.slice(0, 20)); 
    }
    loadTodos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Todos</h1>

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h3>Title:{todo.title}</h3>
          <p>Status: {todo.completed ? "✔ Completed" : "❌ Not Completed"}</p>
          <Link to={`/todo/${todo.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

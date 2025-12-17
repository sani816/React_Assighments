import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
      .then((res) => res.json())
      .then((data) => setTodos(data));

    // ✅ Cleanup function
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;

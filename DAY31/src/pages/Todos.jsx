import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TodoItem from "../components/TodoItem";
import UpdateTodoModal from "../components/UpdateTodoModal";

import {
  createTodo,
  deleteTodoById,
  getTodos,
  updateTodo,
} from "../services/todo.service";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(false);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const filteredTodos =
    filter === "completed"
      ? todos.filter((t) => t.completed)
      : filter === "pending"
      ? todos.filter((t) => !t.completed)
      : todos;

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, { completed: !todo.completed });
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodoById(id);
    fetchTodos();
    setSelected(null);
  };

  const handleUpdate = async (id, title) => {
    await updateTodo(id, { title });
    fetchTodos();
    setModal(false);
  };

  const addTodo = async () => {
    const title = prompt("Enter todo title:");
    await createTodo({ title, completed: false });
    fetchTodos();
  };

  return (
    <>
      <Navbar filter={filter} setFilter={setFilter} />

      <div className="flex">
        <Sidebar todos={filteredTodos} selected={selected} setSelected={setSelected} />

        <div className="p-6 flex-1">
          <button
            onClick={addTodo}
            className="mb-4 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add Todo
          </button>

          {selected ? (
            <TodoItem
              todo={selected}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={() => setModal(true)}
            />
          ) : (
            <p>Select a todo from the left.</p>
          )}
        </div>
      </div>

      {modal && (
        <UpdateTodoModal
          todo={selected}
          onClose={() => setModal(false)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-xl font-bold">{todo.title}</h2>

      <p className="mt-1 text-gray-600">
        Status: {todo.completed ? "Completed" : "Pending"}
      </p>

      <div className="flex gap-3 mt-3">
        <button
          onClick={() => onToggle(todo)}
          className="bg-green-500 px-3 py-1 text-white rounded"
        >
          Toggle
        </button>
        <button
          onClick={() => onEdit(todo)}
          className="bg-yellow-500 px-3 py-1 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 px-3 py-1 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

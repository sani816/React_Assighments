import { useState } from "react";

export default function UpdateTodoModal({ todo, onClose, onSave }) {
  const [title, setTitle] = useState(todo?.title || "");

  const handleSave = () => onSave(todo.id, title);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white p-5 rounded shadow-lg w-96">
        <h2 className="font-bold mb-3">Update Todo</h2>

        <input
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex justify-end mt-4 gap-3">
          <button onClick={onClose} className="px-3 py-1 border rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-500 px-3 py-1 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

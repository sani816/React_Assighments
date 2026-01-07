import { useAuth } from "../context/AuthContext";

export default function Navbar({ filter, setFilter }) {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <h1 className="text-xl font-bold">Todos App</h1>

      <div className="flex gap-3">
        <button onClick={() => setFilter("all")} className="px-3 py-1 border rounded">
          All
        </button>
        <button onClick={() => setFilter("completed")} className="px-3 py-1 border rounded">
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className="px-3 py-1 border rounded">
          Pending
        </button>
      </div>

      {user ? (
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={logout}>
          Logout
        </button>
      ) : (
        <a href="/login" className="bg-blue-500 text-white px-3 py-1 rounded">
          Login
        </a>
      )}
    </div>
  );
}

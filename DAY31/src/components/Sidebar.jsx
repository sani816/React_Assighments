export default function Sidebar({ todos, selected, setSelected }) {
  return (
    <div className="w-1/4 bg-gray-50 h-screen p-4 border-r overflow-y-auto">
      <h2 className="font-semibold mb-2">All Todos</h2>

      {todos.map((t) => (
        <div
          key={t.id}
          onClick={() => setSelected(t)}
          className={`p-3 cursor-pointer rounded ${
            selected?.id === t.id ? "bg-blue-100" : "bg-white"
          }`}
        >
          {t.title}
        </div>
      ))}
    </div>
  );
}

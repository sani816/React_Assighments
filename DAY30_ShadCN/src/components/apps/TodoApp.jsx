import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!todo.trim()) return
    setTodos([...todos, { text: todo, done: false }])
    setTodo("")
  }

  const toggleTodo = (index) => {
    const list = [...todos]
    list[index].done = !list[index].done
    setTodos(list)
  }

  return (
    <Card className="max-w-lg mx-auto shadow-xl rounded-2xl bg-white border hover:shadow-2xl transition">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter a task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="focus:ring-2 focus:ring-indigo-400"
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <div className="space-y-3">
          {todos.length === 0 && (
            <p className="text-gray-400 text-center">No tasks added.</p>
          )}

          {todos.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 rounded-lg border hover:bg-gray-50 transition"
            >
              <Checkbox checked={t.done} onCheckedChange={() => toggleTodo(i)} />

              <span className={`text-lg ${t.done ? "line-through text-gray-500" : ""}`}>
                {t.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitForm = () => {
    setSubmitted(form)
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <Card className="max-w-lg mx-auto shadow-xl rounded-2xl border border-gray-200 bg-white hover:shadow-2xl transition">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Feedback Form</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="focus:ring-2 focus:ring-indigo-400"
        />

        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="focus:ring-2 focus:ring-indigo-400"
        />

        <Textarea
          name="feedback"
          placeholder="Write your feedback..."
          value={form.feedback}
          onChange={handleChange}
          className="focus:ring-2 focus:ring-indigo-400"
          rows={4}
        />

        <Button className="w-full py-2 text-lg" onClick={submitForm}>
          Submit
        </Button>

        {submitted && (
          <Card className="mt-6 p-4 rounded-xl bg-indigo-50 shadow-inner border border-indigo-200">
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Feedback:</strong> {submitted.feedback}</p>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

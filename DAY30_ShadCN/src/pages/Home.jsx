import FeedbackForm from "../components/apps/FeedbackForm"
import SlideshowApp from "../components/apps/SlideshowApp"
import TodoApp from "../components/apps/TodoApp"


export default function Home() {
  return (
    <div className="space-y-16 p-10">
      <FeedbackForm />
      <SlideshowApp />
      <TodoApp />
    </div>
  )
}

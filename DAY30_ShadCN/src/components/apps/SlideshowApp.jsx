import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SlideshowApp() {
  const images = [
    "https://picsum.photos/500?random=1",
    "https://picsum.photos/500?random=2",
    "https://picsum.photos/500?random=3",
  ]

  const [index, setIndex] = useState(0)

  const nextImage = () => setIndex((index + 1) % images.length)
  const prevImage = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <Card className="max-w-lg mx-auto shadow-xl rounded-2xl bg-white border hover:shadow-2xl transition">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Image Slideshow</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[index]}
            className="w-full rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={prevImage}>
            ← Previous
          </Button>
          <Button variant="default" onClick={nextImage}>
            Next →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

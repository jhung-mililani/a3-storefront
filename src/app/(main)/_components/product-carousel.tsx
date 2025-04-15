"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

const products = [
  {
    id: 1,
    name: "Minimalist Chair",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Modern Lamp",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Ceramic Vase",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Wooden Table",
    price: 349.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Leather Sofa",
    price: 899.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Wall Art",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const visibleProducts = 4
  const maxIndex = products.length - visibleProducts

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Trending Products</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous products">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next products">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={cn("min-w-[25%] px-2", "sm:min-w-[33.333%]", "lg:min-w-[25%]", "xl:min-w-[20%]")}
              >
                <Link href={`/products/${product.id}`} className="block group">
                  <div className="relative aspect-square mb-3 bg-muted overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
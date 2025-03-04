"use client"

import Image from "next/image"
import { Star, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import { Badge } from "~/components/ui/badge"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Product Image"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-4 left-4">New</Badge>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="border-2 border-primary rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Thumbnail 1"
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </button>
              <button className="border hover:border-primary rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Thumbnail 2"
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </button>
              <button className="border hover:border-primary rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Thumbnail 3"
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </button>
              <button className="border hover:border-primary rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Thumbnail 4"
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Premium Wireless Headphones</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation,
              30-hour battery life, and ultra-comfortable ear cushions for all-day listening.
            </p>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold">$149.99</span>
              <span className="text-muted-foreground line-through">$199.99</span>
              <Badge variant="outline" className="text-green-600 bg-green-50">
                25% OFF
              </Badge>
            </div>
            <Separator className="my-6" />
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-black ring-2 ring-primary ring-offset-2"></button>
                  <button className="w-8 h-8 rounded-full bg-white border"></button>
                  <button className="w-8 h-8 rounded-full bg-red-500"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-500"></button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {[
            {
              name: "Alex Johnson",
              date: "May 15, 2023",
              rating: 5,
              comment:
                "These headphones are amazing! The sound quality is exceptional and the noise cancellation works perfectly. Battery life is impressive too - I've been using them for a week on a single charge.",
            },
            {
              name: "Sarah Miller",
              date: "April 28, 2023",
              rating: 4,
              comment:
                "Very comfortable and great sound. The only reason I'm giving 4 stars instead of 5 is because the app can be a bit glitchy sometimes. Otherwise, these are fantastic headphones.",
            },
            {
              name: "Michael Chen",
              date: "April 10, 2023",
              rating: 5,
              comment:
                "Best headphones I've ever owned. The sound is crisp and clear, and they're so comfortable I forget I'm wearing them. Highly recommend!",
            },
          ].map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${star <= review.rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"}`}
                    />
                  ))}
                </div>
              </div>
              <p>{review.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


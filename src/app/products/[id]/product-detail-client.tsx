"use client"

import Image from "next/image"
import { Star, ShoppingCart, Minus, Plus } from "lucide-react"
import { useState } from "react"

import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import { Badge } from "~/components/ui/badge"

// Tipamos la data que recibimos desde el server
interface Product {
  id: number
  name: string
  price: number
  image: string
  discount?: number
  oldPrice?: number
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  // Opcional: Calculamos un precio anterior si hay descuento
  const finalPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price

  return (
    <div className="container mx-auto px-4 py-8">
      {/* GRID PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Imagen y miniaturas */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-4 left-4">New</Badge>
            </div>
            {/* Thumbnails (puedes mejorarlos para cambiar la imagen principal) */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className="border hover:border-primary rounded-md overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${i}`}
                    width={150}
                    height={150}
                    className="aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detalles del producto */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            {/* Ratings ficticios, para demo */}
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
              {/* Descripción ficticia: en tu DB podrías tener un campo "description" */}
              Enjoy ultimate sound quality with these premium headphones...
            </p>

            {/* Precio y descuento */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold">${finalPrice.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-muted-foreground line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <Badge variant="outline" className="text-green-600 bg-green-50">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>

            <Separator className="my-6" />

            <div className="space-y-6">
              {/* Selector de color - ejemplo estático */}
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {["black", "white", "red", "blue"].map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full bg-${color === "white" ? "white border" : color} ${
                        selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""
                      }`}
                      onClick={() => setSelectedColor(color)}
                      aria-label={color}
                    ></button>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
                </div>
              </div>

              {/* Selector de cantidad */}
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Botón Agregar al Carrito */}
            <div className="mt-8">
              <Button size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de reseñas (ficticias, estáticas) */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {[
            {
              name: "Alex Johnson",
              date: "May 15, 2023",
              rating: 5,
              comment:
                "These headphones are amazing! The sound quality is exceptional and the noise cancellation works perfectly.",
            },
            {
              name: "Sarah Miller",
              date: "April 28, 2023",
              rating: 4,
              comment: "Very comfortable and great sound. The only reason I'm giving 4 stars is because the app can be glitchy.",
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
                      className={`w-4 h-4 ${
                        star <= review.rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"
                      }`}
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

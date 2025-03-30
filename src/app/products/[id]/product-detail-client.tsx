"use client"

import Image from "next/image"
import { useState } from "react"
import { Star, ShoppingCart, Minus, Plus } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Separator } from "~/components/ui/separator"
import { Card } from "~/components/ui/card"

import { useCart } from "../../context/CartContext"

interface Product {
  id: number
  name: string
  price: number
  image: string
  stock: number
  sales: number
  discount: number
  description: string
  comments: string[]
  rating: number
  reviewCount: number
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")

  // 🔥 Importar setCartCount
  const { addToCart } = useCart()

  const finalPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }


  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.image,
      quantity: quantity,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Imagen */}
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
          </div>
        </div>

        {/* Detalles */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= product.rating
                      ? "fill-primary text-primary"
                      : "fill-muted stroke-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-3xl font-bold">${finalPrice.toFixed(2)}</span>
            {product.discount > 0 && (
              <>
                <span className="text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
                <Badge variant="outline" className="text-green-600 bg-green-50">
                  {product.discount}% OFF
                </Badge>
              </>
            )}
          </div>

          <Separator className="my-6" />

          {/* Color y cantidad */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                {["black", "white", "red", "blue"].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${
                      color === "white" ? "bg-white border" : `bg-${color}`
                    } ${selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""}`}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color}
                  ></button>
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Stock disponible: {product.stock} unidades
              </p>
              {quantity >= product.stock && (
                <p className="text-sm text-red-500 mt-1">
                  Has alcanzado el máximo disponible.
                </p>
              )}
            </div>
          </div>

          {/* Botón: Añadir al carrito */}
          <div className="mt-8">
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Comentarios */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Customer Comments</h2>
        <div className="space-y-4">
          {product.comments && product.comments.length > 0 ? (
            product.comments.map((comment, i) => (
              <Card key={i} className="p-4">
                <p className="text-sm text-muted-foreground">🗨️ {comment}</p>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

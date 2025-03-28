// app/products/[id]/page.tsx (Server Component)
import { notFound } from "next/navigation"
import ProductDetailClient from "./product-detail-client"

interface Product {
  id: number
  name: string
  price: number
  image: string
  discount?: number // Por si guardas un descuento en la DB
  oldPrice?: number // Ej: precio sin descuento
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params

  // 1. Obtener el producto desde tu API de productos, pasando el "id"
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/products/${id}`, {
    cache: "no-cache", // O "force-cache" si quieres caching
  })

  // 2. Verificar si la respuesta es válida
  if (!res.ok) {
    return notFound()
  }

  // 3. Convertir a JSON y tipar el resultado
  const product: Product = await res.json()
  if (!product) {
    return notFound()
  }

  // 4. Renderizar un componente "Client" con la data cargada
  return <ProductDetailClient product={product} />
}

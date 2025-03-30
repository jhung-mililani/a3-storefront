import { notFound } from "next/navigation"
import ProductDetailClient from "./product-detail-client"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/products/${params.id}`, {
    cache: "no-cache",
  })

  if (!res.ok) return notFound()

  const product = await res.json()

  return <ProductDetailClient product={product} />
}

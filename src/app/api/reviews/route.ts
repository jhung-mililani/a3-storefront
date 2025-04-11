import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

// Crear reseña
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { author, comment, rating, productId } = data

    if (!author || !comment || typeof rating !== "number" || !productId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 })
    }

    const review = await prisma.review.create({
      data: { author, comment, rating, productId },
    })

    // Opcional: actualizar producto
    await prisma.product.update({
      where: { id: productId },
      data: {
        reviewCount: { increment: 1 },
        rating: {
          set: await calcularNuevoPromedio(productId, rating),
        },
      },
    })

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error("Error creating review:", error)
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 })
  }
}

// Calcular rating promedio nuevo
async function calcularNuevoPromedio(productId: number, nueva: number) {
  const reviews = await prisma.review.findMany({
    where: { productId },
    select: { rating: true },
  })

  const total = reviews.reduce((acc, r) => acc + r.rating, nueva)
  const avg = total / (reviews.length + 1)
  return Math.round(avg)
}

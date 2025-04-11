import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(_: Request, { params }: { params: { productId: string } }) {
  const productId = parseInt(params.productId)

  if (isNaN(productId)) {
    return NextResponse.json({ error: "Invalid productId" }, { status: 400 })
  }

  try {
    const reviews = await prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

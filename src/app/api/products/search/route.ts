import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const name = searchParams.get("name") || ""
  const minPrice = parseFloat(searchParams.get("minPrice") || "0")
  const maxPrice = parseFloat(searchParams.get("maxPrice") || "999999")
  const minDiscount = parseInt(searchParams.get("minDiscount") || "0")
  const maxDiscount = parseInt(searchParams.get("maxDiscount") || "100")
  const minStock = parseInt(searchParams.get("minStock") || "0")
  const minRating = parseInt(searchParams.get("minRating") || "0")
  const maxRating = parseInt(searchParams.get("maxRating") || "5")

  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
        discount: {
          gte: minDiscount,
          lte: maxDiscount,
        },
        stock: {
          gte: minStock,
        },
        rating: {
          gte: minRating,
          lte: maxRating,
        },
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error filtering products:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

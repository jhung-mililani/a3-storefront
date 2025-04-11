import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { customer, items } = data

    if (!customer || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 })
    }

    for (const item of items) {
      const product = await prisma.product.findUnique({ where: { id: item.productId } })
      if (!product) {
        return NextResponse.json({ error: `Product ${item.productId} not found` }, { status: 404 })
      }

      if (product.stock <= 0) {
        return NextResponse.json({ error: `Product "${product.name}" is out of stock` }, { status: 400 })
      }

      if (product.stock < item.quantity) {
        return NextResponse.json({
          error: `Not enough stock for "${product.name}". Available: ${product.stock}, Requested: ${item.quantity}`,
        }, { status: 400 })
      }
    }

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

    const order = await prisma.order.create({
      data: {
        customer,
        total,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    })

    for (const item of items) {
      const updated = await prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: { decrement: item.quantity },
          sales: { increment: item.quantity },
        },
      })

      if (updated.stock < 5) {
        console.warn(`⚠️ LOW STOCK: "${updated.name}" has only ${updated.stock} units left.`)
      }
    }

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error("❌ Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

// ✅ Crear pedido
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const { customer, items } = data

    if (!customer || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Missing customer or items" }, { status: 400 })
    }

    // Calcular total
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

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
      include: {
        items: true,
      },
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

// ✅ Listar pedidos
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

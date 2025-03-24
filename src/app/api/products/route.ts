import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    // 🔥 Convertir `price` a número en caso de que venga como string
    const formattedProducts = products.map(product => ({
      ...product,
      price: Number(product.price), // Asegurar que price es un número
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

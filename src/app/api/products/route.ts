import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    const formattedProducts = products.map(product => ({
      ...product,
      price: Number(product.price),
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // ✅ VALIDACIÓN BÁSICA
    if (!data.name || typeof data.name !== "string") {
      return NextResponse.json({ error: "Name is required and must be a string" }, { status: 400 });
    }

    if (typeof data.price !== "number" || data.price <= 0) {
      return NextResponse.json({ error: "Price must be a number greater than 0" }, { status: 400 });
    }

    if (typeof data.stock !== "number" || data.stock < 0) {
      return NextResponse.json({ error: "Stock must be a non-negative number" }, { status: 400 });
    }

    if ("discount" in data && (typeof data.discount !== "number" || data.discount < 0 || data.discount > 100)) {
      return NextResponse.json({ error: "Discount must be between 0 and 100" }, { status: 400 });
    }

    if ("rating" in data && (typeof data.rating !== "number" || data.rating < 0 || data.rating > 5)) {
      return NextResponse.json({ error: "Rating must be between 0 and 5" }, { status: 400 });
    }

    if ("reviewCount" in data && (typeof data.reviewCount !== "number" || data.reviewCount < 0)) {
      return NextResponse.json({ error: "Review count must be a non-negative number" }, { status: 400 });
    }

    if ("comments" in data && !Array.isArray(data.comments)) {
      return NextResponse.json({ error: "Comments must be an array" }, { status: 400 });
    }

    // ✅ Crear producto
    const product = await prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        image: data.image,
        stock: data.stock,
        sales: data.sales || 0,
        discount: data.discount || 0,
        description: data.description || "",
        comments: data.comments || [],
        rating: data.rating || 0,
        reviewCount: data.reviewCount || 0,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}

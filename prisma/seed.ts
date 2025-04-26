import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seeding...");

  // Limpieza previa
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  // Semillas actualizadas de zapatillas
  const products = [
    {
      name: "Nike Air Max 270",
      price: 159.99,
      image: "https://i.ibb.co/FkSsmBcd/s-l1200.jpg",
      stock: 50,
      sales: 10,
      discount: 15,
      description: "Comodidad máxima para el día a día.",
      comments: ["Me encantan!", "Muy cómodas", "Las mejores para correr"],
      rating: 5,
      reviewCount: 3,
    },
    {
      name: "Vans Old Skool",
      price: 69.99,
      image: "https://i.ibb.co/dddymd8/Vans-Skate-Old-Skool-Shoes-Greener-Pastures-1.jpg",
      stock: 40,
      sales: 12,
      discount: 5,
      description: "Estilo skater clásico y durabilidad superior.",
      comments: ["Las uso a diario", "Cómodas y chulas", "Perfectas para todo"],
      rating: 4,
      reviewCount: 3,
    },
    {
      name: "Converse Chuck Taylor",
      price: 74.99,
      image: "https://i.ibb.co/XfPVLfH5/568497-C-D-08-X1.jpg",
      stock: 100,
      sales: 25,
      discount: 0,
      description: "Un clásico atemporal para cualquier ocasión.",
      comments: ["Siempre de moda", "Muy resistentes", "Quedan genial"],
      rating: 5,
      reviewCount: 3,
    },
    {
      name: "Adidas Ultraboost 22",
      price: 179.99,
      image: "https://i.ibb.co/C5BFqtYy/Ultraboost-22-Running-Shoes-Pink-GX8016-01-standard.jpg",
      stock: 30,
      sales: 5,
      discount: 10,
      description: "Un clásico renovado con máximo retorno de energía.",
      comments: ["Se sienten ligeras", "Buen agarre", "Muy suaves"],
      rating: 4,
      reviewCount: 3,
    },
    {
      name: "Puma RS-X",
      price: 119.99,
      image: "https://i.ibb.co/mF2qdHj8/51sv2-Nc-Fe-L-AC-UY1000.jpg",
      stock: 25,
      sales: 8,
      discount: 20,
      description: "Diseño retro futurista con mucho estilo.",
      comments: ["Colores muy vivos", "Destacan mucho", "Súper cómodas"],
      rating: 4,
      reviewCount: 3,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log("✅ Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

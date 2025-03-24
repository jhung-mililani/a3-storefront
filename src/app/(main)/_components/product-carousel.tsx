"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";

// 🔥 1️⃣ Definir la interfaz para los productos
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCarousel() {
  // 🔥 2️⃣ Tipar correctamente el estado de los productos
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleProducts = 4;
  const maxIndex = products.length - visibleProducts;

  // 🔥 3️⃣ Obtener los productos desde la API y tipar correctamente
  useEffect(() => {
    async function fetchProducts(): Promise<void> {
      try {
        const res = await fetch("/api/products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // 🔥 4️⃣ Funciones de navegación
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Trending Products</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 🔥 5️⃣ Si no hay productos, mostrar mensaje de carga */}
        {products.length > 0 ? (
          <div className="relative overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="min-w-[25%] px-2">
                  <Link href={`/products/${product.id}`} className="block group">
                    <div className="relative aspect-square mb-3 bg-muted overflow-hidden rounded-lg">
                      {/* 🔥 6️⃣ Asegurar que la imagen es válida */}
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-muted-foreground">
                      ${Number(product.price).toFixed(2)}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading products...</p>
        )}
      </div>
    </section>
  );
}

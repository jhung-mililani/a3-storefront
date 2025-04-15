import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="px-4 md:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-black/30 transition-opacity group-hover:bg-black/40" />
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="New Arrivals"
              width={400}
              height={600}
              className="h-[400px] w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="mb-2 text-xl font-bold">New Arrivals</h3>
              <p className="mb-4 text-sm">Discover our latest products</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/20 sm:w-auto"
              >
                Shop Now
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-black/30 transition-opacity group-hover:bg-black/40" />
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Best Sellers"
              width={400}
              height={600}
              className="h-[400px] w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="mb-2 text-xl font-bold">Best Sellers</h3>
              <p className="mb-4 text-sm">Our most popular products</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/20 sm:w-auto"
              >
                Shop Now
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-black/30 transition-opacity group-hover:bg-black/40" />
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Sale Items"
              width={400}
              height={600}
              className="h-[400px] w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="mb-2 text-xl font-bold">Sale Items</h3>
              <p className="mb-4 text-sm">Up to 50% off selected items</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/20 sm:w-auto"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

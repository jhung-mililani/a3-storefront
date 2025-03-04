import Image from "next/image"
import { Button } from "~/components/ui/button"

export default function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:bg-black/40" />
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="New Arrivals"
              width={400}
              height={600}
              className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">New Arrivals</h3>
              <p className="mb-4 text-sm">Discover our latest products</p>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                Shop Now
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:bg-black/40" />
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Best Sellers"
              width={400}
              height={600}
              className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Best Sellers</h3>
              <p className="mb-4 text-sm">Our most popular products</p>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                Shop Now
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:bg-black/40" />
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Sale Items"
              width={400}
              height={600}
              className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Sale Items</h3>
              <p className="mb-4 text-sm">Up to 50% off selected items</p>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
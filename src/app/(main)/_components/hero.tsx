import { Button } from "~/components/ui/button"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      >
        <div className="container relative z-20 h-full flex flex-col justify-center items-start px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl mb-4">Discover Our New Collection</h1>
          <p className="text-lg md:text-xl max-w-xl mb-8">
            Elevate your style with our latest arrivals. Quality craftsmanship meets modern design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/70">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/70">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
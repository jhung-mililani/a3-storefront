import Image from "next/image";
import { Button } from "~/components/ui/button";
import heroBackground from "../../../../public/waldemar-jeTlob-Wv0M-unsplash.jpg";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="relative h-[70vh]">
        <Image
          src={heroBackground}
          alt="Graveyard background"
          fill
          sizes="70vw"
          priority
          placeholder="blur"
          className="object-cover"
        />
        <div className="container relative z-20 ml-4 flex h-full flex-col items-start justify-center px-4 text-white">
          <h1 className="mb-4 max-w-2xl text-4xl font-bold md:text-5xl lg:text-6xl">
            Discover Our New Collection
          </h1>
          <p className="mb-8 max-w-xl text-lg md:text-xl">
            Elevate your style with our latest arrivals. Quality craftsmanship
            meets modern design.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-black hover:bg-white/70">
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/70"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "~/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="relative h-[70vh]">
        <Image
          src="/waldemar-jeTlob-Wv0M-unsplash.avif"
          alt="Graveyard background"
          fill
          sizes="70vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAEAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q=="
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

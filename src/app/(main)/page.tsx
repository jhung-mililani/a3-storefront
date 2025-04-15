import ContentSection from "~/app/(main)/_components/content-section";
import FeaturedSection from "~/app/(main)/_components/featured-section";
import Hero from "~/app/(main)/_components/hero";
import ProductCarousel from "~/app/(main)/_components/product-carousel";
import { ShippingBanner } from "./_components/discount-banner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ShippingBanner />
      <Hero />
      <ProductCarousel />
      <div id="featured">
        <FeaturedSection />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2">
        <ContentSection
          title="Our Story"
          description="Discover our journey and what makes us unique in the industry. We've been crafting quality products since 2010."
        />
        <ContentSection
          title="Our Mission"
          description="We're committed to sustainability and ethical practices in everything we do. Learn about our initiatives and goals."
        />
      </div>
    </main>
  );
}

import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 299.99,
    image:
      "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999.99,
    image:
      "https://www.hp.com/content/dam/sites/worldwide/gaming/new-product-cards/OMEN_17_Intel_Desktop@2x.png",
  },
  {
    id: 3,
    name: "Headphones",
    price: 49.99,
    image:
      "https://headphones.com/cdn/shop/files/HE_90_Set_Product_Orpheus.webp",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199.99,
    image:
      "https://www.apple.com/v/watch/bp/images/overview/select/product_u2__ebztafh9rvau_xlarge.png",
  },
];

export default function Storefront() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://nau.edu/wp-content/uploads/sites/224/2023/04/0092_Drone-Winter-campus_20210128.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p className="mt-4 text-xl">Discover amazing products</p>
          <Button className="mt-8 px-6 py-3 text-lg">Shop Now</Button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="shadow-md">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-contain"
                />
                <p className="mt-4 text-lg font-semibold">${product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

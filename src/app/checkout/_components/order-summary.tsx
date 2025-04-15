import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import ProductOrder from "./product-order";

export default function OrderSummary() {
  // sample products array (need to fetch from API)
  const products = [
    {
      id: "1",
      name: "Product 1",
      price: 222,
      imageUrl: "/placeholder.svg?height=80&width=80",
      discount: 0,
      size: "US Men's 5.5",
      itemCondition: "New",
      boxCondition: "Good Condition",
    },
    {
      id: "2",
      name: "Product 2",
      price: 210,
      imageUrl: "/placeholder.svg?height=80&width=80",
      discount: 5,
      size: "US Men's 6.5",
      itemCondition: "Open Box",
      boxCondition: "Good Condition",
    },
  ];

  // temporary flag to indicate if user has location data for shippping and tax
  const hasLocationData = true; // set to true when location data is available

  // calculate order totals
  const calculateSubtotal = () => {
    return products.reduce((total, product) => {
      return total + product.price - (product.price * product.discount) / 100;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = hasLocationData ? 14.75 : 0; // fixed shipping for now, replace with actual logic
  const taxRate = 0.08; // fixed 8% tax rate for now, replace with actual logic
  const tax = hasLocationData ? subtotal * taxRate : 0;
  const total = hasLocationData ? subtotal + shipping + tax : subtotal;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {products.map((product) => (
          <ProductOrder
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl,
              discount: product.discount,
            }}
            size={product.size}
            itemCondition={product.itemCondition}
            boxCondition={product.boxCondition}
          />
        ))}

        <Card className="mt-4 overflow-hidden p-0">
          <CardContent className="p-4 pb-0">
            <div className="mb-5 flex flex-col justify-center gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Item Subtotal</span>
                <span>
                  {subtotal.toLocaleString("en-us", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Shipping</span>
                <span>
                  {hasLocationData
                    ? `${shipping.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}`
                    : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Tax</span>
                <span>
                  {hasLocationData
                    ? `${tax.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}`
                    : "—"}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-6 flex items-center justify-between bg-[rgba(0,0,0,0.3)] px-4 py-3">
            <span className="font-bold">Total</span>
            <span className="font-bold">
              {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
}

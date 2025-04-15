import Image from 'next/image';
import { Card, CardContent, CardTitle } from '~/components/ui/card';

type ProductOrderProps = {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    discount: number; // percentage discount (i.e. 50 for 50% off)
  },
    size: string;
    itemCondition: string;
    boxCondition: string;
}

export default function ProductOrder({
  product,
  size,
  itemCondition,
  boxCondition
}: ProductOrderProps) {
  return (
    <Card className="p-4">
      <CardTitle className="mb-4">{product.name}</CardTitle>
      <CardContent className="p-0">
        <div className="flex flex-row gap-4">
          <div className="flex w-20 min-w-20 items-center justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={80}
              height={80}
              className="m-auto block max-w-[100%] object-contain"
              priority
            />
          </div>
          <div className="flex min-w-[13em] flex-col justify-center text-sm">
            <p>
              <b>Size: </b>
              {size}
            </p>
            <p>
              <b>Condition: </b>
              {itemCondition}
            </p>
            <p>
              <b>Box: </b>
              {boxCondition}
            </p>
            <p>
              <b>Price: </b>
              {product.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: product.price % 1 === 0 ? 0 : 2, // if the price is an integer, show 0 decimal places
              maximumFractionDigits: product.price % 1 === 0 ? 0 : 2,
              })}
              {product.discount > 0 && (
              <span className="text-red-500">
                {' '}
                -{product.discount}% off
              </span>
              )}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
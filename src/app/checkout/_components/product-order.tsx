import Image from 'next/image';
import { Card, CardContent, CardTitle } from '~/components/ui/card';

type ProductOrderProps = {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    discount: number; 
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
          <div className="flex w-16 min-w-16 items-center justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={64}
              height={64}
              className="m-auto block max-w-[100%] object-contain"
              priority
            />
          </div>
          <div className="mr-8 flex min-w-[13em] flex-col justify-center text-sm">
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
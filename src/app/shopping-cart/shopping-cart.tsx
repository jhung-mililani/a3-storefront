import Image from "next/image"
import { ShoppingCart, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShoppingCartComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a0bec4] p-4">
      <div className="bg-[#f5efe9] rounded-lg max-w-2xl w-full p-8 shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800">Shopping Cart</h1>
        <p className="text-gray-500 mb-6">Review your items</p>

        <div className="space-y-4">
          {/* Item 1 */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Item 1"
                  width={120}
                  height={120}
                  className="bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Item 1</h3>
                <p className="text-gray-500 mb-4">Item Description</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-700 bg-gray-200 hover:bg-gray-300 border-gray-300"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Item 2"
                  width={120}
                  height={120}
                  className="bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Item 2</h3>
                <p className="text-gray-500 mb-4">Item Description</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-700 bg-gray-200 hover:bg-gray-300 border-gray-300"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Item 3"
                  width={120}
                  height={120}
                  className="bg-gray-200 rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Item 3</h3>
                <p className="text-gray-500 mb-4">Item Description</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-700 bg-gray-200 hover:bg-gray-300 border-gray-300"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Button className="w-full py-6 bg-[#7a9ca7] hover:bg-[#6a8c97] text-white">
            <Receipt className="mr-2 h-5 w-5" /> To Checkout
          </Button>

          <Button variant="outline" className="w-full py-6 bg-[#7a9ca7] hover:bg-[#6a8c97] text-white border-[#7a9ca7]">
            <ShoppingCart className="mr-2 h-5 w-5" /> Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  )
}


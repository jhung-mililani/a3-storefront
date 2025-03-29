"use client"

import { useState } from "react"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CheckoutForm() {
  const [acceptTerms, setAcceptTerms] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a3bbc3]">
      <div className="w-full max-w-3xl bg-[#f2ece6] rounded-lg p-8 shadow-md">
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-gray-800">Checkout</h1>
          <p className="text-gray-500">Almost there!</p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName" className="block text-gray-700 mb-1">
              Full Name
            </Label>
            <Input id="fullName" placeholder="Name" className="w-full bg-white border-gray-200" />
          </div>

          <div>
            <Label htmlFor="addressLine1" className="block text-gray-700 mb-1">
              Address Line 1
            </Label>
            <Input id="addressLine1" placeholder="Address Line 1" className="w-full bg-white border-gray-200" />
          </div>

          <div>
            <Label htmlFor="addressLine2" className="block text-gray-700 mb-1">
              Address Line 2
            </Label>
            <Input id="addressLine2" placeholder="Address Line 2" className="w-full bg-white border-gray-200" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city" className="block text-gray-700 mb-1">
                City
              </Label>
              <Input id="city" placeholder="City" className="w-full bg-white border-gray-200" />
            </div>
            <div>
              <Label htmlFor="state" className="block text-gray-700 mb-1">
                State
              </Label>
              <Input id="state" placeholder="State" className="w-full bg-white border-gray-200" />
            </div>
            <div>
              <Label htmlFor="zip" className="block text-gray-700 mb-1">
                Zip
              </Label>
              <Input id="zip" placeholder="Zip" className="w-full bg-white border-gray-200" />
            </div>
          </div>

          <div>
            <Label htmlFor="cardNumber" className="block text-gray-700 mb-1">
              Card Number
            </Label>
            <Input id="cardNumber" placeholder="Card Number" className="w-full bg-white border-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expirationDate" className="block text-gray-700 mb-1">
                Expiration Date
              </Label>
              <Input id="expirationDate" placeholder="Date" className="w-full bg-white border-gray-200" />
            </div>
            <div>
              <Label htmlFor="cvv" className="block text-gray-700 mb-1">
                CVV (Security Code)
              </Label>
              <Input id="cvv" placeholder="CVV" className="w-full bg-white border-gray-200" />
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked === true)}
              className="data-[state=checked]:bg-[#a3bbc3] data-[state=checked]:border-[#a3bbc3]"
            />
            <div className="flex items-center">
              <Label htmlFor="terms" className="text-gray-700">
                I accept the terms
              </Label>
              <a href="#" className="ml-1 text-gray-500 underline text-sm">
                Read our T&Cs
              </a>
            </div>
          </div>

          <Button className="w-full mt-6 bg-[#a3bbc3] hover:bg-[#8ca7b0] text-white">
            <CreditCard className="mr-2 h-4 w-4" /> Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}


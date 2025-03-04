// For page.tsx
"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function ShippingBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);

  const dismissBanner = () => {
    setIsDismissing(true);
    setTimeout(() => {
      setIsBannerVisible(false);
    }, 300); // Match this to the transition duration
  };

  if (!isBannerVisible) {
    return null;
  }

  return (
    <div 
      className={`w-full bg-primary px-4 py-3 text-primary-foreground relative transition-all duration-300 ease-in-out ${
        isDismissing ? "opacity-0 max-h-0 py-0 overflow-hidden" : "opacity-100 max-h-20"
      }`}
    >
      <div className="text-center text-sm">
        Free shipping on orders over $100 • Use code WELCOME10 for 10% off
        your first order
      </div>
      <button 
        onClick={dismissBanner} 
        className="absolute left-4 top-1/2 -translate-y-1/2"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
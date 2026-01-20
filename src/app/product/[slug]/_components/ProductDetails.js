"use client";

import { AlertCircle, CheckCircle } from "lucide-react";

export function ProductDetails() {
  const features = [
    "Made fresh",
    "High-quality natural ingredients",
    "Zero artificial colouring, ammonia, or preservatives",
    "100% vegetarian",
    "Contains gluten and lactose",
  ];

  return (
    <div className="border-t border-border pt-8 space-y-6">
      {/* Note Section */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
        <p className="text-sm text-amber-900 leading-relaxed">
          <span className="font-semibold">Note:</span> The items shown by
          default correspond with the image. Any customization will be applied
          to the delivered product, not the displayed image.
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-2  text-muted-foreground">
        {features.map((feature, idx) => (
          <li key={idx} className="text-sm list-none">
            <span className=" text-foreground flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Shelf Life */}
      <div>
        <h3 className="text-lg font-semibold text-primary">
          Shelf Life: 5–7 Days
        </h3>
      </div>
    </div>
  );
}

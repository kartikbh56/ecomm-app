"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function ProductCard({ product }) {
  const {
    id,
    title,
    thumbnail,
    price,
    rating,
    discountPercentage,
    category,
    brand,
    availabilityStatus,
  } = product;

  const hasDiscount = discountPercentage > 0;
  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200 p-0 border">
      <CardContent className="p-0 relative">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Link href={`/product/${id}`}>
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              -{Math.round(discountPercentage)}%
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 space-y-2 bg-white text-black rounded-b-xl h-full">
        <div className="w-full space-y-2">
          {/* Title */}
          <Link href={`/product/${id}`}>
            <h3 className="font-semibold text-base line-clamp-2 hover:underline">{title}</h3>
          </Link>

          {/* Brand & Status */}
          <div className="flex justify-between text-xs text-gray-500">
            <span className="italic">{brand}</span>
            <span className={`font-medium ${availabilityStatus === "In Stock" ? "text-green-600" : "text-red-500"}`}>
              {availabilityStatus}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">{rating.toFixed(1)}</span>
          </div>

          {/* Category Badge */}
          {category && (
            <span className="inline-block bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
              {category}
            </span>
          )}

          {/* Pricing + Add Button */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {hasDiscount ? (
                <>
                  <span className="text-sm line-through text-gray-400">${price.toFixed(2)}</span>
                  <span className="text-lg font-bold text-green-600">${discountedPrice}</span>
                </>
              ) : (
                <span className="text-lg font-bold">${price.toFixed(2)}</span>
              )}
            </div>

            <Button size="sm" className="h-8">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

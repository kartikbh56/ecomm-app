"use client"

import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function ProductCard({ product }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200 p-0">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Link href={`/product/${product.id}`}>
            <img
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
      </CardContent>
      <CardFooter className="p-4 space-y-2 bg-black text-white rounded-b-xl h-full">
        <div className="w-full space-y-2">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-medium text-sm line-clamp-2 hover:underline">{product.title}</h3>
          </Link>
          <div className="flex items-center gap-1 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "fill-gray-100 text-gray-100" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-100">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${product.price}</span>
            </div>
            <Button size="sm" className="h-8 border-2">
              <ShoppingCart className="h-3 w-3 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

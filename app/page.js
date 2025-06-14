"use client";

import * as React from "react"
import { SlidersHorizontal, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./components/product-card";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB Natural Titanium",
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 2847,
    image: "/placeholder.svg",
    category: "electronics",
    brand: "apple",
    inStock: true,
    isNew: true,
    isSale: true,
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra 512GB Titanium Black",
    price: 1299,
    rating: 4.7,
    reviewCount: 1923,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
    brand: "samsung",
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    name: "Nike Air Max 270 Running Shoes",
    price: 150,
    originalPrice: 180,
    rating: 4.5,
    reviewCount: 856,
    image: "/placeholder.svg?height=300&width=300",
    category: "sports",
    brand: "nike",
    inStock: true,
    isSale: true,
  },
  {
    id: "4",
    name: "Adidas Ultraboost 22 Running Shoes",
    price: 190,
    rating: 4.6,
    reviewCount: 634,
    image: "/placeholder.svg?height=300&width=300",
    category: "sports",
    brand: "adidas",
    inStock: false,
  },
  {
    id: "5",
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 399,
    originalPrice: 449,
    rating: 4.9,
    reviewCount: 1247,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
    brand: "sony",
    inStock: true,
    isSale: true,
  },
]

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [selectedBrands, setSelectedBrands] = React.useState([])
  const [priceRange, setPriceRange] = React.useState([0, 1000])

  const categories = [
    { id: "electronics", label: "Electronics" },
    { id: "clothing", label: "Clothing & Fashion" },
    { id: "home", label: "Home & Garden" },
    { id: "sports", label: "Sports & Outdoors" },
    { id: "books", label: "Books & Media" },
    { id: "toys", label: "Toys & Games" },
  ]

  const brands = [
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "sony", label: "Sony" },
    { id: "lg", label: "LG" },
  ]

  const handleCategoryFilterRemove = (categoryId) => {
    setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
  }

  const handleBrandFilterRemove = (brandId) => {
    setSelectedBrands(selectedBrands.filter((id) => id !== brandId))
  }

  const handlePriceFilterRemove = () => {
    setPriceRange([0, 1000])
  }

  return (
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">Discover our wide range of products with advanced filtering options.</p>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
  )
}

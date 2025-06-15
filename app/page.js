
import { SlidersHorizontal, X } from "lucide-react"

import { ProductCard } from "./components/product-card";

export default async function HomePage({ searchParams }) {
  const query = (await searchParams)?.query || "";
  const products = await fetch(`https://dummyjson.com/products/search?q=${query}&sortBy=rating&order=desc&limit=100&select=title,price,thumbnail,rating`)
    .then(res => res.json())
    .then(data => data.products);
  return (
    <main className="flex-1 p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Products</h1>
        <p className="text-muted-foreground">Discover our wide range of products with advanced filtering options.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

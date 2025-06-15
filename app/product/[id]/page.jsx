import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

// Marking this as a server component — no "use client"

export default async function ProductPage({ params }) {
  const id = (await params)?.id;

  let product = null;
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product.");
    product = await res.json();
  } catch (err) {
    return (
      <div className="p-6 text-center text-destructive">
        Product not found or failed to load.
      </div>
    );
  }

  const discountPercentage = product.discountPercentage || 0;
  const images = product.images && product.images.length > 0 ? product.images : [product.thumbnail || "/placeholder.svg"];
  const originalPrice = discountPercentage > 0 ? (product.price / (1 - discountPercentage / 100)).toFixed(2) : null;

  return (
    <main className="flex-1 p-6 bg-zinc-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Product Images & Badges */}
          <div className="space-y-4 relative">
            <div className="aspect-square overflow-hidden rounded-lg border bg-white flex items-center justify-center relative">
              {/* Category Badge */}
              {product.category && (
                <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
                  {product.category}
                </span>
              )}
              {/* Discount Badge */}
              {discountPercentage > 0 && (
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
                  -{Math.round(discountPercentage)}% OFF
                </span>
              )}
              <Image
                src={images[0]}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>

          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary">Brand: {product.brand}</Badge>
                <Badge variant="outline">SKU: {product.sku}</Badge>
                {product.tags && product.tags.map((tag) => (
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold mt-2 mb-1">{product.title}</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-semibold">
                  {product.rating} / 5
                </span>
                <span className="text-xs text-zinc-500">({product.stock} in stock)</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-black">${product.price}</span>
              {originalPrice && (
                <span className="text-lg text-zinc-400 line-through">${originalPrice}</span>
              )}
              {discountPercentage > 0 && (
                <span className="text-base text-red-600 font-semibold">-{Math.round(discountPercentage)}%</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>{product.availabilityStatus}</span>
              <span className="text-xs text-zinc-500">Min. Order: {product.minimumOrderQuantity}</span>
            </div>
            <div className="flex gap-3 mt-2">
              <Button size="lg" className="flex-1" disabled={product.stock <= 0}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg"><Heart className="h-4 w-4" /></Button>
              <Button variant="outline" size="lg"><Share2 className="h-4 w-4" /></Button>
            </div>
            <div className="text-zinc-700 text-base mt-3">
              {product.description}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-muted-foreground" /><span>{product.shippingInformation}</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-muted-foreground" /><span>{product.warrantyInformation}</span></div>
              <div className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-muted-foreground" /><span>{product.returnPolicy}</span></div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Description Tab */}
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-bold mb-2">About this product</h2>
                  <p className="text-zinc-700">{product.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Tags</h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.tags && product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Specifications Tab */}
          <TabsContent value="specs" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                  <div className="space-y-2">
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Brand</span><span>{product.brand}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">SKU</span><span>{product.sku}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Category</span><span>{product.category}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Price</span><span>${product.price}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Discount</span><span>{discountPercentage}%</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Stock</span><span>{product.stock}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Minimum Order</span><span>{product.minimumOrderQuantity}</span></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Weight</span><span>{product.weight} g</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Dimensions</span><span>{product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} mm</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Warranty</span><span>{product.warrantyInformation}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Shipping</span><span>{product.shippingInformation}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Return Policy</span><span>{product.returnPolicy}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Barcode</span><span>{product.meta?.barcode}</span></div>
                    <div className="flex justify-between border-b py-2"><span className="font-medium">Created</span><span>{product.meta?.createdAt && new Date(product.meta.createdAt).toLocaleDateString()}</span></div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review, idx) => (
                      <div key={idx} className="border-b pb-4">
                        <div className="flex items-center gap-2 mb-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                          ))}
                          <span className="text-xs text-zinc-500 ml-2">{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                        <div className="font-semibold text-sm">{review.reviewerName}</div>
                        <div className="text-zinc-700 text-sm mb-1">{review.comment}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-500">No reviews available for this product.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}


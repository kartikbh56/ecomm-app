import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col">

        <div className="m-5">
          <h1 className="text-2xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">
            Discover our wide range of products with advanced filtering options.
          </p>
        </div>
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[...Array(8)].map((_, i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow duration-200 p-0">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Skeleton className="w-full h-full" />
                </div>
              </CardContent>
              <CardFooter className="p-4 space-y-2  text-white rounded-b-xl h-full">
                <div className="w-full space-y-2">
                  <Skeleton className="h-4 w-3/4" /> {/* Product Title */}
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Skeleton key={j} className="h-4 w-4 rounded" />
                      ))}
                    </div>
                    <Skeleton className="h-4 w-6 ml-2" /> {/* Rating */}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Skeleton className="h-6 w-16" /> {/* Price */}
                    <Skeleton className="h-8 w-20" /> {/* Add to Cart Button */}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col">
        {/* Navbar Skeleton */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-lg" />
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-48" /> {/* Search */}
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Avatar */}
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Cart */}
            </div>
          </div>
        </header>
        {/* Main Content Skeleton (Product Cards) */}
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col bg-card rounded-xl shadow-md overflow-hidden">
              <Skeleton className="aspect-square w-full h-48 mb-4" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex items-center gap-2 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="h-4 w-4 rounded" />
                  ))}
                  <Skeleton className="h-4 w-8 ml-2" />
                </div>
                <Skeleton className="h-6 w-20 mt-4" />
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

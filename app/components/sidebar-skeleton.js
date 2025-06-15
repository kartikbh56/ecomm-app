import { Skeleton } from "@/components/ui/skeleton";

export default function SidebarSkeleton() {
  return (
    <aside className="hidden lg:block w-64 p-4 border-r bg-background">
      <Skeleton className="h-8 w-32 mb-6" />
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-40" />
        ))}
      </div>
    </aside>
  );
}

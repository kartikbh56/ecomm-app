"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { EcommerceSidebar } from "./ecommerce-sidebar";
import Navbar from "./navbar";

export function EcommerceLayout({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getArrayParam = (param) => searchParams.get(param)?.split(",") || [];
  const getPriceParam = () => {
    const min = parseInt(searchParams.get("min") || "0", 10);
    const max = parseInt(searchParams.get("max") || "15999", 10);
    return [min, max];
  };

  const [selectedCategories, setSelectedCategories] = React.useState(getArrayParam("categories"));
  const [selectedBrands, setSelectedBrands] = React.useState(getArrayParam("brands"));
  const [priceRange, setPriceRange] = React.useState(getPriceParam());
  const [searchQuery, setSearchQuery] = React.useState(searchParams.get("q") || "");
  const cartItemCount = 3;

  const updateURLParams = (params) => {
    const updated = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        updated.delete(key);
      } else if (Array.isArray(value)) {
        updated.set(key, value.join(","));
      } else {
        updated.set(key, value.toString());
      }
    });

    router.push(`?${updated.toString()}`);
  };

  const handleCategoryChange = (categoryId, checked) => {
    const updated = checked
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter((id) => id !== categoryId);

    setSelectedCategories(updated);
    updateURLParams({ categories: updated });
  };

  const handleBrandChange = (brandId, checked) => {
    const updated = checked
      ? [...selectedBrands, brandId]
      : selectedBrands.filter((id) => id !== brandId);

    setSelectedBrands(updated);
    updateURLParams({ brands: updated });
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    updateURLParams({ min: range[0], max: range[1] });
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    updateURLParams({ q: query });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 15999]);
    updateURLParams({ categories: [], brands: [], min: null, max: null });
  };

  return (
    <SidebarProvider>
      <React.Suspense>
        <EcommerceSidebar
          selectedCategories={selectedCategories}
          selectedBrands={selectedBrands}
          priceRange={priceRange}
          onCategoryChange={handleCategoryChange}
          onBrandChange={handleBrandChange}
          onPriceRangeChange={handlePriceRangeChange}
          onClearFilters={clearAllFilters}
        />
        <SidebarInset>
          <React.Suspense>
            <Navbar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              cartItemCount={cartItemCount}
            />
          </React.Suspense>
          {children}
        </SidebarInset>
      </React.Suspense>
    </SidebarProvider>
  );
}

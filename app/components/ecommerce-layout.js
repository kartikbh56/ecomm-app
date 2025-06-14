"use client";

import * as React from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { EcommerceSidebar } from "./ecommerce-sidebar";
import Navbar from "./navbar";

export function EcommerceLayout({ children }) {
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [priceRange, setPriceRange] = React.useState([0, 1000]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const cartItemCount = 3;

  const handleCategoryChange = (categoryId, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    }
  };

  const handleBrandChange = (brandId, checked) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId]);
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId));
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
  };

  return (
    <SidebarProvider>
      <EcommerceSidebar
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
        priceRange={priceRange}
        onCategoryChange={handleCategoryChange}
        onBrandChange={handleBrandChange}
        onPriceRangeChange={setPriceRange}
        onClearFilters={clearAllFilters}
      />
      <SidebarInset>
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} cartItemCount={cartItemCount} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

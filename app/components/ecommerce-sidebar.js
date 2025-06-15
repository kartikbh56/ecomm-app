"use client"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"

import { useState, useEffect } from "react"

export function EcommerceSidebar({
  selectedCategories,
  priceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters,
}) {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="h-8 px-2 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Clear All
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        {/* Price Range Filter */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium mb-3">Price Range</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={onPriceRangeChange}
                max={15999}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-6" />

        {/* Categories Filter */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium mb-3">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.slug} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.slug}
                    checked={selectedCategories.includes(category.slug)}
                    onCheckedChange={(checked) => onCategoryChange(category.slug, checked)}
                  />
                  <Label htmlFor={category.slug} className="text-sm font-normal cursor-pointer flex-1">
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

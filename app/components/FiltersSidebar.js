"use client"
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarGroupContent } from "@/components/ui/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";



const categories = [
    { id: "electronics", label: "Electronics", count: 245 },
    { id: "clothing", label: "Clothing & Fashion", count: 189 },
    { id: "home", label: "Home & Garden", count: 156 },
    { id: "sports", label: "Sports & Outdoors", count: 98 },
    { id: "books", label: "Books & Media", count: 67 },
    { id: "toys", label: "Toys & Games", count: 45 },
]

const brands = [
    { id: "apple", label: "Apple", count: 34 },
    { id: "samsung", label: "Samsung", count: 28 },
    { id: "nike", label: "Nike", count: 45 },
    { id: "adidas", label: "Adidas", count: 32 },
    { id: "sony", label: "Sony", count: 19 },
    { id: "lg", label: "LG", count: 15 },
]

export default function FiltersSidebar() {

    const cartItemCount = 3

    const selectedCategories = []
    const selectedBrands = []

    const priceRange = [0, 1000]

    return (
        <Sidebar className="border-r">
            <SidebarHeader className="border-b p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                        <X className="h-3 w-3 mr-1" />
                        Clear All
                    </Button>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-4">
                {/* Categories Filter */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-medium mb-3">Categories</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="space-y-3">
                            {categories.map((category) => (
                                <div key={category.id} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={category.id}
                                        checked={selectedCategories.includes(category.id)}
                                    />
                                    <Label htmlFor={category.id} className="text-sm font-normal cursor-pointer flex-1">
                                        {category.label}
                                    </Label>
                                    <span className="text-xs text-muted-foreground">({category.count})</span>
                                </div>
                            ))}
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                <Separator className="my-6" />

                {/* Price Range Filter */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-medium mb-3">Price Range</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="space-y-4">
                            <Slider
                                value={priceRange}
                                max={1000}
                                min={0}
                                step={10}
                                className="w-full"
                            />
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span>₹{priceRange[0]}</span>
                                <span>₹{priceRange[1]}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="number"
                                    placeholder="Min"
                                    value={priceRange[0]}
                                    className="h-8"
                                />
                                <span className="text-muted-foreground">-</span>
                                <Input
                                    type="number"
                                    placeholder="Max"
                                    value={priceRange[1]}
                                    className="h-8"
                                />
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                <Separator className="my-6" />

                {/* Brand Filter */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-medium mb-3">Brands</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="space-y-3">
                            {brands.map((brand) => (
                                <div key={brand.id} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={brand.id}
                                        checked={selectedBrands.includes(brand.id)}
                                    />
                                    <Label htmlFor={brand.id} className="text-sm font-normal cursor-pointer flex-1">
                                        {brand.label}
                                    </Label>
                                    <span className="text-xs text-muted-foreground">({brand.count})</span>
                                </div>
                            ))}
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
        </Sidebar>
    )

}
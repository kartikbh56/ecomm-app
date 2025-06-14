"use client"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Navbar from "./navbar"
import FiltersSidebar from "./FiltersSidebar"
import { useState } from "react"


export default function Layout() {
  return (
    <SidebarProvider>
      <FiltersSidebar />
      <SidebarInset>
        <Navbar />
      </SidebarInset>
    </SidebarProvider>
  )
}

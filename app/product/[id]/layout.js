import Navbar from "@/app/components/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


export default function ProductLayout({ children }) {
    return (
        <SidebarProvider>
            <SidebarInset>
                <Navbar/>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )   ;
}
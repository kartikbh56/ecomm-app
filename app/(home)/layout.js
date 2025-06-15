import { EcommerceLayout } from "../components/ecommerce-layout";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <Suspense>
      <EcommerceLayout>
          {children}
      </EcommerceLayout>
    </Suspense>
  );
}

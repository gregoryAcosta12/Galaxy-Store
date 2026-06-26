import { CartProvider } from "@/components/cart-provider"
import { CartDrawer } from "@/components/cart-drawer"
import { StoreHeader } from "@/components/store-header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { Offers } from "@/components/offers"
import { CategoryShowcase } from "@/components/category-showcase"
import { Features } from "@/components/features-footer"
import { Footer } from "@/components/Footer" // Importación separada

export default function Page() {
  return (
    <CartProvider>
      <StoreHeader />
      <main>
        <Hero />
        <Features />
        <CategoryShowcase />
        <Offers />
        <Catalog />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
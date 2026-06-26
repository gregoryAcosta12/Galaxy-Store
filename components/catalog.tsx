"use client"

import { useMemo, useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { categories, products, type Category } from "@/lib/products"
import { MotionDiv, MotionP } from "@/components/Motion"

type Filter = "Todos" | Category

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filtered = useMemo(() => {
    let result = products
    
    if (filter !== "Todos") {
      result = result.filter((p) => p.category === filter)
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter((p) => 
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      )
    }
    
    return result
  }, [filter, searchTerm])

  const filters: Filter[] = ["Todos", ...categories]

  useEffect(() => {
    const handleFilterCategory = (e: CustomEvent) => {
      const { category } = e.detail
      if (category && categories.includes(category as Category)) {
        setFilter(category as Category)
        setSearchTerm("")
      }
    }

    const handleSearchProducts = (e: CustomEvent) => {
      const { query } = e.detail
      if (query) {
        setSearchTerm(query)
        setFilter("Todos")
      }
    }

    window.addEventListener('filterCategory' as any, handleFilterCategory)
    window.addEventListener('searchProducts' as any, handleSearchProducts)

    return () => {
      window.removeEventListener('filterCategory' as any, handleFilterCategory)
      window.removeEventListener('searchProducts' as any, handleSearchProducts)
    }
  }, [])

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col gap-3"
      >
        <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          Catálogo galáctico
        </h2>
        <p className="max-w-xl text-muted-foreground text-pretty">
          Explora todos nuestros productos. Filtra por categoría y arma tu setup definitivo.
        </p>
        {searchTerm && mounted && (
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-primary"
          >
            Resultados para: "{searchTerm}" ({filtered.length} productos)
          </MotionP>
        )}
      </MotionDiv>

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f)
              setSearchTerm("")
            }}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              filter === f
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                : "border-border bg-card text-muted-foreground hover:text-foreground hover:scale-105 hover:border-primary/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        {filtered.map((product) => (
          <MotionDiv
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <ProductCard product={product} />
          </MotionDiv>
        ))}
      </MotionDiv>

      {filtered.length === 0 && mounted && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-12 text-center text-muted-foreground"
        >
          <p className="text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
          <button
            onClick={() => {
              setFilter("Todos")
              setSearchTerm("")
            }}
            className="mt-4 text-primary hover:underline transition-colors"
          >
            Ver todos los productos
          </button>
        </MotionDiv>
      )}
    </section>
  )
}
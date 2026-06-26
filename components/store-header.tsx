"use client"

import { Rocket, Search, ShoppingCart, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useCart } from "@/components/cart-provider"
import { categories } from "@/lib/products"
import { MotionDiv, MotionSpan, MotionButton, MotionA, MotionForm } from "@/components/Motion"

export function StoreHeader() {
  const { count, open } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const catalogSection = document.getElementById('catalogo')
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' })
        window.dispatchEvent(new CustomEvent('searchProducts', { 
          detail: { query: searchQuery.trim() } 
        }))
      }
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const scrollToCategory = (category: string) => {
    const catalogSection = document.getElementById('catalogo')
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('filterCategory', { 
        detail: { category } 
      }))
    }
  }

  // Versión sin animaciones para el servidor
  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Rocket className="size-5" />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
              Galaxi<span className="text-primary text-glow-primary">Game</span>Store
            </span>
          </a>
          <nav className="ml-6 hidden items-center gap-6 lg:flex">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {cat}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-lg border border-border p-2.5 text-muted-foreground">
              <Search className="size-5" />
            </button>
            <button onClick={open} className="relative rounded-lg border border-border p-2.5 text-foreground">
              <ShoppingCart className="size-5" />
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6">
        <MotionA
          href="#inicio"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <MotionSpan
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            <Rocket className="size-5" />
          </MotionSpan>
          <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
            Galaxi<span className="text-primary text-glow-primary">Game</span>Store
          </span>
        </MotionA>

        <nav className="ml-6 hidden items-center gap-6 lg:flex">
          {categories.slice(0, 5).map((cat) => (
            <MotionButton
              key={cat}
              onClick={() => scrollToCategory(cat)}
              whileHover={{ scale: 1.05 }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {cat}
            </MotionButton>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center"
              >
                <MotionForm onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar productos..."
                    className="w-48 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="ml-2 rounded-lg bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Search className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery("")
                    }}
                    className="ml-2 rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </MotionForm>
              </MotionDiv>
            ) : (
              <MotionButton
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsSearchOpen(true)}
                aria-label="Buscar"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Search className="size-5" />
              </MotionButton>
            )}
          </div>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            onClick={open}
            aria-label="Abrir carrito"
            className="relative rounded-lg border border-border p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ShoppingCart className="size-5" />
            {count > 0 && (
              <MotionSpan
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground"
              >
                {count}
              </MotionSpan>
            )}
          </MotionButton>
        </div>
      </div>
    </header>
  )
}
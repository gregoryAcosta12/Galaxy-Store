"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import type { Product } from "@/lib/products"

export type CartItem = Product & { qty: number }

type CartContextType = {
  items: CartItem[]
  count: number
  total: number
  isOpen: boolean
  open: () => void
  close: () => void
  add: (product: Product) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const add = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setIsOpen(true)
  }

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id))

  const setQty = (id: string, qty: number) =>
    setItems((prev) =>
      prev.flatMap((i) => (i.id === id ? (qty <= 0 ? [] : [{ ...i, qty }]) : [i])),
    )

  const { count, total } = useMemo(() => {
    return items.reduce(
      (acc, i) => {
        acc.count += i.qty
        acc.total += i.qty * i.price
        return acc
      },
      { count: 0, total: 0 },
    )
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        add,
        remove,
        setQty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

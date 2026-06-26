"use client"

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/products"
import { MotionDiv, MotionSpan, MotionAside, MotionFooter } from "@/components/Motion"
import { useEffect, useState } from "react"

export function CartDrawer() {
  const { items, total, isOpen, close, remove, setQty } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      <MotionAside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        role="dialog"
        aria-label="Carrito de compras"
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card shadow-2xl"
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="flex items-center gap-2 font-heading text-lg font-bold">
            <ShoppingBag className="size-5 text-primary" />
            Tu carrito
            {items.length > 0 && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({items.length} {items.length === 1 ? "producto" : "productos"})
              </span>
            )}
          </h2>
          <button
            onClick={close}
            aria-label="Cerrar carrito"
            className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted-foreground"
            >
              <ShoppingBag className="size-12 opacity-40" />
              <p className="text-lg font-medium">Tu nave está vacía.</p>
              <p className="text-sm">Agrega productos para explorar la galaxia.</p>
              <Button onClick={close} variant="outline" className="mt-4">
                Seguir comprando
              </Button>
            </MotionDiv>
          ) : (
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
              className="flex flex-col gap-4"
            >
              {items.map((item) => (
                <MotionDiv
                  key={item.id}
                  layout
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  className="flex gap-4 rounded-xl border border-border bg-secondary/40 p-3 hover:border-primary/30 transition-colors"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-background">
                    <Image 
                      src={item.image || "/placeholder.svg"} 
                      alt={item.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-semibold leading-tight text-pretty">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.brand}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(item.id, item.qty - 1)}
                          aria-label="Quitar uno"
                          className="rounded-md border border-border p-1 transition-all hover:bg-secondary hover:scale-110"
                        >
                          <Minus className="size-3" />
                        </button>
                        <MotionSpan
                          key={item.qty}
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          className="w-5 text-center text-sm font-medium"
                        >
                          {item.qty}
                        </MotionSpan>
                        <button
                          onClick={() => setQty(item.id, item.qty + 1)}
                          aria-label="Agregar uno"
                          className="rounded-md border border-border p-1 transition-all hover:bg-secondary hover:scale-110"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <MotionSpan
                        key={item.qty * item.price}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-sm font-bold text-primary"
                      >
                        {formatPrice(item.price * item.qty)}
                      </MotionSpan>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    aria-label="Eliminar producto"
                    className="self-start text-muted-foreground transition-colors hover:text-destructive hover:scale-110"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </MotionDiv>
              ))}
            </MotionDiv>
          )}
        </div>

        {items.length > 0 && (
          <MotionFooter
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="border-t border-border px-6 py-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <MotionSpan
                key={total}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="font-heading text-2xl font-bold text-primary text-glow-primary"
              >
                {formatPrice(total)}
              </MotionSpan>
            </div>
            <MotionDiv
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full shadow-lg shadow-primary/25" size="lg">
                Finalizar compra
              </Button>
            </MotionDiv>
          </MotionFooter>
        )}
      </MotionAside>
    </>
  )
}
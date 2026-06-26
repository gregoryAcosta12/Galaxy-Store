"use client"

import { Plus, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice, type Product } from "@/lib/products"
import { MotionDiv, MotionSpan, MotionArticle } from "@/components/Motion"

const tagStyles: Record<NonNullable<Product["tag"]>, string> = {
  Nuevo: "bg-primary text-primary-foreground",
  Oferta: "bg-accent text-accent-foreground",
  "Top ventas": "bg-secondary text-secondary-foreground",
  "Edición limitada": "bg-chart-4 text-background",
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()

  return (
    <MotionArticle
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-8px_var(--color-primary)]"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {product.tag && (
          <MotionSpan
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-lg ${tagStyles[product.tag]}`}
          >
            {product.tag}
          </MotionSpan>
        )}
        {product.oldPrice && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground shadow-lg"
          >
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </MotionDiv>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">{product.brand}</span>
        <h3 className="mt-1 font-heading text-base font-semibold leading-tight text-pretty group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

        <div className="mt-2 flex items-center gap-1 text-sm">
          <Star className="size-4 fill-chart-4 text-chart-4" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-muted-foreground">({product.reviews.toLocaleString("es")})</span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
            )}
            <span className="font-heading text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          </div>
          <MotionDiv
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              size="icon" 
              onClick={() => add(product)} 
              aria-label={`Agregar ${product.name} al carrito`}
              className="shadow-lg shadow-primary/25"
            >
              <Plus className="size-5" />
            </Button>
          </MotionDiv>
        </div>
      </div>
    </MotionArticle>
  )
}
"use client"

import { Flame } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { motion } from "framer-motion"

export function Offers() {
  const deals = products.filter((p) => p.oldPrice).slice(0, 4)

  return (
    <section id="ofertas" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <motion.span 
            whileHover={{ rotate: 20, scale: 1.1 }}
            className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground"
          >
            <Flame className="size-5" />
          </motion.span>
          <div>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">Ofertas estelares</h2>
            <p className="text-muted-foreground">Descuentos por tiempo limitado. ¡Despega antes de que se agoten!</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {deals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
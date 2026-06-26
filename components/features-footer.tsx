"use client"

import { CreditCard, Headphones, Rocket, ShieldCheck, Truck } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  { icon: Truck, title: "Envío a todo el universo", desc: "Gratis en compras mayores a $99." },
  { icon: ShieldCheck, title: "Garantía extendida", desc: "Hasta 2 años en todos los equipos." },
  { icon: CreditCard, title: "Pago seguro", desc: "Hasta 12 cuotas sin interés." },
  { icon: Headphones, title: "Soporte 24/7", desc: "Atención gamer todos los días." },
]

export function Features() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {features.map((f, index) => (
          <motion.div 
            key={f.title} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors"
          >
            <motion.span 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary"
            >
              <f.icon className="size-5" />
            </motion.span>
            <div>
              <p className="font-semibold">{f.title}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
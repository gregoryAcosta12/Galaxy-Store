"use client"

import { Sparkles, Truck, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MotionDiv, MotionSpan, MotionH1, MotionP } from "@/components/Motion"
import { useState, useEffect } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="inicio" className="relative overflow-hidden bg-starfield">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <Sparkles className="size-4 text-accent" />
              Nueva temporada gamer 2026
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Tu universo gamer <span className="text-primary text-glow-primary">comienza</span> en la galaxia.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Consolas, laptops gamer, Nintendo, PlayStation, Xbox, celulares gamer y figuras de colección.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" nativeButton={false} render={<a href="#catalogo">Explorar catálogo</a>} />
              <Button size="lg" variant="outline" nativeButton={false} render={<a href="#ofertas">Ver ofertas</a>} />
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border">
              <Image src="/products/hero-console.png" alt="Consola gamer" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inicio" className="relative overflow-hidden bg-starfield">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <MotionDiv 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          <MotionSpan 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
          >
            <Sparkles className="size-4 text-accent animate-pulse" />
            Nueva temporada gamer 2026
          </MotionSpan>
          
          <MotionH1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Tu universo gamer <span className="text-primary text-glow-primary">comienza</span> en la galaxia.
          </MotionH1>
          
          <MotionP 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Consolas, laptops gamer, Nintendo, PlayStation, Xbox, celulares gamer y figuras de colección.
          </MotionP>
          
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button size="lg" nativeButton={false} render={<a href="#catalogo">Explorar catálogo</a>} />
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="#ofertas">Ver ofertas</a>} />
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-2 flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <MotionSpan whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Truck className="size-4 text-primary" /> Envío gratis +$99
            </MotionSpan>
            <MotionSpan whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" /> Garantía 2 años
            </MotionSpan>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="relative"
        >
          <MotionDiv 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-3xl" 
          />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/products/hero-console.png"
              alt="Consola gamer flotando en el espacio"
              fill
              priority
              className="object-cover"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
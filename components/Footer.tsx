"use client"

import { Rocket } from "lucide-react"
import { MotionDiv, MotionSpan, MotionA, MotionLi } from "@/components/Motion"
import { useState, useEffect } from "react"

export function Footer() {
  const [mounted, setMounted] = useState(false)
  
  const cols = [
    { title: "Tienda", links: ["PlayStation", "Xbox", "Nintendo", "Laptops Gamer", "Figuras"] },
    { title: "Ayuda", links: ["Envíos", "Devoluciones", "Garantía", "Contacto", "FAQ"] },
    { title: "Empresa", links: ["Sobre nosotros", "Blog", "Trabaja con nosotros", "Prensa"] },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Versión sin animaciones para SSR
  if (!mounted) {
    return (
      <footer className="bg-starfield">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
            <div className="flex flex-col gap-4">
              <a href="#inicio" className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Rocket className="size-5" />
                </span>
                <span className="font-heading text-lg font-bold">
                  Galaxi<span className="text-primary">Game</span>Store
                </span>
              </a>
              <p className="max-w-xs text-sm text-muted-foreground text-pretty">
                Tu destino para todo lo gamer en la galaxia. Consolas, laptops, celulares, videojuegos y figuras de colección.
              </p>
            </div>
            {cols.map((col) => (
              <div key={col.title}>
                <p className="mb-3 font-heading font-semibold">{col.title}</p>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#catalogo" className="transition-colors hover:text-primary">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
            <p>© 2026 GalaxiGameStore. Todos los derechos reservados.</p>
            <p>Hecho con energía estelar para gamers de todo el cosmos.</p>
          </div>
        </div>
      </footer>
    )
  }

  // Versión con animaciones para el cliente
  return (
    <footer className="bg-starfield">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
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
              <span className="font-heading text-lg font-bold">
                Galaxi<span className="text-primary">Game</span>Store
              </span>
            </MotionA>
            <p className="max-w-xs text-sm text-muted-foreground text-pretty">
              Tu destino para todo lo gamer en la galaxia. Consolas, laptops, celulares, videojuegos y figuras de colección.
            </p>
          </MotionDiv>

          {cols.map((col, colIndex) => (
            <MotionDiv 
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
            >
              <p className="mb-3 font-heading font-semibold">{col.title}</p>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {col.links.map((link, linkIndex) => (
                  <MotionLi 
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a 
                      href="#catalogo" 
                      className="transition-all hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </MotionLi>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row"
        >
          <p>© 2026 GalaxiGameStore. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            Hecho con 
            <MotionSpan
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </MotionSpan>
            para gamers de todo el cosmos.
          </p>
        </MotionDiv>
      </div>
    </footer>
  )
}

// Exportación por defecto (opcional pero recomendada)
export default Footer
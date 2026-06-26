import Image from "next/image"

const showcase = [
  { name: "Consolas", image: "/products/ps5.png", count: "5 productos" },
  { name: "Laptops Gamer", image: "/products/laptop-rog.png", count: "2 productos" },
  { name: "Celulares Gamer", image: "/products/phone-rog.png", count: "2 productos" },
  { name: "Figuras", image: "/products/figure-knight.png", count: "3 productos" },
]

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="mb-8 font-heading text-3xl font-bold text-balance sm:text-4xl">Explora por categoría</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {showcase.map((cat) => (
          <a
            key={cat.name}
            href="#catalogo"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={cat.image || "/placeholder.svg"}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="font-heading text-lg font-bold">{cat.name}</p>
              <p className="text-sm text-muted-foreground">{cat.count}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

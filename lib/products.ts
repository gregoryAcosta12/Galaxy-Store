export type Category =
  | "PlayStation"
  | "Xbox"
  | "Nintendo"
  | "Laptops Gamer"
  | "Celulares Gamer"
  | "Figuras"
  | "Videojuegos"
  | "Accesorios"

export type Product = {
  id: string
  name: string
  brand: string
  category: Category
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  image: string
  tag?: "Nuevo" | "Oferta" | "Top ventas" | "Edición limitada"
  description: string
}

export const categories: Category[] = [
  "PlayStation",
  "Xbox",
  "Nintendo",
  "Laptops Gamer",
  "Celulares Gamer",
  "Figuras",
  "Videojuegos",
  "Accesorios",
]

export const products: Product[] = [
  // PlayStation
  {
    id: "ps5-standard",
    name: "Consola NovaStation 5",
    brand: "PlayStation",
    category: "PlayStation",
    price: 549.99,
    oldPrice: 599.99,
    rating: 4.9,
    reviews: 2310,
    image: "/products/ps5.png",
    tag: "Top ventas",
    description: "Consola de nueva generación con SSD ultrarrápido y gráficos 4K a 120fps.",
  },
  {
    id: "ps5-pro",
    name: "NovaStation 5 Pro Edition",
    brand: "PlayStation",
    category: "PlayStation",
    price: 749.99,
    rating: 4.8,
    reviews: 870,
    image: "/products/ps5.png",
    tag: "Nuevo",
    description: "Potencia extrema con ray tracing avanzado y 2TB de almacenamiento.",
  },
  {
    id: "dualsense-cosmic",
    name: "Control DualNova Cósmico",
    brand: "PlayStation",
    category: "Accesorios",
    price: 74.99,
    rating: 4.7,
    reviews: 1540,
    image: "/products/controller.png",
    description: "Control inalámbrico con retroalimentación háptica y gatillos adaptativos.",
  },
  // Xbox
  {
    id: "xbox-series-x",
    name: "Consola OrbitBox Series X",
    brand: "Xbox",
    category: "Xbox",
    price: 529.99,
    oldPrice: 559.99,
    rating: 4.8,
    reviews: 1980,
    image: "/products/xbox-x.png",
    tag: "Oferta",
    description: "La consola más potente con 12 teraflops y compatibilidad con miles de títulos.",
  },
  {
    id: "xbox-series-s",
    name: "OrbitBox Series S Digital",
    brand: "Xbox",
    category: "Xbox",
    price: 299.99,
    rating: 4.6,
    reviews: 1120,
    image: "/products/xbox-s.png",
    tag: "Top ventas",
    description: "Consola digital compacta, perfecta para jugar en 1440p sin disco.",
  },
  // Nintendo
  {
    id: "switch-oled",
    name: "GalaxiSwitch OLED",
    brand: "Nintendo",
    category: "Nintendo",
    price: 349.99,
    rating: 4.9,
    reviews: 3050,
    image: "/products/switch.png",
    tag: "Top ventas",
    description: "Pantalla OLED vibrante de 7 pulgadas, modo portátil y dock para TV.",
  },
  {
    id: "switch-lite",
    name: "GalaxiSwitch Lite Turbo",
    brand: "Nintendo",
    category: "Nintendo",
    price: 199.99,
    oldPrice: 229.99,
    rating: 4.5,
    reviews: 980,
    image: "/products/switch-lite.png",
    tag: "Oferta",
    description: "Consola portátil ligera y compacta, ideal para jugar en cualquier lugar.",
  },
  {
    id: "steam-deck",
    name: "NebulaDeck Handheld PC",
    brand: "Valve",
    category: "Nintendo",
    price: 449.99,
    rating: 4.7,
    reviews: 760,
    image: "/products/steamdeck.png",
    tag: "Nuevo",
    description: "PC portátil para jugar toda tu biblioteca con potencia de escritorio.",
  },
  // Laptops Gamer
  {
    id: "laptop-rog",
    name: "Laptop Gamer StarBlade RGB",
    brand: "ROG",
    category: "Laptops Gamer",
    price: 1899.99,
    oldPrice: 2099.99,
    rating: 4.8,
    reviews: 540,
    image: "/products/laptop-rog.png",
    tag: "Oferta",
    description: "RTX de última generación, pantalla 240Hz y teclado RGB por tecla.",
  },
  {
    id: "laptop-alien",
    name: "Laptop Gamer Andromeda X17",
    brand: "Alienware",
    category: "Laptops Gamer",
    price: 2499.99,
    rating: 4.9,
    reviews: 410,
    image: "/products/laptop-alien.png",
    tag: "Edición limitada",
    description: "Diseño futurista, refrigeración líquida y CPU de 24 núcleos.",
  },
  // Celulares Gamer
  {
    id: "phone-rog",
    name: "Celular Gamer PulseFone 8",
    brand: "ROG Phone",
    category: "Celulares Gamer",
    price: 1099.99,
    rating: 4.7,
    reviews: 690,
    image: "/products/phone-rog.png",
    tag: "Nuevo",
    description: "Pantalla AMOLED 165Hz, gatillos táctiles y batería de 6000mAh.",
  },
  {
    id: "phone-red",
    name: "Celular Gamer RedComet Pro",
    brand: "RedMagic",
    category: "Celulares Gamer",
    price: 799.99,
    oldPrice: 899.99,
    rating: 4.6,
    reviews: 430,
    image: "/products/phone-red.png",
    tag: "Oferta",
    description: "Ventilador interno integrado y procesador de gama alta para gaming intenso.",
  },
  // Figuras
  {
    id: "figure-knight",
    name: "Figura Coleccionable Halo Guardian",
    brand: "GalaxiToys",
    category: "Figuras",
    price: 59.99,
    rating: 4.8,
    reviews: 320,
    image: "/products/figure-knight.png",
    tag: "Edición limitada",
    description: "Figura articulada de 30cm del legendario soldado espacial con accesorios.",
  },
  {
    id: "figure-hero",
    name: "Figura Coleccionable War God",
    brand: "GalaxiToys",
    category: "Figuras",
    price: 69.99,
    oldPrice: 84.99,
    rating: 4.9,
    reviews: 280,
    image: "/products/figure-hero.png",
    tag: "Oferta",
    description: "Estatua de resina detallada del guerrero del hacha, pieza de colección.",
  },
  {
    id: "figure-plumber",
    name: "Figura Coleccionable Super Jumper",
    brand: "GalaxiToys",
    category: "Figuras",
    price: 34.99,
    rating: 4.6,
    reviews: 510,
    image: "/products/figure-plumber.png",
    tag: "Top ventas",
    description: "Figura vinílica del icónico héroe saltarín, perfecta para tu colección.",
  },
  // Videojuegos
  {
    id: "game-cosmic",
    name: "Cosmic Odyssey: Edición Galáctica",
    brand: "Videojuego",
    category: "Videojuegos",
    price: 69.99,
    rating: 4.8,
    reviews: 1420,
    image: "/products/game.png",
    tag: "Nuevo",
    description: "Aventura de mundo abierto a través de planetas en una galaxia infinita.",
  },
  {
    id: "game-pack",
    name: "Pack Triple AAA Estelar",
    brand: "Videojuego",
    category: "Videojuegos",
    price: 119.99,
    oldPrice: 179.99,
    rating: 4.7,
    reviews: 860,
    image: "/products/game.png",
    tag: "Oferta",
    description: "Tres títulos premium en un solo paquete con contenido descargable incluido.",
  },
]

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

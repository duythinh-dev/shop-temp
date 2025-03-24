"use client"

import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <motion.div
      className="group bg-background rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/product/${product.id}`} className="block relative h-[200px]">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg text-gradient">
            {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
          </span>

          <Button size="sm" onClick={() => addToCart(product)} className="gap-2 bg-gradient-primary hover:opacity-90">
            <ShoppingCart className="h-4 w-4" />
            Thêm
          </Button>
        </div>
      </div>
    </motion.div>
  )
}


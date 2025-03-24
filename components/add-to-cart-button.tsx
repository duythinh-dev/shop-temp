"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleAddToCart = () => {
    setLoading(true)

    // Simulate API call or processing
    setTimeout(() => {
      addToCart(product)
      setLoading(false)

      toast({
        title: "Đã thêm vào giỏ hàng",
        description: `${product.name} đã được thêm vào giỏ hàng của bạn.`,
      })
    }, 500)
  }

  return (
    <Button size="lg" className="gap-2" onClick={handleAddToCart} disabled={loading}>
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
      ) : (
        <ShoppingCart className="h-5 w-5" />
      )}
      Thêm vào giỏ hàng
    </Button>
  )
}


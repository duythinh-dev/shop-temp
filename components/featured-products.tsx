"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import ProductCard from "@/components/product-card"
import type { Product } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real app, this would be an API call
        // const res = await fetch('/api/products/featured')
        // const data = await res.json()

        // Simulating API call with mock data
        setTimeout(() => {
          setProducts(mockProducts)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex justify-between">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-9 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  )
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Áo thun nam cao cấp",
    description: "Áo thun nam chất liệu cotton 100%, thoáng mát, thấm hút mồ hôi tốt",
    price: 250000,
    image: "/placeholder.svg?height=200&width=300",
    category: "thoi-trang",
  },
  {
    id: "2",
    name: "Tai nghe không dây",
    description: "Tai nghe Bluetooth chống ồn, thời lượng pin 20 giờ",
    price: 1500000,
    image: "/placeholder.svg?height=200&width=300",
    category: "dien-tu",
  },
  {
    id: "3",
    name: "Bàn làm việc gỗ tự nhiên",
    description: "Bàn làm việc gỗ sồi tự nhiên, thiết kế hiện đại, chắc chắn",
    price: 3500000,
    image: "/placeholder.svg?height=200&width=300",
    category: "nha-cua",
  },
  {
    id: "4",
    name: "Máy đo huyết áp",
    description: "Máy đo huyết áp điện tử, độ chính xác cao, dễ sử dụng",
    price: 850000,
    image: "/placeholder.svg?height=200&width=300",
    category: "suc-khoe",
  },
]


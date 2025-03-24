import type { Product } from "@/lib/types"
import ProductCard from "@/components/product-card"

interface RelatedProductsProps {
  categoryId: string
  currentProductId: string
}

async function getRelatedProducts(categoryId: string, currentProductId: string): Promise<Product[]> {
  // In a real app, this would be an API call
  // const res = await fetch(`/api/products/related?category=${categoryId}&exclude=${currentProductId}`)
  // const data = await res.json()

  // Simulating API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      const relatedProducts = mockProducts
        .filter((p) => p.category === categoryId && p.id !== currentProductId)
        .slice(0, 4)
      resolve(relatedProducts)
    }, 500)
  })
}

export default async function RelatedProducts({ categoryId, currentProductId }: RelatedProductsProps) {
  const products = await getRelatedProducts(categoryId, currentProductId)

  if (products.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
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
  {
    id: "5",
    name: "Quần jean nam",
    description: "Quần jean nam form slim fit, co giãn tốt, thoải mái khi vận động",
    price: 450000,
    image: "/placeholder.svg?height=200&width=300",
    category: "thoi-trang",
  },
  {
    id: "6",
    name: "Điện thoại thông minh",
    description: "Điện thoại thông minh màn hình 6.5 inch, camera 48MP, pin 5000mAh",
    price: 7500000,
    image: "/placeholder.svg?height=200&width=300",
    category: "dien-tu",
  },
]


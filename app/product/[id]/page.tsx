import { ArrowLeft, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import AddToCartButton from "@/components/add-to-cart-button"
import type { Product } from "@/lib/types"
import RelatedProducts from "@/components/related-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

async function getProduct(id: string): Promise<Product> {
  // In a real app, this would be an API call
  // const res = await fetch(`/api/products/${id}`)
  // const data = await res.json()

  // Simulating API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === id) || mockProducts[0]
      resolve(product)
    }, 500)
  })
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  return (
    <main className="container mx-auto py-8 px-4">
      <Link href="/products" className="flex items-center gap-2 text-muted-foreground mb-8">
        <ArrowLeft className="h-4 w-4" />
        Quay lại danh sách sản phẩm
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-4">
            {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-muted-foreground">(120 đánh giá)</span>
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Kích thước</h3>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <Button key={size} variant="outline" className="w-12 h-12">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Màu sắc</h3>
            <div className="flex gap-2">
              {[
                { name: "Đen", color: "bg-black" },
                { name: "Trắng", color: "bg-white border" },
                { name: "Xanh", color: "bg-blue-500" },
                { name: "Đỏ", color: "bg-red-500" },
              ].map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.color} flex items-center justify-center`}
                  title={color.name}
                >
                  {color.name === "Đen" && <Check className="h-4 w-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-2">Số lượng</h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                -
              </Button>
              <span className="w-12 text-center">1</span>
              <Button variant="outline" size="icon">
                +
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AddToCartButton product={product} />
            <Button variant="outline" size="lg">
              Mua ngay
            </Button>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Giao hàng miễn phí cho đơn hàng trên 500.000đ</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Đổi trả trong vòng 30 ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Bảo hành 12 tháng</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Sản phẩm liên quan</h2>
        <RelatedProducts categoryId={product.category} currentProductId={product.id} />
      </div>
    </main>
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


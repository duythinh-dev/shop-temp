"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductList from "@/components/product-list"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryDetailPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug) || categories[0]
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
    // In a real app, you would filter products based on search query
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <Link href="/category" className="flex items-center gap-2 text-muted-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        Quay lại danh mục
      </Link>

      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-white/80 max-w-xl mx-auto">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Input
            placeholder="Tìm kiếm sản phẩm..."
            className="pl-10 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Button
            type="submit"
            size="sm"
            variant="ghost"
            className="absolute right-0 top-0 h-full px-3 py-0 text-muted-foreground hover:text-primary"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>
        </form>

        <div className="flex gap-4">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
              <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
              <SelectItem value="popular">Phổ biến nhất</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ProductList />
    </main>
  )
}

const categories = [
  {
    id: 1,
    name: "Thời trang",
    slug: "thoi-trang",
    image: "/placeholder.svg?height=300&width=1200",
    description:
      "Khám phá bộ sưu tập thời trang mới nhất với các thiết kế hiện đại, chất liệu cao cấp và phong cách đa dạng cho mọi dịp.",
  },
  {
    id: 2,
    name: "Điện tử",
    slug: "dien-tu",
    image: "/placeholder.svg?height=300&width=1200",
    description:
      "Các sản phẩm công nghệ hiện đại, từ điện thoại thông minh, máy tính đến thiết bị âm thanh và phụ kiện chất lượng cao.",
  },
  {
    id: 3,
    name: "Nhà cửa",
    slug: "nha-cua",
    image: "/placeholder.svg?height=300&width=1200",
    description:
      "Trang trí không gian sống của bạn với các sản phẩm nội thất và đồ gia dụng thiết kế tinh tế, chất lượng và bền bỉ.",
  },
  {
    id: 4,
    name: "Sức khỏe",
    slug: "suc-khoe",
    image: "/placeholder.svg?height=300&width=1200",
    description:
      "Chăm sóc sức khỏe toàn diện với các sản phẩm chất lượng cao, từ thiết bị y tế đến thực phẩm chức năng và dụng cụ tập luyện.",
  },
]


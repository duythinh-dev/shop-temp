import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import CategoryProductList from "@/components/category-product-list"
import CategoryProductListSkeleton from "@/components/category-product-list-skeleton"

export default function CategoryPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Danh mục sản phẩm</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="group relative h-[200px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
              <h3 className="text-white text-xl font-bold transform transition-transform duration-300 group-hover:scale-110">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Thời trang</h2>
        <Suspense fallback={<CategoryProductListSkeleton />}>
          <CategoryProductList category="thoi-trang" />
        </Suspense>
        <div className="flex justify-center mt-8">
          <Link href="/category/thoi-trang">
            <Button variant="outline">Xem tất cả sản phẩm thời trang</Button>
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Điện tử</h2>
        <Suspense fallback={<CategoryProductListSkeleton />}>
          <CategoryProductList category="dien-tu" />
        </Suspense>
        <div className="flex justify-center mt-8">
          <Link href="/category/dien-tu">
            <Button variant="outline">Xem tất cả sản phẩm điện tử</Button>
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Nhà cửa</h2>
        <Suspense fallback={<CategoryProductListSkeleton />}>
          <CategoryProductList category="nha-cua" />
        </Suspense>
        <div className="flex justify-center mt-8">
          <Link href="/category/nha-cua">
            <Button variant="outline">Xem tất cả sản phẩm nhà cửa</Button>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Sức khỏe</h2>
        <Suspense fallback={<CategoryProductListSkeleton />}>
          <CategoryProductList category="suc-khoe" />
        </Suspense>
        <div className="flex justify-center mt-8">
          <Link href="/category/suc-khoe">
            <Button variant="outline">Xem tất cả sản phẩm sức khỏe</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

const categories = [
  {
    id: 1,
    name: "Thời trang",
    slug: "thoi-trang",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Điện tử",
    slug: "dien-tu",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Nhà cửa",
    slug: "nha-cua",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Sức khỏe",
    slug: "suc-khoe",
    image: "/placeholder.svg?height=200&width=300",
  },
]


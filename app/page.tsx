import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Sản phẩm nổi bật</h2>
          <Link href="/products">
            <Button variant="outline" className="gap-2">
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <FeaturedProducts />
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gradient">Về chúng tôi</h2>
              <p className="text-muted-foreground mb-6">
                Chúng tôi cung cấp những sản phẩm chất lượng cao với giá cả phải chăng. Với hơn 10 năm kinh nghiệm trong
                ngành, chúng tôi tự hào mang đến cho khách hàng những trải nghiệm mua sắm tuyệt vời nhất.
              </p>
              <Link href="/about">
                <Button className="bg-gradient-primary hover:opacity-90">Tìm hiểu thêm</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <Image src="/placeholder.svg?height=400&width=600" alt="About us" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Danh mục sản phẩm</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </section>
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


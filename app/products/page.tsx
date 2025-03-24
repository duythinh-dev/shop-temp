"use client"

import type React from "react"

import { useState } from "react"
import { Suspense } from "react"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductList from "@/components/product-list"
import ProductListSkeleton from "@/components/product-list-skeleton"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
    // In a real app, you would filter products based on search query
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Tất cả sản phẩm</h1>

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

          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Lọc
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block">
          <div className="border rounded-lg p-6 shadow-sm bg-card">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-lg">Danh mục</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Bỏ chọn tất cả
              </Button>
            </div>

            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded border flex items-center justify-center group relative">
                      <input
                        type="checkbox"
                        id={`cat-${category.id}`}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer peer"
                      />
                      <div className="h-full w-full absolute inset-0 rounded border border-primary/20 peer-checked:bg-primary peer-checked:border-primary peer-hover:border-primary/50 transition-colors"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <label
                      htmlFor={`cat-${category.id}`}
                      className="text-sm cursor-pointer hover:text-primary transition-colors"
                    >
                      {category.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Giá</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label htmlFor="price-from" className="text-sm text-muted-foreground">
                    Từ
                  </label>
                  <Input id="price-from" placeholder="0đ" className="h-9" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="price-to" className="text-sm text-muted-foreground">
                    Đến
                  </label>
                  <Input id="price-to" placeholder="10.000.000đ" className="h-9" />
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90">Áp dụng</Button>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Đánh giá</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded border flex items-center justify-center group relative">
                        <input
                          type="checkbox"
                          id={`rating-${rating}`}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer peer"
                        />
                        <div className="h-full w-full absolute inset-0 rounded border border-primary/20 peer-checked:bg-primary peer-checked:border-primary peer-hover:border-primary/50 transition-colors"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <label
                        htmlFor={`rating-${rating}`}
                        className="text-sm cursor-pointer hover:text-primary transition-colors flex items-center"
                      >
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-muted-foreground">{rating === 5 ? "trở lên" : "trở lên"}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <Suspense fallback={<ProductListSkeleton />}>
            <ProductList />
          </Suspense>
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
  },
  {
    id: 2,
    name: "Điện tử",
    slug: "dien-tu",
  },
  {
    id: 3,
    name: "Nhà cửa",
    slug: "nha-cua",
  },
  {
    id: 4,
    name: "Sức khỏe",
    slug: "suc-khoe",
  },
  {
    id: 5,
    name: "Thể thao",
    slug: "the-thao",
  },
  {
    id: 6,
    name: "Sách & Văn phòng phẩm",
    slug: "sach-vpp",
  },
]


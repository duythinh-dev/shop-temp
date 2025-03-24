"use client"

import { useState } from "react"
import { BarChart3, Box, DollarSign, Package, Plus, Search, Settings, ShoppingCart, Trash, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Product } from "@/lib/types"

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>(mockProducts)

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r bg-muted/40">
        <div className="flex h-14 items-center border-b px-4 font-semibold">Admin Dashboard</div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 text-secondary-foreground transition-all"
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Package className="h-4 w-4" />
              Sản phẩm
            </Link>
            <Link
              href="/admin/orders"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <ShoppingCart className="h-4 w-4" />
              Đơn hàng
            </Link>
            <Link
              href="/admin/customers"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              Khách hàng
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Settings className="h-4 w-4" />
              Cài đặt
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <Link href="/admin" className="md:hidden">
            <BarChart3 className="h-6 w-6" />
            <span className="sr-only">Dashboard</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm..."
                  className="w-full bg-background shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
        </header>

        <main className="grid flex-1 gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Doanh thu</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(12500000)}
                </div>
                <p className="text-xs text-muted-foreground">+20.1% so với tháng trước</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Đơn hàng</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+24</div>
                <p className="text-xs text-muted-foreground">+12.5% so với tháng trước</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sản phẩm</CardTitle>
                <Box className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">132</div>
                <p className="text-xs text-muted-foreground">+8 sản phẩm mới trong tháng</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Khách hàng</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+32 khách hàng mới</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="products">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="products">Sản phẩm</TabsTrigger>
                <TabsTrigger value="orders">Đơn hàng gần đây</TabsTrigger>
              </TabsList>
              <Button size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                Thêm sản phẩm
              </Button>
            </div>

            <TabsContent value="products" className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Ảnh</TableHead>
                    <TableHead>Tên sản phẩm</TableHead>
                    <TableHead>Danh mục</TableHead>
                    <TableHead className="text-right">Giá</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="rounded object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right">
                        {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Xóa</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="orders" className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã đơn hàng</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Ngày đặt</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Tổng tiền</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-001</TableCell>
                    <TableCell>Nguyễn Văn A</TableCell>
                    <TableCell>{new Date().toLocaleDateString("vi-VN")}</TableCell>
                    <TableCell>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                        Hoàn thành
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(1250000)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-002</TableCell>
                    <TableCell>Trần Thị B</TableCell>
                    <TableCell>{new Date().toLocaleDateString("vi-VN")}</TableCell>
                    <TableCell>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800">
                        Đang giao
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(850000)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-003</TableCell>
                    <TableCell>Lê Văn C</TableCell>
                    <TableCell>{new Date().toLocaleDateString("vi-VN")}</TableCell>
                    <TableCell>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">
                        Đang xử lý
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(2350000)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </main>
      </div>
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


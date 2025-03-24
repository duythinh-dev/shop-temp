"use client"

import type React from "react"

import { Check, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/ui/use-toast"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const shipping = subtotal > 500000 ? 0 : 30000
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      clearCart()

      toast({
        title: "Đặt hàng thành công!",
        description: "Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được xử lý.",
      })

      // Redirect to success page
      window.location.href = "/checkout/success"
    }, 2000)
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-2">Giỏ hàng trống</h2>
          <p className="text-muted-foreground mb-8">Bạn cần thêm sản phẩm vào giỏ hàng trước khi thanh toán</p>
          <Link href="/products">
            <Button size="lg">Tiếp tục mua sắm</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Thông tin giao hàng</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Họ</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Tên</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Input id="address" required />
                  </div>
                  <div>
                    <Label htmlFor="city">Thành phố</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="district">Quận/Huyện</Label>
                    <Input id="district" required />
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Phương thức thanh toán</h2>

                <RadioGroup defaultValue="card">
                  <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                      <CreditCard className="h-5 w-5" />
                      Thẻ tín dụng/ghi nợ
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                    <RadioGroupItem value="momo" id="momo" />
                    <Label htmlFor="momo" className="cursor-pointer">
                      Ví MoMo
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="cursor-pointer">
                      Thanh toán khi nhận hàng (COD)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                    Đang xử lý...
                  </span>
                ) : (
                  "Hoàn tất đặt hàng"
                )}
              </Button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Đơn hàng của bạn</h3>

            <div className="space-y-4 mb-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded"
                    />
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs">
                      {item.quantity}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium line-clamp-1">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.product.category}</p>
                  </div>
                  <div className="text-right">
                    {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                      item.product.price * item.quantity,
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-3 mt-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phí vận chuyển</span>
                <span>
                  {shipping === 0
                    ? "Miễn phí"
                    : new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(shipping)}
                </span>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold">
                <span>Tổng cộng</span>
                <span>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(total)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Giao hàng miễn phí cho đơn hàng trên 500.000đ</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Đổi trả trong vòng 30 ngày</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Bảo mật thông tin thanh toán</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


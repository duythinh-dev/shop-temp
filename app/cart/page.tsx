"use client"

import { Minus, Plus, ShoppingCart, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>
        <div className="h-[400px] flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>
        <div className="text-center py-16">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Giỏ hàng trống</h2>
          <p className="text-muted-foreground mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <Link href="/products">
            <Button size="lg">Tiếp tục mua sắm</Button>
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const shipping = subtotal > 500000 ? 0 : 30000
  const total = subtotal + shipping

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <h3 className="font-semibold">Sản phẩm</h3>
                </div>
                <div className="col-span-2 text-center">
                  <h3 className="font-semibold">Giá</h3>
                </div>
                <div className="col-span-2 text-center">
                  <h3 className="font-semibold">Số lượng</h3>
                </div>
                <div className="col-span-2 text-right">
                  <h3 className="font-semibold">Tổng</h3>
                </div>
              </div>
            </div>

            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.product.id} className="p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <div className="flex gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.product.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.product.category}</p>
                          <button
                            className="text-sm text-red-500 mt-1 flex items-center gap-1"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <Trash className="h-3 w-3" />
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                        item.product.price,
                      )}
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="col-span-2 text-right font-medium">
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                        item.product.price * item.quantity,
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={clearCart}>
              Xóa giỏ hàng
            </Button>
            <Link href="/products">
              <Button variant="outline">Tiếp tục mua sắm</Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Tóm tắt đơn hàng</h3>

            <div className="space-y-3">
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

            <Link href="/checkout">
              <Button className="w-full mt-6">Thanh toán</Button>
            </Link>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>Chúng tôi chấp nhận các phương thức thanh toán:</p>
              <div className="flex gap-2 mt-2">
                <div className="bg-muted p-1 rounded">Visa</div>
                <div className="bg-muted p-1 rounded">Mastercard</div>
                <div className="bg-muted p-1 rounded">Momo</div>
                <div className="bg-muted p-1 rounded">COD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


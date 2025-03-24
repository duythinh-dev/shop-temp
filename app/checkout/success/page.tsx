import { Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Đặt hàng thành công!</h1>
        <p className="text-muted-foreground mb-8">
          Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được xác nhận và đang được xử lý. Chúng tôi sẽ gửi email xác nhận
          đơn hàng và thông tin vận chuyển cho bạn trong thời gian sớm nhất.
        </p>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="font-semibold mb-2">Mã đơn hàng: #ORD12345</h2>
          <p className="text-sm text-muted-foreground">Ngày đặt hàng: {new Date().toLocaleDateString("vi-VN")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button>Tiếp tục mua sắm</Button>
          </Link>
          <Link href="/account/orders">
            <Button variant="outline">Xem đơn hàng</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


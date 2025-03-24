"use client"

import type React from "react"

import { Menu, Moon, Search, ShoppingCart, Sun, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useCart } from "@/lib/cart-context"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { cart } = useCart()
  const [mounted, setMounted] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setMounted(true)

    const count = cart.reduce((total, item) => total + item.quantity, 0)
    setTotalItems(count)
  }, [cart])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
    // In a real app, you would redirect to search results page
    // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <span className="text-gradient">Modern Shop</span>
              </Link>
              <Link href="/" className="hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <Link href="/products" className="hover:text-primary transition-colors">
                Sản phẩm
              </Link>
              <Link href="/category" className="hover:text-primary transition-colors">
                Danh mục
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                Giới thiệu
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Liên hệ
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center gap-2 font-semibold">
          <ShoppingCart className="h-5 w-5 text-primary" />
          <span className="hidden md:inline-block text-gradient">Modern Shop</span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-primary">
            Trang chủ
          </Link>
          <Link href="/products" className="font-medium transition-colors hover:text-primary">
            Sản phẩm
          </Link>
          <Link href="/category" className="font-medium transition-colors hover:text-primary">
            Danh mục
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-primary">
            Giới thiệu
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-primary">
            Liên hệ
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden md:flex mr-2 relative">
            <div className="relative flex w-full items-center">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm..."
                className="w-full rounded-lg bg-background pl-8 pr-10 md:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                size="sm"
                variant="ghost"
                className="absolute right-0 h-full px-3 py-0 text-muted-foreground hover:text-primary"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Tìm kiếm</span>
              </Button>
            </div>
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}


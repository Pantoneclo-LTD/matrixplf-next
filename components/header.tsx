"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 lg:py-6">
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo - MATRIX PLATFROM with underline */}
          <Link href="/" className="group">
            <span className="text-white text-xl lg:text-2xl font-bold tracking-wider border-b-2 border-white pb-1">
              MATRIX PLATFROM
            </span>
          </Link>

          {/* Desktop Navigation - Frosted Glass Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md rounded-full px-2 py-2 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/50 ${index === 0 ? "text-emerald-600" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="ml-2 gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-5 py-2 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-slate-700 font-medium py-2 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full gap-2 bg-emerald-500 hover:bg-emerald-600 text-white mt-4 rounded-full">
              <Download className="w-4 h-4" />
              Download Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

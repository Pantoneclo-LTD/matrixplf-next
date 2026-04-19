"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "FASHION WEAR",
    bgColor: "bg-red-600",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    ],
  },
  {
    id: 2,
    name: "OUTERWEAR",
    bgColor: "bg-slate-600",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=600&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    ],
  },
  {
    id: 3,
    name: "BOTTOMWEAR",
    bgColor: "bg-red-600",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    ],
  },
  {
    id: 4,
    name: "CASUALWEAR",
    bgColor: "bg-slate-500",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    ],
  },
  {
    id: 5,
    name: "ACTIVEWEAR",
    bgColor: "bg-emerald-700",
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    ],
  },
  {
    id: 6,
    name: "KNITWEAR",
    bgColor: "bg-amber-700",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80",
    ],
  },
  {
    id: 7,
    name: "DENIM",
    bgColor: "bg-blue-800",
    images: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80",
    ],
  },
  {
    id: 8,
    name: "LINGERIE",
    bgColor: "bg-rose-600",
    images: [
      "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=600&q=80",
      "https://images.unsplash.com/photo-1566176471155-19ae5b9d186e?w=600&q=80",
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=600&q=80",
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=80",
    ],
  },
]

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [imageIndices, setImageIndices] = useState<Record<number, number>>({})
  const [sliderPosition, setSliderPosition] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const intervalRefs = useRef<Record<number, NodeJS.Timeout>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-slide images on hover
  useEffect(() => {
    if (hoveredId !== null) {
      const category = categories.find(c => c.id === hoveredId)
      if (category) {
        intervalRefs.current[hoveredId] = setInterval(() => {
          setImageIndices(prev => ({
            ...prev,
            [hoveredId]: ((prev[hoveredId] || 0) + 1) % category.images.length
          }))
        }, 800)
      }
    }

    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval)
    }
  }, [hoveredId])

  const handleMouseEnter = (id: number) => {
    setHoveredId(id)
    setImageIndices(prev => ({ ...prev, [id]: 0 }))
  }

  const handleMouseLeave = (id: number) => {
    setHoveredId(null)
    if (intervalRefs.current[id]) {
      clearInterval(intervalRefs.current[id])
      delete intervalRefs.current[id]
    }
  }

  const cardWidth = 320
  const gap = 8
  const visibleCards = 4
  const maxScroll = (categories.length - visibleCards) * (cardWidth + gap)

  const handlePrev = () => {
    setSliderPosition(prev => Math.max(0, prev - (cardWidth + gap)))
  }

  const handleNext = () => {
    setSliderPosition(prev => Math.min(maxScroll, prev + (cardWidth + gap)))
  }

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Product Categories</span>
            </div>
            
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              What We
              <span className="text-emerald-400"> Create</span>
            </h2>
            
            <p
              className={`text-lg text-slate-300 max-w-xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              From casual essentials to technical performance wear, we manufacture 
              across diverse categories with consistent quality.
            </p>
          </div>
        </div>
      </div>

      {/* Product slider - Full width like Gokaldas */}
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          disabled={sliderPosition === 0}
          className={`absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={sliderPosition >= maxScroll}
          className={`absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards container */}
        <div className="overflow-hidden px-6 lg:px-16">
          <div
            ref={sliderRef}
            className="flex gap-2 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${sliderPosition}px)` }}
          >
            {categories.map((category, index) => {
              const currentImageIndex = imageIndices[category.id] || 0
              const isHovered = hoveredId === category.id
              
              return (
                <div
                  key={category.id}
                  className={`flex-shrink-0 relative overflow-hidden cursor-pointer group transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ 
                    transitionDelay: `${200 + index * 100}ms`,
                    width: "320px",
                    height: "550px",
                    minHeight: "550px"
                  }}
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  onMouseLeave={() => handleMouseLeave(category.id)}
                >
                  {/* Background color */}
                  <div className={`absolute inset-0 ${category.bgColor} transition-all duration-500`} style={{ width: "320px", height: "550px" }} />
                  
                  {/* Images with slide effect */}
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`absolute top-0 left-0 transition-all duration-500 ${
                        imgIndex === currentImageIndex 
                          ? "opacity-100 scale-100" 
                          : "opacity-0 scale-105"
                      }`}
                      style={{ width: "320px", height: "550px" }}
                    >
                      <Image
                        src={image}
                        alt={`${category.name} ${imgIndex + 1}`}
                        fill
                        sizes="320px"
                        className={`object-cover object-top transition-all duration-700 ${
                          isHovered ? "grayscale-0" : "grayscale-[30%]"
                        }`}
                      />
                    </div>
                  ))}
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category name - bottom left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className={`text-xl lg:text-2xl font-bold text-white tracking-wider transition-all duration-300 ${
                      isHovered ? "translate-y-0" : "translate-y-0"
                    }`}>
                      {category.name}
                    </h3>
                    
                    {/* Image indicators */}
                    <div className={`flex gap-1.5 mt-4 transition-all duration-300 ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}>
                      {category.images.map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            imgIndex === currentImageIndex 
                              ? "w-6 bg-white" 
                              : "w-2 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover border effect */}
                  <div className={`absolute inset-0 border-2 transition-all duration-300 ${
                    isHovered ? "border-white/30" : "border-transparent"
                  }`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="container mx-auto px-6 lg:px-12 mt-8 relative z-10">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-400 rounded-full transition-all duration-300"
            style={{ width: `${((sliderPosition / maxScroll) * 100) + (100 / categories.length)}%` }}
          />
        </div>
      </div>
    </section>
  )
}

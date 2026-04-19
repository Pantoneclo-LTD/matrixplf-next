"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function WhoWeAreHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4ce5eb96784?q=80&w=2070&auto=format&fit=crop"
          alt="Manufacturing operations"
          fill
          priority
          loading="eager"
          className="object-cover scale-105 animate-slow-zoom"
          style={{ animation: 'kenBurns 20s ease-out forwards' }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight">
                BUILT TO MANUFACTURE
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-emerald-400 leading-none tracking-tight mt-2">
                STRUCTURED TO DELIVER.
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className={`mt-8 space-y-4 max-w-2xl transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                Matrix Apparels Is An Integrated Manufacturing Group That Owns Its Fabric Supply, Controls Its Production & Delivers Globally
              </p>
            </div>
            
            {/* Decorative line */}
            <div 
               className={`h-1 w-24 bg-emerald-500 mt-12 rounded-full transition-all duration-1000 delay-500 origin-left ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}} />
    </section>
  )
}

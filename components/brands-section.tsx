"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"

const ownBrands = [
  {
    name: "PANTONECLO",
    logoMarkup: (
      <div className="mb-2">
        <h3 className="text-[2.5rem] leading-none font-black italic tracking-tighter text-slate-900 transform scale-y-110">
          PANTONECLO
        </h3>
      </div>
    ),
    category: "Men's Fashion",
    desc: "A European menswear brand registered and distributed across 16 EU countries. The range covers casual knitwear, outerwear, and accessories at accessible price points.",
    linkText: "EXPLORE BRAND",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop", // two men walking
    align: "right"
  },
  {
    name: "leafletic",
    logoMarkup: (
      <div className="mb-2 flex items-center justify-end lg:justify-end gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79l5.24 5.24c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.61 8.81C7.03 5.48 10.23 3.1 14 3.03c-2.3 2.1-3.6 5.1-3.6 8.3 0 3.73 1.95 6.99 4.88 8.84-1.03.48-2.17.76-3.38.76h-.9z"/>
        </svg>
        <h3 className="text-4xl font-bold tracking-tight text-slate-900">
          leafletic
        </h3>
      </div>
    ),
    category: "Ladies' Activewear",
    desc: "Ladies activewear and athleisure brand, targeting the EU market with performance-driven designs at competitive price points.",
    linkText: "EXPLORE BRAND",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop", // two women active
    align: "left"
  },
  {
    name: "amanté",
    logoMarkup: (
      <div className="mb-2">
        <h3 className="text-5xl font-serif tracking-tight text-slate-900 lowercase">
          amant<span className="text-red-500">é</span>
        </h3>
      </div>
    ),
    category: "Lingerie",
    desc: "Established lingerie brand with technical bra construction. High size inclusivity & mid-market positioning.",
    linkText: "EXPLORE BRAND",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop", // mannequins/lingerie aesthetic
    align: "right"
  }
]

export function BrandsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={sectionRef} id="brands" className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Banner Area */}
      <div className="relative h-[55vh] min-h-[450px] w-full flex items-center bg-[#0a1122]">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
          alt="Gym context" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />

        <div className="container mx-auto relative z-10 px-6 lg:px-12 mt-12">
           <h1 
             className={`text-5xl lg:text-7xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
             }`}
           >
             Our Own <span className="text-[#38bdf8]">Brands</span>
           </h1>
           <p 
             className={`text-base lg:text-lg text-white/80 max-w-2xl font-medium leading-relaxed transition-all duration-700 delay-200 ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
             }`}
           >
             Proof that we do not just make garments — we understand what sells. Concept & design through production to retail distribution.
           </p>
        </div>
      </div>

      {/* Brand Blocks */}
      <div className="w-full flex flex-col">
        {ownBrands.map((brand, idx) => {
          const isLeftImage = brand.align === 'left'

          return (
            <div key={idx} className="w-full grid lg:grid-cols-2 min-h-[500px]">
              
              {/* Image Block */}
              <div 
                className={`relative h-[400px] lg:h-auto overflow-hidden ${
                  isLeftImage ? "lg:order-1" : "lg:order-2"
                }`}
              >
                 <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay z-10" />
                 {/* Create a glowing edge mask to blend images seamlessly on large screens like in the mockup */}
                 <div className={`hidden lg:block absolute inset-y-0 ${isLeftImage ? 'right-0' : 'left-0'} w-32 bg-gradient-to-${isLeftImage ? 'l' : 'r'} from-white to-transparent z-20`} />
                 
                 <img 
                   src={brand.image} 
                   alt={brand.name} 
                   className="absolute inset-0 w-full h-full object-cover"
                   style={{
                     objectPosition: isLeftImage ? 'center right' : 'center left'
                   }}
                 />
              </div>

              {/* Text Block */}
              <div 
                className={`flex flex-col justify-center p-12 lg:p-24 bg-white z-30 ${
                  isLeftImage ? "lg:order-2 text-left lg:text-right" : "lg:order-1 text-left lg:text-left"
                }`}
              >
                 {brand.logoMarkup}
                 
                 <h4 className={`text-xl font-bold text-slate-800 mb-6 tracking-tight ${
                   isLeftImage ? "lg:text-right" : ""
                 }`}>
                   {brand.category}
                 </h4>
                 
                 <p className={`text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-md ${
                   isLeftImage ? "lg:ml-auto text-left lg:text-right" : ""
                 } mb-8`}>
                   {brand.desc}
                 </p>
                 
                 <div className={`flex items-center ${isLeftImage ? 'lg:justify-end' : ''}`}>
                   {isLeftImage ? (
                     <a href="#" className="inline-flex items-center gap-2 text-[#38bdf8] font-bold text-xs tracking-wider uppercase group">
                       <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                       <span className="border-b-2 border-transparent group-hover:border-[#38bdf8] pb-0.5 transition-colors">{brand.linkText}</span>
                     </a>
                   ) : (
                     <a href="#" className="inline-flex items-center gap-2 text-[#38bdf8] font-bold text-xs tracking-wider uppercase group">
                       <span className="border-b-2 border-transparent group-hover:border-[#38bdf8] pb-0.5 transition-colors">{brand.linkText}</span>
                       <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                     </a>
                   )}
                 </div>
              </div>

            </div>
          )
        })}
      </div>

    </section>
  )
}

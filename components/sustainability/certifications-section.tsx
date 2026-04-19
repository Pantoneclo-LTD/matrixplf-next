"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  { name: "ACCORD", src: "https://placehold.co/400x200/ffffff/1e293b?text=ACCORD&font=Montserrat" },
  { name: "Sedex", src: "https://placehold.co/400x200/ffffff/1e293b?text=Sedex&font=Montserrat" },
  { name: "C-TPAT", src: "https://placehold.co/400x200/ffffff/1e293b?text=C-TPAT&font=Montserrat" },
  { name: "OEKO-TEX", src: "https://placehold.co/400x200/ffffff/1e293b?text=OEKO-TEX&font=Montserrat" },
  
  { name: "Global Recycled Standard", src: "https://placehold.co/400x200/ffffff/1e293b?text=GRS&font=Montserrat" },
  { name: "Higg Index", src: "https://placehold.co/400x200/ffffff/1e293b?text=Higg+Index&font=Montserrat" },
  { name: "ICS", src: "https://placehold.co/400x200/ffffff/1e293b?text=ics&font=Montserrat" },
  { name: "ISO 9001:2015", src: "https://placehold.co/400x200/ffffff/1e293b?text=ISO+9001&font=Montserrat" },
  
  { name: "Organic Content Standard", src: "https://placehold.co/400x200/ffffff/1e293b?text=OCS&font=Montserrat" },
  { name: "Recycled Claim Standard", src: "https://placehold.co/400x200/ffffff/1e293b?text=RCS&font=Montserrat" },
  { name: "WRAP", src: "https://placehold.co/400x200/ffffff/1e293b?text=WRAP&font=Montserrat" },
  { name: "GOTS", src: "https://placehold.co/400x200/ffffff/1e293b?text=GOTS&font=Montserrat" },
  
  { name: "SCS", src: "https://placehold.co/400x200/ffffff/1e293b?text=SCS&font=Montserrat" },
  { name: "amfori BSCI", src: "https://placehold.co/400x200/ffffff/1e293b?text=BSCI&font=Montserrat" },
  { name: "BCI", src: "https://placehold.co/400x200/ffffff/1e293b?text=BCI&font=Montserrat" },
  { name: "BetterWork", src: "https://placehold.co/400x200/ffffff/1e293b?text=BetterWork&font=Montserrat" }
]

export function SustainabilityCertificationsSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
           <h2 
             className={`text-3xl md:text-4xl lg:text-5xl font-black text-[#38bdf8] uppercase tracking-wide transition-all duration-700 delay-100 ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
             }`}
           >
             Platform Certifications
           </h2>
        </div>

        {/* 4x4 Grid of Logos */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className={`flex items-center justify-center p-4 transition-all duration-700 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${150 + (idx % 4) * 100}ms` }}
              >
                {/* 
                  Using placehold.co images for development.
                  Replace the 'src' in the array with actual local paths (e.g., '/images/certs/accord.png') when going to prod.
                */}
                <img 
                  src={cert.src} 
                  alt={cert.name} 
                  title={cert.name}
                  className="w-full max-w-[160px] h-auto object-contain Mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

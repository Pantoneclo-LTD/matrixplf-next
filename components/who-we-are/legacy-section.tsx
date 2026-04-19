"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

export function WhoWeAreLegacySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0a1128] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Visual Left */}
          <div 
            className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/3] w-full">
              <img 
                 src="https://images.unsplash.com/photo-1563821013444-4860b777aab8?q=80&w=2072&auto=format&fit=crop" 
                 alt="Industrial Machinery"
                 className="object-cover w-full h-full hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Overlay Banner */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0a1128] to-[#0a1128]/0">
               <h3 className="text-3xl font-bold text-white mb-2">Direct Source.</h3>
               <p className="text-blue-200">No intermediates. Total accountability.</p>
            </div>
          </div>

          {/* Content Right */}
          <div>
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-8 transition-all duration-700 ${
                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">Our Legacy</span>
            </div>

            <h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-700 delay-100 ${
                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We are not an agency. <br/>
              <span className="text-blue-400">We are not a trading house.</span>
            </h2>

            <p 
              className={`text-lg text-slate-300 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              For decades, the industry relied on middlemen. We disrupted that model by becoming the source itself. Matrix Apparels builds factories, sources raw materials directly, and manages the entire export process.
            </p>

            {/* Features List */}
            <ul 
              className={`space-y-4 transition-all duration-700 delay-300 ${
                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                "Direct factory-to-brand communication",
                "Complete transparency in raw material sourcing",
                "Speed-to-market advantages through owned integration",
                "Sustainable and compliant manufacturing environments"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                   <div className="rounded-full bg-blue-900/50 p-1 group-hover:bg-blue-500 transition-colors duration-300">
                     <CheckCircle2 className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
                   </div>
                   <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

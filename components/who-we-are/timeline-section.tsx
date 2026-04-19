"use client"

import { useEffect, useRef, useState } from "react"
import { Clock } from "lucide-react"

const timelineEvents = [
  { year: "2018", title: "Foundation", desc: "Matrix Apparels established with a vision to redefine manufacturing." },
  { year: "2019", title: "Expansion into Knitwear", desc: "Launched dedicated knit facilities with advanced European machinery." },
  { year: "2020", title: "Vertical Integration", desc: "Acquired own fabric supply network to ensure complete product control." },
  { year: "2021", title: "Sri Lanka Operations", desc: "Expanded manufacturing footprint into Sri Lanka for technical garments." },
  { year: "2022", title: "Sustainability 2.0", desc: "Implemented comprehensive eco-friendly production systems." },
  { year: "2023", title: "Global Expansion", desc: "Opened strategic hubs in Hong Kong and Slovenia." },
]

export function WhoWeAreTimelineSection() {
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

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Clock className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-bold tracking-wide uppercase">Journey</span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 transition-all duration-700 delay-100 ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Explore our <span className="text-emerald-600">Growth</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div 
            className={`absolute left-1/2 -ml-0.5 top-0 bottom-0 w-1 bg-emerald-200 transition-all duration-[2000ms] origin-top ${
              isVisible ? "scale-y-100" : "scale-y-0"
            }`}
          />

          <div className="space-y-24">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={event.year} className="relative flex items-center justify-between w-full">
                  {/* Left Content */}
                  <div className={`w-[45%] ${isEven ? "text-right" : "text-left order-2"}`}>
                     <div 
                       className={`transition-all duration-700 ease-out ${
                         isVisible 
                           ? "opacity-100 translate-x-0" 
                           : `opacity-0 ${isEven ? "-translate-x-12" : "translate-x-12"}`
                       }`}
                       style={{ transitionDelay: `${500 + idx * 200}ms` }}
                     >
                        <h3 className="text-5xl font-black text-slate-200 mb-2">{event.year}</h3>
                        <h4 className="text-2xl font-bold text-slate-900 mb-3">{event.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed">{event.desc}</p>
                     </div>
                  </div>

                  {/* Marker Node */}
                  <div 
                    className={`absolute left-1/2 -ml-[14px] w-7 h-7 rounded-full bg-white border-4 border-emerald-500 shadow shadow-emerald-500/30 z-10 transition-all duration-500 hover:scale-125 hover:bg-emerald-50 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{ transitionDelay: `${400 + idx * 200}ms` }}
                  />

                  {/* Empty Spacer */}
                  <div className="w-[45%]"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

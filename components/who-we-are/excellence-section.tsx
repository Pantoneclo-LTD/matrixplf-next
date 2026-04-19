"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, Factory, TrendingUp } from "lucide-react"

export function WhoWeAreExcellenceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 rounded-l-[100px] transform translate-x-1/2 opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Left */}
          <div>
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-800 text-sm font-bold tracking-wide uppercase">Core Philosophy</span>
            </div>

            <h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Manufacturing Excellence, <br/>
              <span className="text-emerald-600">Innovation at Scale</span>
            </h2>

            <p 
              className={`text-lg text-slate-600 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We are Bangladesh's largest vertically integrated apparel manufacturer. Our foundation is built on absolute control over the production timeline, ensuring that every garment meets world-class standards from raw thread to final stitch.
            </p>

            <div 
              className={`space-y-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Factory className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Fully Vertically Integrated</h4>
                  <p className="text-slate-600">Complete supply chain ownership minimizes disruption and maximizes efficiency.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Uncompromised Quality</h4>
                  <p className="text-slate-600">Rigorous testing and inspection at every stage of the manufacturing process.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Right Component */}
          <div 
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl shadow-slate-200/50">
              <img 
                src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1935&auto=format&fit=crop" 
                alt="Precision Manufacturing" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-6 max-w-[200px] border border-white/20 hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                 </div>
                 <h5 className="text-3xl font-black text-slate-900 mb-1">100%</h5>
                 <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">In-house Control</p>
              </div>
            </div>
            
            {/* Background offset element */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-emerald-200 rounded-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// TextBlock hardcoded to h-[260px] to lock the masonry grid math exactly aligned across columns.
function TextBlock({ titleWhite, titleBlue, text }: { titleWhite: string, titleBlue: string, text: string }) {
  return (
    <div className="bg-[#152336] px-8 py-8 lg:px-10 flex flex-col justify-center h-[260px] transition-colors duration-300 hover:bg-[#1a2b42] w-full">
       <h3 className="text-[22px] font-bold text-white mb-3.5 leading-tight tracking-wide drop-shadow-sm">
          {titleWhite} <br/><span className="text-[#38bdf8]">{titleBlue}</span>
       </h3>
       <p className="text-[#9facbd] text-[13px] leading-[1.6] font-medium">
          {text}
       </p>
    </div>
  )
}

function ImageBlock({ src, alt, heightClass }: { src: string, alt: string, heightClass: string }) {
  return (
    <div className={`w-full ${heightClass} bg-slate-800 relative overflow-hidden group`}>
      <img 
         src={src} 
         alt={alt} 
         className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" 
      />
    </div>
  )
}

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-[#0d1420] font-sans">
            <Header />
            
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[550px] flex items-center">
              <div className="absolute inset-0 z-0">
                <img 
                   src="https://images.unsplash.com/photo-1558769132-cb1fac089431?q=80&w=2000&auto=format&fit=crop" 
                   alt="Lounge & Nightwear Rack" 
                   className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-[#0d1420]/75 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1420]/95 via-[#0d1420]/50 to-transparent" />
              </div>

              <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
                  <div className="max-w-xl">
                     <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 drop-shadow-lg leading-tight tracking-tight">
                        Lounge &<br/><span className="text-[#38bdf8]">Nightwear</span>
                     </h1>
                     
                     <div className="flex items-center gap-3 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                        <p className="text-white text-sm md:text-[15px] font-semibold tracking-wide">
                           Request For a Lounge & Nightwear Latest Presentation
                        </p>
                     </div>
                     
                     <button className="bg-[#38bdf8] hover:bg-[#20A9E6] text-white text-[12px] font-bold px-7 py-3.5 rounded uppercase tracking-wider transition-colors shadow-lg shadow-[#38bdf8]/20">
                        Request Presentation
                     </button>
                  </div>
              </div>
            </section>

            {/* Elevate Your Offerings Banner */}
            <section className="w-full bg-[#111a28] py-16 text-center relative z-20">
               <div className="container mx-auto px-6 max-w-3xl">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#38bdf8] mb-5 tracking-tight drop-shadow-sm">
                     Elevate Your Offerings
                  </h2>
                  <p className="text-slate-300 text-[16px] leading-relaxed font-medium">
                     Explore our premium range of lounge and nightwear designed to meet the demands of wholesale buyers with top-notch comfort, style, and quality.
                  </p>
               </div>
            </section>

            {/* Perfect Math 3-Column Masonry Grid */}
            <section className="w-full bg-[#0d1420] py-12 pb-24">
               <div className="container mx-auto px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    
                    {/* Column 1 -> Total Desktop Height: 1508px (680+520+260+2*24) */}
                    <div className="flex flex-col gap-6 w-full">
                      <ImageBlock 
                         src="https://images.unsplash.com/photo-1551806235-a05d898ed61c?q=80&w=800&auto=format&fit=crop" 
                         heightClass="h-[680px]" 
                         alt="Woman in patterned pajamas" 
                      />
                      <ImageBlock 
                         src="https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?q=80&w=800&auto=format&fit=crop" 
                         heightClass="h-[520px]" 
                         alt="Man in plaid pajamas" 
                      />
                      <TextBlock 
                         titleWhite="Sustainable" 
                         titleBlue="Fabrics" 
                         text="We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet." 
                      />
                    </div>

                    {/* Column 2 -> Total Desktop Height: 1508px (260+580+260+336+3*24) */}
                    <div className="flex flex-col gap-6 w-full">
                      <TextBlock 
                         titleWhite="Sustainable" 
                         titleBlue="Fabrics" 
                         text="We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet." 
                      />
                      <ImageBlock 
                         src="https://images.unsplash.com/photo-1516575150278-77136a5188f6?q=80&w=800&auto=format&fit=crop" 
                         heightClass="h-[580px]" 
                         alt="Woman sitting in grey pajamas" 
                      />
                      <TextBlock 
                         titleWhite="Unmatched" 
                         titleBlue="Scale & Speed" 
                         text="From initial sample concept to mass production, our integrated supply chain delivers bulk wholesale orders rapidly without compromising quality." 
                      />
                      <ImageBlock 
                         src="https://images.unsplash.com/photo-1549037173-e3b717902c57?q=80&w=800&auto=format&fit=crop" 
                         heightClass="h-[336px]" 
                         alt="Man in grey shorts" 
                      />
                    </div>

                    {/* Column 3 -> Total Desktop Height: 1508px (500+260+416+260+3*24) */}
                    <div className="flex flex-col gap-6 w-full">
                      <ImageBlock 
                         src="https://images.unsplash.com/photo-1515347619362-e6741160352c?q=80&w=800&auto=format&fit=crop" 
                         heightClass="h-[500px]" 
                         alt="Woman in red pajamas" 
                      />
                      <TextBlock 
                         titleWhite="Precision" 
                         titleBlue="Craftsmanship" 
                         text="Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques." 
                      />
                      <ImageBlock 
                         src="https://images.unsplash.com/photo-1579450841249-199af931f6d0?q=80&w=800&auto=format&fit=crop" 
                         heightClass="h-[416px]" 
                         alt="Men's shorts close up" 
                      />
                      <TextBlock 
                         titleWhite="Sustainable" 
                         titleBlue="Fabrics" 
                         text="We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet." 
                      />
                    </div>

                  </div>
               </div>
            </section>

            <Footer />
        </main>
    )
}
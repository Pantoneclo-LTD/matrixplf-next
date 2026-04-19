import Image from "next/image"
import Link from "next/link"
import { Download, Factory, MapPin, Phone, Mail } from "lucide-react"

export default function FactoryPage() {
    return (
        <main className="min-h-screen bg-[#111823] font-sans flex flex-col overflow-x-hidden text-gray-200">
            {/* Hero Section */}
            <section className="relative w-full h-[600px] flex flex-col justify-end">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/clothing-racks.png"
                        alt="Clothing Racks"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111823] via-[#111823]/60 to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-16">
                    <div className="flex items-center gap-6">
                        {/* Custom SVG Logo */}
                        <div className="w-16 h-20 md:w-20 md:h-24 flex-shrink-0">
                            <svg width="100%" height="100%" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f27435]">
                                <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="4" />
                                <path d="M 30 48 L 30 80" stroke="currentColor" strokeWidth="4" />
                                <path d="M 15 65 L 45 65" stroke="currentColor" strokeWidth="4" />
                                <path d="M 15 80 L 30 48 L 45 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                <span className="text-[#4cb5e4]">IFS Texwear</span> <span className="text-white">Ltd.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white font-semibold mb-6">
                                Dhaka, Bangladesh
                            </p>
                            <Link 
                                href="#" 
                                className="inline-flex items-center gap-2 bg-[#4cb5e4] hover:bg-[#3ba4d3] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
                            >
                                <Download className="w-4 h-4" /> Download Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Row */}
            <section className="container mx-auto px-6 lg:px-12 -mt-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">5,400+</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Skilled Workers</div>
                    </div>
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">2.5M</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Pieces / Month</div>
                    </div>
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">45</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Production Lines</div>
                    </div>
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">320K</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Sq. Ft. Facility</div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-6 lg:px-12 py-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Left Column - Product Strength */}
                    <div className="lg:w-7/12 bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <Factory className="w-8 h-8 text-[#4cb5e4]" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#4cb5e4]">Product Strength & Capacity</h2>
                        </div>
                        
                        <div className="space-y-6 text-gray-300 leading-relaxed text-sm lg:text-base">
                            <p>
                                IFS TEXWEAR (PVT.) LTD. is a premier, 100% export-oriented composite knit garments manufacturer and exporter based in Bangladesh. Established in 1999, we have grown into a global industry leader, driven by a passion for quality, innovation, and ethical manufacturing.
                            </p>
                            <p>
                                Our vision is to create the greatest knit clothing on the planet by consistently investing in quality and innovation. We are dedicated to providing unrivaled variety and superior products that stimulate and grow the global fashion market.
                            </p>
                            <p>
                                Quality is the cornerstone of our operations. Our facility utilizes advanced machinery from Japan, Germany, and the U.S. to ensure precision in every stitch. We maintain the highest international standards, evidenced by our extensive certifications.
                            </p>
                        </div>

                        {/* Category Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-[#24354a] hover:bg-[#2b4059] transition-colors border border-[#3b597c] text-center text-sm font-semibold py-3 rounded-lg text-white">
                                Men's & Ladies Wear
                            </div>
                            <div className="bg-[#24354a] hover:bg-[#2b4059] transition-colors border border-[#3b597c] text-center text-sm font-semibold py-3 rounded-lg text-white">
                                Active & Outerwear
                            </div>
                            <div className="bg-[#24354a] hover:bg-[#2b4059] transition-colors border border-[#3b597c] text-center text-sm font-semibold py-3 rounded-lg text-white">
                                Innerwear & Sleepwear
                            </div>
                            <div className="bg-[#24354a] hover:bg-[#2b4059] transition-colors border border-[#3b597c] text-center text-sm font-semibold py-3 rounded-lg text-white">
                                Infant & Kids
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-5/12 flex flex-col gap-8">
                        
                        {/* Certifications Block */}
                        <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 shadow-lg flex-1">
                            <h2 className="text-2xl font-bold text-[#4cb5e4] uppercase mb-6 tracking-wide">Our Certifications</h2>
                            
                            {/* Certifications Grid Mockup */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center">
                                {/* GOTS */}
                                <div className="aspect-square rounded-full bg-white flex flex-col items-center justify-center p-1 border-2 border-green-700">
                                    <span className="text-green-700 font-black text-[11px] leading-none">GOTS</span>
                                    <span className="text-black text-[6px] tracking-tighter mt-1">ORGANIC</span>
                                </div>
                                {/* OCS */}
                                <div className="aspect-square rounded-full bg-white flex flex-col items-center justify-center p-1 border-2 border-green-600">
                                    <span className="text-green-600 font-bold text-[8px] text-center leading-tight">ORGANIC<br/>100</span>
                                </div>
                                {/* OCS Blended */}
                                <div className="aspect-square rounded-full bg-white flex flex-col items-center justify-center p-1 border-2 border-green-800">
                                    <span className="text-green-800 font-bold text-[7px] text-center leading-tight">ORGANIC<br/>BLENDED</span>
                                </div>
                                {/* Sedex */}
                                <div className="aspect-square rounded-full bg-[#d03544] flex items-center justify-center">
                                    <span className="text-white font-bold text-xs tracking-wide">Sedex</span>
                                </div>
                                {/* WRAP */}
                                <div className="aspect-square rounded-full bg-white flex items-center justify-center border-[3px] border-[#1f3a70]">
                                    <span className="text-[#1f3a70] font-black text-[11px]">WRAP</span>
                                </div>
                                {/* BGMEA */}
                                <div className="h-10 bg-white rounded flex items-center justify-center col-span-1 border border-gray-200">
                                    <span className="text-blue-800 font-black text-[10px] tracking-tighter">BGMEA</span>
                                </div>
                                {/* RSC */}
                                <div className="h-10 bg-[#25824c] rounded flex items-center justify-center col-span-2">
                                    <span className="text-white font-black text-xl tracking-wider">RSC</span>
                                </div>
                                {/* amfori */}
                                <div className="h-12 bg-white rounded flex flex-col items-center justify-center col-span-2 border border-gray-300">
                                    <div className="flex items-center gap-1">
                                        <div className="w-4 h-4 rounded-full border-4 border-blue-600"></div>
                                        <span className="text-[#0d2a58] font-bold text-base">amfori</span>
                                    </div>
                                    <span className="text-gray-500 text-[8px]">Trade with purpose</span>
                                </div>
                                {/* OEKO TEX */}
                                <div className="aspect-square bg-[#00a688] rounded flex items-center justify-center p-1 shadow-inner">
                                    <span className="text-white font-bold text-[9px] text-center leading-tight">OEKO<br/>TEX®</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Block */}
                        <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-[#4cb5e4] uppercase mb-6 tracking-wide">Contact Us</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-[#4cb5e4] mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-[#4cb5e4] font-semibold text-sm tracking-wider uppercase mb-1">Headquarters</h3>
                                        <p className="text-gray-300 text-sm">631, Kutubpur, Fatullah, Narayanganj, Bangladesh.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="w-5 h-5 text-[#4cb5e4] mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-[#4cb5e4] font-semibold text-sm tracking-wider uppercase mb-1">Phone</h3>
                                        <p className="text-gray-300 text-sm">+386 30 796 092</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 text-[#4cb5e4] mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-[#4cb5e4] font-semibold text-sm tracking-wider uppercase mb-1">Email Inquiries</h3>
                                        <p className="text-gray-300 text-sm">shohel@matrixapparels.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
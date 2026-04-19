import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SustainabilityHeroSection } from "@/components/sustainability/hero-section"
import { SustainabilityInitiativesSection } from "@/components/sustainability/initiatives-section"
import { SustainabilityCertificationsSection } from "@/components/sustainability/certifications-section"

export default function SustainabilityPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <SustainabilityHeroSection />
            <SustainabilityCertificationsSection />
            <SustainabilityInitiativesSection />

            <Footer />
        </main>
    )
}

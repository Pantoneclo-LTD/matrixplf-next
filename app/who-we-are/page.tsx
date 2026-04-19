import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhoWeAreHeroSection } from "@/components/who-we-are/hero-section"
import { WhoWeAreExcellenceSection } from "@/components/who-we-are/excellence-section"
import { WhoWeAreLegacySection } from "@/components/who-we-are/legacy-section"
import { WhoWeAreNetworkSection } from "@/components/who-we-are/network-section"
import { WhoWeAreTimelineSection } from "@/components/who-we-are/timeline-section"

export default function Page() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <WhoWeAreHeroSection />
            <WhoWeAreExcellenceSection />
            <WhoWeAreLegacySection />
            <WhoWeAreNetworkSection />
            <WhoWeAreTimelineSection />
            <Footer />
        </main>
    )
}
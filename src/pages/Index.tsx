import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import BookingSection from "@/components/BookingSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => (
  <div className="min-h-screen bg-background pb-20 md:pb-0">
    <Navbar />
    <HeroSection />
    <ExperienceSection />
    <BookingSection />
    <MenuSection />
    <ReviewsSection />
    <GallerySection />
    <EventsSection />
    <LocationSection />
    <FAQSection />
    <Footer />
    <WhatsAppButton />
    <MobileBottomBar />
  </div>
);

export default Index;

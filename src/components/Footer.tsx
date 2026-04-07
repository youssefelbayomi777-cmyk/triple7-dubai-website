import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="relative py-16 pb-28 md:pb-16 bg-deep-surface/30">
    {/* Subtle neon top border */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_15px_rgba(255,0,128,0.5)]" />
    <div className="container mx-auto px-4 md:px-8">
      {/* Final CTA */}
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
          Ready for the <span className="text-gradient-primary">Best Night in Dubai?</span>
        </h2>
        <Button variant="neon" size="lg" asChild className="shimmer-btn text-base">
          <a href="#booking">
            Book Your Table Now
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
        {/* Brand */}
        <div>
          <a href="#" className="inline-block mb-3">
            <img
              src={logo}
              alt="Triple 7 Dubai Logo"
              className="h-32 md:h-40 w-auto object-contain brightness-110"
            />
          </a>
          <p className="text-muted-foreground text-sm">
            Dubai's adults-only arcade, bar, restaurant & live entertainment venue.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/triple777_dubai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574863930281" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" aria-label="Facebook">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg text-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#experience" className="hover:text-foreground transition-colors">Experience</a></li>
            <li><a href="#menu" className="hover:text-foreground transition-colors">Menu</a></li>
            <li><a href="#events" className="hover:text-foreground transition-colors">Events</a></li>
            <li><a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a></li>
            <li><a href="#booking" className="hover:text-foreground transition-colors">Book a Table</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg text-foreground mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>Radisson Blu Hotel, Canal View, Business Bay</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <a href="tel:+971544484000" className="hover:text-foreground transition-colors">+971 54 448 4000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <a href="mailto:info@triple777dubai.net" className="hover:text-foreground transition-colors">info@triple777dubai.net</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground mt-12">
        © {new Date().getFullYear()} Triple 7 Dubai. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

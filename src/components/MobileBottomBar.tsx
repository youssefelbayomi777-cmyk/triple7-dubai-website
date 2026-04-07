import { Phone } from "lucide-react";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border">
    <a
      href="tel:+971544484000"
      className="flex-1 flex items-center justify-center gap-2 py-4 bg-card text-foreground font-semibold text-sm"
    >
      <Phone size={18} />
      Call Us
    </a>
    <a
      href="#booking"
      className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-primary text-primary-foreground font-semibold text-sm"
    >
      Book Now
    </a>
  </div>
);

export default MobileBottomBar;

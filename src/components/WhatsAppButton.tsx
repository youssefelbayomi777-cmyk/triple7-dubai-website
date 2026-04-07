import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/971544484000?text=Hi%20Triple%207%2C%20I%27d%20like%20to%20book%20a%20table"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
    style={{ background: "#25D366" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-primary-foreground" fill="currentColor" />
  </a>
);

export default WhatsAppButton;

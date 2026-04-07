import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-glass backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-1">
            <span className="font-display text-2xl md:text-4xl tracking-wider text-white">TRIPLE</span>
            <img 
              src={logo} 
              alt="Triple 7 Dubai Logo" 
              className="h-16 md:h-24 w-auto object-contain brightness-110" 
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                whileHover={{ y: -2, color: 'hsl(var(--primary))' }}
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-all shadow-neon"
            >
              Book a Table
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="md:hidden text-foreground p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:bg-foreground/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-glass backdrop-blur-md border-b border-border overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, ease: "easeOut" }}
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground text-lg font-medium py-3 px-2 min-h-[44px] flex items-center rounded-md hover:bg-foreground/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1, ease: "easeOut" }}
                  whileTap={{ scale: 0.95 }}
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gradient-primary text-primary-foreground px-6 py-3 mt-4 rounded-md text-center font-semibold shadow-neon"
                >
                  Book a Table
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Social proof ticker */}
      <div className={`fixed top-16 md:top-20 left-0 right-0 z-40 bg-primary/10 border-b border-primary/20 overflow-hidden transition-all duration-300 ${scrolled ? "opacity-0 -translate-y-full" : "opacity-100"}`}>
        <div className="animate-ticker whitespace-nowrap py-2 flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 text-sm text-primary px-4">
              <span>★★★★★ 4.8 on Google</span>
              <span>·</span>
              <span>"Best night in Dubai"</span>
              <span>·</span>
              <span>Adults-only (21+)</span>
              <span>·</span>
              <span>6PM - 3AM Daily</span>
              <span>·</span>
              <span>+971 54 448 4000</span>
              <span className="px-8" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

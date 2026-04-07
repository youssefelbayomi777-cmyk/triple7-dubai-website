import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image with CRT scanlines + scroll-driven parallax */}
    <div className="absolute inset-0 hero-scanlines">
      <img src={heroBg} alt="Triple 7 Dubai arcade bar atmosphere" className="hero-parallax-img w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="sync" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    </div>

    {/* Content */}
    <div className="hero-content-scroll relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4"
      >
        Where Nostalgia
        <br />
        <span className="text-gradient-primary neon-flicker">Meets Nightlife</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Dubai's adults-only arcade, bar, restaurant & live entertainment — all under one roof.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#booking"
          className="shimmer-btn text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold transition-all w-full sm:w-auto text-center block"
        >
          Book a Table
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          href="#experience"
          className="border border-foreground/30 text-foreground px-8 py-4 rounded-md text-lg font-semibold transition-all w-full sm:w-auto text-center"
        >
          Explore the Experience
        </motion.a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-primary neon-breathe" />
    </motion.div>
  </section>
);

export default HeroSection;

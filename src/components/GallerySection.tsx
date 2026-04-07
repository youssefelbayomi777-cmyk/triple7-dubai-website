import arcadeImg from "@/assets/arcade-zone.jpg";
import bowlingImg from "@/assets/bowling.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import liveMusicImg from "@/assets/live-music.jpg";
import foodImg from "@/assets/food.jpg";
import heroImg from "@/assets/hero-bg.jpg";
import arcadeIg from "@/assets/arcade-ig.png";
import arcadeVibe from "@/assets/arcade-zone-vibe.png";
import crowdIg from "@/assets/crowd-ig.png";
import bowlingIgReal from "@/assets/bowling-ig.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: crowdIg, alt: "Triple 7 buzzing crowd and vibe", category: "Crowd & Vibe" },
  { src: heroImg, alt: "Triple 7 venue overview", category: "Crowd & Vibe" },
  { src: bowlingIgReal, alt: "Neon bowling lanes with graffiti art", category: "Bowling Lanes" },
  { src: arcadeVibe, alt: "Arcade zone interior", category: "Arcade Zone" },
  { src: arcadeIg, alt: "Authentic arcade experience", category: "Arcade Zone" },
  { src: arcadeImg, alt: "Arcade machines", category: "Arcade Zone" },
  { src: bowlingImg, alt: "Bowling lanes", category: "Bowling Lanes" },
  { src: cocktailsImg, alt: "Cocktail bar", category: "Bar & Cocktails" },
  { src: liveMusicImg, alt: "Live music night", category: "Live Music" },
  { src: foodImg, alt: "Food and dishes", category: "Food & Drinks" },
];

const categories = ["All", ...new Set(images.map((img) => img.category))];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Gallery & <span className="text-gradient-primary">Atmosphere</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            "Step through the doors and the city disappears. Neon signs cast their glow over rows of classic arcade machines. The crack of a perfect bowling strike echoes across the room."
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                filter === cat
                  ? "bg-gradient-primary text-primary-foreground shadow-secondary"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <motion.div
              layout
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="break-inside-avoid rounded-lg overflow-hidden group cursor-pointer mb-4 relative"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                loading="lazy"
                decoding="async"
                style={{ contentVisibility: "auto" }}
              />
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

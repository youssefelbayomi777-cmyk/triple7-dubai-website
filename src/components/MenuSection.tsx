import { useState } from "react";
import { motion } from "framer-motion";

const menuCategories = [
  {
    name: "Sharing Plates",
    items: [
      { name: "Loaded Nachos", desc: "Tortilla chips, cheese sauce, jalapeños, guac & sour cream" },
      { name: "Chicken Wings", desc: "Buffalo or BBQ glazed, served with ranch" },
      { name: "Truffle Fries", desc: "Crispy fries, truffle oil, parmesan, herbs" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Triple 7 Smash Burger", desc: "Double smashed patties, cheddar, pickles, secret sauce" },
      { name: "Grilled Chicken Wrap", desc: "Chargrilled chicken, hummus, mixed greens, tahini" },
      { name: "Fish & Chips", desc: "Beer-battered cod, thick-cut fries, mushy peas" },
    ],
  },
  {
    name: "Cocktails",
    items: [
      { name: "Neon Nights", desc: "Vodka, blue curaçao, lychee, lime, soda" },
      { name: "Arcade Sour", desc: "Bourbon, lemon, egg white, cherry bitters" },
      { name: "Golden Strike", desc: "Rum, passion fruit, mango, lime, gold shimmer" },
    ],
  },
  {
    name: "Mocktails",
    items: [
      { name: "Berry Blast", desc: "Mixed berries, mint, lime, sparkling water" },
      { name: "Tropical Sunrise", desc: "Mango, orange, passion fruit, grenadine" },
      { name: "Cucumber Cooler", desc: "Cucumber, mint, lime, elderflower, tonic" },
    ],
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background glow - significantly softened */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-primary/5 via-transparent to-transparent pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle at top right, hsl(var(--primary)/0.05), transparent 50%), radial-gradient(circle at bottom left, hsl(var(--secondary)/0.05), transparent 50%)' }} />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Food & <span className="text-gradient-primary">Drinks</span>
          </h2>
          <p className="text-muted-foreground text-lg">From loaded sharing plates to crafted cocktails</p>
        </motion.div>



        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-none">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-2 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-all border-b-2 ${
                activeTab === i
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid gap-4 max-w-3xl relative z-10">
          {menuCategories[activeTab].items.map((item, index) => {
            const borderClasses = [
              "border-l-primary",
              "border-l-secondary",
              "border-l-accent",
            ];
            return (
              <div
                key={item.name}
                className={`group flex flex-col py-5 px-4 border-b border-border/30 border-l-4 last:border-b-0 transition-all duration-300 hover:bg-card/40 hover:shadow-[inset_3px_0_12px_-4px_hsl(var(--primary)/0.35)] rounded-r-lg ${borderClasses[index % borderClasses.length]}`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-foreground font-medium text-lg md:text-xl tracking-wide group-hover:text-primary transition-colors">{item.name}</h4>
                  <div className="h-[1px] flex-1 bg-border/20 mx-4 hidden sm:block" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-xl">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Upsell CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Upgrade your booking with a cocktail package and save 20%.
          </p>
          <a href="#booking" className="text-primary font-semibold hover:underline">
            Add drinks to your reservation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Gamepad2, Target, Wine, Music } from "lucide-react";
import arcadeImg from "@/assets/arcade-zone.jpg";
import bowlingImg from "@/assets/bowling.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import liveMusicImg from "@/assets/live-music.jpg";

const stats = [
  { value: 50, suffix: "+", label: "Arcade Machines" },
  { value: 2, suffix: "", label: "Bowling Lanes" },
  { value: 100, suffix: "+", label: "Cocktails" },
  { value: 4, suffix: "", label: "Nights a Week" },
];

const pillars = [
  { icon: Gamepad2, title: "Arcade & Games", desc: "50+ retro and modern arcade machines", image: arcadeImg },
  { icon: Target, title: "Bowling & Billiards", desc: "Premium lanes and pool tables", image: bowlingImg },
  { icon: Wine, title: "Bar & Cocktails", desc: "100+ crafted cocktails and spirits", image: cocktailsImg },
  { icon: Music, title: "Live Music & DJs", desc: "Live entertainment every weekend", image: liveMusicImg },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = duration / target;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref} className="tabular-nums tracking-tight">{count}{suffix}</span>;
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-primary mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
 
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-deep-surface border border-border rounded-lg py-12 px-6 md:px-12 text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            One Venue. Four Experiences. <span className="text-gradient-primary">Zero Compromise.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Triple 7 is Dubai's only adults-only arcade bar with bowling, billiards, live entertainment, and a full restaurant kitchen.
          </p>
        </motion.div>

        {/* 4 Pillars Bento Box */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              layout
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className={`group relative rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer min-h-[300px] ${
                i === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[500px]" :
                i === 3 ? "md:col-span-3 md:min-h-[250px]" :
                "md:col-span-1 md:min-h-[240px]"
              }`}
            >
              <img
                src={pillar.image}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                loading="lazy"
                width={640}
                height={640}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className={`font-display text-foreground mb-1 md:mb-2 ${i === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>{pillar.title}</h3>
                <p className={`text-muted-foreground ${i === 0 ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

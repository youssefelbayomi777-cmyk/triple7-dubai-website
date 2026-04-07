import { Star } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Ahmed K.", rating: 5, date: "2 weeks ago", text: "Best night out in Dubai! The arcade games brought back so many memories, and the cocktails were incredible." },
  { name: "Sarah M.", rating: 5, date: "1 month ago", text: "Amazing atmosphere! The bowling lanes were so fun and the food was surprisingly good for an entertainment venue." },
  { name: "James R.", rating: 5, date: "3 weeks ago", text: "Perfect date night spot. Dark moody vibes, great music, and the VIP booth was worth every dirham." },
  { name: "Fatima A.", rating: 4, date: "1 month ago", text: "Love the concept! Only giving 4 stars because it was quite busy on Friday, but the energy was electric." },
  { name: "Mike T.", rating: 5, date: "1 week ago", text: "We booked the VIP package for my birthday and it was absolutely unreal. The staff went above and beyond!" },
  { name: "Priya S.", rating: 5, date: "2 months ago", text: "Finally somewhere in Dubai that feels different. The retro arcade machines are genuine and the cocktails are top tier." },
];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-deep-surface">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground">4.8</span>
            <span className="text-muted-foreground text-sm">/ 5.0 · Google Reviews</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            What Our <span className="text-gradient-primary">Guests</span> Say
          </h2>
        </motion.div>

        {/* Review carousel */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[420px] pl-6 pr-12 border-l border-primary/20 snap-start shrink-0"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-base md:text-lg font-light italic leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <span className="text-foreground font-medium">{review.name}</span>
                <span className="text-muted-foreground text-xs uppercase tracking-wider">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/6xwB81MeBfVaftcaA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline"
          >
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

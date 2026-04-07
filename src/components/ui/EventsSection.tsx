import { Calendar, Music, Users, Sparkles } from "lucide-react";

const events = [
  { name: "Ladies Night", day: "Every Tuesday", time: "8PM – 2AM", badge: "Ladies Night", icon: Sparkles, desc: "Free welcome drink for ladies. DJ spinning all night." },
  { name: "Live Band Friday", day: "Every Friday", time: "9PM – 2AM", badge: "Live Band", icon: Music, desc: "Live music from Dubai's best cover bands." },
  { name: "DJ Night Saturday", day: "Every Saturday", time: "9PM – 3AM", badge: "DJ Night", icon: Music, desc: "Resident DJ with guest appearances. The biggest night of the week." },
  { name: "Game Night Sunday", day: "Every Sunday", time: "6PM – 12AM", badge: "Themed Night", icon: Users, desc: "Tournament-style arcade competitions with prizes." },
];

const EventsSection = () => (
  <section id="events" className="py-24 md:py-32 bg-deep-surface">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
          Upcoming <span className="text-gradient-arcade">Events</span>
        </h2>
        <p className="text-muted-foreground text-lg">Something different every night of the week</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {events.map((event) => (
          <div key={event.name} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <event.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.day} · {event.time}</p>
                </div>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{event.badge}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{event.desc}</p>
            <a href="#booking" className="text-primary text-sm font-semibold hover:underline">
              Book for this event →
            </a>
          </div>
        ))}
      </div>

      {/* Private Hire CTA */}
      <div className="bg-card border border-primary/30 rounded-lg p-8 md:p-12 text-center max-w-3xl mx-auto shadow-neon">
        <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="font-display text-3xl text-foreground mb-3">Make It Unforgettable</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Triple 7 is the most unique private hire venue in Business Bay — arcade games, bowling, full bar service, and live entertainment, exclusively for your guests.
        </p>
        <a
          href="https://wa.me/971544484000?text=Hi%20Triple%207%2C%20I%27d%20like%20to%20enquire%20about%20private%20hire"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity shadow-neon"
        >
          Enquire About Private Hire
        </a>
      </div>
    </div>
  </section>
);

export default EventsSection;

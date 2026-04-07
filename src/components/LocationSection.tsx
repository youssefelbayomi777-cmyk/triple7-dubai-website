import { MapPin, Clock, Car, Train, Navigation } from "lucide-react";

const hours = [
  { day: "Everyday", time: "6PM – 3AM", highlight: true },
];

const transport = [
  { icon: Train, label: "Metro", detail: "Business Bay Station (10 min walk / 3 min taxi)" },
  { icon: Car, label: "Parking", detail: "Radisson Blu basement (paid) or Meydan Mall (free)" },
  { icon: Navigation, label: "Uber / Careem", detail: "Drop-off at Radisson Blu hotel entrance" },
];

const LocationSection = () => (
  <section id="location" className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
          Find <span className="text-gradient-primary">Us</span>
        </h2>
        <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Radisson Blu Hotel, Canal View, Business Bay, Dubai
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Map */}
        <div className="relative rounded-lg overflow-hidden border border-border h-80 lg:h-full min-h-[320px] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3!2d55.2898057!3d25.1904036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692002e2ed7b%3A0x8cf919b3dc047e1e!2sTriple%207%20Arcade%20%26%20Games%20Zone!5e0!3m2!1sen!2sae!4v1680000000001!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Triple 7 Dubai — Radisson Blu, Business Bay"
          />
          
          {/* Floating Get Directions Button */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-[90%] sm:w-auto">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=25.1904036,55.2898057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold shadow-neon hover:scale-105 transition-transform"
            >
              <Navigation className="w-5 h-5 fill-current" />
              Get directions
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-display text-2xl text-foreground">Opening Hours</h3>
            </div>
            <div className="space-y-2">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`flex justify-between py-2 px-3 rounded-md text-sm ${
                    h.highlight ? "bg-primary/10 text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transport */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-4">Getting Here</h3>
            <div className="space-y-3">
              {transport.map((t) => (
                <div key={t.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <t.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium text-sm">{t.label}</span>
                    <p className="text-muted-foreground text-sm">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 21+ Notice */}
          <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 text-sm text-muted-foreground">
            🔞 Triple 7 is an adults-only venue. Guests must be 21 or over. Valid government-issued ID (passport, driving licence, or Emirates ID) is required at the entrance.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;

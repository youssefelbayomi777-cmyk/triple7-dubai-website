import { useState } from "react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Standard Entry",
    price: "AED 149",
    perPerson: "per person",
    features: ["Access to all arcade games", "2 hours bowling (per lane)", "Welcome drink"],
    highlighted: false,
  },
  {
    name: "VIP Package",
    price: "AED 299",
    perPerson: "per person",
    badge: "Most Popular",
    features: ["All Standard inclusions", "Reserved booth", "Cocktail pitcher", "Dedicated server"],
    highlighted: true,
  },
  {
    name: "Private Event",
    price: "Custom",
    perPerson: "pricing",
    features: ["Exclusive venue or zone", "Custom food & drinks", "Event coordinator", "Tailored packages"],
    highlighted: false,
  },
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Triple 7! I'd like to book:\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nName: ${formData.name}`;
    window.open(`https://wa.me/971544484000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-deep-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Reserve Your <span className="text-gradient-arcade">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">Choose your package and secure your night</p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-lg p-6 md:p-8 border transition-all relative ${
                pkg.highlighted
                  ? "border-primary bg-card shadow-neon scale-[1.02]"
                  : "border-border bg-card hover:border-muted-foreground/30"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {pkg.badge}
                </div>
              )}
              <h3 className="font-display text-2xl text-foreground mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="font-display text-4xl text-primary">{pkg.price}</span>
                <span className="text-muted-foreground text-sm ml-2">{pkg.perPerson}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking-form"
                className={`block text-center py-3 rounded-md font-semibold transition-opacity ${
                  pkg.highlighted
                    ? "bg-gradient-gold text-primary-foreground shadow-neon"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Select
              </a>
            </div>
          ))}
        </div>

        {/* Booking form */}
        <div id="booking-form" className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 md:p-10">
          <h3 className="font-display text-3xl text-foreground text-center mb-2">Book Your Table</h3>
          <p className="text-muted-foreground text-center text-sm mb-8">
            Only 3 VIP tables remaining this Friday
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Time</label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select time</option>
                  {["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Number of Guests</label>
              <input
                type="number"
                min="1"
                max="20"
                required
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
                className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">WhatsApp Number</label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+971 5XX XXX XXXX"
                className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity shadow-neon"
            >
              Confirm Booking
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-4">
            ✔ Instant confirmation sent to your WhatsApp · 🔒 Your info is never shared
          </p>

          {/* WhatsApp alternative */}
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/971544484000?text=Hi%20Triple%207%2C%20I%27d%20like%20to%20book%20a%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: "#25D366", color: "#fff" }}
            >
              Book via WhatsApp — Reply in minutes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

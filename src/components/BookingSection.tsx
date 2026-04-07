import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Standard Entry",
    price: "Walk-In",
    perPerson: "welcome",
    features: ["Access to all arcade games", "Bowling lanes available", "Full bar & kitchen menu"],
    highlighted: false,
  },
  {
    name: "VIP Package",
    price: "Premium",
    perPerson: "experience",
    badge: "Most Popular",
    features: ["Reserved booth & priority service", "Curated cocktail selection", "Dedicated server", "Contact us for details"],
    highlighted: true,
  },
  {
    name: "Private Event",
    price: "Custom",
    perPerson: "tailored",
    features: ["Exclusive venue or zone", "Custom food & drinks menu", "Event coordinator", "Corporate & birthday packages"],
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

  const today = new Date().toISOString().split("T")[0];

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
            Reserve Your <span className="text-gradient-primary">Experience</span>
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
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
              <Button 
                variant={pkg.highlighted ? "neon" : "outline"} 
                className="w-full"
                asChild
              >
                <a href="#booking-form">
                  Book {pkg.name}
                </a>
              </Button>
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
                <label className="text-sm text-muted-foreground mb-1.5 block">Arrival Date</label>
                <input
                  type="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Arrival Time</label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Choose arrival time</option>
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
                onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                For groups larger than 20, please message us directly.
              </p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
              <input
                type="text"
                required
                maxLength={100}
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
                pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                title="Please enter a valid phone number, e.g. +971 50 123 4567"
                maxLength={20}
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+971 5X XXX XXXX"
                className="w-full bg-muted border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary invalid:focus:ring-destructive transition-colors"
              />
              <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                We'll use this to send your final confirmation.
              </p>
            </div>

            {/* Contextual onboarding alert */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-md p-3 flex gap-3 text-sm mt-2">
              <span className="text-xl">🔞</span>
              <div>
                <strong className="text-foreground block mb-0.5">Strictly 21+ Venue</strong>
                <span className="text-muted-foreground text-xs leading-tight">All guests must present a valid physical government ID (Emirates ID or Passport) at the door. No exceptions.</span>
              </div>
            </div>

            <Button
              type="submit"
              variant="neon"
              size="lg"
              className="w-full py-6 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Continue to WhatsApp
            </Button>
          </form>

          <p className="text-center text-sm font-medium text-muted-foreground mt-6">
            ✔ You will be securely redirected to our official WhatsApp to finalize your reservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

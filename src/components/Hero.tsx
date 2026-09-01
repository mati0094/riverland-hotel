import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/60 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop')",
        }}
      ></div>

      <div className="relative z-20 text-center container-custom">
        <h1 className="text-6xl md:text-7xl font-bold text-gold mb-6 drop-shadow-lg">
          Riverland Hotel
        </h1>
        <p className="text-2xl md:text-3xl text-light mb-8 font-light">
          Luxury Redefined. Experience Elegance.
        </p>
        <button className="btn-primary mb-12">
          Explore Now
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gold" />
        </div>
      </div>
    </section>
  );
}

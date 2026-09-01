import { Star, Wifi, Wind, Coffee } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

export default function Rooms() {
  const rooms: Room[] = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Spacious room with king-size bed and modern amenities",
      price: "$250/night",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=350&fit=crop",
      amenities: ["WiFi", "AC", "Coffee"],
    },
    {
      id: 2,
      name: "Suite",
      description: "Luxury suite with separate living area and premium services",
      price: "$400/night",
      image: "https://images.unsplash.com/photo-1618773421027-4113a64e44b8?w=500&h=350&fit=crop",
      amenities: ["WiFi", "AC", "Coffee"],
    },
    {
      id: 3,
      name: "Presidential Suite",
      description: "Ultimate luxury with panoramic views and personalized service",
      price: "$650/night",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&h=350&fit=crop",
      amenities: ["WiFi", "AC", "Coffee"],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-dark to-dark/95">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-gold mb-4 text-center">
          Our Rooms
        </h2>
        <p className="text-light/60 text-center mb-12 max-w-2xl mx-auto">
          Choose from our range of carefully designed rooms and suites, each offering comfort and elegance
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-dark/80 rounded-lg overflow-hidden border border-gold/30 hover:border-gold/60 transition shadow-2xl"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gold mb-2">{room.name}</h3>
                <p className="text-light/70 mb-4">{room.description}</p>

                <div className="flex gap-3 mb-4">
                  <Wifi size={18} className="text-gold" />
                  <Wind size={18} className="text-gold" />
                  <Coffee size={18} className="text-gold" />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">{room.price}</span>
                  <button className="btn-primary text-sm">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

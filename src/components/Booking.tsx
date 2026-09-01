"use client";

import { Calendar, Users, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "deluxe",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking request:", formData);
    alert("Booking request received! We will contact you shortly.");
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-dark/95 to-dark">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-gold mb-4 text-center">
          Book Your Stay
        </h2>
        <p className="text-light/60 text-center mb-12">
          Reserve your perfect room at Riverland Hotel
        </p>

        <div className="max-w-4xl mx-auto bg-dark/80 rounded-lg border border-gold/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gold mb-2 font-semibold flex items-center gap-2">
                  <Calendar size={18} /> Check-in Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark/60 border border-gold/30 rounded text-light focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-gold mb-2 font-semibold flex items-center gap-2">
                  <Calendar size={18} /> Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark/60 border border-gold/30 rounded text-light focus:outline-none focus:border-gold"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gold mb-2 font-semibold flex items-center gap-2">
                  <Users size={18} /> Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark/60 border border-gold/30 rounded text-light focus:outline-none focus:border-gold"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
              <div>
                <label className="block text-gold mb-2 font-semibold flex items-center gap-2">
                  <MapPin size={18} /> Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark/60 border border-gold/30 rounded text-light focus:outline-none focus:border-gold"
                >
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                  <option value="presidential">Presidential Suite</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gold mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark/60 border border-gold/30 rounded text-light focus:outline-none focus:border-gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gold mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark/60 border border-gold/30 rounded text-light focus:outline-none focus:border-gold"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gold mb-2 font-semibold flex items-center gap-2">
                  <Phone size={18} /> Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark/60 border border-gold/30 rounded text-light focus:outline-none focus:border-gold"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary">
              Complete Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark/95 border-t border-gold/20 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">Riverland Hotel</h3>
            <p className="text-light/60 text-sm">
              Experience luxury and elegance at our world-class hotel.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-light/60">
              <li><a href="#about" className="hover:text-gold transition">About</a></li>
              <li><a href="#rooms" className="hover:text-gold transition">Rooms</a></li>
              <li><a href="#booking" className="hover:text-gold transition">Booking</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-light/60">
              <li><a href="#" className="hover:text-gold transition">Spa & Wellness</a></li>
              <li><a href="#" className="hover:text-gold transition">Restaurant</a></li>
              <li><a href="#" className="hover:text-gold transition">Events</a></li>
              <li><a href="#" className="hover:text-gold transition">Conferences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-gold/70 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold/70 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold/70 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold/70 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light/60 text-sm">
              &copy; 2024 Riverland Hotel. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-light/60">
              <a href="#" className="hover:text-gold transition">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition">Terms of Service</a>
              <a href="#" className="hover:text-gold transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

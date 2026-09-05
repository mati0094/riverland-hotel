import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark border-b border-gold/20">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-gold mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Address</h3>
                <p className="text-light/70">
                  Abay Mado<br />
                  Bahir Dar, Ethiopia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Phone</h3>
                <p className="text-light/70">
                  +251924808182
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Email</h3>
                <p className="text-light/70">
                  info@riverlandhotel.com<br />
                  reservations@riverlandhotel.com<br />
                  events@riverlandhotel.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Hours</h3>
                <p className="text-light/70">
                  Front Desk: 24/7<br />
                  Restaurant: 6:00 AM - 11:00 PM<br />
                  Spa: 8:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark/80 rounded-lg border border-gold/30 p-8">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-dark/60 border border-gold/30 rounded text-light placeholder:text-light/40 focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-dark/60 border border-gold/30 rounded text-light placeholder:text-light/40 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-dark/60 border border-gold/30 rounded text-light placeholder:text-light/40 focus:outline-none focus:border-gold"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 bg-dark/60 border border-gold/30 rounded text-light placeholder:text-light/40 focus:outline-none focus:border-gold resize-none"
              ></textarea>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

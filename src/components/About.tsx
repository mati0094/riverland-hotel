import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark border-b border-gold/20">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-gold mb-12 text-center">
          About Riverland Hotel
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1578899387765-66a008e84640?w=600&h=400&fit=crop"
              alt="Hotel exterior"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <p className="text-lg text-light/80 mb-6 leading-relaxed">
              Welcome to Riverland Hotel, where luxury meets comfort in the heart of nature. 
              Established with a vision to provide world-class hospitality, we offer a sanctuary 
              for discerning travelers seeking an unforgettable experience.
            </p>
            <p className="text-lg text-light/80 mb-8 leading-relaxed">
              Our commitment to excellence is reflected in every detail, from our meticulously 
              designed rooms to our exceptional service standards. With breathtaking views and 
              modern amenities, Riverland Hotel is your perfect destination.
            </p>

            <div className="flex items-start gap-4">
              <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gold mb-2">Location</h3>
                <p className="text-light/70">
                  Riverside Boulevard, Nature Valley<br />
                  Phone: +1 (555) 123-4567<br />
                  Email: info@riverlandhotel.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

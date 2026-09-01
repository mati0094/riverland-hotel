import { Linkedin, Twitter, Instagram } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

export default function Team() {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Victoria Sterling",
      position: "General Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "20+ years of luxury hospitality experience",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "James Mitchell",
      position: "Executive Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Michelin-starred culinary expertise",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Sarah Chen",
      position: "Spa & Wellness Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Certified wellness and holistic health specialist",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Michael Anderson",
      position: "Director of Events",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Expert in creating unforgettable events",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-dark border-b border-gold/20">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-gold mb-4 text-center">
          Meet Our Team
        </h2>
        <p className="text-light/60 text-center mb-12 max-w-2xl mx-auto">
          Our dedicated professionals are committed to providing exceptional service
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-b from-dark/50 to-dark/80 rounded-lg overflow-hidden border border-gold/30 hover:border-gold/60 transition group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold mb-1">{member.name}</h3>
                <p className="text-gold/70 text-sm mb-3">{member.position}</p>
                <p className="text-light/70 text-sm mb-4">{member.bio}</p>

                <div className="flex gap-3">
                  <a href={member.social.linkedin} className="text-gold hover:text-gold/70 transition">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.social.twitter} className="text-gold hover:text-gold/70 transition">
                    <Twitter size={18} />
                  </a>
                  <a href={member.social.instagram} className="text-gold hover:text-gold/70 transition">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

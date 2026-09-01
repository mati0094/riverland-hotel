# Riverland Hotel - Professional Luxury Hotel Website

A modern, responsive website for Riverland Hotel built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** - Stunning landing section with call-to-action
- **About Section** - Hotel information and location details
- **Room Showcase** - Display of different room types with pricing
- **Team Section** - Meet the professional team members
- **Booking System** - Easy-to-use booking form
- **Contact Section** - Multiple contact options and contact form
- **Responsive Design** - Mobile-friendly and works on all devices
- **Luxury Aesthetics** - Gold and dark theme for premium feel

## Project Structure

```
riverland-hotel/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navigation.tsx       # Header navigation
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About section
│       ├── Rooms.tsx           # Room showcase
│       ├── Team.tsx            # Team section
│       ├── Booking.tsx         # Booking form
│       ├── Contact.tsx         # Contact section
│       └── Footer.tsx          # Footer
├── public/                      # Static assets
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind CSS config
├── next.config.ts              # Next.js config
└── README.md                   # This file
```

## Technologies Used

- **Next.js 15** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS transformations

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Hotel Information
Update the following files with your hotel details:
- [About.tsx](src/components/About.tsx) - Hotel description and location
- [Contact.tsx](src/components/Contact.tsx) - Contact information
- [Room.tsx](src/components/Rooms.tsx) - Room types and pricing

### Colors & Branding
Edit [tailwind.config.ts](tailwind.config.ts) to customize:
- Primary color (currently gold: #D4AF37)
- Dark theme (currently #1a1a1a)
- Light theme (currently #f5f5f5)

### Images
Replace placeholder images in components with your actual hotel images:
- Hero background image
- Room photos
- Team member photos

## Features to Add

- [ ] Image gallery / lightbox
- [ ] Online payment integration
- [ ] Guest testimonials section
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Live chat support
- [ ] Mobile app
- [ ] Advanced booking calendar

## Contact Information

**Riverland Hotel**
- Address: Riverside Boulevard, Nature Valley, NV 12345
- Phone: +1 (555) 123-4567
- Email: info@riverlandhotel.com
- Website: [www.riverlandhotel.com](https://www.riverlandhotel.com)

## License

ISC

---

Created with ❤️ for Riverland Hotel

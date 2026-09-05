# Quick Start Guide - Riverland Hotel Website

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure Overview

```
src/
├── app/
│   ├── layout.tsx           # Main layout wrapper
│   ├── page.tsx             # Home page (contains all sections)
│   └── globals.css          # Global styles and Tailwind setup
│
└── components/
    ├── Navigation.tsx       # Header with navigation menu
    ├── Hero.tsx            # Hero section with main image
    ├── About.tsx           # About hotel + location
    ├── Rooms.tsx           # Room types showcase
    ├── Booking.tsx         # Booking form
    ├── Contact.tsx         # Contact info + contact form
    └── Footer.tsx          # Footer with links & social
```

## 🎨 Customization Guide

### 1. Update Hotel Information
**File:** `src/components/About.tsx`
- Change hotel name and description
- Update location and address
- Modify phone and email

### 2. Add Your Hotel Images
1. Place images in `public/images/`
2. Update image URLs in components:
   - Hero background: `Hero.tsx`
   - About section image: `About.tsx`
   - Room photos: `Rooms.tsx`

### 3. Customize Colors
**File:** `tailwind.config.ts`
```typescript
theme: {
  extend: {
    colors: {
      gold: "#D4AF37",    // Primary color
      dark: "#1a1a1a",    // Background
      light: "#f5f5f5",   // Text color
    },
  },
}
```

### 4. Update Contact Details
**File:** `src/components/Contact.tsx`
- Phone numbers
- Email addresses
- Office hours
- Physical address

### 5. Modify Room Details
**File:** `src/components/Rooms.tsx`
- Room names and descriptions
- Pricing
- Amenities
- Images

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check code with ESLint |

## 📝 Making Updates

### Adding a New Section
1. Create new component in `src/components/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to JSX return statement

### Example Component Template:
```typescript
export default function NewSection() {
  return (
    <section id="section-id" className="py-20 bg-dark border-b border-gold/20">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-gold mb-12 text-center">
          Section Title
        </h2>
        {/* Your content here */}
      </div>
    </section>
  );
}
```

## 🎯 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Navigation menu with smooth scrolling
✅ Hero section with background image
✅ About section with hotel info
✅ Room showcase with pricing
✅ Booking form
✅ Contact form
✅ Contact information display
✅ Social media links
✅ Footer with links

## 🚀 Next Steps

1. **Replace placeholder images** with your own photos
2. **Update all text content** with your hotel information
3. **Test on mobile** - use browser DevTools
4. **Connect booking form** to your reservation system
5. **Add analytics** - Google Analytics or similar
6. **Deploy** - Vercel, Netlify, or your hosting provider

## 📦 Dependencies

- Next.js 15.0 - React framework
- React 18.2 - UI library
- TypeScript 5.3 - Type safety
- Tailwind CSS 3.4 - Styling
- Lucide React 0.468 - Icons
- PostCSS 8.4 - CSS processing

## ✨ Styling System

### Utility Classes
```css
.btn-primary    /* Gold button with dark text */
.btn-secondary  /* Outlined button with gold border */
.container-custom /* Max width 1280px container */
```

### Tailwind Classes Used
- `bg-dark`, `bg-light` - Background colors
- `text-gold` - Gold text color
- `border-gold/20` - Gold with transparency
- `flex`, `grid` - Layout
- `hover:`, `transition` - Interactions

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 💡 Tips

- Use browser DevTools to inspect and debug
- Check console for any errors
- Use Tailwind CSS classes for styling
- Keep components focused on one responsibility
- Use TypeScript for type safety

## 📞 Support

For issues or questions about the website, contact the development team.

---

**Happy coding! 🎉**

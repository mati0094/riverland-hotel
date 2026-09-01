"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-gold/20">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-gold">
          Riverland Hotel
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <div className="w-6 h-0.5 bg-gold"></div>
          <div className="w-6 h-0.5 bg-gold"></div>
          <div className="w-6 h-0.5 bg-gold"></div>
        </button>

        <ul className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-8 absolute md:relative top-16 md:top-0 left-0 right-0 bg-dark md:bg-transparent p-4 md:p-0`}>
          <li><Link href="#about" className="hover:text-gold transition">About</Link></li>
          <li><Link href="#rooms" className="hover:text-gold transition">Rooms</Link></li>
          <li><Link href="#team" className="hover:text-gold transition">Team</Link></li>
          <li><Link href="#booking" className="hover:text-gold transition">Booking</Link></li>
          <li><Link href="#contact" className="hover:text-gold transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

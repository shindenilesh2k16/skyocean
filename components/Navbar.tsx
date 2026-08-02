"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-sky-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+918080177676"
              className="flex items-center gap-2 hover:text-yellow-300"
            >
              <FiPhone />
              +91 8080177676
            </a>

            <a
              href="mailto:sudhirshinde@skyoceans.com"
              className="flex items-center gap-2 hover:text-yellow-300"
            >
              <FiMail />
              sudhirshinde@skyoceans.com
            </a>
          </div>

          <p>ADHEERA INDUSTRIES</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto px-5 h-20 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Sky Ocean"
              width={55}
              height={55}
              priority
            />

            <div>
              <h1 className="text-2xl font-bold text-sky-700">
                Sky Ocean
              </h1>

              <p className="text-xs text-gray-500">
                Packaged Drinking Water
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium hover:text-sky-600 transition"
              >
                {item.name}
              </a>
            ))}

            {/* <a
              href="#contact"
              className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Get Quote
            </a> */}
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col p-5 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-medium hover:text-sky-600"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-sky-600 text-white text-center py-3 rounded-lg"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
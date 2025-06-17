import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo_nail_families.webp";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollActive(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-[#f5ede3] ${
          scrollActive ? "shadow-sm" : ""
        }`}
      >
        <nav className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 grid grid-flow-col items-center py-4 transition-all">
          {/* Logo */}
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src={Logo}
              alt="Families Nail Logo"
              width={80}
              height={80}
              objectFit="contain"
              priority
            />
          </div>

          {/* Navigation */}
          <ul className="hidden lg:flex col-start-8 col-end-8 items-center text-lg font-semibold">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Policies", href: "/policies" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <a className="mx-4 text-[#333] hover:text-[#4b3b30] hover:underline underline-offset-4 transition-all">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="col-start-10 col-end-12 flex justify-end items-center space-x-4">
            <Link href="/contact">
              <a className="border border-[#4b3b30] text-[#4b3b30] px-5 py-2 rounded-full hover:bg-[#ece1d6] transition text-sm">
                Call Us
              </a>
            </Link>
            <Link href="/book">
              <a className="border border-[#4b3b30] text-[#4b3b30] px-5 py-2 rounded-full hover:bg-[#ece1d6] transition text-sm">
                Book Now
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-30 bg-[#f5ede3] border-t px-4 py-2 flex justify-between text-sm text-[#4b3b30] shadow-md">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/contact">
          <a>Call</a>
        </Link>
        <Link href="/book">
          <a>Book</a>
        </Link>
      </nav>
    </>
  );
};

export default Header;

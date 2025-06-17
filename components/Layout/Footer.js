import Image from "next/image";
import Link from "next/link";

const Logo = "/assets/logo_nail_families.webp";
const Facebook = "/assets/Icon/iconsfb.png";
const Instagram = "/assets/Icon/iconsinstagram.png";
const Tiktok = "/assets/Icon/iconstiktok.png";

const Footer = () => {
  return (
    <div className="relative pt-20 pb-16 bg-[#f5ede3] text-[#4b3b30] overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo + About */}
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="mb-6">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Families Nail Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="mb-6 text-[#4b3b30]/80 leading-relaxed max-w-xs">
              <strong className="font-semibold text-[#4b3b30]">
                Families Nail
              </strong>{" "}
              is your local sanctuary for luxury nail services, friendly staff,
              and relaxing vibes.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={Facebook || "/assets/Icon/iconsfb.png"}
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={Instagram || "/assets/Icon/iconsinstagram.png"}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={Tiktok || "/assets/Icon/iconstiktok.png"}
                  alt="Tiktok"
                  width={20}
                  height={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="mb-6 font-bold text-xl text-[#4b3b30] relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#4b3b30] mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Nail Extensions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Pedicures
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Gel & Shellac
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Nail Art
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Gallery
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col">
            <h3 className="mb-6 font-bold text-xl text-[#4b3b30] relative">
              About
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#4b3b30] mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Our Story
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-[#4b3b30]/80 hover:text-[#4b3b30] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    Terms of Service
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col">
            <h3 className="mb-6 font-bold text-xl text-[#4b3b30] relative">
              Visit Us
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#4b3b30] mt-2"></div>
            </h3>
            <div className="space-y-3 text-[#4b3b30]/80">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-5 h-5 mt-0.5 text-[#4b3b30]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p>123 Beauty Street</p>
                  <p>Victoria, BC V8X 1A1</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#4b3b30]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p>(555) 123-4567</p>
              </div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#4b3b30]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p>info@familiesnail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-[#4b3b30]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#4b3b30]/60 text-sm">
              © {new Date().getFullYear()} Families Nail. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy">
                <a className="text-[#4b3b30]/60 hover:text-[#4b3b30] transition-colors duration-300">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms">
                <a className="text-[#4b3b30]/60 hover:text-[#4b3b30] transition-colors duration-300">
                  Terms of Service
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

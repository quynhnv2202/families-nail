"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = ["/assets/bg-h2.jpg", "/assets/bg-h4.jpg", "/assets/bg-h5.jpg"];

const galleryImages = [
  {
    id: 1,
    src: "/assets/gl-1.PNG",
  },
  {
    id: 2,
    src: "/assets/gl-2.PNG",
  },
  {
    id: 3,
    src: "/assets/gl-3.PNG",
  },
  {
    id: 4,
    src: "/assets/gl-4.PNG",
  },
  {
    id: 5,
    src: "/assets/gl-5.PNG",
  },
  {
    id: 6,
    src: "/assets/gl-6.PNG",
  },
  {
    id: 7,
    src: "/assets/gl-7.PNG",
  },
  {
    id: 8,
    src: "/assets/gl-8.PNG",
  },
];

const services = [
  {
    category: "Nail Extensions",
    items: [
      { name: "Acrylic Full Set", price: 65, duration: "90 min" },
      { name: "Bio Gel Full Set", price: 65, duration: "90 min" },
      { name: "Acrylic Ombre Full Set", price: 75, duration: "120 min" },
      { name: "Bio Gel Refill", price: 55, duration: "60 min" },
      { name: "Acrylic Refill", price: 55, duration: "60 min" },
    ],
  },
  {
    category: "Pedicure Services",
    items: [
      { name: "Fam Pedicure & Regular Polish", price: 45, duration: "60 min" },
      { name: "Fam Pedicure & Gel Polish", price: 55, duration: "75 min" },
      {
        name: "Premium Pedicure & Regular Polish",
        price: 70,
        duration: "90 min",
      },
      { name: "Premium Pedicure Gel Polish", price: 80, duration: "105 min" },
      { name: "Polish Change & Regular Polish", price: 20, duration: "20 min" },
      { name: "Polish Change & Gel Polish", price: 35, duration: "30 min" },
    ],
  },
  {
    category: "Add-On Services",
    items: [
      { name: "Take Off", price: 20, duration: "15 min" },
      { name: "Design Per Nail", price: 5, duration: "10 min" },
      { name: "Nail Art", price: 15, duration: "20 min" },
      { name: "Chrome Finish", price: 10, duration: "15 min" },
    ],
  },
];

const HomeIntro = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Giữ nguyên code của bạn */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0">
          {images.map((img, idx) => (
            <div key={idx} className="absolute inset-0">
              <Image
                src={img || "/placeholder.svg"}
                alt={`Background ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                priority={idx === 0}
                className={`transition-all duration-[2000ms] ease-in-out transform ${
                  currentImage === idx
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              />
            </div>
          ))}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === idx
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24 w-full">
            <div className="max-w-3xl">
              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Relax and <span className="inline">shine</span>
                <br />
                with <span className="font-extrabold">Families Nail</span>
              </h1>

              {/* Description */}
              <p className="text-white/90 text-xl leading-relaxed mb-10 max-w-2xl font-light">
                Experience high-quality nail services in a luxurious and
                soothing space, with a team of dedicated professionals – helping
                you feel radiant and confident every day.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <a className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-coffee bg-cream rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-coffee">
                    <span className="relative z-10 group-hover:text-cream transition-colors duration-300">
                      BOOK NOW
                    </span>
                    <svg
                      className="ml-2 w-5 h-5 relative z-10 group-hover:text-cream transition-all duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Link>

                <Link href="/services">
                  <a className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    {/* Fill effect */}
                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 group-hover:text-text-coffee transition-colors duration-300">
                      Services
                    </span>
                    <svg
                      className="ml-2 w-5 h-5 relative z-10 group-hover:text-text-coffee transition-all duration-300 group-hover:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-coffee mb-6">
              About <span className="font-extrabold">Families Nail</span>
            </h2>
            <div className="w-24 h-1 text-coffee mx-auto mb-8 rounded-full"></div>
            <p className="text-text-coffee/80 text-xl leading-relaxed max-w-3xl mx-auto font-light">
              We are passionate about creating beautiful nails and providing
              exceptional service in a warm, welcoming environment that feels
              like home.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="space-y-6 text-center max-w-2xl">
              <h3 className="text-3xl font-bold text-text-coffee mb-6">
                Our Story
              </h3>
              <p className="text-text-coffee/80 text-lg leading-relaxed">
                Founded with a vision to create a sanctuary where beauty meets
                relaxation, Families Nail has been serving our community with
                dedication and artistry. We believe that every client deserves
                to feel pampered and beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bg-h7.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-coffee mb-6">
              Our <span className="font-extrabold">Services</span>
            </h2>
            <div className="w-24 h-1 text-coffee mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg
                      className="w-8 h-8 text-text-coffee"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-coffee">
                    {service.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {service.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-center py-3 border-b border-text-coffee/10 last:border-b-0"
                    >
                      <div>
                        <p className="font-semibold text-text-coffee">
                          {item.name}
                        </p>
                        <p className="text-sm text-text-coffee/60 flex items-center mt-1">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.duration}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-text-coffee">
                        ${item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/services">
            <a className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-text-coffee bg-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-text-coffee/20">
              <div className="absolute inset-0 text-coffee transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 group-hover:text-bg-cream transition-colors duration-300">
                Show More
              </span>
              <svg
                className="ml-2 w-5 h-5 relative z-10 group-hover:text-bg-cream transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-coffee mb-6">
              Our <span className="font-extrabold">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-coffee/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm mb-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <a className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-text-coffee bg-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-text-coffee/20">
                <div className="absolute inset-0 text-coffee transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 group-hover:text-bg-cream transition-colors duration-300">
                  Show More
                </span>
                <svg
                  className="ml-2 w-5 h-5 relative z-10 group-hover:text-bg-cream transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bg-h2.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-coffee mb-6">
              Visit <span className="font-extrabold">Our Salon</span>
            </h2>
            <div className="w-24 h-1 text-coffee mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-text-coffee"
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
              </div>
              <h3 className="text-2xl font-bold text-text-coffee mb-4">
                Location
              </h3>
              <p className="text-text-coffee/70 leading-relaxed">
                123 Beauty Street
                <br />
                Downtown, City 12345
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-text-coffee"
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
              </div>
              <h3 className="text-2xl font-bold text-text-coffee mb-4">
                Contact
              </h3>
              <p className="text-text-coffee/70 leading-relaxed">
                (555) 123-4567
                <br />
                info@familiesnail.com
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-text-coffee"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-coffee mb-4">
                Hours
              </h3>
              <p className="text-text-coffee/70 leading-relaxed">
                Mon-Sat: 9AM - 7PM
                <br />
                Sunday: 10AM - 6PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeIntro;

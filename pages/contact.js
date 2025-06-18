"use client";

import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Families Nail</title>
        <meta
          name="description"
          content="Contact Families Nail for bookings, questions or feedback. We're here to help you look and feel your best."
        />
        <link rel="icon" href="/assets/iconnail.png" />
      </Head>

      <Layout>
        <div className="relative z-10 py-12 px-4 mt-20">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-100 to-stone-100 py-16">
            <div className="absolute inset-0 bg-white/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-amber-900 mb-4 tracking-tight">
                Contact Us
              </h1>
              <p className="text-xl text-amber-800/80 max-w-2xl mx-auto leading-relaxed">
                We're here to answer any questions or help you book your next
                appointment
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Image and Contact Info */}
              <div className="space-y-8">
                {/* Featured Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/assets/contact.jpg"
                    alt="Elegant nail art with gold accents"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Contact Information Cards */}
                <div className="grid gap-6">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-1">
                          Phone
                        </h3>
                        <p className="text-gray-700 text-lg">(778) 445-3398</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-1">
                          Address
                        </h3>
                        <p className="text-gray-700">
                          1315 Cook St, Victoria, BC V8V 0H5
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-1">
                          Email
                        </h3>
                        <p className="text-gray-700">familiesnail@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">
                          Business Hours
                        </h3>
                        <div className="space-y-1 text-gray-700">
                          <p>Mon - Fri: 09:30 AM - 07:30 PM</p>
                          <p>Saturday: 09:00 AM - 07:00 PM</p>
                          <p>Sunday: 11:00 AM - 04:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="lg:sticky lg:top-8">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-amber-100">
                  <div className="mb-8">
                    <h2 className="text-3xl font-serif text-amber-900 mb-2">
                      Get In Touch
                    </h2>
                    <p className="text-gray-600">
                      Send us a message and we'll get back to you soon.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-amber-900">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border-2 border-amber-100 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100 transition-all duration-200 bg-white/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-amber-900">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border-2 border-amber-100 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100 transition-all duration-200 bg-white/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-amber-900">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full border-2 border-amber-100 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100 transition-all duration-200 bg-white/50"
                        placeholder="(250) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-amber-900">
                        Service Interest
                      </label>
                      <select className="w-full border-2 border-amber-100 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100 transition-all duration-200 bg-white/50">
                        <option value="">Select a service</option>
                        <option value="manicure">Manicure</option>
                        <option value="pedicure">Pedicure</option>
                        <option value="nail-art">Nail Art</option>
                        <option value="gel-polish">Gel Polish</option>
                        <option value="acrylic">Acrylic Nails</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-amber-900">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full border-2 border-amber-100 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100 transition-all duration-200 bg-white/50 resize-none"
                        placeholder="Tell us about your appointment preferences, questions, or special requests..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-stone-200/20 rounded-full blur-xl"></div>
        </div>
      </Layout>
    </>
  );
}

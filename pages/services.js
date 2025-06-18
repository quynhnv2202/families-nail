import Layout from "../components/Layout/Layout";
import Image from "next/image";
import Head from "next/head";

const services = {
  "Nail Extensions": {
    services: [
      { name: "Acrylic Full Set", price: 65, time: "90-120 min" },
      { name: "Bio Gel Full Set", price: 65, time: "90-120 min" },
      { name: "Acrylic Ombre Full Set", price: 75, time: "120-150 min" },
      { name: "Bio Gel Refill", price: 55, time: "60-90 min" },
      { name: "Acrylic Refill", price: 55, time: "60-90 min" },
    ],
    addOns: [
      { name: "Take Off", price: 20, time: "15-20 min" },
      { name: "Design/Per Nail ($5+)", price: 5, time: "5-10 min" },
    ],
    note: "All Nail Extensions Service Includes Gel Polish/Shellac Polish",
  },
  Pedicure: {
    services: [
      { name: "Fam Pedicure & Regular Polish", price: 45, time: "45-60 min" },
      { name: "Fam Pedicure & Gel Polish", price: 55, time: "60-75 min" },
      {
        name: "Premium Pedicure & Regular Polish",
        price: 70,
        time: "60-75 min",
      },
      { name: "Premium Pedicure Gel Polish", price: 80, time: "75-90 min" },
      { name: "Polish Change & Regular Polish", price: 20, time: "15-20 min" },
      { name: "Polish Change & Gel Polish", price: 35, time: "20-30 min" },
    ],
    addOns: [{ name: "Take off", price: 10, time: "10-15 min" }],
    note: "For a Pedicure/Polish Change service with gel color, gel removal is an additional $5 only",
  },
  Manicure: {
    services: [
      { name: "Take Off", price: 10, time: "10-15 min" },
      { name: "Fam Manicure & Regular Polish", price: 30, time: "30-45 min" },
      { name: "Fam Manicure & Gel Polish", price: 40, time: "45-60 min" },
      {
        name: "Premium Manicure & Regular Polish",
        price: 50,
        time: "45-60 min",
      },
      { name: "Premium Manicure & Gel Polish", price: 60, time: "60-75 min" },
      { name: "Polish change & Regular Polish", price: 20, time: "15-20 min" },
      { name: "Polish change & Gel Polish", price: 30, time: "20-30 min" },
    ],
    note: "For a Manicure / Polish Change service with gel color, gel removal is an additional $5 only",
  },
  "Removal/Repair": {
    services: [
      { name: "Take-Off Nail Extensions", price: 20, time: "15-20 min" },
      { name: "Take-Off Gel / Regular Polish", price: 10, time: "10-15 min" },
      { name: "Nail Trim", price: 15, time: "10-15 min" },
      { name: "Nail Fix / Per Nail", price: 10, time: "5-10 min" },
    ],
  },
  "Kid Service (under 10 years old)": {
    services: [
      { name: "Pedicure & Regular Polish", price: 35, time: "30-40 min" },
      { name: "Pedicure & Gel Polish", price: 45, time: "40-50 min" },
      { name: "Manicure & Regular Polish", price: 30, time: "25-35 min" },
      { name: "Manicure & Gel Polish", price: 35, time: "35-45 min" },
      { name: "Polish Change & Regular Polish", price: 15, time: "10-15 min" },
      { name: "Polish Change & Gel Polish", price: 25, time: "15-20 min" },
    ],
  },
  "Waxing & Tinting": {
    services: [
      { name: "Eyebrow", price: 15, time: "15-20 min" },
      { name: "Half Leg ($35+)", price: 35, time: "30-45 min" },
      { name: "Eyebrow Tint", price: 15, time: "20-25 min" },
      { name: "Full Leg ($60+)", price: 60, time: "60-75 min" },
      { name: "Chin", price: 15, time: "10-15 min" },
      { name: "Underarm", price: 20, time: "15-20 min" },
      { name: "Upper Lip", price: 10, time: "10-15 min" },
      { name: "Half Arm ($35+)", price: 35, time: "25-35 min" },
      { name: "Full Face", price: 50, time: "45-60 min" },
      { name: "Full Arm ($60+)", price: 60, time: "45-60 min" },
    ],
  },
};

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Families Nail</title>
        <meta
          name="description"
          content="Professional nail services including manicures, pedicures, nail extensions, waxing and more at Families Nail salon."
        />
      </Head>
      <Layout>
        <div className="relative min-h-screen">
          {/* Content */}
          <div className="relative z-10 py-12 px-4 mt-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block bg-cream/90 backdrop-blur-sm rounded-full px-12 py-6 shadow-lg">
                  <h1 className="text-4xl md:text-5xl font-serif text-amber-800">
                    Services
                  </h1>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid gap-8 md:gap-12">
                {Object.entries(services).map(
                  ([categoryName, categoryData]) => (
                    <div
                      key={categoryName}
                      className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100"
                    >
                      <h2 className="text-2xl md:text-3xl font-serif text-amber-800 text-center mb-8 border-b border-amber-200 pb-4">
                        {categoryName}
                      </h2>

                      <div className="grid md:grid-cols-2 gap-6">
                        {categoryData.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 border-b border-dotted border-amber-200 last:border-b-0"
                          >
                            <div className="flex-1">
                              <span className="text-gray-800 font-medium">
                                {service.name}
                              </span>
                              {service.time && (
                                <div className="text-sm text-amber-600 mt-1">
                                  ⏱ {service.time}
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-bold text-amber-800">
                                ${service.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {categoryData.addOns && (
                        <div className="mt-8">
                          <h3 className="text-lg font-serif text-amber-700 mb-4">
                            Add Ons
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {categoryData.addOns.map((addon, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b border-dotted border-amber-200 last:border-b-0"
                              >
                                <div className="flex-1">
                                  <span className="text-gray-700">
                                    {addon.name}
                                  </span>
                                  {addon.time && (
                                    <div className="text-sm text-amber-600 mt-1">
                                      ⏱ {addon.time}
                                    </div>
                                  )}
                                </div>
                                <div className="text-right">
                                  <span className="text-lg font-bold text-amber-800">
                                    ${addon.price}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {categoryData.note && (
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                          <p className="text-sm text-amber-800">
                            <span className="font-semibold">Note:</span>{" "}
                            {categoryData.note}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Footer Note */}
              <div className="mt-12 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg inline-block">
                  <p className="text-amber-800 font-medium">
                    Call us to book your appointment or for any questions about
                    our services
                  </p>
                  <p className="text-amber-600 mt-2">
                    Prices may vary based on nail condition and length
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

import Layout from "../components/Layout/Layout";
import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>Families Nail - About</title>
        <meta
          name="description"
          content="Learn more about Families Nail — where family values meet exceptional nail care. Our story, values, and commitment to excellence."
        />
        <link rel="icon" href="/assets/iconnail.png" />
      </Head>
      <div className="min-h-screen bg-bg-cream">
        {/* Hero Section */}
        <div className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-coffee/10 to-transparent"></div>

          {/* Background image layer */}
          <img
            src="/assets/bg-h5.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-60 z-0"
            style={{ pointerEvents: "none" }}
          />

          {/* Main content */}
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold text-coffee mb-6">
                About Families Nail
              </h1>
              <div className="w-24 h-1 bg-coffee mx-auto mb-8"></div>
              <p className="text-xl text-coffee/80 max-w-2xl mx-auto leading-relaxed">
                Where family values meet exceptional nail care
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 pb-20 mt-12">
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-coffee mb-6">Our Story</h2>
              <p className="text-lg text-coffee/90 leading-relaxed">
                At Families Nail, we believe that self-care is not just about
                beauty — it's about feeling confident, cared for, and
                comfortable in your own skin. Our salon is built on warmth,
                family values, and a commitment to quality.
              </p>
              <p className="text-lg text-coffee/90 leading-relaxed">
                Founded with the vision of creating a welcoming space where
                every client feels like family, we've been serving our community
                with dedication and passion for years.
              </p>
            </div>
            <div className="relative ">
              <div className="absolute -inset-4 bg-gradient-to-r from-coffee/20 to-amber-200/30 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/gl-12.PNG?height=400&width=500"
                  alt="Families Nail salon interior"
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-l from-coffee/20 to-amber-200/30 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/gl-13.PNG?height=400&width=500"
                  alt="Professional nail care service"
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-coffee mb-6">
                Our Values
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coffee rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-coffee/90">
                    <strong className="text-coffee">Quality:</strong> We use
                    only premium products and maintain the highest standards of
                    cleanliness and safety.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coffee rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-coffee/90">
                    <strong className="text-coffee">Family:</strong> Every
                    client is treated with the warmth and care we'd give our own
                    family members.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coffee rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-coffee/90">
                    <strong className="text-coffee">Excellence:</strong> Our
                    talented team continuously trains to deliver exceptional
                    service and stay current with trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-coffee mb-12">
              The Families Nail Experience
            </h2>

            <div className="grid md:grid-cols-3 gap-8 justify-center">
              {/* CARD 1 */}
              <div className="flip-card w-full h-64">
                <div className="flip-inner w-full h-full">
                  <div className="flip-front">
                    <img
                      src="/assets/gl-21.PNG"
                      alt="Relaxing Environment"
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="flip-back bg-cream text-coffee flex items-center justify-center px-6 text-center text-lg font-semibold">
                    Step into our cozy, clean space designed for your comfort
                    and relaxation.
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flip-card w-full h-64">
                <div className="flip-inner w-full h-full">
                  <div className="flip-front">
                    <img
                      src="/assets/gl-18.PNG"
                      alt="Expert Care"
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="flip-back bg-cream text-coffee flex items-center justify-center px-6 text-center text-lg font-semibold">
                    Our skilled technicians provide personalized service
                    tailored to your needs.
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="flip-card w-full h-64">
                <div className="flip-inner w-full h-full">
                  <div className="flip-front">
                    <img
                      src="/assets/gl-22.PNG"
                      alt="Premium Products"
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="flip-back bg-cream text-coffee flex items-center justify-center px-6 text-center text-lg font-semibold">
                    We use only the finest products to ensure lasting, beautiful
                    results.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-coffee/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-coffee/10 rounded-full blur-xl"></div>
      </div>
    </Layout>
  );
}

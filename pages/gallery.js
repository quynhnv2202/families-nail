import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";

const galleryImages = [
  "/assets/gl-1.PNG",
  "/assets/gl-2.PNG",
  "/assets/gl-3.PNG",
  "/assets/gl-4.PNG",
  "/assets/gl-5.PNG",
  "/assets/gl-6.PNG",
  "/assets/gl-7.PNG",
  "/assets/gl-8.PNG",
  "/assets/gl-9.PNG",
  "/assets/gl-21.PNG",
  "/assets/gl-22.PNG",
  "/assets/gl-12.PNG",
  "/assets/gl-13.PNG",
  "/assets/gl-14.PNG",
  "/assets/gl-15.PNG",
  "/assets/gl-16.PNG",
  "/assets/gl-17.PNG",
  "/assets/gl-18.PNG",
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Families Nail</title>
        <meta
          name="description"
          content="Explore our nail designs, salon interior, and real client results at Families Nail."
        />
        <link rel="icon" href="/assets/iconnail.png" />
      </Head>

      <Layout>
        <section className="relative z-10 py-12 px-4 mt-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-center text-amber-800 mb-12">
              Our Gallery
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

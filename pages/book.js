// pages/book.js
import Head from "next/head";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useRouter } from "next/router";
import SingleBookingWizard from "../components/SingleBookingWizard";
import GroupBookingWizard from "../components/GroupBookingWizard";

export default function BookPage() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      <Head>
        <title>Book Now | Families Nail</title>
        <link rel="icon" href="/assets/iconnail.png" />
      </Head>
      <Header />
      <main className="relative max-w-6xl mx-auto z-10 px-6 pt-32 pb-20 bg-bg-cream">
        {type === "single" && <SingleBookingWizard />}
        {type === "group" && <GroupBookingWizard />}
      </main>
      <Footer />
    </>
  );
}

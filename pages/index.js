import Head from "next/head";
import Layout from "../components/Layout/Layout";
import HomeIntro from "../components/HomeIntro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Families Nail</title>
        <meta
          name="description"
          content="Relax and shine with Families Nail – professional nail services in a welcoming environment."
        />
        <link rel="icon" href="/assets/iconnail.png" />
      </Head>

      <Layout>
        <HomeIntro />
      </Layout>
    </>
  );
}

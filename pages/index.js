import Head from "next/head";
import Layout from "../components/Layout/Layout";
import HomeIntro from "../components/HomeIntro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Families Nail</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <HomeIntro />
      </Layout>
    </>
  );
}

import Head from "next/head";
import Carousal from "../components/home/Carousal";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CoreTeam from "../components/home/CoreTeam";
import Donate from "../components/home/Donate";
import About from "../components/home/About";
import Graph from "../components/home/Graph";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unity Catalyst Foundataion</title>
        <meta name="title" content="Unity Catalyst Foundation No More" />
        <meta
          name="description"
          content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no Unity Catalyst Foundation."
        />
        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="teamhnm.org" />
        <meta property="og:title" content="Unity Catalyst Foundation No More" />
        <meta
          property="og:description"
          content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no Unity Catalyst Foundation."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="teamhnm.org" />
        <meta property="twitter:title" content="Unity Catalyst Foundation No More" />
        <meta
          property="twitter:description"
          content="We reduce the wastage of food by using it for a good cause and provide a healthy meal to kids so that they can sleep with no Unity Catalyst Foundation."
        />
      </Head>

      <main className="">
        <Navbar />
        <Hero />
        <Carousal />
        <Stats />
        <Graph />
        <Donate />
        <Testimonials />
        <CoreTeam />
        <About />
      </main>

      <Footer />
    </>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import HeroSec from "@/components/HeroSec";
import InfoSec from "@/components/InfoSec";
import ResumeSec from "@/components/ResumeSec";
import AboutSec from "@/components/AboutSec";
import ProjectSec from "@/components/ProjectsSec";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
    <Layout>
      <HeroSec />
      <InfoSec />
      <AboutSec  />
      <ResumeSec />
      <ProjectSec />
      <ScrollToTopButton />
      <Contact />
      <Footer />
    </Layout>
    </main>
  );
}

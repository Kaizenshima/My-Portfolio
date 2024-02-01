import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import HeroSec from "@/components/HeroSec";
import InfoSec from "@/components/InfoSec";
import ResumeSec from "@/components/ResumeSec";
import AboutSec from "@/components/AboutSec";
import ProjectSec from "@/components/ProjectsSec";
import ContactSec from "@/components/ContactSec";
import ScrollToTopButton from "@/components/ScrollToTopButton";


export default function Home() {
  return (
    <Layout>
      <HeroSec />
      <InfoSec />
      <AboutSec  />
      <ResumeSec />
      <ProjectSec />
      <ContactSec />
      <ScrollToTopButton />
    </Layout>
  );
}

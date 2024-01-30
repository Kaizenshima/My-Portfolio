import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import HeroSec from "@/components/HeroSec";
import InfoSec from "@/components/InfoSec";
import SkillSec from "@/components/SkillSec";



export default function Home() {
  return (
    <Layout>
      <HeroSec />
      <InfoSec />
      <SkillSec />
    </Layout>
  );
}

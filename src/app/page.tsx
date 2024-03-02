import { PrimaryButton } from "@/components/atoms/button";
import { MainAbout } from "@/components/molecules/mainAbout";
import { MainAboutUs } from "@/components/molecules/mainAboutUs";
import { MainFeatures } from "@/components/molecules/mainFeatures";
import { MainHero } from "@/components/molecules/mainHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainHero />
      <MainAbout />
      <MainAboutUs />
      <MainFeatures />
    </main>
  );
}

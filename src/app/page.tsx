import { PrimaryButton } from "@/components/atoms/button";
import { MainAbout } from "@/components/molecules/mainAbout";
import { MainAboutUs } from "@/components/molecules/mainAboutUs";
import { MainBottomCTA } from "@/components/molecules/mainBottomCTA";
import { MainFeatures } from "@/components/molecules/mainFeatures";
import { MainHero } from "@/components/molecules/mainHero";
import { MainPlan } from "@/components/molecules/mainPlan";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainHero />
      <MainAbout />
      <MainAboutUs />
      <MainFeatures />
      <MainPlan />
      <MainBottomCTA />
    </main>
  );
}

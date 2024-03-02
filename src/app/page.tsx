import { PrimaryButton } from "@/components/atoms/button";
import { Footer } from "@/components/molecules/footer";
import { MainAbout } from "@/components/molecules/mainAbout";
import { MainAboutUs } from "@/components/molecules/mainAboutUs";
import { MainBottomCTA } from "@/components/molecules/mainBottomCTA";
import { MainFeatures } from "@/components/molecules/mainFeatures";
import { MainHero } from "@/components/molecules/mainHero";
import { MainPlan } from "@/components/molecules/mainPlan";
import { MainSeparator } from "@/components/molecules/mainSeparator";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${sourceSans.className}`}
    >
      <MainHero />
      <MainAbout />
      <MainAboutUs />
      <MainFeatures />
      <MainPlan />
      <MainSeparator />
      <MainBottomCTA />
      <Footer />
    </main>
  );
}

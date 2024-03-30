import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";
import { MainAbout } from "@/components/molecules/mainAbout";
import { MainAboutUs } from "@/components/molecules/mainAboutUs";
import { MainBottomCTA } from "@/components/molecules/mainBottomCTA";
import { MainFeatures } from "@/components/molecules/mainFeatures";
import { MainGallery } from "@/components/molecules/mainGallery";
import { MainHero } from "@/components/molecules/mainHero";
import { MainPlan } from "@/components/molecules/mainPlan";
import { MainSeparator } from "@/components/molecules/mainSeparator";
import { FindGame } from "@/components/molecules/publicGames/findGame";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${sourceSans.className}`}
    >
      <Header />
      <MainHero />
      <FindGame />
      <MainAboutUs />
      <MainSeparator />
      <MainGallery />
      <MainFeatures />
      <MainBottomCTA />
      <Footer />
    </main>
  );
}

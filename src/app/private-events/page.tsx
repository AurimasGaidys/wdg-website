import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";
import { MainBottomCTA } from "@/components/molecules/mainBottomCTA";
import { PrivateFeatures } from "@/components/molecules/privateGames/mainFeatures";
import { PrivateEventAbout } from "@/components/molecules/privateGames/privateEventAbout";
import { PrivateEventAbout2 } from "@/components/molecules/privateGames/privateEventAbout2";
import { PrivateEventHero } from "@/components/molecules/privateGames/privateEventHero";
import { PrivateEventHero2 } from "@/components/molecules/privateGames/privateEventHero2";
import { PrivateEventNumbers } from "@/components/molecules/privateGames/privateEventNumbers";
import { PrivateForm } from "@/components/molecules/privateGames/privateForm";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${sourceSans.className}`}
    >
      <Header />
      <PrivateEventHero2 />
      <PrivateEventAbout2 />
      <PrivateFeatures />
      <PrivateForm />
      <PrivateEventNumbers />
      <MainBottomCTA />
      <Footer />
    </main>
  );
}

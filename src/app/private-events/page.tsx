import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";
import { MainBottomCTA } from "@/components/molecules/mainBottomCTA";
import { PrivateEventAbout } from "@/components/molecules/privateGames/privateEventAbout";
import { PrivateEventHero } from "@/components/molecules/privateGames/privateEventHero";
import { PrivateEventNumbers } from "@/components/molecules/privateGames/privateEventNumbers";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${sourceSans.className}`}
    >
      <Header />
      <PrivateEventHero />
      <PrivateEventAbout />
      <PrivateEventNumbers />
      <MainBottomCTA />
      <Footer />
    </main>
  );
}

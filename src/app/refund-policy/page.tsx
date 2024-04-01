import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";
import { MainBottomCTA } from "@/components/molecules/mainBottomCTA";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex bg-white min-h-screen flex-col items-center justify-between ${sourceSans.className}`}
    >
      <Header />
      <div className="max-w-[1140px] w-full px-[20px] py-[40px] text-[16px] leading-[24px] text-[#2E2924]">
        <h1 className="text-[64px] leading-[45px] pb-[10px] font-black text-center pb-[40px]">
          Refund policy
        </h1>
        <p>
          All event tickets are purchased as non-refundable but are fully
          exchangeable.
        </p>
        <p>
          In the event that a game is cancelled due to an issue beyond the
          organiser’s control (ie. poor weather conditions, natural disasters,
          government mandate, apocalypse, etc) then no refunds will be offered,
          however all tickets may be exchanged for any future event within a
          12-month period. Once the cancellation is confirmed we will endeavour
          to contact you as soon as possible with further event details.
        </p>
        <p>
          If the event is cancelled due to an issue within the organiser’s
          control, then a full refund may be offered at the organiser’s
          discretion.
        </p>
        <p>
          All event tickets may be exchanged for future events within a 12-month
          period. To be eligible for an exchange, your game access-code must be
          unused and you must be able to provide proof of purchase upon request.
          Once you have chosen your selected event, please contact the organiser
          (contact@whydoesgames.com) no later than 1 week prior to the event so
          that your ticket can be exchanged.
        </p>
      </div>
      <MainBottomCTA />
      <Footer />
    </main>
  );
}

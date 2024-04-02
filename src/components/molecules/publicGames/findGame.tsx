import { PrimaryButton } from "@/components/atoms/button";
import Image from "next/image";

export const FindGame = () => {
  return (
    <a href="events" className="flex flex-col md:flex-row bg-gradient-to-b from-[#13131B] to-[#8D3256] w-full items-center justify-center md:h-[170px] p-[40px]">
      <PrimaryButton>find an event</PrimaryButton>
    </a>
  );
};

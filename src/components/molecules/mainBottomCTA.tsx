import Image from "next/image";

import { PrimaryButton } from "../atoms/button";
import { isMobileLayout } from "@/helpers/isMobile";

export const MainBottomCTA = () => {
    const isMobile = isMobileLayout()

  console.log("isMobile", isMobile);
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#CACACA] w-full justify-between">
      {isMobile ? (
        <div />
      ) : (
        <Image
          className="-mt-[125px]"
          src="/Silverster 1.png"
          alt="Why Does Games Ghosts Logo"
          width={554}
          height={663}
          priority
        />
      )}
      <div className="flex flex-col w-[366px] items-center p-[20px]">
        <h2 className="text-[36px] leading-[45px] text-[#2E2924] text-center pb-[20px] font-black">
          Get into the action with Ghosts
        </h2>
        <PrimaryButton>FIND A GAME NEAR YOU</PrimaryButton>
      </div>
      {isMobile ? (
        <div />
      ) : (
        <Image
          className="-mt-[125px]"
          src="/Dominica 3 1.png"
          alt="Why Does Games Ghosts Logo"
          width={554}
          height={663}
          priority
        />
      )}
    </div>
  );
};

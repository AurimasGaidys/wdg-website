import Image from "next/image";

import { PrimaryButton } from "../atoms/button";

export const MainBottomCTA = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#CACACA] w-full justify-between">
      <Image
        className="-mt-[125px]"
        src="/Silverster 1.png"
        alt="Why Does Games Ghosts Logo"
        width={554}
        height={663}
        priority
      />
      <div className="flex flex-col w-[366px] items-center">
        <h2 className="text-[36px] leading-[45px] text-[#2E2924] text-center pb-[20px]">
          Get into the action with Ghosts
        </h2>
        <PrimaryButton>FIND A GAME NEAR YOU</PrimaryButton>
      </div>
      <Image
        className="-mt-[125px]"
        src="/Dominica 3 1.png"
        alt="Why Does Games Ghosts Logo"
        width={554}
        height={663}
        priority
      />
    </div>
  );
};

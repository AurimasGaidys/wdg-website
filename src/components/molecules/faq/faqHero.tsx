import Image from "next/image";

export const FaqHero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#13131B] to-[#494874] w-full items-center justify-center md:h-[567px] p-[40px]">
      <div className="max-w-[366px]">
        <h1 className="text-[36px] leading-[45px] max-w-[362px] font-black text-white">
          Frequently Asked Questions
        </h1>
        <p className="pb-[20px] text-white">
          At Why Does Games, our goal is to create experiences that encourage
          healthy outdoor exploration and story driven gameplay. Whether you
          play with a group or alone our quest is to insure that the experience
          is tailored for you.
        </p>
        <p className="pb-[20px] text-white">
          We’ve answered some of the most common questions about the game that
          new players might have below.
        </p>
      </div>
      <Image
        className=""
        src="/Dominica 3 1.png"
        alt="Why Does Games Ghosts Logo"
        width={400}
        height={400}
        priority
      />
    </div>
  );
};

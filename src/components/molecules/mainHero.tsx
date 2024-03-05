import Image from "next/image";

export const MainHero = () => {
  return (
    <div className="flex flex-col relative items-center bg-gradient-to-b from-[#ffffff] to-[#CACACA] w-full min-h-[400px] justify-between">
      <Image
        className="pt-[20px] dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/logo_hero.png"
        alt="Why Does Games Ghosts Logo"
        width={300}
        height={200}
        priority
      />
      <Image
        className="-mt-[125px]"
        src="/bg_hero.png"
        alt="Why Does Games Ghosts Logo"
        width={1165}
        height={630}
        priority
      />
    </div>
  );
};

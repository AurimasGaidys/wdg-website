import Image from "next/image";

export const PrivateEventHero2 = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-[#7da9d3] items-end w-full items-center justify-end h-[300px] md:h-[500px] xl:h-[700px]">
      <Image
        className="w-full h-[300px] md:h-full object-cover object-center"
        src="/private-hero.webp"
        alt="Why Does Games Ghosts Logo"
        width={1920}
        height={622}
        priority
      />
    </div>
  );
};

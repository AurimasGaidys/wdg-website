import Image from "next/image";

export const PrivateEventHero2 = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-[#7da9d3] items-end w-full items-center justify-end h-[300px] md:h-[500px] ">
      <Image
        className="w-full h-[300px] md:h-full object-cover object-center"
        src="/private-hero.webp"
        alt="Why Does Games Ghosts Logo"
        width={800}
        height={400}
        priority
      />
    </div>
  );
};

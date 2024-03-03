import Image from "next/image";

export const PrivateEventHero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#13131B] to-[#494874] w-full items-center justify-center md:h-[567px] p-[40px]">
      <div className="max-w-[366px]">
        <h1 className="text-[36px] leading-[45px] max-w-[362px] font-black text-white pb-[20px]">
          Team building adventure
        </h1>
        <p className="pb-[20px] text-white">
          An outdoor ghost busting experience
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

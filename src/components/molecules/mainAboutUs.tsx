import Image from "next/image";

export const MainAboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white w-full items-center justify-center h-[567px] space-x-[20px]">
      <Image
        className="relative"
        src="/base_logo.jpeg"
        alt="Next.js Logo"
        width={300}
        height={200}
        priority
      />
      <div className="max-w-[366px] text-[#2E2924]">
        <h2 className="text-[36px] leading-[45px] max-w-[362px] pb-[10px] font-black">
          Welcome to Why Does Games
        </h2>
        <p className="pb-[20px] text-[#2E2924]">
          We’re a Games Studio, and we’re wizards at creating brilliant outdoor
          virtual gaming experiences. With our latest project Ghosts, we
          transform your city into ghost filled adventure playground for the
          day!
        </p>
      </div>
    </div>
  );
};

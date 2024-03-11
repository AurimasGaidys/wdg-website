import Image from "next/image";

export const PublicEventHero = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-[#7da9d3] items-end w-full items-center justify-center">
      <div className="absolute top-[20px] max-w-[512px] text-center">
        <h1 className="text-[80px] leading-[100px] font-black text-white pb-[20px]">
          You walk in a park
        </h1>
        <p className="pb-[20px] text-white text-[40px] leading-[50px]">
          Make it an epic adventure
        </p>
      </div>
      <Image
        className="w-full max-h-[80vh] h-full object-cover object-center"
        src="/public_header.jpeg"
        alt="Why Does Games Ghosts Logo"
        width={800}
        height={400}
        priority
      />
    </div>
  );
};

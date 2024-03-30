import Image from "next/image";

export const PrivateEventHero = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-[#7da9d3] items-end w-full items-center justify-end h-[650px] md:h-[500px] ">
      <div className="absolute left-[5%] top-[20px] max-w-[512px] text-center">
        <h1 className="text-[80px] leading-[100px] font-black text-white pb-[20px]">
          Private adventure
        </h1>
        <p className="pb-[20px] text-white text-[40px] leading-[50px]">
          An outdoor ghost busting experience near you
        </p>
      </div>
      <Image
        className="w-full h-200px md:h-[500px] md:h-full object-cover object-center"
        src="/private_header.jpeg"
        alt="Why Does Games Ghosts Logo"
        width={800}
        height={400}
        priority
      />
    </div>
  );
};

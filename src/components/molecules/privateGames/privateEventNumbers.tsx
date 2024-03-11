import Image from "next/image";

export const PrivateEventNumbers = () => {
  return (
    <div className="flex flex-col items-center font-[40px] space-y-[10px] w-full p-[20px] bg-gradient-to-b from-[#13131B] to-[#494874]">
      <h2 className="text-[36px] leading-[45px] pb-[30px] font-black">
        Our clients
      </h2>
      <div className="flex flex-col md:flex-row justify-around space-x-[20px] w-full max-w-[800px]">
        <Image
          className="w-[200px] h-200px md:h-[500px] md:h-full object-cover object-center"
          src="/SneakyBox-logo.png"
          alt="SneakyBox Logo"
          width={200}
          height={200}
          priority
        />
        <Image
          className="w-[200px] h-200px md:h-[500px] md:h-full object-cover object-center"
          src="/quatrodev-logo.svg"
          alt="Quatrodev Logo"
          width={200}
          height={200}
          priority
        />
        <Image
          className="w-[200px] h-200px md:h-[500px] md:h-full object-cover object-center"
          src="/GTH-logo.webp"
          alt="GTH Logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex flex-col md:flex-row justify-around space-x-[20px] w-full ">
        <div className="flex flex-col items-center space-y-[10px]">
          <div className="text-[28px] leading-[30px] p-[10px] font-bold">
            420+
          </div>
          <div>Over 420 happy ghosthunters</div>
        </div>
        <div className="flex flex-col items-center space-y-[10px]">
          <div className="text-[28px] leading-[30px] p-[10px] font-bold">
            50+
          </div>
          <div>Over 50 events worldwide</div>
        </div>
        <div className="flex flex-col items-center space-y-[10px]">
          <div className="text-[28px] leading-[30px] p-[10px] font-bold">
            5+
          </div>
          <div>Over 5 countries</div>
        </div>
      </div>
    </div>
  );
};

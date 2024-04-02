import Image from "next/image";

export const NoNewEvents = () => {
  return (
    <div className="flex flex-col space-y-10 bg-gradient-to-b from-[#13131B] to-[#8D3256] w-full items-center justify-center md:h-[300px] p-[40px]">
      <Image
        className=""
        src="/no_events.svg"
        alt="Why Does Games Ghosts logo"
        width={50}
        height={20}
        priority
      />
      <p>Currently we are not hosting any public events</p>
    </div>
  );
};

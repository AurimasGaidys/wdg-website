import Image from "next/image";

export const MainSeparator = () => {
  return <div className="w-full flex justify-center bg-white">
     <Image
        className=""
        src="/separator.png"
        alt="Why Does Games Ghosts separator"
        width={190}
        height={12}
        priority
      />
  </div>;
};

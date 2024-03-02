import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full h-[100px] bg-[#28292E] text-white p-[20px]">
      <p className="text-[#BDA064]">© Why Does Games</p>
      <Image
        className=""
        src="/footer_sep.png"
        alt="Why Does Games Ghosts Logo"
        width={62}
        height={12}
        priority
      />
      <div className="flex space-x-[10px]">
        <Image
          className=""
          src="/cib_instagram.png"
          alt="Why Does Games Ghosts Logo"
          width={32}
          height={32}
          priority
        />
        <Image
          className=""
          src="/eva_facebook-outline.png"
          alt="Why Does Games Ghosts Logo"
          width={32}
          height={32}
          priority
        />
      </div>
    </footer>
  );
};

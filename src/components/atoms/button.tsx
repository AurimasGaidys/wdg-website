import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="hover:text-opacity-50 text-white font-bold py-2 px-4 rounded uppercase flex flex-row"
      {...props}
    >
      <Image
        className=""
        src="/MygtukoTrikampiukai1.svg"
        alt="Feature icon"
        width={30}
        height={48}
        priority
      />
      <div className="flex bg-[#b28c3b] h-[48px] items-center justify-center px-[20px]">{children}</div>
      <Image
        className=""
        src="/MygtukoTrikampiukai2.svg"
        alt="Feature icon"
        width={30}
        height={48}
        priority
      />
    </button>
  );
};

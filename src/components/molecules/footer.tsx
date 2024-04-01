import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full space-y-[20px] md:h-[100px] bg-[#28292E] text-white p-[20px] flex-col md:flex-row">
      <div className="flex space-x-[10px] items-center md:items-baseline flex-col md:flex-row space-y-[20px]">
        <p className="text-[#BDA064]">© Why Does Games</p>
        <a
          href="/terms-and-conditions"
          className="text-[#BDA064] text-xs underline"
        >
          Term and Conditions
        </a>
        <a href="/privacy-policy/" className="text-[#BDA064] text-xs underline">
          Privacy Policy
        </a>
        <a href="/refund-policy/" className="text-[#BDA064] text-xs underline">
          Refund Policy
        </a>
      </div>
      <Image
        className=""
        src="/footer_sep.png"
        alt="Why Does Games Ghosts Logo"
        width={62}
        height={12}
        priority
      />
      <div className="flex space-x-[10px] items-center md:w-[402px] md:justify-end">
        <a
          href="https://www.instagram.com/whydoesgames/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className=""
            src="/cib_instagram.png"
            alt="Why Does Games Ghosts Instagram"
            width={32}
            height={32}
            priority
          />
        </a>
        <a
          href="https://www.facebook.com/whydoesgames/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className=""
            src="/eva_facebook-outline.png"
            alt="Why Does Games Ghosts Facebook"
            width={32}
            height={32}
            priority
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UC0Wv0CTIu3GiHvZ3JXux4tA"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className=""
            src="/youtube_icon.png"
            alt="Why Does Games Ghosts Youtube"
            width={32}
            height={32}
            priority
          />
        </a>
        <a href="mailto:vaidas.okunis@gmail.com" rel="noreferrer">
          <Image
            className=""
            src="/email_icon .webp"
            alt="Why Does Games Ghosts Email Icon"
            width={32}
            height={32}
            priority
          />
        </a>
      </div>
    </footer>
  );
};

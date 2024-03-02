import Image from "next/image";

export const MainPlan = () => {
  const data = [
    {
      icon: "/i1.png",
      title: "01.",
      description: "Find a game near you",
    },
    {
      icon: "/i2.png",
      title: "02.",
      description: "Buy a ticket",
    },
    {
      icon: "/i3.png",
      title: "03.",
      description: "Download an app",
    },
    {
      icon: "/i4.png",
      title: "04.",
      description: "Travel to the start location",
    },
    {
      icon: "/i5.png",
      title: "05.",
      description: "Save your city",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full md:h-[567px] space-x-[20px] p-[20px] md:p-[0]">
      <h2 className="text-[36px] leading-[45px] pb-[10px] text-[#2E2924] ">
        Your adventure begins here….
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        {data.map((x) => (
          <div className="flex flex-col items-center justify-start h-[180px] w-[170px]">
            <Image
              className="pt-[20px] dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src={x.icon}
              alt="Why Does Games Ghosts Logo"
              width={68}
              height={85}
              priority
            />
            <h3 className="text-[36px] leading-[24px] pt-[20px] pb-[5px] text-[#2E2924] font-black ">
              {x.title}
            </h3>
            <p className="text-[18px] leading-[22px] text-[#2E2924] text-center">
              {x.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

import Image from "next/image";

export const MainAboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#E5E5E5] to-[#ffffff] w-full items-center justify-center h-[567px] space-x-[20px]">
      <div className="max-w-[1140px] text-[#2E2924] items-center justify-center">
        <h2 className="text-[64px] leading-[45px] pb-[10px] font-black text-center pb-[40px]">
          Narrative scavenger hunts
        </h2>
        <p className="pb-[20px] text-[#2E2924] text-center">
          Unique way of spending time with your friends!
        </p>
        <p className="pb-[20px] text-[#2E2924] text-center">
          Why Does Games: Ghosts is outdoor immersive exploration event that
          bring families and friends together in unique and innovative ways.
        </p>
        <p className="pb-[20px] text-[#2E2924] text-center">
          Using your phone explore your city, meet captivating ghosts and shape
          unique story.
        </p>
      </div>
    </div>
  );
};

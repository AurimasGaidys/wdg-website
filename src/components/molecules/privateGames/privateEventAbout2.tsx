import Image from "next/image";

export const PrivateEventAbout2 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#E5E5E5] to-[#ffffff] w-full items-center justify-center space-x-[20px] py-[50px]">
      <div className="max-w-[630px] text-[#2E2924] items-center justify-center">
        <h2 className="text-[64px] leading-[64px] pb-[10px] font-black text-center pb-[40px]">
          Private ghost busting experience for you
        </h2>
        <p className="pb-[20px] text-[#2E2924] text-center">
          Let WhyDoesGames create an epic event for you filled with challenges,
          adventures and ghosts.
        </p>
        <p className="pb-[20px] text-[#2E2924] text-center">
          We create story driven adventure that is convenient to book and work
          within most budgets. Our events take place outdoors, usually at the
          parks and are available in almost any town or city worldwide.
        </p>
        <p className="pb-[20px] text-[#2E2924] text-center">
          Your teams of ghost hunters will walk around the park, interact with
          virtual ghosts and save the world from total destruction!
        </p>
      </div>
    </div>
  );
};

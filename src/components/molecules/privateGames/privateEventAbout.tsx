import Image from "next/image";

export const PrivateEventAbout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white w-full items-center md:items-start justify-center h-full md:h-[567px] p-[20px]">
      <Image
        className="relative coved-image w-[400px] md:h-[400px] m-[10] mr-[20px] object-cover object-center"
        src="/private-1.jpeg"
        alt="Players playing the game"
        width={400}
        height={400}
      />
      <div className="max-w-[366px] text-[#2E2924]">
        <h2 className="text-[36px] leading-[45px] max-w-[362px] pb-[10px] font-black">
          Story driven city exploration
        </h2>
        <p className="pb-[20px] text-[#2E2924]">
          Let WhyDoesGames create an epic event for your business
          filled with challenges, adventures and ghosts.
        </p>
        <p className="pb-[20px] text-[#2E2924]">
          We create story driven adventure that is convenient to book and work
          within most budgets. Our events take place outdoors, usually at the
          parks and are available in almost any town or city worldwide.
        </p>
        <p className="pb-[20px] text-[#2E2924]">
          Your teams of ghost hunters will walk around the park, interact with
          virtual ghosts and save the world from total destruction!
        </p>
        <p className="pb-[20px] text-[#2E2924]">
          Get in touch today for more information on our Covid-safe team
          building events, and book a team day to remember.
        </p>
      </div>
    </div>
  );
};

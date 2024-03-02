import { PrimaryButton } from "../atoms/button";

export const MainAbout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#13131B] to-[#494874] w-full items-center justify-center md:h-[567px] p-[40px]">
      <h1 className="text-[64px] leading-[72px] max-w-[362px] font-black text-white">
        A new way of spending time outdoors!
      </h1>
      <div className="max-w-[366px]">
        <p className="pb-[20px]">
          Enjoy some fantastic ghostly fun with an interactive – and COVID safe
          – outdoor adventure.
        </p>
        <p className="pb-[20px]">
          Ghosts are at war on the streets. Can YOU resolve their conflict and
          prevent them from overrunning the city?
        </p>
        <p className="pb-[20px]">
          That’s the challenge – and with the user-friendly Ghosts app on your
          mobile, you’ll have a great time answering it!
        </p>
        <p className="pb-[20px]">
          Explore the city playzone, search for and engage with a host of
          different ghosts… tackle the tasks you’re set and play minigames over
          a couple of action-packed hours. You’ll test your wits and skills,
          have a great time on your own or with friends – and save the city too!{" "}
        </p>
        <a href="#">
          <PrimaryButton>Find games near you</PrimaryButton>
        </a>
      </div>
    </div>
  );
};

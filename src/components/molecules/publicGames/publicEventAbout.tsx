import Image from "next/image";

export const PublicEventAbout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white w-full items-center md:items-start justify-center h-full md:h-[567px] p-[20px]">
      <Image
        className="relative coved-image w-[400px] md:h-[400px] m-[10] mr-[20px] object-cover object-center"
        src="/public_about.jpeg"
        alt="Players playing the game"
        width={400}
        height={400}
      />
      <div className="max-w-[366px] text-[#2E2924]">
        <h2 className="text-[36px] leading-[45px] max-w-[362px] pb-[10px] font-black">
          A new way of spending time outdoors!
        </h2>
        <p className="pb-[20px] text-[#2E2924]">
          Grab some friends, stop some angry ghost from unleashing ancient fury
          and save the world! Sounds easy right? Not so fast!
        </p>
        <p className="pb-[20px] text-[#2E2924]">
          A whole day full of adventures, thirty virtual ghosts to speak with,
          minigames to test your brains, and the eternal conflict that can be
          solved only with your help – all this and more awaits in this Why Does
          Games: Ghosts adventure!
        </p>
      </div>
    </div>
  );
};

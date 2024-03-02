import { FeatureCell } from "../atoms/featureCell";

export const MainFeatures = () => {
  const data = [
    {
      title: "It’s Personal!",
      description:
        "Ghosts is a personal challenge, not a competition. Every player will find their own unique way to save the city – leading to very different experiences and conclusions!",
    },
    {
      title: "Virtual Ghosts",
      description:
        "Ghosts are everywhere in your city play zone! Seek them out, interact via the Ghosts app on your phone…and they’ll introduce you to other characters, minigames and key items.",
    },
    {
      title: "Play Solo or with Friends",
      description:
        "Ghosts can be played on your own or with friends. When you play with friends you can enjoy the fun and excitement together and compare your achievements at the end of the day.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-[#BDA064] w-full items-center justify-center md:h-[567px] space-x-[20px] p-[20px] md:p-[0]">
      {data.map((x) => (
        <FeatureCell title={x.title} description={x.description} />
      ))}
    </div>
  );
};

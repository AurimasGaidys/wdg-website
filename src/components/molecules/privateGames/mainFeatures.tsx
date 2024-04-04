import { FeatureCell } from "@/components/atoms/featureCell";

export const PrivateFeatures = () => {
  const data = [
    {
      title: "Personal story",
      description:
        "This is not a competition. Each player will be able to find their own unique way to save the city. This might lead to drastically different outcomes.",
    },
    {
      title: "Virtual Ghosts",
      description:
        "The city is full of them! Walk close to them and use the app to interact. Ghosts will provide you with quests, minigames and items.",
    },
    {
      title: "Play alone or with friends",
      description:
        "This game can be enjoyed alone or with a team. Playing with a team will allow you to compare statistics and achievements at the end of the game.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  bg-gradient-to-b from-[#13131B] to-[#494874] w-full items-center justify-center md:h-[400px] space-x-[20px] p-[20px] md:p-[0]">
      {data.map((x) => (
        <FeatureCell title={x.title} description={x.description} />
      ))}
    </div>
  );
};

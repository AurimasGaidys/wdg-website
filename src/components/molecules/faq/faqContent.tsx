import { FaqCell } from "@/components/atoms/faqCell";

const data = [
  {
    title: "How does it work?",
    description: [
      "Why Does Games: Ghosts is a virtual adventure that takes place in various places across the city.",
      "Using a smartphone application you will interact with the virtual ghosts, collect items, play minigames and forge your own story.",
      "Check out our Event schedule today to find an adventure happening near you!",
    ],
  },
  {
    title: "Are there any advantages playing as a team?",
    description: [
      "When you buy a ticket pack, those tickets are considered a team. There are no gameplay advantages to playing as a team and each player will still have a freedom to choose any narrative patch they want. However, when playing as a team, the players will be able to compare achievements and statistics at the end of the game.",
    ],
  },
  {
    title: "How long do Why Does Games: Ghosts experiences last?",
    description: [
      "It depends 🙂 The length of the game can vastly vary depending on the attitude of each player – on average most people take around 2 hours. This game is not a race, each player can progress at the comfortable speed.",
    ],
  },
  {
    title: "Is the game suitable for children?",
    description: [
      "Yes, but we encourage kids younger than 16 years to be companions not the players. The game is designed for adults and older children, but it can be enjoyed by the whole family. The game is not suitable for children under 8 years old.",
    ],
  },
  {
    title: "What happens if I am late? Can I choose my own start time?",
    description: [
      "Yes, you can start at any point in a given period of 3h from the official game start.",
    ],
  },
  {
    title: "What about bad weather? What happens if it rains?",
    description: [
      "Grab an umbrella and take on the challenge!",
      "We might choose to organise a second event in the same location. In that case we will transfer unused game tickets to the new event, however no refunds will be offered.",
      "For more information, please read our refund and exchange policy",
    ],
  },
  {
    title:
      "What about privacy? Does “Why Does Games” collect my information and share it with the third parties?",
    description: [
      "We do collect some of your information, but we DO NOT share it with the third parties. We only collect it to operate the game and improve our games.",
    ],
  },
  {
    title: "Can game checkpoints be in unsafe areas?",
    description: [
      "We try to create checkpoints in public highly accessible places. The safety of any given area depends on the user, the time of day, and many other factors. We encourage users to use their own judgment and contact us immediately if there are any potential issues.",
      "Email: Contact@WhyDoesGames.com",
    ],
  },
  {
    title: "Is the game wheelchair accessible?",
    description: [
      "We are unable to guarantee wheelchair accessibility. The route between each point is different for each player. We try to place points in accessible locations where possible.",
    ],
  },
  {
    title: "What if I have not received an email after buying a ticket?",
    description: [
      "1. Wait 15 minutes.",
      "2. Check the spam folder.",
      "3. Contact us at contact@whydoesgames.com",
    ],
  },
  {
    title: "What if I have lost my ticket?",
    description: [
      "If you have lost your ticket, please contact us at contact@whydoesgames.com",
    ],
  },
];

export const FaqContent = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      {data.map((x, i) => (
        <FaqCell question={x.title} answers={x.description} />
      ))}
    </div>
  );
};

import { useMemo, useState } from "react";
import Card, { ICard, ICardProps } from "../components/card/card";
import Hero from "../components/hero/hero";
import { cards as AllCards } from "../utils/helpers/create-cards";

const PTO = () => {
  const [cards, setCards] = useState<ICard[]>(AllCards);

  const toggleActive = (id: number) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, active: !card.active };
      }
      return card;
    });
    setCards(newCards);
  };

  return (
    <main className="flex flex-col items-center space-y-20 dark:bg-gray-700 dark:text-white">
      <div className="text-center space-y-8 max-w-2xl px-5 md:px-0">
        <h1 className="text-5xl font-bold mt-6">Easy Turn-Key Integration</h1>
        <p className="break-words">
          Increase job satisfaction, improve engagement, decrease burnout and
          lower payroll liability by re-imagining what employees can do with
          their PTO.
        </p>
      </div>
      <div className="flex flex-row mx-4 md:mx-auto  space-x-4">
        <div className="border-b-2 p-2 border-b-purple-500 text-gray-600 md:text-white md:p-5 md:border-0 md:bg-purple-500 md:rounded-xl  ">
          Small Business
        </div>
        <div className="  p-2 text-gray-600 md:p-5 md:border-2 md:rounded-xl  ">
          Medium Business
        </div>
        <div className=" p-2 text-gray-600  md:p-5 md:border-2  md:rounded-xl  ">
          Enterprise
        </div>
      </div>
      <div className="relative">
        <img
          className="w-32 h-32 rounded-md mx-auto  relative top-[120px]"
          src={"../assets/icons/lauren-robson.png"}
          alt="Lauren Robson"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="justify-self-end relative z-10 space-y-10 hidden md:block ">
          {cards.slice(0, 3).map((card, idx) => (
            <Card key={card.id} {...card} toggleActive={toggleActive} />
          ))}
        </div>
        <Hero activeIndexes={cards} />
        <div className="justify-self-start relative z-10 space-y-10 py-5 md:py-0  ">
          {cards.slice(3, 6).map((card, idx) => (
            <Card key={card.id} {...card} toggleActive={toggleActive} />
          ))}
        </div>
      </div>
      <div className="py-10"></div>
    </main>
  );
};

export default PTO;

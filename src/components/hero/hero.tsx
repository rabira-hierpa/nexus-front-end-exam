import React from "react";
import "./hero-styles.css";
import { ICard } from "../card/card";

type IHeroProps = {
  activeIndexes: ICard[];
};

type IPointerProps = {
  direction?: "left" | "right";
  activeIndexes: ICard[];
};

const Hero: React.FC<IHeroProps> = ({ activeIndexes }) => {
  return (
    <div className="flex ">
      <div className="hidden md:block">
        <Pointers activeIndexes={activeIndexes} />
      </div>
      <div className="flex flex-col w-80 items-center">
        <div className="flex flex-col border-2 border-[#9D71FD] bg-[#F2EFFE] p-10 text-center rounded-xl items-center space-y-5 ">
          <div id="name" className="font-extrabold text-xl text-violet-950">
            Lauren Robson
            <p className="text-violet-400 font-normal text-md">HR Director</p>
          </div>
          <p>
            “I want to lower PTO liability and keep my employees happy. I want
            to lower PTO liability.”
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <Pointers direction="right" activeIndexes={activeIndexes} />
      </div>
    </div>
  );
};

export default Hero;

const Pointers: React.FC<IPointerProps> = ({
  direction = "left",
  activeIndexes,
}) => {
  const pointer = () => {
    const activateTop = () => {
      if (direction === "left" && activeIndexes[0].active) return "active";
      if (direction === "right" && activeIndexes[5].active) return "active";
      return "";
    };

    const activateMiddle = () => {
      if (direction === "left" && activeIndexes[1].active) return "active";
      if (direction === "right" && activeIndexes[4].active) return "active";
      return "";
    };

    const activateBottom = () => {
      if (direction === "left" && activeIndexes[2].active) return "active";
      if (direction === "right" && activeIndexes[3].active) return "active";
      return "";
    };

    return (
      <aside className="pointers">
        <section>
          <div className={activateTop()}></div>
          <div className={activateTop()}></div>
          <hr className={activateMiddle()} />
          <div className={activateBottom()}></div>
          <div className={activateBottom()}></div>
        </section>
      </aside>
    );
  };

  if (direction === "left") {
    return pointer();
  }

  return <div className="rotate-180">{pointer()}</div>;
};

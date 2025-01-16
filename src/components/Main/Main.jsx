import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import gsap from "gsap";
import { useEffect } from "react";
import Card from "../Card/Card";
import { cardData } from "../../assets/constants";

const Main = () => {
  const pageRef = useRef(null);
  useEffect(() => {
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 3, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex-1 page" ref={pageRef}>
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-xl tracking-wide text-gray-600">Gemini</h1>
        <img src={assets.user_icon} alt="" className="w-12 h-12 rounded-full" />
      </div>

      <div className="flex flex-col mx-auto justify-center max-w-[900px]">
        <div className="text-6xl my-16 m-6">
          <h1 className="bg-gradient-to-tr from-blue-500 via-purple-500 to-red-400 bg-clip-text text-transparent inline-block">
            Hello, Dev.
          </h1>
          <p className="mt-4 text-gray-400">How can I help you today?</p>
        </div>
        <div className="card-container grid lg:grid-cols-4 grid-cols-2 gap-3 m-2">
          {cardData.map((card) => (
            <Card key={card.id} title={card.title} icon={card.icon} />
          ))}
        </div>
        <div className="search md:w-full w-4/5 rounded-full p-4 bg-[#F0F4F9] mt-10 mx-auto">
          <input
            type="text"
            className="text-md text-gray-400 pl-4 w-full bg-[#F0F4F9] focus:outline-none focus:text-black"
            placeholder="Enter a promt here"
          />
        </div>
        <div className="p-4 text-sm mx-auto font-light text-center">
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

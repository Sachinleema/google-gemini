import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

const Sidebar = () => {
  const [MenuIcon, setMenuIcon] = useState(false);
  const recentRef = useRef(null);

  useEffect(() => {
    if (MenuIcon) {
      gsap.fromTo(
        recentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [MenuIcon]);

  return (
    <div className="hidden sm:flex p-3 pt-6 bg-[#F0F4F9] min-h-screen flex-col justify-between items-center">
      <div>
        <div
          onClick={() =>
            setMenuIcon((prev) => {
              return !prev;
            })
          }
        >
          <img src={assets.menu_icon} alt="menuIcon" className="w-5 ml-3.5" />
        </div>

        <div className="bg-gray-200 my-14 p-3.5 px-4 rounded-full flex items-center gap-2 cursor-pointer">
          <img src={assets.plus_icon} alt="plus" className="w-4 h-5" />
          {MenuIcon && (
            <h1 className="text-gray-600 text-sm leading-none">New Chat</h1>
          )}
        </div>

        <div className="middle" ref={recentRef}>
          {MenuIcon && <h1 className="text-gray-600">Recent</h1>}
        </div>
      </div>

      <div className="bottom flex flex-col gap-4 mb-2 cursor-pointer">
        <div className="flex items-center mr-">
          <img src={assets.question_icon} alt="" className="w-5 h-5" />
          {MenuIcon && <h1 className="ml-2">Help</h1>}
        </div>
        <div className="flex items-center">
          <img src={assets.history_icon} alt="" className="w-5 h-5" />
          {MenuIcon && <h1 className="ml-2">Activity</h1>}
        </div>
        <div className="flex items-center">
          <img src={assets.setting_icon} alt="" className="w-5 h-5" />
          {MenuIcon && <h1 className="ml-2">Settings</h1>}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

"use client";
import { useState, useEffect } from "react";

const NavBar = () => {
  const tabs = [
    { name: "Home", targetId: "home" },
    { name: "About", targetId: "about" },
    { name: "Work", targetId: "work" },
  ];

  const [active, setActive] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const currentTab = tabs.find((tab) => tab.targetId === id);
            if (currentTab) setActive(currentTab.name);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    tabs.forEach((tab) => {
      const el = document.getElementById(tab.targetId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-center items-center z-50 relative">
      <div className="flex bg-white/10 border border-white/20 rounded-full p-0.5 sm:p-1 shadow-inner backdrop-blur-md">
        {tabs.map((tab) => {
          const isActive = active === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => handleClick(tab.targetId)}
              className={`
                px-3 py-1 text-xs sm:text-sm transition-all duration-200 rounded-full
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-400 via-sky-500 to-teal-500 text-black shadow-inner"
                    : "text-white hover:bg-white/20"
                }
              `}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;

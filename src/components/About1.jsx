"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import textData from "../data/textData.js";

gsap.registerPlugin(ScrollTrigger);

export default function About1() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const introduction = textData.introduction;
  const skills = textData.skills;

  useGSAP(
    () => {
      const titleElement = aboutRef.current?.querySelector(".about-title");
      const textElement = aboutRef.current?.querySelector(".about-text");

      if (titleElement) {
        gsap.from(titleElement, {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 95%",
            end: "bottom 95%",
            // markers: true,
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -100,
          ease: "power2.out",
          duration: 3,
        });
      }

      if (textElement) {
        gsap.from(textElement, {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: 100,
          ease: "power2.out",
          duration: 3,
        });
      }
    },
    { scope: aboutRef }
  );

  useGSAP(
    () => {
      const elements = skillsRef.current?.querySelectorAll(".effect");

      if (!elements?.length) return;

      gsap.from(elements, {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 60%",
          end: "bottom 95%",
          scrub: 2,
          // markers: true,
        },
        opacity: 0,
        y: 50,
        ease: "none",
        stagger: 1,
        duration: 1,
      });
    },
    { scope: skillsRef }
  );

  return (
    <div className="mt-[80px] sm:mt-[100px] w-full h-full px-8 py-16 space-y-32">
      {/* Introduction Section */}
      <div
        className="flex flex-col items-center text-left space-y-6"
        ref={aboutRef}
      >
        <h2
          className="about-title text-7xl font-extrabold text-green-400"
          style={{ fontFamily: "var(--font-impact)" }}
        >
          {introduction[0].title}
        </h2>
        <p className="about-text text-xl sm:text-2xl text-gray-300 max-w-4xl whitespace-pre-line">
          {introduction[0].description}
        </p>
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className="space-y-32 my-48">
        {skills.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-10 gap-4 items-start"
          >
            {/* Title */}
            <div className="col-span-1 md:col-span-4">
              <h2
                className="text-3xl md:text-5xl font-bold text-white effect"
                style={{ fontFamily: "var(--font-impact)" }}
              >
                {section.title}
              </h2>
            </div>

            {/* Skills */}
            <div className="col-span-1 md:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-4 effect">
                    <img
                      src={skill.icon}
                      alt={skill.label}
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                    <p className="text-lg md:text-[32px] text-gray-300">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

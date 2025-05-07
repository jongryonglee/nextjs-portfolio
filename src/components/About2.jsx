"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import textData from "../data/textData.js";

gsap.registerPlugin(ScrollTrigger);

export default function About2() {
  const experienceRef = useRef(null);
  const workData = textData.workData;

  useGSAP(
    () => {
      const experienceTitleElement =
        experienceRef.current?.querySelector(".experience-title");
      const experienceContentElement = experienceRef.current?.querySelector(
        ".experience-content"
      );

      if (experienceTitleElement) {
        gsap.from(experienceTitleElement, {
          scrollTrigger: {
            trigger: experienceRef.current,
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

      if (experienceContentElement) {
        gsap.from(experienceContentElement, {
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 95%",
            end: "bottom 95%",
            // markers: true,
            toggleActions: "restart none none none",
            scrub: 2.5,
          },
          opacity: 0,
          y: 50,
          ease: "power2.out",
          duration: 3,
        });
      }
    },
    { scope: experienceRef }
  );

  return (
    <div className="w-full h-full px-8 py-16 space-y-32">
      {/* Experience Section */}
      <div ref={experienceRef} className="space-y-16">
        <div className="flex flex-col items-center text-left space-y-6">
          <h2
            className="experience-title text-7xl font-extrabold text-green-400"
            style={{ fontFamily: "var(--font-impact)" }}
          >
            EXPERIENCE
          </h2>
        </div>

        {/* Work Experience List */}
        <div className="space-y-8 experience-content my-16">
          {workData.map((work, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-4 pb-4 transition-transform duration-300 hover:scale-100 hover:bg-[rgba(255,255,255,0.1)] hover:shadow-lg"
            >
              {/* Left side: YM */}
              <div className="text-lg font-bold text-gray-400 text-left md:w-1/4">
                {work.date}
              </div>

              {/* Right side: Contents */}
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-white pb-2">
                  {work.title}
                </h3>
                <p className="text-gray-300">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ReactPlayer from "react-player";
import TextData from "@/data/textData";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const projects = TextData.projects;

  useGSAP(
    () => {
      const workItems = containerRef.current?.querySelectorAll(".work-item");
      const workTitle = containerRef.current?.querySelectorAll(".work-title");

      if (workTitle) {
        gsap.from(workTitle, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -100,
          ease: "power2.out",
          duration: 2,
        });
      }

      if (workItems?.length) {
        gsap.from(workItems, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 95%",
            toggleActions: "restart none none none",
            scrub: 2.5,
          },
          opacity: 0,
          y: 50,
          ease: "power2.out",
          stagger: 0.2,
          duration: 1,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      className="mt-[80px] sm:mt-[100px] pb-4 w-full h-full px-8 sm:px-16 space-y-8"
      ref={containerRef}
    >
      <h2
        className="work-title text-7xl font-extrabold text-center text-green-400"
        style={{ fontFamily: "var(--font-impact)" }}
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-32 xl:gap-x-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="work-item bg-gray-800 rounded-lg shadow-lg group"
            style={{ aspectRatio: "1.8 / 1" }}
          >
            {/* project image */}
            <img
              src={project.image}
              className="absolute inset-0 w-full h-full rounded-lg object-cover group-hover:opacity-40 transition-opacity duration-300"
            />

            {/* hovered contents */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-gray-300 text-center px-4 pb-4">
                {project.description}
              </p>
              {project.url ? (
                <button
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                  onClick={() => setHoveredVideo(project.url)}
                >
                  Watch Demo
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Player */}
      {hoveredVideo && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <ReactPlayer
            url={hoveredVideo}
            playing
            controls
            muted
            width="80%"
            height="80%"
            className="rounded-lg shadow-lg"
          />
          <button
            className="absolute top-8 right-8 text-white text-2xl"
            onClick={() => setHoveredVideo(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;

const Home = () => {
  return (
    <div className="mt-[80px] sm:mt-[100px] min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] h-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 md:px-16 py-12 text-white">
      {/* Left Contents */}
      <div className="col-span-2 text-center md:text-left">
        <h1
          className="text-7xl sm:text-8xl font-extrabold fade-in-section"
          style={{ fontFamily: "var(--font-impact)" }}
        >
          JON LEE
        </h1>
        <h2 className="text-[16px] sm:text-[22px] font-normal mb-4">
          FRONTEND DEVELOPER
        </h2>
        <p className="text-lg sm:text-xl text-white/60">
          I build sleek, functional websites <br />
          tailored to your vision.
        </p>
      </div>

      {/* Rigth Contents */}
      <div className="col-span-1 flex justify-center">
        <img
          src="/FaceLogo.png"
          alt="Jon Lee"
          className="w-64 sm:w-80 md:w-96 rounded-xl object-cover"
        />
      </div>
      <div className="absolute bottom-6 pb-0 left-1/2 -translate-x-1/2 scroll-indicator">
        <img src="/arrow.png" alt="Scroll Down" />
      </div>
    </div>
  );
};

export default Home;

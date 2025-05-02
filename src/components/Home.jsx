const Home = () => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-12 text-white">
      {/* 左テキスト */}
      <div className="text-center md:text-left space-y-6">
        <h1
          className="text-7xl sm:text-8xl font-extrabold"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          FRONTEND <br /> DEVELOPER
        </h1>
        <p className="text-lg sm:text-xl text-white/80">
          A passionate web developer specializing in React, Next.js, and UI
          design.
          <br />I love building interactive and beautiful web experiences.
        </p>
      </div>

      {/* 右画像 */}
      <div className="flex justify-center">
        <img
          src="/FaceLogo.png"
          alt="Jon Lee"
          className="w-64 sm:w-80 md:w-96 rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Home;

const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">My Work</h1>
      <p className="text-lg mb-8">
        Here are some of the projects I've worked on:
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          Project 1: A cool project that does something awesome.
        </li>
        <li className="mb-2">
          Project 2: Another project that showcases my skills.
        </li>
        <li>Project 3: A project that I'm really proud of.</li>
      </ul>
    </div>
  );
};
export default Work;

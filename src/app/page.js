import About from "@/components/About";
import Home from "@/components/Home";
import Work from "@/components/Work";
export default function Page() {
  return (
    <div className="h-full overflow-y-auto scroll-smooth">
      <section
        id="home"
        className="h-full flex items-center justify-center scroll-mt-[100px]"
      >
        <Home />
      </section>
      <section
        id="about"
        className="h-full flex items-center justify-center scroll-mt-[100px]"
      >
        <About />
      </section>
      <section
        id="work"
        className="h-full flex items-center justify-center scroll-mt-[100px]"
      >
        <Work />{" "}
      </section>
    </div>
  );
}

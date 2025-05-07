import About1 from "@/components/About1";
import About2 from "@/components/About2";
import Home from "@/components/Home";
import Work from "@/components/Work";
export default function Page() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <section
        id="home"
        className="h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] flex items-center justify-center"
      >
        <Home />
      </section>
      <section id="about" className="flex items-center justify-center">
        <About1 />
      </section>
      <section id="about" className="flex items-center justify-center">
        <About2 />
      </section>
      <section id="work" className="flex items-center justify-center">
        <Work />{" "}
      </section>
    </div>
  );
}

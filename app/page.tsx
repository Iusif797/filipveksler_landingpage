import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Publications from "@/components/Publications";
import ScrollUp from "@/components/ScrollUp";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="main">
        <Welcome />
        <About />
        <Experience />
        <Blog />
        <Publications />
      </main>
      <ScrollUp />
    </>
  );
}

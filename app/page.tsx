import { About } from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IBM_Plex_Serif } from "next/font/google";

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <ScrollArea className="h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <Footer />
    </ScrollArea>
  );
}

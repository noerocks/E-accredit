import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center">
      <Image
        src="/ctu-building.png"
        alt="CTU Naga Extension Campus Building"
        fill
        priority
        className="object-cover object-center brightness-[0.6] dark:brightness-[0.4] -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent -z-10" />

      <div className="max-w-3xl text-center px-6 text-white space-y-5">
        <h1 className="text-6xl md:text-7xl font-bold italic text-yellow-400">
          E-ACCREDIT
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium">
          Accreditation Management System
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          Empowering CTU Naga Extension Campus with a seamless accreditation
          workflow — from documentation to evaluation.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Button
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400"
          >
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-foreground">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

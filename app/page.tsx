import Image from "next/image";
import { IBM_Plex_Serif } from "next/font/google";

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <div>
      <header className="bg-[#f9a602] px-10 h-[100px] flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <div className="h-[70px] aspect-square rounded-full overflow-hidden">
            <Image
              src={"/ctu-logo.png"}
              alt="ctu logo"
              width={70}
              height={70}
            />
          </div>
          <div>
            <p
              className={`${IBMPlexSerif.className} antialiased text-xl text-gray-800`}
            >
              <span className="text-2xl">C</span>EBU{" "}
              <span className="text-2xl">T</span>ECHNOLOGICAL{" "}
              <span className="text-2xl">U</span>NIVERSITY -{" "}
              <span className="text-2xl">N</span>AGA
            </p>
            <p className="text-lg">Accreditation System</p>
          </div>
        </div>
      </header>
      <nav className="sticky top-0 h-[40px] w-ful z-10 shadow-md shadow-gray-400">
        <ul className="flex space-x-20 justify-center items-center bg-[#282828] text-white h-full">
          <li>
            <a href="#">E-accredit</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>How it Works</li>
          <li>About</li>
        </ul>
      </nav>
      <section className="h-[calc(100vh-140px)]">
        <Image
          src={"/ctu-building.jpg"}
          alt="ctu naga building"
          width={1440}
          height={456}
          className="w-full h-full object-cover object-[0%_90%] opacity-40"
        />
      </section>
      <section id="features" className="h-[calc(100vh-40px)]">
        features
      </section>
    </div>
  );
}

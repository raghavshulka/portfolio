import React from "react";
import Image from "next/image";
import bb from "../../public/bb.jpg";
import Rendermodel from "@/Components/Rendermodel";
import Header from "@/Components/Header";
import RenderButterfly from "@/Components/RenderButterfly";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      {/* First Section: Background Image and 3D Model */}
      <section className="relative w-full h-screen">
        <Image
          src={bb}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="blur-md"
        />
        <div className="absolute inset-0">
          <Rendermodel />
        </div>
      </section>

      {/* Second Section: Header and Butterfly */}
      <section className="w-full h-screen bg-black flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-4">
          <Header />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <RenderButterfly />
        </div>
      </section>
    </div>
  );
};

export default Home;
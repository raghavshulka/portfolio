import React from "react";
import bb from "../../public/bb.jpg";
import Rendermodel from "@/Components/Rendermodel";
import Image from "next/image";
import Header from "@/Components/Header";
import RenderButterfly from "@/Components/RenderButterfly";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <div className="relative w-full h-screen ">
        <Image
          src={bb}
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          className="blur-md"
        />
        <Rendermodel />

      </div>

      <div className=" w-full h-screen bg-black flex md:flex-row flex-col justify-center items-center " >
        <Header/>

        <RenderButterfly/>
      </div>
      </div>
  );
};

export default Home;

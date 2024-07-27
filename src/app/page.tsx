import React from "react";
import bb from "../../public/bb.jpg";
import Rendermodel from "@/Components/Rendermodel";
import Image from "next/image";
import Header from "@/Components/Header";
import RenderButterfly from '../Components/RenderButterfly'

const Home = () => {
  return (
    <div className=" scroll-smooth"> 
      <div className="relative  ">
        <div className="  w-full h-screen ">
          <Image
            src={bb}
            alt="background"
            layout="fill"
            objectFit="cover"
            className="blur-md"
          />
          <Rendermodel />
        </div>
      </div>
      <div className="  bg-black w-full h-screen  ">
        <div className=" flex justify-center items-center w-full  ">
          <Header />
          <RenderButterfly/>
        </div>
      </div>
    </div>
  );
};

export default Home;

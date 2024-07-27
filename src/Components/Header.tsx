import React from "react";

const Header = () => {
  return (
    <div className="   mt-[100px]   flex flex-col items-center justify-center   text-white space-y-4 px-4">
      <h1 className="text-5xl font-bold tracking-wide md:text-7xl">
        I am <span className="text-indigo-500">Himanshu</span>
      </h1>
      <p className="text-2xl md:text-4xl text-gray-400">
        A Full-Stack Developer
      </p>
      <p className="text-lg md:text-2xl text-gray-400">
        Crafting robust and scalable web applications
      </p>
    </div>
  );
};

export default Header;

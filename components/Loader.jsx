import React from "react";

const Loader = () => {
  return (
    <section className="fixed z-50 top-0 left-0 bg-black overflow-hidden h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center flex-col gap-4">
        <img
          src="/animation_circle_small_5.gif"
          alt="loading animation"
          className="h-[30px] w-[30px]"
        />
        <p className="text-white">Loading...</p>
      </div>
    </section>
  );
};

export default Loader;

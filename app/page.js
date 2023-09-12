"use client";

import { Footer, Loader, Navbar } from "@/components";
import {
  BuyRexx,
  Faq,
  GetInTouch,
  Hero,
  HeroAnimation,
  Mission,
  OurOffering,
  Projects,
  RexContract,
  Roadmap,
  RoadmapDesign_2,
  Tokenomics,
} from "@/sections";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // await wait(10000);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <div className="bg-black overflow-hidden">
      {/* {loading && <Loader />} */}
      {/* <Suspense fallback={<Loading />}> */}
      <Navbar />
      <Hero />
      <HeroAnimation />
      <OurOffering />
      <Mission />
      {/* <Projects /> */}
      <Tokenomics />
      {/* <Roadmap /> */}
      <RoadmapDesign_2 />
      <BuyRexx />
      <RexContract />
      <Faq />
      <GetInTouch />
      <Footer />
      {/* </Suspense> */}
    </div>
  );
}

// export async function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

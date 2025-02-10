import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl w-full">
      <div className="flex justify-center items-center h-screen">
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_,black)]" />
        </div>
        <div className="z-10 flex justify-center items-center relative my-20 ">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center space-y-10">
            <h1 className="text-[2.5rem]  xl:text-[4.7rem] text-primary font-semibold  tracking-wide leading-snug  drop-shadow-[100px_100px_100px_] shadow-xl uppercase">
              Skyrocket Your Business with High Impact Digital Solutions{" "}
            </h1>
            <p className="text-neutral/80  font-normal text-base xl:text-lg">
              We turn ideas into revenue-generating digital experiences. Whether
              you need a sleek website, a high-converting E_Commerce store, or a
              marketing strategy that drives real results—we make it happen.
              <span> Faster. Smarter. Better.</span>
            </p>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-secondary bg-[linear-gradient(110deg,#235347,45%,#10B981,55%,#235347)] bg-[length:200%_100%] px-10 py-8 text-neutral transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-primary/40 uppercase text-2xl font-bold gap-4 hover:scale-95 hover:duration-300 hover:transition-all">
              Book A Free Call <ArrowRight className="size-6 "/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HomeIcon, ServerIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black/90 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "service",
              link: "#services",
            },
            {
              name: "features",
              link: "#features",
            },
            {
              name: "testimonial",
              link: "#testimonial",
            },
          ]}
          className=""
        />
        <Hero />
        <InfiniteMovingCards images={image} direction="right" speed="normal" />
        <InfiniteMovingCards images={image} direction="left" speed="slow" />

      </div>
    </main>
  );
}

const image = [
  {
    src: "/img.jpg",
    alt: "File image",
  },
  {
    src: "/img2.jpg",
    alt: "File image",
  },
  {
    src: "/img3.png",
    alt: "File image",
  },
  {
    src: "/img4.png",
    alt: "File image",
  },
  {
    src: "/image5.png",
    alt: "File image",
  },
];

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   // Check if current is not undefined and is a number
  //   setVisible(true);
  // });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "flex md:max-w-fit flex-col space-y-3 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-neutral/50 rounded-2xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-4  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral hidden items-center md:flex space-x-1  dark:hover:text-neutral hover:text-primary/70 transition-colors duration-200 ease-in-out"
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" sm:block text-base capitalize">
              {navItem.name}
            </span>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary/70"
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </Link>
        ))}

        <button className="hover:bg-primary/70 px-6 py-2 rounded-lg hover:text-neutral text-secondary bg-neutral font-bold capitalize transition-colors duration-300 sm:text-base">
          Book a free call
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

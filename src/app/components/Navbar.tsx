"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Motion } from "./Motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Motion
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -80 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="fixed z-50 flex w-full flex-col items-center bg-black"
      id="navbar"
    >
      <nav className="z-50 flex w-full max-w-8xl items-center justify-between px-4 py-4 text-xs font-medium sm:px-32">
        <Link href={"/"} className="z-10 flex items-center gap-1.5">
          <div className="flex items-center justify-center gap-1">
            <p className="relative font-freight text-xl font-semibold leading-[0.95] tracking-[-0.020rem]">
              kindred
              <span className="font-medium italic">house</span>
            </p>
          </div>
        </Link>
        <div className="hidden gap-8 sm:flex">
          <Link className="hover:underline" href={"#"}>
            Services
          </Link>
          <Link className="hover:underline" href={"#"}>
            Projects
          </Link>
          <Link className="hover:underline" href={"#"}>
            Pricing
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-1.5 font-basier text-xs text-black hover:bg-zinc-200"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            BOOK DEMO
            <span className="flex h-6 w-8 items-center justify-center rounded-[4px] border border-zinc-200 bg-zinc-100 text-[12px]">
              ⌘ K
            </span>
          </Link>
        </div>
      </nav>
    </Motion>
  );
}

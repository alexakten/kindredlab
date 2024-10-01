"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Motion } from "./Motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Last scroll position
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const scrollThreshold = 10; // Minimum scroll threshold to trigger hiding

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (Math.abs(scrollTop - lastScrollTop) < scrollThreshold) return;

      if (scrollTop > lastScrollTop && scrollTop > 0) {
        setIsVisible(false);
      } else if (scrollTop < lastScrollTop) {
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
    <>
      {/* Wrap the modal in AnimatePresence */}
      <AnimatePresence>
        {showModal && (
          <Motion
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }} // Apply exit animation
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className="fixed inset-0 z-40 h-screen w-screen bg-black bg-opacity-20"
          >
            <div></div>
          </Motion>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <AnimatePresence>
        {isVisible && (
          <Motion
            initial={{
              opacity: 0,
              y: -20,
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 1)", // Default to fully opaque black
            }}
            animate={{
              opacity: 1,
              y: 0,
              backdropFilter: showModal ? "blur(24px)" : "blur(24px)",
              backgroundColor: showModal
                ? "rgba(0, 0, 0, 0)" // Fully transparent on hover
                : "rgba(0, 0, 0, 0.9)", // Fully opaque black when visible after scroll
            }}
            exit={{ opacity: 0, y: -20 }} // Apply exit animation
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className={`fixed z-50 flex w-full flex-col items-center`}
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

              {/* Menu links with hover effects */}
              <div className="hidden gap-8 sm:flex">
                <Link
                  className="hover:underline"
                  href={"#"}
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                >
                  Services
                </Link>
                <Link
                  className="hover:underline"
                  href={"#"}
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                >
                  Projects
                </Link>
                <Link
                  className="hover:underline"
                  href={"#"}
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                >
                  Pricing
                </Link>
              </div>

              <div className="flex gap-4">
                <Link
                  href={"/?BookDemo=true"}
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
        )}
      </AnimatePresence>
    </>
  );
}

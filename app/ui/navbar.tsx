"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const isMenPage = path === "/hombres";

  const dynamicMobileClasses = isMenPage
    ? "text-[#113871] "
    : "text-[#b28194] ";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ease-in-out duration-300 ${
        isMenPage ? "bg-blue-800/90" : "bg-[#d494b5]/90"
      }  backdrop-filter backdrop-blur-lg shadow-sm shadow-white/40 h-16`}
    >
      <nav className="relative max-w-6xl mx-auto px-4 lg:px-0 h-full">
        <div className="flex justify-between items-center h-full lg:px-4">
          <Link
            href="/"
            className="relative flex h-full items-center hover:[&>p:text-md]"
          >
            <span className="font-extrabold text-white text-lg relative">
              Kau
            </span>
            <p
              className="font-semibold absolute bottom-2 -right-7"
              style={{
                WebkitTextStroke: `0.03em ${isMenPage ? "#d494b5" : "#23151e"}`,
              }}
            >
              gifts
            </p>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          >
            {/* Línea superior */}
            <span
              className={`absolute w-6 h-[3px] rounded bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            {/* Línea del medio */}
            <span
              className={`absolute w-6 h-[3px] rounded bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            {/* Línea inferior */}
            <span
              className={`absolute w-6 h-[3px] rounded bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>

          <ul
            className={`${dynamicMobileClasses} fixed top-16 left-0 right-0 p-4 flex-col w-full h-screen font-bold text-2xl lg:flex lg:gap-4 lg:justify-center lg:items-center lg:font-semibold lg:text-base lg:flex-row lg:relative lg:w-auto lg:h-full lg:top-0 lg:p-0 lg:bg-transparent lg:bg-opacity-100 lg:backdrop-filter-none lg:backdrop-blur-none bg-white bg-opacity-100 backdrop-filter backdrop-blur-xl lg:translate-y-0 transition-transform duration-500 ease-in-out  lg:text-white ${
              isMenuOpen
                ? "transform translate-y-0"
                : "transform -translate-y-[calc(100%+64px)]"
            }`}
          >
            <li>
              <Link href="/damas" className="block w-full h-full py-2">
                Damas
              </Link>
            </li>
            <li>
              <Link href="/hombres" className="block w-full h-full py-2">
                Hombres
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

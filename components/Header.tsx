import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiWeightLiftingUp } from "react-icons/gi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-neutral-700 sticky top-0">
      {/* parent div */}
      <div className="max-w-6xl mx-auto px-4 justify-between">
        {/* logo div */}
        <div className="flex justify-between">
          {/* logo and text */}
          <div className="flex space-x-4">
            <Link href="/">
              <a
                onClick={closeMenu}
                className="font-bold cursor-pointer py-5 px-3 text-neutral-50 hover:text-neutral-400"
              >
                <div className="flex align-middle">
                  <GiWeightLiftingUp
                    className="animate-wiggle mr-2 text-green-500"
                    size={25}
                  />
                  <p className="text-lg">TMONT FITNESS</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <a
                onClick={closeMenu}
                className={
                  router.pathname === "/"
                    ? "cursor-pointer py-5 px-3 text-neutral-400"
                    : "cursor-pointer py-5 px-3 text-neutral-50 hover:text-neutral-400"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/Links">
              <a
                onClick={closeMenu}
                className={
                  router.pathname === "/Links"
                    ? "cursor-pointer py-5 px-3 text-neutral-400"
                    : "cursor-pointer py-5 px-3 text-neutral-50 hover:text-neutral-400"
                }
              >
                Links
              </a>
            </Link>
            {/* <Link href="#About">
              <a
                onClick={closeMenu}
                className={
                  router.pathname === "/About"
                    ? "cursor-pointer py-5 px-3 text-neutral-400"
                    : "cursor-pointer py-5 px-3 text-neutral-50 hover:text-neutral-400"
                }
              >
                About
              </a>
            </Link> */}
            <Link href="/MacroCalculator">
              <a
                onClick={closeMenu}
                className={
                  router.pathname === "/MacroCalculator"
                    ? "cursor-pointer py-5 px-3 text-neutral-400"
                    : "cursor-pointer py-5 px-3 text-neutral-50 hover:text-neutral-400"
                }
              >
                Macro Calculator
              </a>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-neutral-50 hover:text-neutral-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-neutral-50 hover:text-neutral-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          isMobileMenuOpen ? "md:hidden text-center" : "hidden md:hidden"
        }
      >
        {/* <Link href="/About">
          <a
            onClick={closeMenu}
            className="cursor-pointer block py-4 px-4 text-sm hover:bg-neutral-800 text-neutral-50 hover:text-neutral-300"
          >
            About
          </a>
        </Link> */}
        <Link href="/">
          <a
            onClick={closeMenu}
            className="cursor-pointer block py-4 px-4 text-sm hover:bg-neutral-800  text-neutral-50 hover:text-neutral-300"
          >
            Home
          </a>
        </Link>
        <Link href="/Links">
          <a
            onClick={closeMenu}
            className="cursor-pointer block py-4 px-4 text-sm hover:bg-neutral-800  text-neutral-50 hover:text-neutral-300"
          >
            Links
          </a>
        </Link>
        <Link href="/MacroCalculator">
          <a
            onClick={closeMenu}
            className="cursor-pointer block py-4 px-4 text-sm hover:bg-neutral-800  text-neutral-50 hover:text-neutral-300"
          >
            Macro Calculator
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

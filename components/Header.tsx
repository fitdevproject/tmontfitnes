import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiWeightLiftingUp } from "react-icons/gi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "bg-tmontGreen-100 sticky top-0" : ""}>
      {/* parent div */}
      <div className="max-w-6xl mx-auto px-4 justify-between">
        {/* logo div */}
        <div className="flex justify-between">
          {/* logo and text */}
          <div className="flex space-x-4">
            <Link href="/">
              <a
                onClick={closeMenu}
                className={
                  navbar
                    ? "font-bold cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGray-100"
                    : "font-bold cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGreen-100"
                }
              >
                <div className="flex align-middle">
                  <GiWeightLiftingUp
                    className={
                      navbar
                        ? "mr-2 text-neutral-50 animate-wiggle"
                        : "mr-2 text-tmontGreen-100 animate-wiggle"
                    }
                    size={25}
                  />
                  <p
                    className={
                      navbar
                        ? "text-lg text-neutral-50"
                        : "text-lg text-tmontGreen-100"
                    }
                  >
                    TMONT FITNESS
                  </p>
                </div>
              </a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <a
                onClick={closeMenu}
                className={
                  router.pathname === "/" && navbar
                    ? "cursor-pointer py-5 px-3 text-tmontGray-100"
                    : router.pathname !== "/" && navbar
                    ? "cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGray-100"
                    : router.pathname === "/" && navbar === false
                    ? "cursor-pointer py-5 px-3 text-tmontGreen-100 hover:text-tmontGreen-100"
                    : "cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGreen-100"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/Links">
              <a
                onClick={closeMenu}
                className={
                  router.pathname === "/Links" && navbar
                    ? "cursor-pointer py-5 px-3 text-tmontGray-100"
                    : router.pathname !== "/Links" && navbar
                    ? "cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGray-100"
                    : router.pathname === "/Links" && navbar === false
                    ? "cursor-pointer py-5 px-3 text-tmontGreen-100 hover:text-tmontGreen-100"
                    : "cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGreen-100"
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
                  router.pathname === "/MacroCalculator" && navbar
                    ? "cursor-pointer py-5 px-3 text-tmontGray-100"
                    : router.pathname !== "/MacroCalculator" && navbar
                    ? "cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGray-100"
                    : router.pathname === "/MacroCalculator" && navbar === false
                    ? "cursor-pointer py-5 px-3 text-tmontGreen-100 hover:text-tmontGreen-100"
                    : "cursor-pointer py-5 px-3 text-neutral-50 hover:text-tmontGreen-100"
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
                  className={
                    navbar
                      ? "h-6 w-6 text-neutral-50 hover:text-tmontGray-100"
                      : "h-6 w-6 text-neutral-50 hover:text-tmontGreen-100"
                  }
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
                  className={
                    navbar
                      ? "h-6 w-6 text-neutral-50 hover:text-tmontGray-100"
                      : "h-6 w-6 text-neutral-50 hover:text-tmontGreen-100"
                  }
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
          isMobileMenuOpen
            ? "md:hidden text-center min-h-screen"
            : "hidden md:hidden"
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
            className={
              navbar
                ? "cursor-pointer block py-4 px-4 text-lg hover:bg-tmontGray-100  text-neutral-50"
                : "cursor-pointer block py-4 px-4 text-lg hover:bg-tmontGreen-100  text-neutral-50"
            }
          >
            Home
          </a>
        </Link>
        <Link href="/Links">
          <a
            onClick={closeMenu}
            className={
              navbar
                ? "cursor-pointer block py-4 px-4 text-lg hover:bg-tmontGray-100  text-neutral-50"
                : "cursor-pointer block py-4 px-4 text-lg hover:bg-tmontGreen-100  text-neutral-50"
            }
          >
            Links
          </a>
        </Link>
        <Link href="/MacroCalculator">
          <a
            onClick={closeMenu}
            className={
              navbar
                ? "cursor-pointer block py-4 px-4 text-lg hover:bg-tmontGray-100  text-neutral-50"
                : "cursor-pointer block py-4 px-4 text-lg hover:bg-tmontGreen-100  text-neutral-50"
            }
          >
            Macro Calculator
          </a>
        </Link>
      </div>
      <hr className={navbar ? "" : "text-neutral-400"}></hr>
    </nav>
  );
};

export default Navbar;

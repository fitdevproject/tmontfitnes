import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const menuRef = useRef();

  const clickListener = useCallback(
    (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggleMobileMenu(!toggleMobileMenu); // using optional chaining here, change to onClose && onClose(), if required
      }
    },
    [menuRef.current]
  );
  useEffect(() => {
    document.addEventListener("mousedown", clickListener);

    return () => {
      document.removeEventListener("mousedown", clickListener);
    };
  }, []);

  return (
    <nav className="bg-gray-100">
      {/* parent div */}
      <div className="max-w-6xl mx-auto px-4 justify-between">
        {/* logo div */}
        <div className="flex justify-between">
          {/* logo and text */}
          <div className="flex space-x-4">
            <Link href="/">
              <a className="flex items-center py-5 px-2 text-gray-500 font-bold hover:text-gray-900">
                TMONT FITNESS
              </a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/About">
              <a className="py-5 px-3 text-gray-500 hover:text-gray-900">
                About
              </a>
            </Link>
            <Link href="/FreeResources">
              <a
                href="/FreeResources"
                className="py-5 px-3 text-gray-500 hover:text-gray-900"
              >
                Free Resources
              </a>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              {toggleMobileMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          ref={menuRef}
          className={
            toggleMobileMenu ? "hidden md:hidden" : "md:hidden text-center"
          }
        >
          <Link href="/About">
            <a className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-gray-900 text-gray-500">
              About
            </a>
          </Link>
          <Link href="/FreeResources">
            <a className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-gray-900 text-gray-500">
              Free Resources
            </a>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const navItem = [
    {
      name: "Home",
      href: "",
    },
    {
      name: "Men",
      href: "",
    },
    {
      name: "Women",
      href: "",
    },
    {
      name: "Shop",
      href: "",
    },
    {
      name: "Product",
      href: "",
    },
    {
      name: "Pages",
      href: "",
    },
    {
      name: "Contact us",
      href: "",
    },
    {
      name: "Blogs",
      href: "",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Site branding */}
          <div className="bg-[#C2BEC2] text-sm px-4">logo</div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow w-full flex-wrap items-center justify-center">
              {navItem.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 transition duration-150 ease-in-out hover:border-b border-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div></div> */}
          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={handleMenuToggle}
              aria-controls="mobile-nav"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6 fill-current transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="20" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/* Mobile navigation */}
            <nav
              id="mobile-nav"
              className={`absolute left-0 top-full z-20 w-full overflow-hidden px-4 transition-all duration-300 ease-in-out sm:px-6 ${
                isOpen ? "opacity-1 max-h-[500px]" : "max-h-0 opacity-[0.8]"
              }`}
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
            >
              <ul className="bg-gray-300 text-[#2C2C2C] px-4 py-2">
                {navItem.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="flex py-2">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

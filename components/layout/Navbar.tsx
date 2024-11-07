"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const pathName = usePathname();
  const [currentMenu, setCurrentMenu] = useState("");

  return (
    <nav className="fixed left-0 top-0 w-full bg-white z-30 border-b border-b-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-6 px-5 lg:px-0">
        <Link
          href={"/"}
          className="text-5xl font-bold font-sans text-br-secondary"
        >
          FastFood
        </Link>
        <div>
          <button
            className="lg:hidden"
            onClick={() => {
              setShowMobileNavbar(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#456F72"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "flex-col lg:flex-row gap-6 items-start lg:items-center px-5 lg:px-0 text-dark left-0 top-0 bg-white z-20 w-full lg:w-auto py-10 lg:py-0 " +
            (showMobileNavbar ? "absolute flex" : "hidden lg:flex")
          }
        >
          <div className="flex justify-end w-full mr-10 lg:hidden">
            <button
              onClick={() => {
                setShowMobileNavbar(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#456F72"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {routes.map((route) => {
            return (
              <div key={route.title} className="flex flex-col">
                <Link
                  onClick={(e) => {
                    if (!route.href) {
                      e.stopPropagation();
                    }
                    setShowMobileNavbar(false);
                  }}
                  onMouseMove={() => {
                    if (!route.href) {
                      setCurrentMenu(route.title);
                      console.log(currentMenu);
                    } else {
                      setCurrentMenu("");
                    }
                  }}
                  href={route.href ? route.href : "/"}
                  className={
                    "hover:text-br-primary transition-colors duration-100 " +
                    (pathName === route.href
                      ? "text-br-primary "
                      : "text-br-secondary ")
                  }
                >
                  {route.title}
                </Link>

                {/* show sub menu on mobile */}

                {!route.href && showMobileNavbar && (
                  <>
                    {route.subMenus?.map((menu) => {
                      return (
                        <Link
                          key={menu.title}
                          href={menu.href ? menu.href : "/"}
                          onClick={() => setShowMobileNavbar(false)}
                          className={
                            "pl-2 hover:text-br-primary transition-colors duration-100 " +
                            (pathName === route.href
                              ? "text-br-primary "
                              : "text-br-secondary ")
                          }
                        >
                          {menu.title}
                        </Link>
                      );
                    })}
                  </>
                )}

                {/* show sub menu on desktop */}
                {!route.href && !showMobileNavbar && (
                  <div
                    className={
                      " border-b-8 border-b-br-secondary absolute max-w-7xl mx-auto left-0 right-0 top-20 w-full bg-transparent " +
                      (currentMenu === route.title ? "visible" : "invisible")
                    }
                    onMouseLeave={() => setCurrentMenu("")}
                  >
                    <div className="bg-br-mgreen w-full flex items-stretch justify-center py-10">
                      {route.subMenus?.map((menu) => {
                        return (
                          <Link
                            key={menu.title}
                            href={menu.href ? menu.href : "/"}
                            className="hover:text-br-secondary transition-colors duration-100 text-white flex flex-col px-10 [&:not(:last-child)]:border-r-2 border-r-br-secondary"
                            onClick={() => {
                              setCurrentMenu("");
                            }}
                          >
                            <span className="text-center text-xl mb-5">
                              {menu.title}
                            </span>
                            {menu.icon && (
                              <Image
                                src={menu.icon}
                                alt={menu.title}
                                width={menu.iconWidth}
                                height={menu.iconHeight}
                                className="mt-auto"
                              />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href={"/connexion"}
            className="bg-br-secondary px-12 py-2 text-white rounded-md hover:bg-br-primary transition-colors duration-300"
          >
            Essayer
          </Link>
        </div>
      </div>
    </nav>
  );
};

const routes: Route[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    subMenus: [
      {
        title: "Menu connecté",
        href: "/solutions",
        icon: "/menuArt.svg",
        iconWidth: 160,
        iconHeight: 160,
      },
      {
        title: "Commande en ligne",
        href: "/blog",
        icon: "/blogArt.svg",
        iconWidth: 180,
        iconHeight: 180,
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Connexion",
    href: "/connexion",
  },
];

interface Route {
  title: string;
  href?: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  subMenus?: Route[];
}

export default Navbar;

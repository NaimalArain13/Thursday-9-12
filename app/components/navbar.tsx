"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import style from "../css module/navbar.module.css"

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const routes = [
    {href: "/",name: "Home"},
    {href: "/about",name: "About"},
    {href: "/service",name: "Service"},
    {href: "/contact",name: "Contact"},
  ];
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        dev.io
      </h1>
      {/* desktop screen  */}
      <nav className={`${style.navLinks} md:flex`}>
        {routes.map((route, index) => (
          <Link
            href={route.href}
            key={index}
            className={`${style.link} ${pathname === route.href ? style.active : ""}`}
            >{route.name}
          </Link>
        ))}
        </nav>

        {/* mobile screen toggle button */}
          <div className={style.menuButton}>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="toggle menu" className="text-white">
          {isOpen ? <FiX size={28} /> : <RiMenu2Line size={28} /> }
        </button>
      </div>
      {/* mobile screen menu bar */}
        {isOpen && (
        <div className={style.mobileMenu}>
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={`${style.mobileLink} ${pathname === route.href ? style.active : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

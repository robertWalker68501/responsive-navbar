"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "@/constants/constants";
import "@/styles/Navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handelMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="#">Branding</Link>
        </div>
        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="toggle_btn" onClick={handelMenuOpen}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>

      <div className={menuOpen ? `dropdown_menu open` : `dropdown_menu`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

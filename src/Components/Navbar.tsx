import React, { useEffect, useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { navLinks } from "../Constants";
import { menu, close } from "../Assets";
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const R = "< R";
  const name = "ahul />";
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 pb-0 sticky  top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between mx-auto max-w-7xl items-center">
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-5vw) translateY(-3vw)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0vw) translateY(0vw)",
          }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <Link
            to="/"
            className="flex item-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className={`${styles.navText}`} style={{ color: "#cd5ff8" }}>
              {R}
              <span className="text-white font text-[1rm] xxs:text[4rem]">
                {name}
              </span>
            </p>
          </Link>
        </motion.div>
        <ul className="sm:flex flex gap-2 list-none hidden">
          {navLinks.map((link, index) => (
            <motion.li
              initial={{
                opacity: 0,
                transform: "translateX(-5vw) translateY(-3vw)",
              }}
              whileInView={{
                opacity: 1,
                transform: "translateX(0vw) translateY(0vw)",
              }}
              transition={{ duration: index * 1.2, type: "spring" }}
              key={link.id}
              className={`${
                active === link.title ? "text-[white]" : "text-secondary"
              } font-medium  p-3   hover:text-[white]`}
              onClick={() => setActive(link.title)}
            >
              <a className="font" href={`#${link.id}`}>
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="sm:hidden vd flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]  object-contain absolute"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

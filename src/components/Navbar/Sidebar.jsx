import {React, useState} from 'react'
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

//Imports Icons from React Icons
import { FaBars, FaHome} from "react-icons/fa";
import { SiFampay, SiDarkreader, SiGamemaker } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import { TbShieldCheckeredFilled, TbAdjustmentsDollar } from "react-icons/tb";
import { GiMightyForce } from "react-icons/gi";
import { FaBookOpenReader } from "react-icons/fa6";


const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/Readers",
    name: "Readers",
    icon: <FaBookOpenReader />,
    subRoutes: [
      {
        path: "/Readers/Readers",
        name: "Readers ",
        icon: <SiDarkreader />,
      },
    ],
  },
  {
    path: "/Adjustment",
    name: "Adjustment",
    icon: <TbAdjustmentsDollar />,
    subRoutes: [
      {
        path: "/Adjustment/AdjustmentMaker",
        name: "Adjustment Maker ",
        icon: <SiGamemaker />,
      },
      {
        path: "/Adjustment/AdjustmentChecker",
        name: "Adjustment Checker ",
        icon: <TbShieldCheckeredFilled />,
      },
    ],
  },
  {
    path: "/ForceMatch",
    name: "Force Match",
    icon: <GiMightyForce />,
    subRoutes: [
      {
        path: "/ForceMatch/ForceMatchMaker",
        name: "Force Match Maker ",
        icon: <SiGamemaker />,
      },
      {
        path: "/ForceMatch/ForceMatchChecker",
        name: "Force Match Checker ",
        icon: <TbShieldCheckeredFilled />,
      },
    ],
  },
];


function Sidebar({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  AmazePay
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
}

export default Sidebar
import "./navbarStyles.css";
import { menuItemsList } from "./menuItems";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const iconComponents = {
    home: HiOutlineHome,
    about: MdOutlineRoundaboutLeft,
    service: FaServicestack,
    contact: IoIosContact,
  };
  const icons = ["home", "about", "service", "contact"];
  const [open, isClosed] = useState(false);
  function handleCicked() {
    return isClosed(!open);
  }
  return (
    <>
      <nav className="navbarItems">
        <h1 className="navbar-logo">Bengaluru</h1>
        <div className="menu-icons" onClick={handleCicked}>
          {open ? <RxCross2 /> : <HiOutlineMenuAlt2 />}
        </div>
        {/* in class nav-menu.active will not work then you have to put the space between class name an d active */}
        <ul className={open ? "nav-menu active" : "nav-menu"}>
          {menuItemsList.map((ele, index) => {
            const iconName = icons[index];
            return (
              <li key={index}>
                <Link to={ele.url} className={ele.cName}>
                  {iconComponents[iconName] && iconComponents[iconName]()}
                  {ele.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

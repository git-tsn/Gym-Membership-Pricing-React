import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

export const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blogs",
    path: "/blogs",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ));

  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X className="cursor-pointer lg:hidden"></X>
        ) : (
          <Menu className="cursor-pointer lg:hidden"></Menu>
        )}
        <ul className={`text-black lg:hidden absolute z-10 duration-1000
            ${menuOpen ? 'top-10':'-top-40'}
            bg-amber-200`}>
            {links}
        </ul>
        <h3 className="ml-4 cursor-pointer">My Navbar</h3>
      </span>
      <ul className="hidden lg:flex">
        {links}
      </ul>

      {/* <ul className="flex">
            {
                navigationData.map(route => <li className="mr-10">
                    <a href={route.path}>{route.name}</a>
                    </li>)
            }
        </ul>  */}

      {/* <ul className="flex">
                <li className="mr-10"><a href="/">Home</a></li>
                <li className="mr-10"><a href="/about">About</a></li>
                <li className="mr-10"><a href="/blog">Blog</a></li>
            </ul> */}
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;

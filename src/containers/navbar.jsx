import React, { useState } from "react";
import cns from "@sindresorhus/class-names";

// import { Link } from "react-router-dom";

const routes = [
  { name: "Store", route: "/" },
  { name: "Catagorie", route: "/catagorie" },
  { name: "Product", route: "/product" },
  { name: "About", route: "/about" }
];

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const toggleNavState = event => {
    event.preventDefault();
    setNavState(!navState);
  };

  const activeClass = { "is-active": navState };
  const burgerClass = cns("navbar-burger", "burger", activeClass);
  const navMenuClass = cns("navbar-menu", "has-text-centered", activeClass);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="is-padding-horizontal" />
        <a href="/" className="navbar-item">
          <b>Coffee Store</b>
        </a>
        <a
          role="button"
          className={burgerClass}
          onClick={toggleNavState}
          onKeyPress={toggleNavState}
          tabIndex={0}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={navMenuClass}>
        <div className="navbar-end">
          {routes.map(({ name, route }) => (
            <a
              href={route}
              className="navbar-item"
              key={name}
              activeClassName="is-active"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

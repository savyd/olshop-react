import React from "react";
// import { Link } from "react-router-dom";

const routes = [
  { name: "Store", route: "/" },
  { name: "Catagorie", route: "/catagorie" },
  { name: "Product", route: "/product" },
  { name: "About", route: "/about" }
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="is-padding-horizontal" />
        <a href="/" className="navbar-item">
          <b>Coffee Store</b>
        </a>
      </div>
      <div className="navbar-menu">
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

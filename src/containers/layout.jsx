import React from "react";

import Navbar from "../containers/navbar";
import Footer from "../containers/footer";

const routes = [
  { name: "Store", route: "/" },
  { name: "Catagorie", route: "/catagorie" },
  { name: "Product", route: "/product" },
  { name: "About", route: "/about" }
];

const Layout = props => {
  return (
    <>
      <section className="hero">
        <div className="hero-head">
          <Navbar routes={routes} />
        </div>
        <div className="hero-body">
          <div className="container">{props.children}</div>
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Layout;

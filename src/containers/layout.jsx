import React from "react";

import Navbar from "../containers/navbar";
import Footer from "../containers/footer";

const Layout = props => {
  return (
    <>
      <section className="hero">
        <div className="hero-head">
          <Navbar />
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

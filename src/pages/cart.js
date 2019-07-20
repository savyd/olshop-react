import React from "react";

import SEO from "../components/seo";
import Navbar from "../containers/navbar";
import Footer from "../containers/footer";

const Cart = () => {
  return (
    <>
      <SEO title="Cart" />
      <section className="hero">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body" />
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Cart;

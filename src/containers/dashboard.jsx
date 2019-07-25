import React from "react";

import Navbar from "../containers/navbar";
import Footer from "../containers/footer";

const routes = [
  { name: "Dashboard", route: "/dashboard" },
  { name: "Order", route: "/dashboard/order" },
  { name: "Product Edit", route: "/dashboard/product" }
];

const Dashboard = ({ children }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-head">
          <Navbar routes={routes} />
        </div>
        <div className="hero-body">
          <div className="container">{children}</div>
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Dashboard;

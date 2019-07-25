import React, { useState } from "react";

import SEO from "../../components/seo";
import Layout from "../../containers/layout";
import Table from "../../components/table";

const url = "http://localhost:3000/carts/";

const Cart = props => {
  const [state, setState] = useState({ data: [] });

  const componentDidMount = event => {
    this.getPostApi();
  };

  const getPostApi = () => {
    axios
      .get(url)
      .then(res => setState({ data: res.data }))
      .catch(err => console.log(err));
  };

  const handleRemove = id => {
    axios
      .delete(url + id)
      .then(() => getPostApi())
      .catch(err => console.log(err));
  };

  const content = () => {
    <>
      <SEO title="Cart" />
      <Layout>
        <div className="container has-text-centered">
          <h1 className="title">Products</h1>
          <div className="columns is-centered g-max-width">
            <Table
              heads={[]}
              foots={[]}
              bodys={[]}
              remove={handleRemove}
              id={state.data.id}
            />
          </div>
        </div>
      </Layout>
    </>;
  };

  return content;
};

export default Cart;

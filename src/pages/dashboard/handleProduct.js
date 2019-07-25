import React, { Component } from "react";

import SEO from "../../components/seo";
import Dashboard from "../../containers/dashboard";
import Table from "../../components/table";

const url = "http://localhost:3000/products";

class HandleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    <>
      <SEO title="Admin | Products" />
      <Dashboard>
        <div className="container has-text-centered">
          <h1 className="title">Products</h1>
          <div className="columns is-centered g-max-width">
            <Table heads={[]} foots={[]} bodys={[]} />
          </div>
        </div>
      </Dashboard>
    </>;
  }
}

export default HandleProduct;

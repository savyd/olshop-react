import React, { Component } from "react";
import axios from "axios";

import SEO from "../../components/seo";
import Card from "../../components/card";
import Layout from "../../containers/layout";

const url = "http://localhost:3000/products"; // ditambah id dari params url

class Product extends Component {
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
      <SEO title="Product" />
      <Layout>
        <div className="container has-text-centered">
          <h1 className="title">Products</h1>
          <div className="columns is-centered is-multiline g-max-width">
            {this.state.data.map(data => {
              <Card
                src=""
                alt={props.title + ".image"}
                title={props.title}
                price={this.props.price}
              />;
            })}
          </div>
        </div>
      </Layout>
    </>;
  }
}

export default Product;

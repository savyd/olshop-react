import React from "react";

import SEO from "../../components/seo";
import Card from "../../components/card";
import Layout from "../../containers/layout";

const Store = () => {
  return (
    <>
      <SEO title="Store" />
      <Layout>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <p className="title">Side column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-warning">
              <p className="title">Main column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Store;

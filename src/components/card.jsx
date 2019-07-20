import React from "react";

import styled from "styled-components";

const Figure = styled.div`
  max-width: 16rem;
`;

const Card = ({ src, alt, title, price }) => {
  return (
    <Figure>
      <div className="card">
        <div className="card-image">
          <figure>
            <img src={src} alt={alt} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <p className="title is-5">{price}</p>
          </div>
          <div className="card-footer-item">
            <button className="button">Buy Now</button>
          </div>
        </div>
      </div>
    </Figure>
  );
};

export default Card;

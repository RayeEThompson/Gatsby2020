import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

const PriceItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 10px;
  padding: 20px;
  background-color: ${p => (p.mostPopular ? "hotpink" : "#eee")};
  border-radius: 25px;
  position: relative;

  .mostPopular {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    background: #00cdcd;
    font-weight: bold;
    border-radius: 8px;
    border: 2px solid black;
  }

  .price {
    font-size: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 10px;
    margin-left: -10%;
    margin-right: -10%;
    text-algin: center;
  }

  .duration {
    font-size: 10px;
  }

  .description {
    margin-top: 20px;
  }
`

const PriceItem = ({ title, price, description, mostPopular }) => {
  return (
    <PriceItemWrapper mostPopular={mostPopular}>
      {mostPopular && <div className="mostPopular">Most Popular</div>}
      <RichText render={title} />
      <div className="price">
        ${price}
        <span className="duration"> /month </span>
      </div>
      <div className="description">
        <RichText render={description} />
      </div>
    </PriceItemWrapper>
  )
}

export default PriceItem

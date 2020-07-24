import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import PriceItem from "./priceItem"

const PriceListWrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  .prices {
    display: flex;
  }
`

const PriceList = ({ title, prices }) => {
  return (
    <PriceListWrapper>
      <RichText render={title} />
      <div className="prices">
        {prices.map((price, i) => {
          return (
            <PriceItem
              key={i}
              title={price.price_list_title}
              description={price.price_list_description}
              price={price.price_per_month}
              mostPopular={price.price_type === "most popular"}
            />
          )
        })}
      </div>
    </PriceListWrapper>
  )
}

export default PriceList

import React from "react"
import Hero from "./hero"
import CallToActionGrid from "./callToActionGrid"
import PriceList from "./priceList"

const SliceZone = ({ body }) => {
  console.log(body)
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === "hero") {
          return (
            <Hero
              key={i}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image.url}
            />
          )
        } else if (bodyContent.type === "call_to_action") {
          return (
            <CallToActionGrid
              key={i}
              callToActions={bodyContent.fields}
              title={bodyContent.primary.section_title}
            />
          )
        } else if (bodyContent.type === "price_list") {
            return (
                <PriceList 
                    key={i}
                    title={bodyContent.primary.title}
                    prices={bodyContent.fields}
                />
            )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default SliceZone

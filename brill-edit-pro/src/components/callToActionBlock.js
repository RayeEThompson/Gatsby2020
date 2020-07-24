import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { Link } from "gatsby"

const CallToActionBlockWrapper = styled.section`
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
  background-color: #eeee;

  .call-to-action-content {
    display: flex;
    .featured-image-wrapper {
      margin: auto 10px;
      background-color: white;
      padding: 10px;
      border-radius: 10px;
    }
    img {
      max-width: 100px;
      margin: 0;
    }
  }
`

const Button = styled.div`
  background-color: hotpink;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;

  a {
    display: inline-block;
    padding: 4px 8px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      background-color: #00cdcd;
      border-radius: 8px;
    }
  }
`

const CallToActionBlock = ({
  title,
  content,
  buttonLabel,
  buttonDestination,
  featuredImage,
}) => {
  return (
    <CallToActionBlockWrapper>
      <RichText render={title} />
      <div className="call-to-action-content">
        <RichText render={content} />
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="featured" />
        </div>
      </div>
      <Button>
        <Link to={buttonDestination}>{buttonLabel}</Link>
      </Button>
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import RichText from "../components/richText"
import styled from "styled-components"

export const contactQuery = graphql`
  query ContactQuery {
    prismic {
      allContact_pages {
        edges {
          node {
            form_fields {
              field_name
              field_type
              required
            }
            title
            form_description
          }
        }
      }
    }
  }
`
const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
`

const Button = styled.button`
  padding: 4px 8px;
  background: hotpink;
  cursor: pointer;
  box-shadow: none;
  border-radius: 8px;
`

const ContactUs = props => {
  console.log(props)
  return (
    <Layout>
      <RichText
        render={props.data.prismic.allContact_pages.edges[0].node.title}
      />
      <RichText
        render={
          props.data.prismic.allContact_pages.edges[0].node.form_description
        }
      />
      <Form onSubmit={e => e.preventDefault()}>
        {props.data.prismic.allContact_pages.edges[0].node.form_fields.map(
          (field, i) => {
            if (field.field_type === "text-area") {
              return (
                <div key={i}>
                  <textarea
                    placeholder={field.field_name}
                    required={field.required === "yes"}
                  />
                </div>
              )
            } else {
              return (
                <div>
                  <input
                    placeholder={field.field_name}
                    type={field.field_type}
                    required={field.required === "yes"}
                  />
                </div>
              )
            }
          }
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  )
}

export default ContactUs

import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
   query($slug : String!) {
      markdownRemark(fields: { slug: { eq: $slug} }) {
         frontmatter {
            title
            date
         }
         timeToRead
         html
      }
   }
`
const BlogPost = props => {
   return (
      <Layout>
         <div>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <span>
               Posted on {props.data.markdownRemark.frontmatter.date}{""}
               <span> / </span> {props.data.markdownRemark.timeToRead} min read
            </span>
            <div
               dangerouslySetInnerHtml={{__hyml: props.data.markdownRemark.html }}>
            </div>
         </div>
      </Layout>
   )
}

export default BlogPost
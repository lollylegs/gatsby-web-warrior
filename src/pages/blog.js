import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
   const data = useStaticQuery(
      graphql`
      query{
         allMarkdownRemark(sort: {fields: id, order: DESC}) {
           edges {
             node {
               frontmatter {
                 date
                 title
               }
               timeToRead
               excerpt
               id
             }
           }
         }
       }
      `
   )
   return (
      <Layout>
         <ul>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                 <li key={edge.node.id}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <div>
                       <span>
                          Posted on {edge.node.frontmatter.date}  <span> / </span>{""}
                       </span>
                    </div>
                    <p>{edge.node.excerpt}</p>
                 </li>
              ) 
              })}
         </ul>
      </Layout>
   )
}

export default Blog
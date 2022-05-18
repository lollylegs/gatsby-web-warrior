import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby"

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
               fields {
                  slug
               }
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
                <h2>
                  <Link to={`/blog/${edge.node.fields.slug}/`}>
                     {edge.node.frontmatter.title}
                  </Link>
                </h2>
                    <div>
                       <span>
                          Posted on {edge.node.frontmatter.date} <span> / </span>{""}
                          {edge.node.timeToRead} min Read
                       </span>
                    </div>
                    <p>{edge.node.excerpt}</p>
                    <div>
                       <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
                    </div>
                 </li>
                  ) 
              })}
         </ul>
      </Layout>
   )
}

export default Blog
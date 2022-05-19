import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>Home Page</h1>
      <h2>I'm Marea, a teacher and Gatsby.js developer</h2>
    </Layout>
  )
}

export default Index
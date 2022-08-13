import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Hey, guess what?</h1>
    <p>In case you didn't know Sam just turned 30, how much do you really know about her though?</p>
    <Link
      className="Blockbutton"
      to="/questions/1">
      Let's go!
    </Link>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

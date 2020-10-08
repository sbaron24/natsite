import React from "react"
import Layout from "../components/layout"
import Plankton from "../images/plankton_placeholder.png"

export default function Blog() {

  return (
    <Layout>
      <div style={{textAlign: `center`, marginTop: `3rem`}}>
          <h3>Come back soon...</h3>
          <img src={Plankton} alt="" style={{width: "25%", height: "25%"}}></img>
      </div>
    </Layout>
  )
}
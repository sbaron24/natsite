import React from "react"
import Layout from "../components/layout"
import { CONTACT } from "../text/contact"

export default function Contact() {
  return (
    <Layout>
      <div style={{alignContent: `center`,  width: `51%`, marginLeft: `18%`}}>
        <h3 style={{ color: `#4B5668`, textAlign: `left`, padding: `3rem 0px 10px 0px`, fontFamily: `` }}>
          Reach out!
        </h3>
        <p>{CONTACT}</p>
      </div>
    </Layout>
  )
}
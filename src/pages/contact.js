import React from "react"
import Layout from "../components/layout"
import { CONTACT } from "../text/contact"
import contentContainerStyles from "../components/contentContainer.module.css"

export default function Contact() {
  return (
    <Layout>
      <div className={contentContainerStyles.contactContainer}>
        <div style={{width: `800px`}}>
          <h1 className="pageTitle">Contact</h1>
          <p>{CONTACT}</p>
        </div>
      </div>
    </Layout>
  )
}
import React from "react"
import Layout from "../components/layout"
import Boat from "../images/boat.jpg"

export default function Home() {

  const quoteStyle = {
    color: `white`,
    position: `absolute`,
    width: 300,
    top: `8%`,
    right: `5%`
  }

  return (
    <Layout>
      <div style={{position: `relative`}}>
      <img src={Boat} alt="" style={{border: "1px solid lightblue"}}></img>
      <p style={quoteStyle}>Inspirational aspirational science-y words from a researcher out to make the oceans and this planet healthier for all living species.</p>
      </div>
    </ Layout>
  )
}
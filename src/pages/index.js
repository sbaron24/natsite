import React from "react"
import Layout from "../components/layout"
import Boat from "../images/boat.jpg"

export default function Home() {
  return (
    <Layout>
      <img src={Boat} alt="" style={{border: "1px solid lightblue"}}></img>
    </ Layout>
  )
}
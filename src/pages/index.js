import React from "react"
import Layout from "../components/layout"
import Ocean from "../images/ocean.jpeg"
import CTD from "../images/ctd.png"
import { HELLO } from "../text/homepage"

export default function Home() {

  return (
    <Layout>
      <div style={{position: `relative`, height: `400px`}}>
      <img src={Ocean} alt="ocean" style={{width: `100%`, height: `100%`, objectFit: `cover`, objectPosition: `0% 0%`}}></img>
      </div>
      <div style={{background: `#FFFFFF`, padding: `2rem 3rem 0px 3rem`}}>
        <h2 style={{ color: `#4B5668`, textAlign: `center`, margin: `0px`, marginBottom: `10px`, fontFamily: `Serif` }}>Natalie R. Cohen</h2>
        <p style={{ textAlign: `center`, margin: `0px`, fontSize: `11px` }}>MARINE MOLECULAR ECOLOGIST</p>
        
      <div>
        <div style={{display: `inline`, float: `left`,  width: `50%`, margin: `0px 1rem 0px 1rem`}}>
          <h3 style={{ color: `#4B5668`, textAlign: `left`, padding: `3rem 0px 10px 0px`, fontFamily: `Serif` }}>
            Marine biogeochemistry & <br /> microbial physiology
          </h3>
          <p>{HELLO}</p>
        </div>
        <img src={CTD} alt="CTD" style={{ paddingTop: `3rem`, width: `45%`, objectFit: `cover`, display: `inline-block`, WebkitTransform: `scale(1.3) rotate(10deg)`}}></img>
      </div>

      </div>

    </ Layout>
  )
}
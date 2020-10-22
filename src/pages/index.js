import React from "react"
import Layout from "../components/layout"
import Ocean from "../images/ocean.jpeg"
import CTD from "../images/ctd.png"
import { HELLO, HELLO2 } from "../text/homepage"
import { Stickers } from "../components/imageContainer"
import { indexStyles } from "../components/index.css"

export default function Home() {

  return (
    <Layout>
      <div style={{position: `relative`, height: `80vh`}}>
        <img src={Ocean} alt="ocean" style={{width: `100%`, height: `100%`, objectFit: `cover`, objectPosition: `0% 0%`}}></img>
      </div>
      <About />
      <Stickers />
    </ Layout>
  )
}

const About = () => {
  
  return (

    <div style={{background: `#FFFFFF`, padding: `2rem 3rem 0px 3rem`}}>
      <h1 style={{ color: `#4B5668`, textAlign: `center`, margin: `0px`, marginBottom: `10px`, fontFamily: `Serif` }}>Natalie R. Cohen</h1>
      <p style={{ textAlign: `center`, margin: `0px`, fontSize: `14px` }}>MARINE MOLECULAR ECOLOGIST</p>
    <div className="about container">
      <div style={{display: `inline`,  width: `50%`, margin: `0px 1rem 0px 1rem`}}>
        <h1 className="about title" style={{ color: `#4B5668`, padding: `3rem 0px 10px 0px`, fontFamily: `Serif`}}>
          Welcome to the Cohen Lab!
        </h1>
        <p>{HELLO}</p>
        <p>{HELLO2}</p>
      </div>
      <img src={CTD} alt="CTD" className="about image"></img>
    `</div>
    </div>
  )
} 
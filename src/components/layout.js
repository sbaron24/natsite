import React, { useState } from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <span>
      <Link style={{fontSize: `10px`}} to={props.to}>{props.children}</Link>
    </span>
  </li>
)

export default function Layout({ children }) {

  return (
    <div>
      <header style={{background: `#F6F6F4`, paddingTop: `2rem`}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h2 style={{ color: `#4B5668`, textAlign: `center`, margin: `0px`, marginBottom: `10px`, textShadow: `0px 3px #e1e1e1` }}>Cohen Lab</h2>
        </Link>
        <ul style={{ listStyle: `none`, textAlign: `center`, marginBottom: `0px` }}>
          <ListLink to="/projects/">CURRENT PROJECTS</ListLink>
          <ListLink to="/research/">PAST RESEARCH</ListLink>
          <ListLink to="/data/">DATA</ListLink>
          <ListLink to="/blog/">BLOG, RESOURCES & TUTORIALS</ListLink>
          <ListLink to="/cv/">CV</ListLink>
          <ListLink to="/contact/">CONTACT</ListLink>
        </ul>
      </header>
      {children}
      <div style={{textAlign: `center`, padding: `2rem 0px 2rem 0px`, background: `#F6F6F4`}}>
        <ListLink to="https://www.instagram.com">INSTAGRAM</ListLink>
        <ListLink to="https://www.twitter.com">TWITTER</ListLink>
        <ListLink to="https://www.facebook.com">FACEBOOK</ListLink>
      </div>
    </div>
  )
}
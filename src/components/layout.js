import React, { useState } from "react"
import { Link } from "gatsby"
import { TWITTER } from "../text/layout"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <span>
      <Link style={{fontSize: props.size}} to={props.to}>{props.children}</Link>
    </span>
  </li>
)

export default function Layout({ children }) {

  return (
    <div style={{position: `relative`, minHeight: `100vh`}}>
      <header style={{background: `#F6F6F4`, paddingTop: `2rem`}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ color: `#4B5668`, textAlign: `center`, margin: `0px`, marginBottom: `10px`, textShadow: `0px 3px #e1e1e1` }}>Cohen Lab</h1>
        </Link>
        <ul style={{ listStyle: `none`, textAlign: `center`, marginBottom: `0px` }}>
          <ListLink to="/projects/">CURRENT PROJECTS</ListLink>
          <ListLink to="/research/">PAST RESEARCH</ListLink>
          <ListLink to="/data/">DATA</ListLink>
          <ListLink to="/blog/">BLOG, RESOURCES & TUTORIALS</ListLink>
          <ListLink to="/cv/">CV</ListLink>
          <ListLink size="14px" to="/contact/"><strong>CONTACT ME!</strong></ListLink>
        </ul>
      </header>
      {children}
      <div style={{textAlign: `center`, margin: `1rem 0px 0px 0px`, background: `#F6F6F4`, position: `absolute`, width: `100%`}}>
        <ListLink to={TWITTER}>TWITTER</ListLink>
      </div>
    </div>
  )
}
import React from "react"
import { Link } from "gatsby"
import { GITHUB, UGA, SKIO, SCHOLAR, TWITTER} from "../text/layout"
import downloadFile from "../files/nrc2020.pdf"

const NavLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <span>
      <Link to={props.to}>{props.children}</Link>
    </span>
  </li>
)

const FooterLink = props => (
    <a href={props.href} style={{marginRight: `1rem`}}>{props.children}</a>
)

function DownloadCVLink() {
  return (
    <a href={downloadFile} download>Download CV</a>
  )
}

export default function Layout({ children }) {

  return (
    <div style={{position: `relative`, minHeight: `100vh`, width: `100%`}}>
      <header style={{background: `#F6F6F4`, paddingTop: `2rem`}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ color: `#4B5668`, textAlign: `center`, margin: `0px`, marginBottom: `10px`, textShadow: `0px 3px #e1e1e1`, padding: `10px` }}>
          Marine Biogeochemistry & <br /> Microbial Ecology at Skidaway Institute of Oceanography
          </h1>
        </Link>
        <ul style={{ listStyle: `none`, textAlign: `center`, marginBottom: `0px` }}>
          <NavLink to="/projects/">CURRENT PROJECTS</NavLink>
          <NavLink to="/research/">PAST RESEARCH</NavLink>
          <NavLink to="/data/">DATA</NavLink>
          <NavLink to="/blog/">BLOG, RESOURCES & TUTORIALS</NavLink>
          <NavLink to="/contact/">CONTACT</NavLink>
        </ul>
      </header>
      {children}
      <div style={{textAlign: `center`, paddingTop: `1rem`, background: `#F6F6F4`, position: `absolute`, width: `100%`}}>
        <FooterLink href={UGA}>UGA Dept. Marine Sci</FooterLink>
        <FooterLink href={SKIO}>SKIO</FooterLink>
        <FooterLink href={SCHOLAR}>Google Scholar</FooterLink>
        <FooterLink href={GITHUB}>GitHub</FooterLink>
        <FooterLink href={TWITTER}>Twitter</FooterLink>
        <DownloadCVLink />
      </div>
    </div>
  )
}
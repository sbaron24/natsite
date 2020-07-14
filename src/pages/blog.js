import React from "react"
import Layout from "../components/layout"

export default function Blog() {


function BlogPost() {
  const style = {
    border: `1px solid black`, 
    maxWidth: `80%`, 
    margin: 20,
    padding: 10,
    border: `1px solid lightgray`,
    borderRadius: 5
  }

  return (
    <div style={style}>
      <h3>Cool Tutorial On Science-y Things!</h3>
      <h4 style={{color: `gray`, fontSize: `16px`, marginTop: 0}}>10-minute read | 2500 words</h4>
      <ul>
        <li>Help the readers to appreciate the difficulties of binning complex metagenomes using short-read assemblies</li>
        <li>Demonstrate what happens to our contigs across different binning algorithms and how this crucial information can be effectively visualized</li>
        <li>Make suggestions for those who develop metagenomic binning algorithms and those who generate or use MAGs for their science to do better</li>
      </ul>
      <div style={{padding: 10}}>
        <h4>Introduction: </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus auctor odio sit amet mattis. Quisque congue risus in risus viverra, quis accumsan felis luctus. In molestie neque ultrices massa blandit malesuada. In congue dolor sit amet elit facilisis, quis volutpat sapien pulvinar. Sed eget cursus augue. Ut massa quam, varius ac nibh et, gravida tincidunt orci. Integer dapibus varius purus, et...</p>
      </div>
    </div>
  )
}

const BlogList = props => (
    <div style={{display: `flex`, flexWrap: `wrap`, justifyContent: `center`}}>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
    </div>
)
  return (
    <Layout>
    <div style={{display: `inline-block`}}>
        <h1 style={{float: `left`}}>Blog</h1>
        <h1 style={{display: `inline`, marginLeft: `30px`, color: `lightgray`}}>Resources</h1>
        <h1 style={{display: `inline`, marginLeft: `30px`, color: `lightgray`}}>Tutorials</h1>
    </div>
      <BlogList></BlogList>
    </ Layout>
  )
}
import React from "react"
import Layout from "../components/layout"
import Plankton from "../images/plankton_placeholder.png"

function Project(props) {
    const style={...props.style, padding: "10 0px 10px 0px", margin: "1rem 0 3rem 0"}
    return (
        <div style={style}>
            <h3 style={{marginBottom: 10}}>Example Project Name Where It Sounds Very Complicated And Impressive</h3>
            <h4 style={{color: `gray`, fontSize: `16px`, marginTop: 0}}>Current</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus auctor odio sit amet mattis. Quisque congue risus in risus viverra, quis accumsan felis luctus. In molestie neque ultrices massa blandit malesuada. In congue dolor sit amet elit facilisis, quis volutpat sapien pulvinar. Sed eget cursus augue. Ut massa quam, varius ac nibh et, gravida tincidunt orci. Integer dapibus varius purus, et scelerisque turpis luctus sed. Duis eget eros ante. Maecenas rhoncus auctor ex interdum aliquet. Integer ante neque, iaculis non massa ac, accumsan vulputate ex. Proin orci enim, congue vitae mauris sit amet, ultrices convallis diam. Curabitur ligula libero, ultricies volutpat imperdiet at, luctus non tortor.</p>
            <p style={{color: `gray`, fontSize: `16px`, marginTop: 0}}>Collaborators: Jerry Michaels, Jon Petrucci, Larry Parry</p>
        </div>
    )
}

export default function Research() {

  return (
    <Layout>
    <div style={{display: `inline-block`}}>
        <h1 style={{float: `left`}}>Current</h1>
        <h1 style={{display: `inline`, marginLeft: `30px`, color: `lightgray`}}>Past</h1>
    </div>
    <Project></Project>
    <div style={{display: "inline-block"}}>
        <Project style={{display: "inline", float: "left", width: "50%"}}></Project>
        <img src={Plankton} alt="" style={{width: "50%", height: "50%", display: "inline-block"}}></img>
    </div>
    <Project></Project>
    </ Layout>
  )
}
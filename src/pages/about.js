import React from "react"
import Layout from "../components/layout"
import Profile from "../images/stock_profile_pic.jpg"

export default function About() {
  return (
    <Layout>
    <div style={{ textAlign: `center`, marginBottom: `2rem`}}>
        <img src={Profile} style={{ width: 300, height: 300 }}></img>
    </div>
    
    <h1>About Natalie</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dictum risus. Morbi placerat, diam sit amet finibus commodo, metus nisl accumsan erat, nec accumsan lacus urna a lorem. Ut interdum ut ligula non imperdiet. Suspendisse dapibus erat quis velit condimentum, id hendrerit lacus eleifend. Praesent iaculis sed orci ac tempus. Pellentesque rutrum non velit sed tincidunt. Donec nec elit lacus. Ut ac scelerisque ex. Curabitur ac malesuada tellus. Pellentesque lectus mauris, tincidunt at mauris quis, tincidunt viverra nisi. Sed efficitur nisl sit amet elit molestie, sit amet consequat turpis pretium. Proin tellus sapien, congue quis blandit ac, gravida et sem. Cras eros risus, egestas a rutrum quis, aliquet ac quam. Aenean vitae felis vitae nibh rhoncus tincidunt in non ligula.</p>
    <p>Vestibulum condimentum quis elit non iaculis. Nulla feugiat magna et lorem varius, at viverra nulla vulputate. Nam porta risus sed urna eleifend, vel tincidunt nunc lacinia. Nulla nec urna tellus. Nulla facilisi. In laoreet, quam a vulputate mollis, arcu nulla pulvinar massa, a fermentum metus purus sed ex. Aenean molestie luctus risus, laoreet molestie nunc iaculis et. Cras rhoncus purus sit amet neque semper laoreet. Nunc placerat id nulla id commodo. Curabitur egestas urna justo. Suspendisse non arcu accumsan, posuere sapien vitae, auctor est. Maecenas tempor, metus in ornare congue, neque magna rutrum felis, sit amet tempus eros erat quis quam. Fusce faucibus dictum quam, ac pulvinar mauris tristique sed. Nulla ipsum erat, imperdiet vehicula purus tristique, congue porttitor risus.</p>
    </ Layout>
  )
}
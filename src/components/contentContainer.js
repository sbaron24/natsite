import React from "react"
import contentContainerStyles from "../components/contentContainer.module.css"

export const Content = props => {

    let textWidth = `100%` // default
    let img;
    if (props.imageFilename != undefined) {
        textWidth = `60%`
        img = <div className={contentContainerStyles.imageClass} style={{backgroundImage: `url("/images/${props.imageFilename}")`}}></div>
    }

    let cred;
    if (props.biblio) {
        cred =  <p>{props.biblio}</p> 
    } else if (props.collaborators) {
        cred = <p>Collaborators: {props.collaborators}</p>    
    }

    return (
        <div className={contentContainerStyles.content}>
            <div style={{width: textWidth}}>
                <h3>{props.title}</h3>
                <p>{props.text}</p> 
                {cred}           
            </div>
            {img}
        </div>
    )
}

export function ContentContainer({children}) {
    return (
        <div className={contentContainerStyles.container}>
            {children}
        </div>
    )
}
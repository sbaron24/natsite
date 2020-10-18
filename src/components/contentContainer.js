import React from "react"
import contentContainerStyles from "../components/contentContainer.module.css"

export const Content = props => {
    return (
        <div className={contentContainerStyles.content}>
            <div style={{width: `60%`}}>
                <h4>asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf. asdofsdafn</h4>
                <p>asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf. asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf asdofsdafnsfn asdfasdfj adsf sadf asd fa sdfsdaf asdf asdfasdf adfadsf asdf  a adsfasdfsadf </p>
            </div>
            <div className={props.imageClass}>
            </div>
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
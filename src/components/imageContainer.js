import React from 'react'
import imageContainerStyles from "./imageContainer.module.css"

const Sticker = props => (
    <div className={props.stickerClass}>
    </div>
)

export function Stickers() {

    return (
        <div style={{backgroundColor: `#D2D9E2`, padding: `1rem`}}>
            <div className={imageContainerStyles.stickers}>
                <Sticker stickerClass={imageContainerStyles.blm}/>
                <Sticker stickerClass={imageContainerStyles.blm2}/>
                <Sticker stickerClass={imageContainerStyles.blm3}/>
            </div>
        </div>
    )
}

export const Banner = props => {
    return (
        <div className={props.bannerClass}>
        </div>
    )
}
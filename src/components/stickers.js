import React from 'react'
import stickersStyles from "./stickers.module.css"


const Sticker = props => (
    <div className={props.stickerClass}>
    </div>
)

export default function Stickers() {

    return (
        <div style={{backgroundColor: `#D2D9E2`, padding: `1rem`}}>
            <div style={{display: `flex`, flexDirection: `row`, justifyContent: `space-between`, margin: `auto`, width: `50%`}}>
                <Sticker stickerClass={stickersStyles.blm}/>
                <Sticker stickerClass={stickersStyles.blm2}/>
                <Sticker stickerClass={stickersStyles.blm3}/>
            </div>
        </div>
    )
}
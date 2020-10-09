import React from "react";

const Emoji = props => {
    return <span className={props.className.concat(" font-serif")} title={props.title ? props.title : props.emoji.slug} onClick={(e) => props.onClick ? props.onClick(e, props.emoji) : null}>{props.emoji.character}</span>
}

export default Emoji;
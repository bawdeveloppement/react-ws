import React from "react";
import Emoji from "./Emoji";
import "./Custom.css";

// Try to handle subcategories later;
// ,{"slug":"component","subCategories":["skin-tone","hair-style"]}

// TODO: Limit loading of smiley & load more when scrolling
const EmojiGroup = props => {
    const { group, emojis } = props;
    const Emojis = emojis.map((emoji, index) => emoji.group === group ? <Emoji key={index} className="w-6 text-center" emoji={emoji}></Emoji> : null)
    return <div className={"Scll ".concat(props.className)} style={{ scrollbarTrackColor: "red", scrollbarColor: "rgb(49, 151, 149) rgba(247, 250, 252, var(--bg-opacity))", scrollbarWidth: "thin", msScrollbarShadowColor: "ActiveBorder"}}>{Emojis}</div>
}

export default EmojiGroup;
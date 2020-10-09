import React from "react";
import Emoji from "./Emoji";

const EmojiCategory = props => {
    const categories = props.categories.map(cat => cat.slug);
    const Emojis = categories.map((categorie, index) => {
        let result = null; 
        while (result === null) {
            result = props.emojis.filter(emoji => emoji.group === categorie);
            if (result.length > 0) {
                const isActive = result[0].group === props.currentGroup;
                return <Emoji 
                key={index}
                onClick={() => props.getGroup(result[0].group)}
                className={"w-8 px-1 text-center hover:bg-gray-200 ".concat(isActive ? "bg-gray-200" : "")}
                title={result[0].group}
                emoji={result[0]}
                />
            }
        }
    });
    return <div className={"text-center ".concat(props.className)}>{Emojis}</div>
}

export default EmojiCategory;
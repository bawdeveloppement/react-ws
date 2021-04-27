import React, { 
    useState, useEffect 
} from 'react';

import EmojiGroup from "./EmojiGroup";
import EmojiCategory from "./EmojiCategory";


// // TODO: Load Emoji by string
// const Emoji = props => {
//     return <span>{props}</span>
// }

const EmojiLayout = props => {
    const [emojis, setEmojis] = useState([]);
    const [categories, setCategories] = useState([]);
    const [group, setGroup] = useState("smileys-emotion");

    useEffect(() => {
        //#region Caching Json in cache
        import("./Categories.json").then(result => { 
            setCategories(Object.values(result));
        }).catch(reject => console.error(reject));

        import("./Emojis.json").then(result => {
            setEmojis(Object.values(result));
        }).catch(reject => console.error(reject));
        //#endregion
    }, []);

    return <div className={" h-64 max-w-xs flex flex-row left-2 rounded absolute bottom-14 py-2 shadow ".concat(props.className ? props.className : "")}>
        <EmojiCategory currentGroup={group} getGroup={setGroup} className="w-8 border-r-2 border-solid border-gray-200 text-center align-center content-center self-center" categories={categories} emojis={emojis}></EmojiCategory>
        <EmojiGroup className="flex-1 flex w-full h-full overflow-y-auto flex-row flex-wrap flex-grow px-1 items-center self-center align-center " group={group} emojis={emojis}></EmojiGroup>
    </div>
}

export default EmojiLayout;
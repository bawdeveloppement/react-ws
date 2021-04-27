import { FC } from "react";
import { BasicTemplate } from "../Templates/Basic";
import TchatTemplate from "../Templates/TchatTemplate";


export const Main: FC = ({}) => {
    return <div className="h-full">
        <div className="h-full">
            <TchatTemplate />
        </div>
    </div>
}
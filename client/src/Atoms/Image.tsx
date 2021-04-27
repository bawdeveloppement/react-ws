import { ReactElement, FC } from "react"

interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export const Image: FC<ImageProps> = (props): ReactElement => {
    return <img {...props}></img>
}
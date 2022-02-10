import { FC } from "react";
interface Props{
    title?: string,
    classname?: string
} 
const Button:FC<Props> = ({title = "button" , classname}) => {    
    return (
        <button className={`${classname}`}>{title}</button>
    );
}
export default Button;
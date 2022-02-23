import { FC } from "react";
interface Props{
    title?: string;
    classname?: string;
    onClick? : any;
} 
const Button:FC<Props> = ({title = "button" , classname , onClick}) => {    
    return (
        <button className={`${classname}`} onClick={() => onClick()}>{title}</button>
    );
}
export default Button;
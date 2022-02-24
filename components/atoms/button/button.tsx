import { FC, ReactNode } from "react";
interface Props{
    title?: string;
    classname?: string;
    onClick? : any;
    icon? : ReactNode;
} 
const Button:FC<Props> = ({title = "button" , classname , onClick , icon}) => {    
    return (
        <button className={`${classname} flex items-center gap-1 justify-center`} onClick={() => onClick()}>{icon}{title}</button>
    );
}
export default Button;
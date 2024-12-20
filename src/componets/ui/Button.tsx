import { ReactElement } from "react";

interface ButtonProps {
    text :string;
    startIcons?: ReactElement;
    variants : "primary" | "secondary";
}



const variantStyle = {
    "primary" : "bg-blue-500 text-white",
    "secondary" : "bg-blue-200 text-blue-500",
}

const defaultStyle = "px-4 py-2 rounded-md font-light"

export const Button = (props:ButtonProps)=>{


    return <>
        <button className={` ${variantStyle[props.variants]}  ${defaultStyle}`}>
            <div className="flex items-center justify-center">
            {props.startIcons}
            <div className="pl-2 pr-2">
            {props.text}
              </div>
            </div>
        </button>
    </>
}
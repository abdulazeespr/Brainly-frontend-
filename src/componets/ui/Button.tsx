import { ReactElement } from "react";

interface ButtonProps {
    text :string;
    startIcons?: ReactElement;
    variants : "primary" | "secondary";
    onClick?:()=>void;
    width?:boolean;
    loading?:boolean;
    className?: string;
}



const variantStyle = {
    "primary" : "bg-blue-500 text-white",
    "secondary" : "bg-blue-200 text-blue-500",
}

const defaultStyle = "px-4 py-2 rounded-md font-light"

export const Button = (props:ButtonProps)=>{


    return <>
        <button className={` ${variantStyle[props.variants]}  ${defaultStyle} ${props.width ?  "w-full": ""} ${props.loading ? "opacity-50 cursor-not-allowed" : ""} ${props.className || ""}`} onClick={props.onClick}>
            <div className="flex items-center justify-center">
            {props.startIcons}
            <div className="pl-2 pr-2">
            {props.text}
              </div>
            </div>
        </button>
    </>
}
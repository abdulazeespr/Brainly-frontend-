import { ReactElement } from "react";

interface ButtonInterface {
    title :string;
    size : "lg" | "md" | "sm";
    startIcons?: ReactElement;
    endIcons?:ReactElement;
    variants : "primary" | "secondary";
}

const sizeStyle = {
  "lg":"px-8 py-4 text-xl rounded-xl",
  "md" :"px-4 py-2 text-md rounded-md",
  "sm": "px-2 py-1 text-sm rounded-sm",
}

const variantStyle = {
    "primary" : "bg-blue-500 text-white",
    "secondary" : "bg-blue-200 text-blue-500",
}

export const Button = (props:ButtonInterface)=>{


    return <>
        <button className={`${sizeStyle[props.size]}  ${variantStyle[props.variants]}`}>
            <div className="flex items-center justify-center">
            {props.startIcons}
            <div className="pl-2 pr-2">
            {props.title}
              </div>
            {props.endIcons}
            </div>
        </button>
    </>
}
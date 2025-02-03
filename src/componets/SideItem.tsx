import { ReactElement } from "react";

interface SideItemProps {
  text: string;
  Icon: ReactElement;
}

const SideItem = (props: SideItemProps) => {
  return (
    <div className="flex items-center justify-between  px-5 mt-3">
      <div className="flex items-center ">{props.Icon}</div>  
      <div className="pr-2 pl-2">{props.text}</div>
    </div>
  );


};

export default SideItem;

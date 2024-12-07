import { ReactElement } from "react";

interface SideItemProps {
  text: string;
  Icon: ReactElement;
}

const SideItem = (props: SideItemProps) => {
  return (
    <div className="flex">
      {props.Icon}
      <div className="pr-2 pl-2">{props.text}</div>
    </div>
  );
};

export default SideItem;

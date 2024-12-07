import { ReactElement } from "react";

import { Shareicons } from "../icons/Shareicons";
import { Deleteicons } from "../icons/Deleteicons";

interface CardProps {
  startIcons: ReactElement;
  title: string;
  content: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="rounded-md bg-white shadow-md outline-slate-200 w-72 min-h-96 border">
      <div className="flex px-3 py-6  justify-between">
        <div className="flex ">
          <span className="text-slate-500">{props.startIcons}</span>
          <div className="pl-3 pr-3">
            <h1>{props.title}</h1>
          </div>
        </div>
        <div className="flex">
          <Shareicons size="lg" />
          <div className="pl-3 pr-2">
            <Deleteicons size="lg" />
          </div>
        </div>
      </div>

      <div>{props.content}</div>
    </div>
  );
};

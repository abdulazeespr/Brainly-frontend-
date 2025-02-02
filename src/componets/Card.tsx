import { Papericons } from "../icons/Papericons";
import { Shareicons } from "../icons/Shareicons";
import { Deleteicons } from "../icons/Deleteicons";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = (props: CardProps) => {
  return (
    <div className="rounded-md bg-white shadow-md outline-slate-200 w-80 h-auto border overflow-hidden">
      <div className="flex px-3 py-6  justify-between">
        <div className="flex ">
          <span className="text-slate-500">
            <Papericons size="lg" />
          </span>
          <div className="pl-3 pr-3">
            <h1>{props.title}</h1>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <a href={props.link} target="_blank">
            <Shareicons size="lg" />
            </a>
           </div>
          <div className="pl-3 pr-2">
            <Deleteicons size="lg" />
          </div>
        </div>
      </div>

      <div className="p-3 h-[calc(100%-88px)] overflow-hidden">
        {props.type === "youtube" && (
          <iframe
            className="w-full h-full"
            src={props.link.replace("watch?v=","embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {props.type === "twitter" && (
          <div className="h-full">
            <blockquote className="twitter-tweet" data-dnt="true">
              <a href={props.link.replace("x.com","twitter.com")}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

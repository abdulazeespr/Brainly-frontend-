import { Papericons } from "../icons/Papericons";
import { Shareicons } from "../icons/Shareicons";
import { Deleteicons } from "../icons/Deleteicons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  className?: string;
  id: string;
}





export const Card = ({ title, link, type, className = "" ,id}: CardProps) => {

  const navigate = useNavigate();
  const deleteContent = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/contentdelete`
      await axios.delete(url, {
        data: {
          contentId: id
        },
        headers: { Authorization: token }
      });


      
      alert("Content deleted successfully");
      window.location.reload();
    } catch (error) {
      alert("Failed to delete content. Please try again.");
      console.error("Failed to delete content:", error);
    }
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      deleteContent();
    }
  }

  return (
    <div className={`rounded-xl bg-white shadow-md w-full border ${className}`}>
      <div className="flex px-4 py-5 justify-between items-center border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <span className="text-slate-500 hover:text-slate-600 transition-colors">
            <Papericons size="lg" />
          </span>
          <h3 className="font-medium text-slate-900 line-clamp-1">
            {title}
          </h3>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-slate-500 hover:text-slate-600 transition-colors">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Shareicons size="lg" />
            </a>
          </button>
          <button 
            className="text-slate-500 hover:text-slate-600 transition-colors"
            onClick={handleDelete}
          >
            <Deleteicons size="lg" />
          </button>
        </div>
      </div>

      <div className="p-4 h-[calc(100%-88px)] overflow-hidden">
        {type === "youtube" && (
          <iframe
            className="w-full h-full rounded-lg"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <div className="h-full">
            <blockquote className="twitter-tweet" data-dnt="true">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

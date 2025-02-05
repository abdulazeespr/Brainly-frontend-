import { useEffect, useState } from "react";
import { Card } from "../componets/Card";
import CreateContextModel from "../componets/CreateContextModel";
import { Button } from "../componets/ui/Button";
import { PlusIcons } from "../icons/Plusicons";
import { Shareicons } from "../icons/Shareicons";
import SideBar from "../componets/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Youtubeicons from "./icons/Youtubeicons";




function Dashboard() {
  const [model, setModel] = useState(false);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  const shareContent = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/share`, {share:true},{headers:{Authorization:token}});
    if(response.status === 200){
      navigator.clipboard.writeText(`${import.meta.env.VITE_FRONTEND_URL}/brain/${response.data.hash}`)
      alert("Share URL copied to clipboard");
    }else{
      alert("Failed to share content");
    }



  }




  const fetchContent = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signin");
        return;
      }
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`, {
        headers: { Authorization: token }
      });
      setContent(response.data.content);

    } catch (error) {
      console.error("Failed to fetch content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [navigate]);


  



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <CreateContextModel open={model} onClose={() => setModel(false)} onSuccess={fetchContent} />
      <div className="flex">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                Your Content
              </h1>
              <div className="flex gap-3">
                <Button
                  text="Share Brain"
                  startIcons={<Shareicons size="lg" />}
                  variants="secondary"
                  className="hover:shadow-md transition-all"
                  onClick={() => {
                    shareContent()
                  }}
                />
                <Button

                  text="Add Content"

                  startIcons={<PlusIcons size="lg" />}
                  variants="primary"
                  onClick={() => setModel(true)}
                  className="hover:shadow-md transition-all"
                />
              </div>
            </header>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : content.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300">
                  No content found
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  Start by adding some content to your brain
                </p>
                <Button
                  text="Add Your First Content"
                  startIcons={<PlusIcons size="lg" />}
                  variants="primary"
                  onClick={() => setModel(true)}
                  className="mt-4"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.map((item: any,index:number) => (
                  <Card
                    key={index}
                    id={item._id}
                    title={item.title}
                    link={item.link}
                    type={item.type}
                    className="hover:shadow-lg transition-all duration-300"

                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from '../componets/Card';

interface Content {
  _id: string;
  title: string;
  content: string;
  link: string;
  type: "twitter" | "youtube";
  // Add other content fields as needed
}


interface BrainResponse {
  username: string;
  content: Content[];
}

const Brain = () => {
  const [data, setData] = useState<BrainResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { shareLink } = useParams();

  useEffect(() => {
    const fetchBrainContent = async () => {
      try {
        const response = await axios.get<BrainResponse>(`${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/${shareLink}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch content');
        setLoading(false);
      }
    };

    fetchBrainContent();
  }, [shareLink]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-600">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-opacity-50 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-lg">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-600 mb-2">No Content Found</h2>
          <p className="text-gray-500">This brain appears to be empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {data.username}'s Brain
          </h1>
          <p className="text-gray-600">Explore collected thoughts and content</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.content.map((item,index) => (
            <Card
              key={index}
              id={item._id}
              title={item.title}
              link={item.link}
              type={item.type}
              className="transform hover:scale-105 hover:shadow-xl transition-all duration-300 bg-white rounded-xl"

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brain;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'e5c4260c4a13e95e07e087750628b077'; // Use your own API key
    const url = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&keywords=movies&countries=in`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(url);
        setArticles(response.data.data); // Adjusted to MediaStack's response structure
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold my-8 text-center text-gray-800">Latest Movie News in India</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-md mx-auto">
            <img
              src={article.image || 'https://via.placeholder.com/400x300?text=No+Image+Available'} // Placeholder image if no image
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-6 text-gray-800">{article.title}</h2>
            <p className="text-gray-600 mt-4 line-clamp-3">{article.description}</p> {/* Added line clamping for better control */}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors duration-300"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieNews;

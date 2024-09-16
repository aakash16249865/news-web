import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'e5c4260c4a13e95e07e087750628b077'; // Use your own API key
    const url = `https://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=in`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(url);
        setArticles(response.data.data); // Adjusted to Mediastack's response structure
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8 text-center">Today's News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Increased gap between cards */}
        {articles.map((article, index) => (
          <div key={index} className="border p-8 rounded-lg shadow-xl max-w-lg mx-auto"> {/* Increased padding and max width */}
            <img
              src={article.image || 'https://via.placeholder.com/400x300?text=No+Image+Available'} // Placeholder image if no image is provided
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg" // Increased image height and made it larger
            />
            <h2 className="text-3xl font-semibold mt-6">{article.title}</h2> {/* Increased font size */}
            <p className="text-gray-600 mt-4">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-lg font-bold px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl" // Attractive button styles
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

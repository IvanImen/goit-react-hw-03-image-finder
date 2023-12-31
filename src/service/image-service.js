import React, { useState, useEffect } from 'react';

const PixabayComponent = () => {
  const [images, setImages] = useState([]);
  const apiKey = '40463763-cd16d3875a37d36e07b72dd03';
  const searchQuery = 'cat'; // Замініть це на ваш запит

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiUrl = `https://pixabay.com/api/?q=cat&page=1&key={apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    fetchImages();
  }, [searchQuery, apiKey]);

  return (
    <div>
      <h2>Pixabay Images</h2>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PixabayComponent;

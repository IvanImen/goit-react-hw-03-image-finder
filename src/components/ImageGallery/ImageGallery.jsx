import { ImageGalleryItem } from 'components';
import React from 'react';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          image={webformatURL}
          alt={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

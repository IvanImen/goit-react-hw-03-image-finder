import { ImageGalleryItem } from 'components';
import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          image={largeImageURL}
          preview={webformatURL}
          alt={tags}
        />
      ))}
    </ul>
  );
};

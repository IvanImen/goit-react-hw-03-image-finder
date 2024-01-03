import { ImageGalleryItem } from 'components';
import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} id={id} preview={webformatURL} alt={tags} />
      ))}
    </ul>
  );
};

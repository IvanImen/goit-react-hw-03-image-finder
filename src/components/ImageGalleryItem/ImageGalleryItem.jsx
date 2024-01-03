import React from 'react';

export const ImageGalleryItem = ({ image, preview, alt }) => {
  return (
    <li>
      <img src={image} alt={alt} />
    </li>
  );
};

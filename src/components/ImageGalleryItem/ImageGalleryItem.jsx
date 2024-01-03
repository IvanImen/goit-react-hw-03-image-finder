import React from 'react';

export const ImageGalleryItem = ({ image, id, alt }) => {
  return (
    <li>
      <img src={image} alt={alt} />
    </li>
  );
};

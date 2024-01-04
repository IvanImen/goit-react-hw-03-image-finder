import React from 'react';

export const ImageGalleryItem = ({ image, id, alt, onClick }) => {
  return (
    <li onClick={() => onClick(id)}>
      <img src={image} alt={alt} />
    </li>
  );
};

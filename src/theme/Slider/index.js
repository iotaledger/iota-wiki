import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';

export default function ImageSlider() {
  // Import images from the infographics folder
  function importImages(r) {
    return r.keys().map((x) => x.replace('./', ''));
  }
  const allImages = importImages(
    require.context('/img/infographics/', false, /\.(png|jpe?g|svg)$/),
  );

  // Create an array of objects with the image paths
  function createImageArray() {
    let images = [];
    for (let i = 0; i < allImages.length; i++) {
      images.push({
        original: `/img/infographics/${allImages[i]}`,
        thumbnail: `/img/infographics/${allImages[i]}`,
      });
    }
    return images;
  }
  const images = createImageArray();

  // Create the image gallery
  return <ImageGallery items={images} showPlayButton={false} lazyLoad={true} />;
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

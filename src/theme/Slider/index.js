import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';

export default function ImageSlider({ path }) {
  // Import images from the infographics folder
  function importImages(r) {
    return r.keys().map((x) => x.replace('.', ''));
  }

  const allImages = importImages(
    require.context('/img/', true, /\.(png|jpe?g|svg)$/),
  );

  console.log(allImages);

  const requestedImages = allImages.filter((word) => word.startsWith(path));

  // Create an array of objects with the image paths
  function createImageArray() {
    let images = [];
    for (let i = 0; i < requestedImages.length; i++) {
      images.push({
        original: `/img${requestedImages[i]}`,
        thumbnail: `/img${requestedImages[i]}`,
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
  path: PropTypes.string,
};

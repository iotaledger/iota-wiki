import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useRef } from 'react';

export default function ImageSlider({ path }) {
  // Import images from the infographics folder
  function importImages(r) {
    return r.keys().map((x) => x.replace('.', ''));
  }

  const allImages = importImages(
    require.context('/img/', true, /\.(png|jpe?g|svg|mp4)$/),
  );

  const requestedImages = allImages.filter((word) => word.startsWith(path));

  // Create an array of objects with the image paths
  function createImageArray() {
    let images = [];
    for (let i = 0; i < requestedImages.length; i++) {
      images.push({
        original: useBaseUrl('/img' + requestedImages[i]),
        thumbnail: useBaseUrl('/img' + requestedImages[i]),
      });
    }
    return images;
  }
  const images = createImageArray();

  let carousel = useRef(null);

  // Create the image gallery
  return (
    <ImageGallery
      onClick={() => carousel?.current?.fullScreen()}
      ref={carousel}
      items={images}
      showPlayButton={false}
      lazyLoad={true}
    />
  );
}

ImageSlider.propTypes = {
  path: PropTypes.string.isRequired,
};

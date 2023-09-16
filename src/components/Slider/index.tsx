import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useRef } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { ThemeConfig } from '@docusaurus/preset-classic';

export interface ImageSliderProps {
  path: string;
}

export interface ImageSliderConfig extends ThemeConfig {
  imageSlider: {
    videoPlaceholder: string;
  };
}

export default function ImageSlider({ path }: ImageSliderProps) {
  const { imageSlider } = useThemeConfig() as ImageSliderConfig;
  const videoPlaceholder = useBaseUrl(imageSlider.videoPlaceholder);
  // Import images from the infographics folder
  function importImages(r) {
    return r.keys().map((x) => x.replace('.', ''));
  }

  // Resolve images relative to the static folder
  const allImages = importImages(
    require.context('@site/static/', true, /\.(png|jpe?g|svg|mp4)$/),
  );
  const requestedImages = allImages.filter((word) => word.startsWith(path));

  // Get file extension
  function getFileExtension(filename) {
    return filename.split('.').pop();
  }

  // Create an array of objects with the image paths
  function createImageArray() {
    const images = [];
    for (let i = 0; i < requestedImages.length; i++) {
      const image = useBaseUrl(requestedImages[i]);
      if (getFileExtension(requestedImages[i]) === 'mp4') {
        images.push({
          original: image,
          thumbnail: videoPlaceholder,
          renderItem: () => (
            <video
              controls
              autoPlay={true}
              muted
              className='image-gallery-video'
            >
              <source src={image} type='video/mp4' />
            </video>
          ),
        });
      } else {
        images.push({
          original: image,
          thumbnail: image,
          thumbnailHeight: 48,
        });
      }
    }
    return images;
  }
  const carousel = useRef(null);
  const images = createImageArray();

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

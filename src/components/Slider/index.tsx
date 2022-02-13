import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export interface ImageSliderProps {
  path: string;
}

export default function ImageSlider({ path }: ImageSliderProps) {
  const directory = useBaseUrl(path);
  const videoPlaceholder = useBaseUrl(
    '/img/infographics/video-placeholder.png',
  );
  const supportedImageExtensions = /(png|jpe?g|svg)$/;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    axios
      .get(directory, {
        signal: abortController.signal,
      })
      .then(({ data: fileNames }) => {
        const images = fileNames
          .map((fileName: string) => {
            const filePath = directory + '/' + fileName;
            const fileExtension = fileName.split('.').pop();
            let file = null;

            if (fileExtension === 'mp4') {
              file = {
                original: filePath,
                thumbnail: videoPlaceholder,
                renderItem: () => (
                  <video
                    controls
                    autoPlay={true}
                    muted
                    className='image-gallery-video'
                  >
                    <source src={filePath} type='video/mp4' />
                  </video>
                ),
              };
            } else if (supportedImageExtensions.test(fileExtension)) {
              file = {
                original: filePath,
                thumbnail: filePath,
                thumbnailHeight: 48,
              };
            }

            return file;
          })
          .filter((file: boolean) => file);

        setImages(images);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  const carousel = useRef(null);

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

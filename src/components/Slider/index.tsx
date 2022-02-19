import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
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
  const directory = useBaseUrl(path);
  const videoPlaceholder = useBaseUrl(imageSlider.videoPlaceholder);
  const supportedImageExtensions = /(png|jpe?g|svg)$/;
  const [images, setImages] = useState([]);

  useEffect(() => {
    // This controller is needed to abort any pending
    // axios requests when navigating away from the
    // page containing this slider.
    const abortController = new AbortController();

    // Get all files in a directory referenced by the path,
    // check their file extensions and filter any unsupported ones.
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

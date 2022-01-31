import React, { useState, useContext, createContext, ReactNode } from 'react';
import './styles.css';

export interface FullscreenImageProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
const Context = createContext((url: string) => {});

function Provider({ children }: FullscreenImageProviderProps) {
  const [imageProps, setImageProps] = useState('');

  return (
    <Context.Provider value={setImageProps}>
      {children}
      {imageProps && (
        <div
          className='fullscreen-image__container'
          onClick={() => setImageProps(null)}
        >
          <img className='fullscreen-image__target' {...imageProps} />
        </div>
      )}
    </Context.Provider>
  );
}

function Source(props) {
  const setImageProps = useContext(Context);

  return (
    <img
      {...props}
      className='fullscreen-image__source'
      onClick={() => setImageProps(props)}
    />
  );
}

export default {
  Provider,
  Source,
};

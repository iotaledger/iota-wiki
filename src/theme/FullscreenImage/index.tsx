import React, { useState, useContext, createContext } from 'react';
import './styles.css';

const Context = createContext(() => {});

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [imageProps, setImageProps] = useState();

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

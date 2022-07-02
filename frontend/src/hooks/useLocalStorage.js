import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [videos, setStorageVideos] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setVideos = (newValue) => {
    setStorageVideos(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [videos, setVideos];
}
